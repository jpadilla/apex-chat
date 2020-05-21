module.exports = {
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    let paths = {
      '/': { page: '/' },
    };

    for (let i = 0; i < 72; i++) {
      let pageNumber = `${i + 1}`;
      paths[`/page/${pageNumber}`] = {
        page: '/page/[pageNumber]',
        query: { pageNumber }
      };
    }

    return paths;
  }
};
