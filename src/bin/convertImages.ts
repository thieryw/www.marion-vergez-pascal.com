import { imageConverter } from "./imageConverter";
import { join } from "path";


imageConverter({
	"acceptedFileExtensions": [".jpeg", ".png,", ".jpg"],
	"pathToAssets": join(__dirname, "..", "assets", "img"),
	"pathToConvertedImages": join(__dirname, "..", "assets", "webp"),
	"convertTo": "webp",
	"overrideIfConvertedImagesExit": true
});

imageConverter({
	"acceptedFileExtensions": [".jpeg", ".jpg"],
	"pathToAssets": join(__dirname, "..", "user", "assets", "news"),
	"pathToConvertedImages": join(__dirname, "..", "user", "assets", "webp"),
	"convertTo": "webp",
	"overrideIfConvertedImagesExit": true
})

