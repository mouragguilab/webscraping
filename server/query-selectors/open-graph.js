exports.titleSelector = `
  meta[property="og:title"],
  meta[name="title"],
  meta[name="twitter:title"],
  h1[class*="title"]
`

exports.descriptionSelector = `
  meta[name="description"][content*=" "],
  meta[property="og:description"][content*=" "],
  meta[name="twitter:description"][content*=" "]
`

exports.imageSelector = `
  meta[property="og:image"],
  meta[name="og:image"],
  meta[name="image"],
  img#image-main,
  img.main-img,
  .main-image img,
  [class*="image-gallery"] img,
  [id*="img"] img,
  .showcase-product__big-img
`