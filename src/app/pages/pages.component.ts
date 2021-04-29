import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { AuthService } from '../@core/service/auth/auth.service';
import { menu, IMenuType } from './pages-menu';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  stickyView = {
    top: 0,
    bottom: 0
  };
  // TODO:面包屑数据
  source: SourceItemType[] = [{ title: '首页', link: '/pages/dashboard', showMenu: false }];
  imgSrc: string;
  imageInput: any;
  constructor(public authService: AuthService, public router: Router, private route: ActivatedRoute) { }
  msgs: Array<object> = [];
  menu: IMenuType[];
  key = {
    activeKey: 'active',
  };
  // splitter input
  orientation = 'horizontal';
  splitBarSize = '2px';
  disabledBarSize = '1px';

  // splitter pane input
  size = '12%';
  minSize = '8%';
  maxSize = '20%';
  collapsed = false;
  isPaneShrink = false; // 默认不收缩

  hoverCard: Array<any> = [];
  showCard = false;
  ngOnInit(): void {
    this.getMenu();
    this.initBreadcrumb(window.location.pathname);
    this.listenRouterChange();
  }
  getMenu(): void {
    this.menu = menu;
    this.menu.forEach((item) => {
      if (item.children) {
        let childTitle = `<span>${item.title}</span>`;
        item.children.forEach((child) => {
          childTitle += `<li>${child.title}</li>`;
        });
        this.hoverCard.push(childTitle);
      } else {
        this.hoverCard.push(item.title);
      }
    });
  }
  logout(): void {
    this.authService.logout().subscribe(
      () => { this.router.navigate(['auth/login']); }
    );
  }
  itemClick(event): void {
    // console.log(event);
    // TODO:点击原生菜单时，修改菜单数据状态，以至于自定义菜单可以同步原生菜单变化。
    const selectedItem = event.item;
    this.menu.forEach((item) => {
      if (item === selectedItem || item.children?.some(
        (child) => {
          return child === selectedItem;
        })) {
        item.active = true;
      } else {
        item.active = false;
      }
    });
  }
  sizeChange(size: any): void {
    // TODO:监测侧边菜单栏尺寸变化。
    //  console.log(size);
  }
  collapsedChange(event: boolean): void {
    //  console.log(event);
    this.collapsed = event;
  }
  selectItem(selectedItem: IMenuType): void {
    // TODO:点击原生菜单时，修改菜单数据状态，以至于自定义菜单可以同步原生菜单变化。
    if (selectedItem.children) {
      this.collapsedChange(false);
    } else {
      this.menu.forEach((item) => {
        if (item === selectedItem) {
          item.active = true;
        } else {
          item.active = false;
        }
      });
      this.router.navigate(['/pages', selectedItem.link]);
    }
  }
  paneShrinkStatus(status: boolean): void {
    // TODO:侧边栏缩放
    this.isPaneShrink = status;
  }
  isChildrenActive(item: { children?: any[]; }): boolean {
    // TODO:自定义菜单 子菜单变化时，父元素点亮。
    const isActive = item.children && item.children.some((child: { active: boolean; }) => child.active);
    return isActive;
  }
  listenRouterChange(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event) => {
      const url = (event as any).url;
      this.initBreadcrumb(url);
    });
  }
  //
  initBreadcrumb(url: string): void {
    // TODO:初次进入应用时
    this.menu.forEach(item => {
      if ('/pages/' + item.link === url) {
        this.source[1] = { title: item.title, link: '/pages/' + item.link, showMenu: false };
        // TODO:初次进入应用时根据当前路由点亮目录
        item.active = true;
      } else if (item.children && item.children.some(child => '/pages/' + child.link === url)) {
        this.source[1] = {
          title: item.title, showMenu: true, noNavigation: true,
          menuList: item?.children.map((item) => ({ name: item.title, link: '/pages/' + item.link }))
        };
        item.active = true;
      } else {
        return;
      }
    });
  }
  getFile(event, dToggle): void{
    console.log(event);
    console.log(dToggle);

  }
}
// TODO:面包屑数据类型
type SourceItemType = {
  title: string;
  showMenu: boolean;
  link?: string;
  noNavigation?: boolean;
  menuList?: { name: string, link: string }[];
};
