module.exports = {
  getReviewUrl: ({ vendor: { code }, title }) =>
    `/reviews/${code.toLowerCase()}-${title.replace(/\s+/g, '-').toLowerCase()}`
};
