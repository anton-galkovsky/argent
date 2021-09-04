import {Component, AfterViewInit, ElementRef, ViewChild} from '@angular/core';
import {Network} from 'vis-network';
import {DataSet} from 'vis-data';

@Component({
  selector: 'ag-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
  @ViewChild('network', {static: false}) el!: ElementRef;
  private networkInstance: any;

  ngAfterViewInit() {
    const container = this.el.nativeElement;
    const nodes = new DataSet<any>([
      {id: 1, label: 'Node 1'},
      {id: 2, label: 'Node 2'},
      {id: 3, label: 'Node 3'},
      {id: 4, label: 'Node 4'},
      {id: 5, label: 'Node 5'}
    ]);
    let options = {
      height: '99%'
    }
    const edges = new DataSet<any>([
      {from: 1, to: 3},
      {from: 1, to: 2},
      {from: 2, to: 4},
      {from: 2, to: 5}
    ]);
    const data = {nodes, edges};

    this.networkInstance = new Network(container, data, options);
  }
}
