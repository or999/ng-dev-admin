import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import tinymce from 'tinymce';

@Component({
  selector: 'app-tinymce',
  templateUrl: './tinymce.component.html',
  styleUrls: ['./tinymce.component.scss']
})
export class TinymceComponent implements OnInit {
  @Input() id: string;
  @Input() value: string;
  @Input() toolbar: boolean | any[] | string;
  @Input() menubar: boolean | string;
  @Input() height: number;
  @Input() width: number | string;
  editorContent: string;
  editorConfig: EditorConfig = {
    suffix: '.min',
    language_url: '/tinymce/lang/zh_CN.js',
    language: 'zh_CN',
    base_url: '/tinymce',
    height: 500,
    menubar: true,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    images_upload_handler(blobInfo, succFun, failFun): void {
      const file = blobInfo.blob();
      console.log(file);
    },
    file_picker_callback(callback, value, meta): void {
      if (meta.filetype === 'file') {
        callback('mypage.html', { text: 'My text' });
      }
      // Provide image and alt text for the image dialog
      if (meta.filetype === 'image') {
        callback('myimage.jpg', { alt: 'My alt text' });
      }
      // Provide alternative source and posted for the media dialog
      if (meta.filetype === 'media') {
        callback('movie.mp4', { source2: 'alt.ogg', poster: 'image.jpg' });
      }

    },
  };
  constructor(private httpClient: HttpClient) { }
  ngOnInit(): void {
    this.editorContent = this.value || '<h1>init</h1>';
    this.editorConfig.height = this.height || 500;
    this.editorConfig.toolbar = this.toolbar ||
      'undo redo | formatselect | bold italic backcolor | \
    alignleft aligncenter alignright alignjustify | \
    bullist numlist outdent indent | removeformat | link image |help ';
  }
  getEditor(): void {
    const editor = tinymce.get('editorID');
    console.log(editor);
  }
  // postContent(): void {
  //   const editor = tinymce.get('editorID');
  //   console.log(editor);
  //   editor.uploadImages(success => {
  //     const url = 'http://localhost:9090/vue/upload-content';
  //     console.log('调用了此回调函数');
  //     this.httpClient.post(url, this.editorContent).subscribe(res => console.log(res));
  //   });
  // }

  // contentInfo(): void {
  //   console.log('编辑器的内容：', this.editorContent);
  // }
}
type EditorConfig = {
  suffix: string;
  language_url: string;
  language: string;
  base_url: string;
  id?: string;
  height?: number;
  toolbar?: boolean | any[] | string;
  menubar?: boolean | string;
  width?: number | string;
  plugins?: string[];
  images_upload_handler?: (blobInfo, succFun, failFun) => void;
  file_picker_callback?: (callback, value, meta) => void;
};
