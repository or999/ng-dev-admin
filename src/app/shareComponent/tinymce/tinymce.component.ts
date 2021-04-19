import { Component, OnInit } from '@angular/core';
// import tinymce from 'tinymce';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tinymce',
  templateUrl: './tinymce.component.html',
  styleUrls: ['./tinymce.component.scss']
})
export class TinymceComponent implements OnInit {
  editorContent = '';
  // 编辑器配置
  editorConfig2 = {
    base_url: '/tinymce',
    height: 500,
    menubar: false,
    plugins: ['image paste media'],
    toolbar: 'image paste media',
    language: 'zh_CN',
    language_url: '/tinymce/lang/zh_CN.js',
    automatic_uploads: false,
    images_upload_url: 'http://localhost:9090/vue/image',
    paste_data_images: true
  };
  editorConfig = {
      height: 500,
      menubar: false,
      plugins: [
        'advlist autolink lists link image charmap print preview anchor',
        'searchreplace visualblocks code fullscreen',
        'insertdatetime media table paste code help wordcount'
      ],
      toolbar:
        'undo redo | formatselect | bold italic backcolor | \
        alignleft aligncenter alignright alignjustify | \
        bullist numlist outdent indent | removeformat | help'
    };
  constructor(private httpClient: HttpClient) { }
  ngOnInit(): void {
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
