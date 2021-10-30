import {convertImages} from "react-art-gallery/utils/convertImages";
import {join} from "path";


convertImages({
	"acceptedFileExtensions": [".jpeg", ".png"],
	"pathToAssets": join(__dirname, "..", "assets", "img"),
	"pathToConvertedImages": join(__dirname, "..", "assets", "webp"),
	"convertTo": "webp",
	"overrideIfConvertedImagesExit": true
});