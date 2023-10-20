import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml';

function createConcertObj(params: {
    outputFilePath: string;
    inputFilePath: string;
}) {
    const {inputFilePath, outputFilePath} = params;
    try {
        const yamlContent = fs.readFileSync(inputFilePath, 'utf-8');
        const parsedData = yaml.load(yamlContent);

        const tsContent = `export const data = ${JSON.stringify(parsedData, null, 4)};`;
        fs.writeFileSync(outputFilePath, tsContent, 'utf-8');

        console.log(`Converted ${inputFilePath} to ${outputFilePath}`);
    } catch (error) {
        console.error('Error processing file:', error);
    }

}

createConcertObj({
    "inputFilePath": path.join(__dirname, "..", "user", "concerts.yaml"),
    "outputFilePath": path.join(__dirname, "..", "user", "concerts.ts")
});

createConcertObj({
    "inputFilePath": path.join(__dirname, "..", "user", "archives.yaml"),
    "outputFilePath": path.join(__dirname, "..", "user", "archives.ts")
});


