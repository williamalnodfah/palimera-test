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
  selector: 'app-linked-kpi',
  templateUrl: './linked-kpi.component.html',
  styleUrls: ['./linked-kpi.component.scss']
})
export class LinkedKpiComponent implements OnInit {
  chartOptions: any = {
    chart: {
      backgroundColor: '#FAFEFF',
    },
    title: {
      text: ''
    },

    subtitle: {
      text: ''
    },

    yAxis: {
      title: {
        text: ''
      }
    },

    xAxis: {
      accessibility: {
        rangeDescription: ''
      }
    },

    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 2012
      }
    },

    series: [{
      name: 'KPI',
      data: [10, 22, 31, 38, 44, 56, 79, 85]
    }],

    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }

  }


  chartOptions2: any = {

    chart: {
      polar: true
    },

    title: {
      text: ''
    },

    subtitle: {
      text: ''
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
      data: [8, 7, 6, 5, 4, 3, 2, 1],
      pointPlacement: 'between'
    }, {
      type: 'line',
      name: 'Line',
      data: [1, 2, 3, 4, 5, 6, 7, 8]
    }, {
      type: 'area',
      name: 'Area',
      data: [1, 8, 2, 7, 3, 6, 4, 5]
    }]
  };
  constructor() { }

  ngOnInit(): void {

    Highcharts.chart('KPI', this.chartOptions);
    Highcharts.chart('radar2', this.chartOptions2);
  }



}
