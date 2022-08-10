module.exports = {
  getReviewUrl: ({ vendor: { code }, title }) =>
    `/reviews/${code.toLowerCase()}-${title
      .replace(/"/g, '')
      .replace(/\s+/g, '-')
      .toLowerCase()}`,
  getListUrl: ({ code }) => `/lists/${code}`
};
