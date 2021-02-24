// This is the Chart Component
import React, { Component } from 'react';
import { createChart } from 'lightweight-charts';


class Klinechart extends Component {


  render() {
    const chart = createChart(document.getElementById('root'), {
      width: 700,
      height: 400,
      layout: {
        backgroundColor: '#000000',
        textColor: 'rgba(255, 255, 255, 0.9)',
      },
      grid: {
        vertLines: {
          color: 'rgba(197, 203, 206, 0.5)',
        },
        horzLines: {
          color: 'rgba(197, 203, 206, 0.5)',
        },
      },
      rightPriceScale: {
        borderColor: 'rgba(197, 203, 206, 0.8)',
      },
      timeScale: {
        borderColor: 'rgba(197, 203, 206, 0.8)',
      },
    });
    chart.applyOptions({
      watermark: {
        color: 'rgba(255, 144, 0, 0.4)',
        visible: true,
        text: 'Dream Deal Example',
        fontSize: 24,
        horzAlign: 'center',
        vertAlign: 'top',
      },
    });

    const candlestickSeries = chart.addCandlestickSeries({
      upColor: 'rgba(255, 144, 0, 1)',
      downColor: '#000',
      borderDownColor: 'rgba(255, 144, 0, 1)',
      borderUpColor: 'rgba(255, 144, 0, 1)',
      wickDownColor: 'rgba(255, 144, 0, 1)',
      wickUpColor: 'rgba(255, 144, 0, 1)',
    });

    candlestickSeries.setData(this.props.FetchedData);

    return (
      <div>
      </div>
    )
  }
}

export default Klinechart;