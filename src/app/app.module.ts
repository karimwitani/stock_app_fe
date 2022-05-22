import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighchartsChartModule } from 'highcharts-angular';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockChartComponent } from './stock-chart/stock-chart.component';
import { StockChartStreamComponent } from './stock-chart-stream/stock-chart-stream.component';

@NgModule({
  declarations: [
    AppComponent,
    StockChartComponent,
    StockChartStreamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
