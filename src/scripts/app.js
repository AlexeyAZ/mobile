import 'babel-polyfill';

import svg4everybody from 'svg4everybody';
import switchPagesMenu from './switchPagesMenu';
import walletChart from './walletChart';

const app = {
  load: () => {
    app.bindEvents();
  },

  bindEvents: () => {
    svg4everybody();
    switchPagesMenu();
    walletChart();
  }
};

window.addEventListener('load', app.load);
