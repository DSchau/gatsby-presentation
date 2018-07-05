module.exports = {
  adapter: 'adapter-spectacle',
  beforeScreenshot: async (page) => {
    await page.evaluate(() => {
      const btn = document.querySelector('.graphql-display');
      if (btn && btn.click) {
        btn.click();
      }
    });
  },
  delay: 1250,
  folder: 'blog-post/images',
  url: 'http://localhost:3000',
  width: 960
};
