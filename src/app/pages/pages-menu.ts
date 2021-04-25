// TODO:侧边栏菜单
interface IMenuType {
  title: string;
  active: boolean;
  link?: string;
  children?: Array<IMenuType>;
  linkType?: string;
  icon?: string;
  target?: string;
}
const menu: Array<IMenuType> = [
  {
    title: '首页',
    active: false,
    link: 'dashboard',
    icon: 'icon-homepage',
    linkType: 'routerLink'
  },
  {
    title: '文档',
    active: false,
    link: 'file',
    icon: 'icon-file',
    linkType: 'routerLink'

  },
  {
    title: '引导页',
    active: false,
    link: 'guide',
    icon: 'icon-publish',
    linkType: 'routerLink'
  },


  {
    title: '权限测试页',
    icon: 'icon-lock-private',
    active: false,
    children: [

      { title: '页面权限', active: false, link: 'permission/pagePermission', linkType: 'routerLink' },
      // { title: '指令权限', active: false, link: 'permission/directivePermission' },
      { title: '角色权限', active: false, link: 'permission/rolePermission', linkType: 'routerLink' }
    ]
  },
  {
    title: '图标',
    icon: 'icon-selct-template',
    active: false,
    link: 'icons',
    linkType: 'routerLink'
  },
  {
    title: '组件',
    icon: 'icon-layout',
    active: false,
    children: [
      { title: '富文本编辑器', active: false, link: 'richtext', linkType: 'routerLink' },
      { title: '文件上传', active: false, link: 'avatarupload', linkType: 'routerLink' },
      { title: '吸顶', active: false, link: 'sticky', linkType: 'routerLink' },
    ],
  },
  {
    title: '图表',
    icon: 'icon-go-chart',
    active: false,
    link: 'tubiao2',
    linkType: 'routerLink'
  },
  {
    title: '路由嵌套',
    icon: 'icon-list-view',
    active: false,
    link: 'route',
    linkType: 'routerLink'
  },
  {
    title: '表格',
    icon: 'icon-table',
    active: false,
    link: 'pages-table',
    linkType: 'routerLink'
  },
  {
    title: '综合实例',
    icon: 'icon-for-example',
    active: false,
    link: 'example',
    linkType: 'routerLink'
  },
  {
    title: '错误页面',
    icon: 'icon-bug',
    active: false,
    link: 'pagenotfound',
    linkType: 'routerLink'
  },
  {
    title: '外链',
    icon: 'icon-link',
    active: false,
    link: 'https://github.com/or999/ng-dev-admin/',
    linkType: 'hrefLink',
    target: '_self'
  },
  {
    title: 'Tab',
    icon: 'icon-management',
    active: false,
    children: [
      { title: '分组列表', active: false, link: 'grouplist', linkType: 'routerLink' },
      {
        title: '任务列表', active: false, link: 'list', linkType: 'routerLink'
      },
    ],
  }
];
export { IMenuType, menu };
