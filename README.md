# Czech Real Estate Price Per M² Calculator

A Chrome extension that automatically calculates and displays the price per square meter for property listings on Czech real estate portals [sreality.cz](https://www.sreality.cz) and [reality.idnes.cz](https://reality.idnes.cz).

## Supported Websites

- **sreality.cz** - Czech Republic's largest real estate portal
- **reality.idnes.cz** - Popular real estate section of iDNES.cz

## Features

- 🌐 **Multi-Site Support** - Works seamlessly on both major Czech real estate portals
- 🔢 **Automatic Calculation** - Instantly calculates price per m² for all visible listings
- 🔄 **Dynamic Updates** - Works with infinite scroll, lazy-loaded content, and AJAX navigation
- 💙 **Clean Display** - Shows price/m² in distinctive blue text below the total price
- 🎯 **Smart Detection** - Automatically adapts to each website's HTML structure
- ⏱️ **Real-time Monitoring** - Updates continuously as new listings appear or pages change

## Installation

1. Clone this repository or download the files
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable **Developer mode** (toggle in top right corner)
4. Click **Load unpacked**
5. Select the extension folder containing the files
6. Visit [sreality.cz](https://www.sreality.cz) or [reality.idnes.cz](https://reality.idnes.cz)
7. The price per m² will automatically appear under each listing's price

## Files

- `manifest.json` - Extension configuration with permissions for both websites
- `content.js` - Main calculation logic with site-specific parsing functions
- `styles.css` - Styling for the price per m² display on both portals
- `icon.png` - Extension icon (128x128px)

## How It Works

The extension automatically detects which website you're visiting and applies the appropriate parsing logic:

### For sreality.cz:
- Identifies listings by their ID patterns (`estate-list-item-*`)
- Extracts size from property description paragraphs
- Parses price from the price container element

### For reality.idnes.cz:
- Finds listings within `.c-products__item` containers
- Extracts size from the `.c-products__title` element
- Gets price from `.c-products__price strong` element

Both sites display the calculated price per m² in a consistent blue color with a money emoji (💰) for easy identification.

## Screenshots

### sreality.cz
<img width="1380" height="1144" alt="image" src="https://github.com/user-attachments/assets/37956a7b-2e81-45fc-95da-2fe74b7d8402" />
*Price per m² shown below each listing on sreality.cz*

### reality.idnes.cz
<img width="1282" height="1042" alt="image" src="https://github.com/user-attachments/assets/57e248ba-9e7e-4760-886e-e1e7409dcaa9" />
*Price per m² displayed on reality.idnes.cz listings*

## Browser Compatibility

- Chrome (recommended)
- Other Chromium-based browsers (Edge, Brave, Opera)
- Developer mode must be enabled for manual extension installation

## Known Limitations

- Does not calculate for listings where price is not disclosed ("Cena na vyžádání" / "Info o ceně")
- Requires manual installation (not available in Chrome Web Store)

## Contributing

Pull requests are welcome! If you'd like to add support for additional Czech real estate websites or improve the existing functionality, please:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/NewWebsiteSupport`)
3. Commit your changes (`git commit -m 'Add support for website.cz'`)
4. Push to the branch (`git push origin feature/NewWebsiteSupport`)
5. Open a Pull Request

## Future Enhancements

- [ ] Support for additional real estate portals
- [ ] Customizable display options (color, position, format)
- [ ] Price comparison indicators (above/below average)
- [ ] Export functionality for analyzed listings
- [ ] Multilingual support (Czech/English)

## License

MIT

## Author

Created for easier property comparison on Czech real estate portals.

## Changelog

### Version 2.0 (Current)
- Added support for reality.idnes.cz
- Improved dynamic content detection
- Enhanced mutation observer for better performance
- Added site-specific CSS styling

### Version 1.0
- Initial release with sreality.cz support
- Basic price per m² calculation
- Dynamic content loading support
