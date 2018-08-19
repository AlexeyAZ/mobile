import Highcharts from 'highcharts';

const walletChart = () => {
  if (document.querySelector('.js-wallet-chart')) {
    Highcharts.chart(document.querySelector('.js-wallet-chart'), {
      chart: {
        backgroundColor: 'transparent',
        margin: [10, 0, 0, 0],
        spacing: [0, 0, 0, 0],
        height: 70
      },
      tooltip: {
        backgroundColor: null,
        borderWidth: 0,
        shadow: false,
        useHTML: true,
        style: {
          padding: 0
        },
        headerFormat: '',
        pointFormat: '<span>${point.y}</span>'
      },
      title: {
        text: null
      },
      xAxis: {
        type: 'datetime'
      },
      yAxis: {
        visible: false,
        title: {
          text: null
        }
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        area: {
          fillColor: '#0B1B37',
          marker: {
            radius: 2,
            fillColor: '#99CEFF',
            lineColor: 'rgba(153, 206, 255, 0.3)',
            lineWidth: 6
          },
          lineWidth: 2,
          states: {
            hover: {
              lineWidth: 2
            }
          }
        }
      },

      series: [{
        type: 'area',
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        color: {
          linearGradient: [0, 0, 0, 50],
          stops: [
            [0, '#13D48C'],
            [1, '#2889B8']
          ]
        }
      }]
    });
  }
};

export default walletChart;
