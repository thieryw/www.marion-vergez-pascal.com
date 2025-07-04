import {generateMediaFile} from "./generateMediaFile";
import {join} from "path";

generateMediaFile({
	"acceptedFileExtensions": [".webp"],
	"mediaPath": join(__dirname, "..", "assets", "webp", "media"),
	"generatedFilePath": join(__dirname, ".."),
	"generatedFileName": "generatedWebpExports"
});

generateMediaFile({
	"acceptedFileExtensions": [".jpeg", ".png", ".jpg"],
	"mediaPath": join(__dirname, "..", "assets", "img", "media"),
	"generatedFilePath": join(__dirname, ".."),
	"generatedFileName": "generatedImgExports"
});


