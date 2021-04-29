import { Component, OnInit, ViewChild, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { TableWidthConfig, TableCheckOptions, DataTableComponent } from 'ng-devui/data-table';
import { DialogService } from 'ng-devui/modal';
import { of } from 'rxjs';
import { TableFormComponent } from '../table-form/table-form.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  constructor(private dialogService: DialogService, private router: Router, private cdr: ChangeDetectorRef) { }
  @ViewChild(DataTableComponent, { static: true }) datatable: DataTableComponent;

  basicDataSource: Array<SourceType> = JSON.parse(JSON.stringify(originSource.slice(0, 6)));
  dataTableOptions = {
    columns: [
      {
        field: 'name',
        header: '灯具名称',
        fieldType: 'text'
      },
      {
        field: 'type',
        header: '灯具类型',
        fieldType: 'text'
      },
      {
        field: 'online',
        header: '在线状态',
        fieldType: 'online'
      },
      {
        field: 'on',
        header: '开关',
        fieldType: 'on'
      },
      {
        field: 'light',
        header: '亮度',
        fieldType: 'light'
      },
      {
        field: 'address',
        header: '灯控器地址',
        fieldType: 'number'
      }
    ]
  };
  tableWidthConfig: TableWidthConfig[] = [
    {
      field: 'checkbox',
      width: '55px'
    },
    {
      field: '#',
      width: '30px'
    },
    {
      field: 'name',
      width: '100px'
    },
    {
      field: 'type',
      width: '150px'
    },
    {
      field: 'online',
      width: '80px'
    },
    {
      field: 'on',
      width: '80px'
    },
    {
      field: 'light',
      width: '300px'
    },
    {
      field: 'address',
      width: '150px'
    },
    {
      field: 'todo',
      width: ''
    },
  ];
  hideColumn = ['address'];
  checkOptions: TableCheckOptions[] = [
    {
      label: '全选所有数据',
      onChecked: this.checkTotalData.bind(this)
    },
    {
      label: '全选当前页数据',
      onChecked: this.checkPageData.bind(this)
    }
  ];
  options = [{
    name: 'option1',
    value: 1
  }, {
    name: 'option2',
    value: 2
  }, {
    name: 'option3',
    value: 3
  }, {
    name: 'option4',
    value: 4
  }, {
    name: 'option5',
    value: 5
  }, {
    name: 'option6',
    value: 6
  }];
  pager = {
    total: 12,
    pageIndex: 1,
    pageSize: 6
  };
  totalDataChecked = false;
  // TODO:懒加载
  showLoading = false;
  next = 1;
  total = 40;
  complete = false;
  currentOption1 = '';
  currentOption2 = '';
  ngOnInit(): void {
  }
  // TODO:mock懒加载数据
  loadMore(event): void {
    if (this.next > this.total) {
      return;
    }
    this.showLoading = true;
    const end = this.next + 20;
    const dataSource = [];
    for (; this.next < end; this.next++) {
      dataSource.push({
        id: this.next++,
        address: 8675849037250,
        name: 'HNJS-0001',
        type: '华为NB灯控器-x',
        online: true,
        on: true,
        light: 100
      });
    }
    setTimeout(() => {
      this.basicDataSource = this.basicDataSource.concat(dataSource);
      this.showLoading = false;
      this.cdr.detectChanges();
    }, 300);
    this.complete = this.next > this.total;
    console.log(`load more`, this.next, this.complete);
  }
  // TODO:选中状态
  checkTotalData(): void {
    this.datatable.setTableCheckStatus(
      {
        pageAllChecked: true
      }
    );
    this.totalDataChecked = true;
  }
  checkPageData(): void {
    this.datatable.setTableCheckStatus(
      {
        pageAllChecked: true
      }
    );
    this.totalDataChecked = false;
  }
  onRowCheckChange(checked, rowIndex, nestedIndex, rowItem): void {
    rowItem.$checked = checked;
    rowItem.$halfChecked = false;
    this.datatable.setRowCheckStatus({
      rowIndex,
      nestedIndex,
      rowItem,
      checked
    });
  }
  // TODO:开关状态改变之前拦截
  beforeChange = (currentValue) => {
    return new Promise((resolve) => {
      const results = this.dialogService.open({
        id: 'dialog-service',
        width: '300px',
        maxHeight: '600px',
        showAnimate: false,
        title: 'Toggle?',
        content: '确定要更改该灯具状态吗?',
        backdropCloseable: false,
        dialogtype: 'standard',
        buttons: [
          {
            cssClass: 'stress',
            text: '确定',
            handler: ($event: Event) => {
              results.modalInstance.hide();
              resolve(true);
            }
          },
          {
            id: 'btn-cancel',
            cssClass: 'common',
            text: '取消',
            handler: ($event: Event) => {
              results.modalInstance.hide();
              resolve(false);
            }
          },
        ]
      });
    });
  }
  onChange2(item): void {
    // console.log(item);
  }
  lightChange(item): void {
    // console.log(item);
  }
  // TODO:分页索引改变后触发（在此处请求下一页数据）
  onPageIndexChange(pageIndex): void {
    this.basicDataSource = JSON.parse(JSON.stringify(originSource.slice(pageIndex - 1, pageIndex + 5)));
    setTimeout(() => {
      if (this.totalDataChecked) {
        this.datatable.setTableCheckStatus(
          {
            pageAllChecked: true
          }
        );
      } else {
        this.datatable.setTableCheckStatus(
          {
            pageAllChecked: false
          }
        );
      }
    });
  }
  // TODO：打开模态弹窗，添加新数据，或编辑
  openPreventCloseModal(item?): void {
    const _this = this;
    const results = this.dialogService.open({
      id: 'dialog-service',
      width: '500px',
      maxHeight: '500px',
      showAnimate: false,
      title: item ? '编辑' : '添加',
      content: TableFormComponent,
      dialogtype: 'standard',
      // beforeHidden: () => this.beforeHidden(),
      backdropCloseable: true,
      buttons: [
        {
          cssClass: 'stress',
          text: '关闭',
          handler: ($event: Event) => {
            results.modalInstance.hide();
            //  TODO: 弹窗关闭之后，在这里重新请求数据
          },

        }
      ],
      data: {
        item: item ? item : null,
        getFormdata: (formData) => {
          if (item) {
            this.basicDataSource.forEach((it, index) => {
              if (it.id === formData.id) {
                this.basicDataSource.splice(index, 1, formData);
                return;
              }
            });
          } else {
            _this.basicDataSource.unshift(formData);
          }
        }
      }
    });
  }
  // TODO：编辑
  edit(item): void {
    this.openPreventCloseModal(item);
  }
  // TODO：删除
  delete(item): void {
    this.basicDataSource.forEach((it, index) => {
      if (it.id === item.id) {
        this.basicDataSource.splice(index, 1);
        return;
      }
    });
  }
  onSelectObject = (term) => {
    return of(
      this.options
        .map((option, index) => ({ id: index, option }))
        .filter(item => item.option.name.toLowerCase().indexOf(term.toLowerCase()) !== -1)
    );
  }
}
interface SourceType {
  address: number;
  name: string;
  type: string;
  online: boolean;
  on: boolean;
  light: number;
  id: number;
}
const originSource = [
  {
    id: 1,
    address: 8675849037250,
    name: 'HNJS-0001',
    type: '华为NB灯控器-1',
    online: true,
    on: true,
    light: 100
  },
  {
    id: 2,
    address: 8675849037250,
    name: 'HNJS-0002',
    type: '⽅⼤NB灯控器',
    online: true,
    on: true,
    light: 90
  },
  {
    id: 3,
    address: 8675849037250,
    name: 'HNJS-0003',
    type: '顺⾈zigbee灯控器',
    online: true,
    on: true,
    light: 88
  },
  {
    id: 4,
    address: 8675849037250,
    name: 'HNJS-0004',
    type: '华为NB灯控器-1',
    online: true,
    on: false,
    light: 70
  },
  {
    id: 5,
    address: 8675849037250,
    name: 'HNJS-0005',
    type: '顺⾈zigbee灯控器',
    online: false,
    on: true,
    light: 50
  },
  {
    id: 6,
    address: 8675849037250,
    name: 'HNJS-0006',
    type: '华为NB灯控器-1',
    online: true,
    on: false,
    light: 100
  },
  {
    id: 7,
    address: 8675849037250,
    name: 'HNJS-0007',
    type: '⽅⼤NB灯控器',
    // 1. 华为NB灯控器-1 2. ⽅⼤NB灯控器 3. 顺⾈zigbee灯控器
    online: true,
    on: true,
    light: 60
  },
  {
    id: 8,
    address: 8675849037250,
    name: 'HNJS-0008',
    type: '华为NB灯控器-1',
    // 1. 华为NB灯控器-1 2. ⽅⼤NB灯控器 3. 顺⾈zigbee灯控器
    online: false,
    on: false,
    light: 99
  },
  {
    id: 9,
    address: 8675849037250,
    name: 'HNJS-0009',
    type: '⽅⼤NB灯控器',
    // 1. 华为NB灯控器-1 2. ⽅⼤NB灯控器 3. 顺⾈zigbee灯控器
    online: true,
    on: true,
    light: 100
  },
  {
    id: 10,
    address: 8675849037250,
    name: 'HNJS-0010',
    type: '华为NB灯控器-1',
    // 1. 华为NB灯控器-1 2. ⽅⼤NB灯控器 3. 顺⾈zigbee灯控器
    online: true,
    on: true,
    light: 96
  },
  {
    id: 11,
    address: 8675849037250,
    name: 'HNJS-0011',
    type: '⽅⼤NB灯控器',
    // 1. 华为NB灯控器-1 2. ⽅⼤NB灯控器 3. 顺⾈zigbee灯控器
    online: true,
    on: true,
    light: 44
  },
  {
    id: 12,
    address: 8675849037250,
    name: 'HNJS-0012',
    type: ' 顺⾈zigbee灯控器',
    // 1. 华为NB灯控器-1 2. ⽅⼤NB灯控器 3. 顺⾈zigbee灯控器
    online: true,
    on: true,
    light: 55
  }
];
