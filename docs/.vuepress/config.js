module.exports = {
  title: '数据运营系统技术文档',
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
      { text: 'GitLab', link: 'http://git.7moor.com/do/expo/tree/master'}
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
