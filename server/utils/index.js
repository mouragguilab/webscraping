const axios = require('axios');
const cheerio = require('cheerio');

exports.scrape = (url) => {
  const config = {
    url,
    method: 'GET',
    transformResponse: data => cheerio.load(data),
  };

  return axios(config);
};