module.exports = {
  title: '基于 Vue-Cli 3 的企业级项目模板架构',
  description: '技术架构，组件演示，开发日志...',
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.ico'}]
  ],
  serviceWorker: true,
  themeConfig: {
    nav: [
      { text: '开发指南', link: '/guides/' },
      { text: '开发规范', link: '/specs/' },
      { text: '组件文档', link: '/components/' },
      { text: '开发日志', link: '/changelog/'},
      { text: 'GitHub', link: 'https://github.com/haitaodesign/Vue-Cli3.0-Enterprise-Boilerplate'}
    ],
    sidebar: {
      '/components/': [
        '',
        'components-one',
        'components-two'
      ]
    }

  }
}
