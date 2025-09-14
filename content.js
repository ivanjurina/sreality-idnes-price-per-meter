// Sreality Price Per Square Meter Calculator
console.log('Sreality Price Per M² Calculator loaded');

function extractNumber(str) {
    // Remove spaces and convert to number
    return parseInt(str.replace(/\s/g, '').replace(/[^\d]/g, ''));
}

function formatNumber(num) {
    // Format number with spaces as thousand separators
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

function calculatePricePerMeter() {
    // Find all estate list items
    const listings = document.querySelectorAll('[id^="estate-list-item-"], [id^="region-tip-item-"]');
    
    listings.forEach(listing => {
        // Skip if already processed
        if (listing.querySelector('.price-per-meter')) {
            return;
        }
        
        // Find the property details container
        const detailsContainer = listing.querySelector('div[class*="css-adf8sc"]');
        if (!detailsContainer) return;
        
        // Get all paragraphs
        const paragraphs = detailsContainer.querySelectorAll('p');
        if (paragraphs.length < 3) return;
        
        // Extract property info (first paragraph contains type and size)
        const propertyInfo = paragraphs[0].textContent;
        const priceText = paragraphs[2].textContent;
        
        // Skip if price is not available
        if (priceText.includes('Cena na vyžádání') || priceText.includes('Info o ceně')) {
            return;
        }
        
        // Extract size in m²
        const sizeMatch = propertyInfo.match(/(\d+)\s*m²/);
        if (!sizeMatch) return;
        const size = parseInt(sizeMatch[1]);
        
        // Extract price
        const price = extractNumber(priceText);
        if (!price || isNaN(price)) return;
        
        // Calculate price per m²
        const pricePerMeter = Math.round(price / size);
        
        // Create and insert the price per m² element
        const pricePerMeterDiv = document.createElement('p');
        pricePerMeterDiv.className = 'price-per-meter';
        pricePerMeterDiv.style.cssText = `
            color: #007bff;
            font-weight: 600;
            font-size: 0.9em;
            margin-top: 5px;
            padding: 5px 0;
            border-top: 1px solid #e0e0e0;
        `;
        pricePerMeterDiv.textContent = `${formatNumber(pricePerMeter)} Kč/m²`;
        
        // Insert after the price
        paragraphs[2].parentNode.insertBefore(pricePerMeterDiv, paragraphs[2].nextSibling);
    });
}

// Run calculation when page loads
calculatePricePerMeter();

// Set up observer for dynamic content
const observer = new MutationObserver((mutations) => {
    // Check if new listings were added
    const hasNewListings = mutations.some(mutation => {
        return Array.from(mutation.addedNodes).some(node => {
            return node.nodeType === 1 && (
                node.querySelector && (
                    node.querySelector('[id^="estate-list-item-"]') ||
                    node.id && node.id.startsWith('estate-list-item-')
                )
            );
        });
    });
    
    if (hasNewListings) {
        setTimeout(calculatePricePerMeter, 100);
    }
});

// Start observing
observer.observe(document.body, {
    childList: true,
    subtree: true
});

// Also run when scrolling (for lazy-loaded content)
let scrollTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(calculatePricePerMeter, 500);
});

// Run periodically to catch any missed updates
setInterval(calculatePricePerMeter, 3000);