import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import HC_stock from 'highcharts/modules/stock';
import { PriceDataService } from '../services/price-data.service';

@Component({
  selector: 'app-stock-chart-stream',
  templateUrl: './stock-chart-stream.component.html',
  styles: [
  ]
})
export class StockChartStreamComponent implements OnInit {
  data: any;
  priceData: Array<any[]> = [];
  constructor(private priceDataService: PriceDataService) { }

  ngOnInit(): void {
    this.data = this.priceDataService.readData();
    for (var i = this.data.length - 1; i > 0; i--) {
      let date = Date.parse(this.data[i]['date']);
      let open = this.data[i]['open'];
      let high = this.data[i]['high'];
      let low = this.data[i]['low'];
      let close = this.data[i]['close'];
      this.priceData.push([date, open, high, low, close]);
      // console.log(date);
    }
    console.log(this.priceData);

  }


  Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    rangeSelector: {
      selected: 0
    },

    title: {
      text: "AAPL Stock Price"
    },

    legend: {
      enabled: true
    },

    plotOptions: {
      series: {
        showInLegend: true
      }
    },

    series: [
      {
        type: "candlestick",
        id: "aapl",
        name: "AAPL Stock Price",
        data: this.priceData
      },
    ]
  };


}
