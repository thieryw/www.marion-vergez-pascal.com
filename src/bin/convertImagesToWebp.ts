import {convertImages} from "./convertImages";
import {join} from "path";


convertImages({
	"acceptedFileExtensions": [".jpeg", ".png"],
	"pathToAssets": join(__dirname, "..", "assets", "img"),
	"pathToConvertedImages": join(__dirname, "..", "assets", "webp"),
	"convertTo": "webp",
	"overrideIfConvertedImagesExit": true
});

convertImages({
	"acceptedFileExtensions": [".jpeg"],
	"pathToAssets": join(__dirname, "..", "user", "assets", "news"),
	"pathToConvertedImages": join(__dirname, "..", "user", "assets", "webp"),
	"convertTo": "webp",
	"overrideIfConvertedImagesExit": true
})

export type B = string;