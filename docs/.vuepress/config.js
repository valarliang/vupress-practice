module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  head: [
    ['link', { rel: 'icon', href: '/hero.png' }]
  ],
  themeConfig: {
    logo: '/hero.png',
    searchMaxSuggestions: 10,
    smoothScroll: true,
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Foo', link: '/foo/' },
      {
        text: 'Bar',
        items: [
          {
            text: 'Group1',
            items: [
              { text: '页面1', link: '/bar/group1/page1' },
              { text: '页面2', link: '/bar/group1/page2' },
            ]
          },
          {
            text: 'Group2',
            items: [
              { text: '页面A', link: '/bar/group2/pageA' },
              { text: '页面B', link: '/bar/group2/pageB' },
            ] 
          }
        ]
      },
      { text: 'External', link: 'https://google.com' },
    ],
    // displayAllHeaders: true,
    sidebar: {
      '/guide/': [
        {
          title: 'Guide Group',   // 必要的
          // path: '/guide/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2,    // 可选的, 默认值是 1
          children: [
            ['', '介绍'], 'page1',
          ]
        },
        {
          title: 'Second Group',
          collapsable: false,
          children: ['page2']
        }
      ],
      '/foo/': [{
        title: 'Foo',
        children: [
          ['', 'Defult']
        ]
      }],
      '/bar/group1/': ['page1', 'page2']
    }
  }
}