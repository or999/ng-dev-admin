import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  tabActiveId = 'Icons';
  IconsList = [{ title: '2' }, { title: 'lvzhi1' },
    { title: 'lvzhi3' }, { title: 'lvzhi4' },
    { title: 'lvzhi5' }, { title: 'lvzhi6' },
    { title: 'lvzhi7' }, { title: 'lvzhi8' },
    { title: 'lvzhi9' }, { title: 'lvzhi10' },
    { title: 'lvzhi11' }, { title: 'lvzhi12' },
    { title: 'lvzhi13' }, { title: 'lvzhi14' },
    { title: 'lvzhi15' }, { title: 'lvzhi16' },
    { title: 'lvzhi17' }, { title: 'lvzhi18' },
    { title: 'lvzhi19' }, { title: 'lvzhi20'}];
  devIconsList = [{ title: 'icon-add-2' }, { title: 'icon-add-bug' },
    { title: 'icon-add-child-node' }, { title: 'icon-add-directory' },
    { title: 'icon-add-file' }, { title: 'icon-add-fold' },
    { title: 'icon-add-interface-use-case' }, { title: 'icon-add-label' },
    { title: 'icon-add-manual-use-case' }, { title: 'icon-add-member' },
    { title: 'icon-add-sibling-node' }, { title: 'icon-add-sub-module' },
    { title: 'icon-add-sub-node' }, { title: 'icon-add' },
    { title: 'icon-all-close' }, { title: 'icon-all-project' },
    { title: 'icon-archive' }, { title: 'icon-arrow-down' },
    { title: 'icon-arrow-left' }, { title: 'icon-arrow-right' },

  ];
  constructor() { }

  ngOnInit(): void {
    this.devIconsList = this.devIconsList.map(item => {
      return {
        title: item.title, html: '<i class="icon ' + item.title + '"></i>'
      };
    });
    this.IconsList = this.IconsList.map(item => {
      return {
        title: item.title, html: `<app-icon [iconclass]=" ${item.title} "/>`
      };
    });
  }
}
