import 'babel-polyfill';

import svg4everybody from 'svg4everybody';
import switchPagesMenu from './switchPagesMenu';

const app = {
  load: () => {
    app.bindEvents();
  },

  bindEvents: () => {
    svg4everybody();
    switchPagesMenu();
  }
};

window.addEventListener('load', app.load);
