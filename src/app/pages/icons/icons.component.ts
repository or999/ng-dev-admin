import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  tabActiveId = 'Icons';
  IconsList = [{ title: 'xiaolian'}];
  devIconsList = [{ title: 'icon-add-2' }, { title: 'icon-add-bug' }, { title: 'icon-add-child-node' }, { title: 'icon-add-directory' },
  { title: 'icon-add-file' }, { title: 'icon-add-fold' }, { title: 'icon-add-interface-use-case' }, { title: 'icon-add-label' }];
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
