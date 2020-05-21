const fs = require('fs');
const path = require('path');
const lunr = require('lunr');
const chat = require('../public/static/chat.json');

const staticPath = path.join(path.dirname(__dirname), 'public', 'static');

const lunrIndex = lunr(function () {
  this.ref('page');
  this.field('text');

  chat.forEach((message) => this.add(message), this);
});

fs.writeFile(
  path.join(staticPath, 'chat-index.json'),
  JSON.stringify(lunrIndex),
  (error) => {
    if (error) {
      console.error('ERROR writing index to file.', error);
    }
  }
);
