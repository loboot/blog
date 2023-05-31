import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "roboot's blog",
  description: 'coding & study & life',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Articles',
        items: [
          {
            text: '如何搭建博客',
            link: '/articles/如何搭建博客_2023',
          },
          {
            text: 'Shell',
            link: '/articles/学习一下shell_2023',
          },
        ],
      },
    ],
    sidebar: [
      {
        text: 'Articles',
        items: [
          { text: '如何搭建博客', link: '/articles/如何搭建博客_2023' },
          {
            text: 'Shell',
            link: '/articles/学习一下shell_2023',
          },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },
});
