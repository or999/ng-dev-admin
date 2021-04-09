import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
  // TODO:自定义svg图标的使用方法，将项目所有字体图标文件包下载解压后，只使用其中的iconfont.js 文件，
  // 用iconfont.js 文件替换src/assets下的iconfont.js文件，在使用图标的模块中声明IconComponent组件，
  // 向组件中传入图标名称例如 'xiaolian'
export class IconComponent {
@Input() iconclass: string;
  constructor() { }


}
