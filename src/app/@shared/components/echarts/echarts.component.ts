import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as echarts from 'echarts';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-echarts',
  templateUrl: './echarts.component.html',
  styleUrls: ['./echarts.component.scss']
})
export class EchartsComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() width :string;
  @Input() height:string;
  @Input() option: any
  @ViewChild('main') main:any
  resizeSub: any;
  echart: any
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    // this.main.nativeElement 
    console.log(this.main.nativeElement);
    // console.log(document.getElementById('main'));
    this.echart = (<any>echarts).init(this.main.nativeElement);
    this.resizeSub = fromEvent(window, 'resize')
      .pipe(debounceTime(100))
      .subscribe(() => {
        this.echart.resize();
      });
    this.echart.setOption(this.option)
  }
  ngOnDestroy(): void {
    if (this.echart) {
      this.echart.clear();
      this.echart.dispose();
    }
    if (this.resizeSub) {

      this.resizeSub.unsubscribe()
    }
  }

}
