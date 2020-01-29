const { scrape } = require('../utils');
const {
  titleSelector,
  imageSelector,
  descriptionSelector,
} = require('../query-selectors/open-graph');

module.exports = {
  openGraph (req, res) {
    scrape(req.query.url).then(({ data: $ }) => {
      let img = $(imageSelector);
      let description = $(descriptionSelector);
      let title = $(titleSelector);

      const data = {
        title: title.attr('content') || title.text(),
        description: description.attr('content'),
        imageUrl: img.attr('content') || img.attr('src'),  
      };

      res.status(200).send(JSON.stringify(data))
    })
    .catch((err) => res.status(500).send('Server error!' + err))
  }
};