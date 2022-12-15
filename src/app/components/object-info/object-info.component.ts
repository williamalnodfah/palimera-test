import { Component, OnInit } from '@angular/core';


import * as Highcharts from 'highcharts';

declare var require: any;
const More = require('highcharts/highcharts-more');
More(Highcharts);

const Exporting = require('highcharts/modules/exporting');
Exporting(Highcharts);

const ExportData = require('highcharts/modules/export-data');
ExportData(Highcharts);

const Accessibility = require('highcharts/modules/accessibility');
Accessibility(Highcharts);
@Component({
  selector: 'app-object-info',
  templateUrl: './object-info.component.html',
  styleUrls: ['./object-info.component.scss']
})
export class ObjectInfoComponent implements OnInit {
  highcharts = Highcharts;
  chartOptions:any = {

    chart: {
      polar: true
    },

    title: {
      text: 'Polar Chart'
    },

    subtitle: {
      text: 'Also known as Radar Chart'
    },

    pane: {
      startAngle: 0,
      endAngle: 360
    },

    xAxis: {
      tickInterval: 45,
      min: 0,
      max: 360,
      labels: {
        format: '{value}°'
      }
    },

    yAxis: {
      min: 0
    },

    plotOptions: {
      series: {
        pointStart: 0,
        pointInterval: 45
      },
      column: {
        pointPadding: 0,
        groupPadding: 0
      }
    },

    series: [{
      type: 'column',
      name: 'Column',
      data: [11, 8, 10, 7, 6, 5, 4, 3, 2, 1],
      pointPlacement: 'between'
    }, {
      type: 'line',
      name: 'Line',
      data: [1, 2, 3, 4, 5, 6, 7, 8, 10]
    }, {
      type: 'area',
      name: 'Area',
      data: [1, 6, 2, 7, 3, 8, 4, 5, 9]
    }]

  };
  constructor() { }

  ngOnInit(): void {

    Highcharts.chart('container', this.chartOptions);

  }

}
