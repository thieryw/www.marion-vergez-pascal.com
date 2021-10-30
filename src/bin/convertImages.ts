import {convertImagesToWebp} from "react-art-gallery/utils/convertImagesToWebp";
import {join} from "path";


convertImagesToWebp({
	"acceptedFileExtensions": [".jpeg", ".png"],
	"pathToAssets": join(__dirname, "..", "assets", "img"),
	"pathToConvertedImages": join(__dirname, "..", "assets", "webp"),
	"convertTo": "webp"

});