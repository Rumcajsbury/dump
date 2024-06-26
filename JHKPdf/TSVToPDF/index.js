const { error } = require("console");
const { readFileSync, writeFile } = require("fs");

const fileName = process.argv[2];
const tsvFileData = readFileSync(`./TSVInput/${fileName}.tsv`);
const jsonRes = tsvJSON(tsvFileData.toString());
console.log(jsonRes);

generatePDFs(jsonRes);

async function generatePDFs(pdfJson) {
  const content = `<div
  class="d m1"
  style="
    border-style: none;
    position: absolute;
    left: 4.245px;
    bottom: 1.5px;
    width: 16.17px;
    height: 1.16px;
    background-color: black;
  "
>Dupa</div
>"`;
  writeFile("testWrite.pdf", content, (error) => {
    console.log(error);
  });
}

function tsvJSON(tsv) {
  const lines = tsv.split("\n");
  const result = [];
  const headers = lines[0].split("\t");

  for (let i = 1; i < lines.length; i++) {
    const obj = {};
    const currentline = lines[i].split("\t");

    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j];
    }

    result.push(obj);
  }

  return result;
}

// console.log(JSON.stringify(jsonRes));

// const puppeteer = require('puppeteer');

// (async () => {
//  const browser = await puppeteer.launch();

//  const page = await browser.newPage();

//  await page.setContent('<h1>Hello, Puppeteer!</h1>');

//  await page.pdf({ path: 'example.pdf', format: 'A4' });

//  await browser.close();

//  console.log('Here's your PDF!.');
// })();
