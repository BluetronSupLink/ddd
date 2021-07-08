module.exports = {
  //////////  主题信息 ///////////
  themeConfig: {
    //git 仓库地址
    repo: "https://github.com/BluetronSupLink/ddd",
    // 是否编辑链接
    editLinks: true,
    // 编辑链接文字
    editLinkText: "在 GitHub 上编辑此页",

    sidebar: [
    '',
    '00/',
    {
      title: '基础篇',
      path: '/01/',
      collapsable: true,
      children: [
        '01/01.md',
        '01/02.md',
        '01/03.md',
        '01/04.md',
        '01/05.md'
      ]
    },
    {
      title: '进阶篇',
      path: '/02/',
      collapsable: true,
      children: [
        '02/01.md',
        '02/02.md',
        '02/03.md',
        '02/04.md',
        '02/05.md',
        '02/06.md'
      ]
    },
    {
      title: '实战篇',
      path: '/03/',
      collapsable: true,
      children: [
        '03/01.md',
        '03/02.md',
        '03/03.md',
        '03/04.md',
        '03/05.md',
        '03/06.md',
        '03/07.md',
        '03/08.md',
        '03/09.md',
        '03/10.md'
      ]
    },
    '04/',
    '04/01.md'
  ],

    // 嵌套的标题链接深度，默认的深度为1。
    sidebarDepth: 3,

    //搜索
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated" // string | boolean
  },

};