// TODO:侧边栏菜单
interface IMenuType {
  title: string;
  active: boolean;
  link?: string;
  children?: Array<{
    title: string;
    active: boolean;
    link?: string;
    children?: Array<{
      title: string;
      active: boolean;
      link?: string;
    }>;
  }>;
  icon?: string;
}
const menu: Array<IMenuType> = [
  {
    title: '首页',
    active: false,
    link: 'dashboard',
    icon: 'icon-homepage',
  },
  {
    title: '文档',
    active: false,
    link: 'file',
    icon: 'icon-file',
  },
  {
    title: '引导页',
    active: false,
    link: 'guide',
    icon: 'icon-publish',
  },


  {
    title: '权限测试页',
    icon: 'icon-lock-private',
    active: false,
    children: [
      { title: '页面权限', active: false, link: 'permission/pagePermission' },
      // { title: '指令权限', active: false, link: 'permission/directivePermission' },
      { title: '角色权限', active: false, link: 'permission/rolePermission' }
    ]
  },
  {
    title: '图标',
    icon: 'icon-selct-template',
    active: false,
    link: 'icons'
  },
  {
    title: '组件',
    icon: 'icon-layout',
    active: false,
    children: [
      { title: '富文本编辑器', active: false, link: 'richtext' },
      { title: '文件上传', active: false, link: 'avatarupload' },
      { title: '吸顶', active: false, link: 'sticky' },
    ],
  },
  {
    title: '图表',
    icon: 'icon-go-chart',
    active: false,
    link: 'tubiao2'
  },
  {
    title: '路由嵌套',
    icon: 'icon-list-view',
    active: false,
    link: 'route'
  },
  {
    title: '表格',
    icon: 'icon-table',
    active: false,
    link: 'table'
  },
  {
    title: '综合实例',
    icon: 'icon-for-example',
    active: false,
    link: 'example'
  },
  {
    title: '错误页面',
    icon: 'icon-bug',
    active: false,
    link: 'pagenotfound'
  },
  {
    title: 'Tab',
    icon: 'icon-management',
    active: false,
    children: [
      { title: '分组列表', active: false, link: 'grouplist' },
      {
        title: '任务列表', active: false, children: [{
          title: '列表', active: false, link: 'list'
      }] },
    ],
  }
];
export { IMenuType, menu };
