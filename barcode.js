const fs = require("fs");
const bwip = require("bwip-js");

// Barcode text and options
const barcodeText = "https://kzaman.vercel.app";
const barcodeOptions = {
	bcid: "qrcode", // Barcode type: qrcode, code128, code39, etc.
	text: barcodeText, // Text to encode in the barcode
	scale: 3, // Scaling factor
	height: 10, // Barcode height (in millimeters)
	width: 10,
	includetext: true // Include the text below the barcode
};

// Generate barcode as PNG image
bwip.toBuffer(barcodeOptions, function (err, pngBuffer) {
	if (err) {
		console.error(err);
		return;
	}

	// Save the barcode image to a file
	fs.writeFileSync("barcode.png", pngBuffer);
	console.log("Barcode image saved as barcode.png");
});
