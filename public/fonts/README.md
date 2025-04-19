
# Local Font Files

This directory contains local font files for Vazirmatn to prevent tracking issues with Google Fonts.

## Required Font Files
- Vazirmatn-Regular.woff2
- Vazirmatn-Medium.woff2
- Vazirmatn-Bold.woff2

## Download Instructions

1. Download these font files directly from the [Vazirmatn GitHub repository](https://github.com/rastikerdar/vazirmatn/tree/master/fonts/woff2)
2. Place them in this directory (`public/fonts/`) with the exact filenames listed above
3. No other changes are needed as the font configuration is already set up in the HTML

If the fonts don't load properly:
- Make sure all three font files are in this directory with the exact names mentioned above
- Check that the file paths in `index.html` are correct (they should be `./fonts/Vazirmatn-[weight].woff2`)
- Verify that the font files are correctly formatted WOFF2 files
