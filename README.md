# Sreality Price Per M² Calculator

A Chrome extension that automatically calculates and displays the price per square meter for property listings on [sreality.cz](https://www.sreality.cz), Czech Republic's leading real estate portal.

## Features

- 🔢 **Automatic Calculation** - Instantly calculates price per m² for all visible listings
- 🔄 **Dynamic Updates** - Works seamlessly with infinite scroll and lazy-loaded content
- 💙 **Clean Display** - Shows price/m² in distinctive blue text below the total price
- 🎯 **Smart Detection** - Automatically extracts size and price data from listing text
- ⏱️ **Real-time Monitoring** - Updates continuously as new listings appear

## Installation

1. Clone this repository or download the files
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable **Developer mode** (toggle in top right corner)
4. Click **Load unpacked**
5. Select the extension folder
6. Visit [sreality.cz](https://www.sreality.cz) - the price per m² will automatically appear under each listing's price

## Files

- `manifest.json` - Extension configuration
- `content.js` - Main calculation and display logic
- `styles.css` - Styling for the price per m² display
- `icon.png` - Extension icon

## How It Works

The extension monitors sreality.cz pages for property listings, extracts the apartment size (m²) and price from each listing, calculates the price per square meter, and displays it prominently below the original price. This makes it easy to compare property values at a glance.

## Screenshots

<img width="1380" height="1144" alt="image" src="https://github.com/user-attachments/assets/53925fb7-0d60-40a4-bc9d-9234a47a9f2e" />

*Price per m² shown in blue below each listing's total price*

## Requirements

- Chrome browser (or Chromium-based browsers)
- Developer mode enabled for extension installation

## License

MIT

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
