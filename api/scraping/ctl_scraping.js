'use strict';

const scrapeIt = require("scrape-it");

module.exports.get = async(req, res) => {
  scrapeItExample();
  return res.send('it works');
};

async function scrapeItExample() {
  const scrapeResult = await scrapeIt('https://www.naranja.com/comercios-amigos', {
      presentations: {
          listItem: 'li.deck.public',
          data: {
              title: 'span.deck-title-value',
              description: 'span.deck-description-value',
              link: {
                  selector: 'a.deck-link',
                  attr: 'href'
              }
          }
      }
  });
  console.log(scrapeResult);
}