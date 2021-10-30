import {generateMediaFile} from "react-art-gallery/utils/generateMediaFile";
import {join} from "path";

generateMediaFile({
	"acceptedFileExtensions": [".webp"],
	"mediaPath": join(__dirname, "..", "assets", "webp", "media"),
	"generatedFilePath": join(__dirname, ".."),
	"generatedFileName": "generatedWebpExports"
});

generateMediaFile({
	"acceptedFileExtensions": [".jpeg", ".png"],
	"mediaPath": join(__dirname, "..", "assets", "img", "media"),
	"generatedFilePath": join(__dirname, ".."),
	"generatedFileName": "generatedImgExports"
})