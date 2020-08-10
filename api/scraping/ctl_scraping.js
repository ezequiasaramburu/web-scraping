'use strict';
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
let content = {};

module.exports.get = async(req, res) => {
  cheerioExample();
  return res.send('it works');
};

async function cheerioExample() {
  const pageContent = await axios.get('https://www.naranja.com/comercios-amigos');
  const $ = cheerio.load(pageContent.data);
  content = $('dl').map((_, el) => {
      el = $(el);
      const index = el.find('dt.faq-title').text();
      const value = el.find('dd.faq-text').text();
      return { index, value };
  }).get();
  writeToFile(content);
};

function writeToFile(content) {
  let jsonContent = JSON.stringify({ result: content, updated: new Date().toLocaleString() });
  fs.writeFile("output.json", jsonContent, 'utf8', (err) => {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
    console.log("JSON file has been saved.");
  });
};