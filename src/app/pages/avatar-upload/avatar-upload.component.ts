import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IFileOptions, IUploadOptions, SingleUploadComponent } from 'ng-devui/upload';

@Component({
  selector: 'app-avatar-upload',
  templateUrl: './avatar-upload.component.html',
  styleUrls: ['./avatar-upload.component.scss']
})
export class AvatarUploadComponent implements OnInit {
  fileOptions: IFileOptions = {
    multiple: false,
  };
  additionalParameter = {
    name: 'tom',
    age: 11
  };
  uploadedFiles: Array<Object> = [];
  uploadOptions: IUploadOptions = {
    uri: '/upload',
    headers: {},
    additionalParameter: this.additionalParameter,
    maximumSize: 0.5,
    method: 'POST',
    fileFieldName: 'dFile',
    withCredentials: true,
    responseType: 'json'
  };

  isDropOver = false;
  message: Array<Object> = [];
  fileUploaders: Array<Object> = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  onSuccess(result) {
    console.log(result);
  }

  beforeUpload(file) {
    console.log(this); // this指向SingleUploadComponent
    console.log(file);
    return true;
  }

  onError(error) {
    console.log(error);
  }

  deleteUploadedFile(filePath: string) {
    // this.http.delete(`/files/${filePath}`).subscribe(() => {
    //   console.log(`delete ${filePath}`);
    // });
    console.log(filePath);
  }
  fileDrop(files): void {
    this.isDropOver = false;
    console.log(files);
  }
  fileOver(event): void {
    this.isDropOver = event;
    console.log(event);
  }
  alertMsg(event): void {
    this.message = event;
  }
  deleteFile(currFile): void {
    this.fileUploaders = this.fileUploaders.filter((fileUploader) => {
      return currFile !== fileUploader;
    });
  }

}
