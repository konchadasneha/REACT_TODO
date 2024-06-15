import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import axios from 'axios'
const data = [{
  title: '测试的将军金甲夜不脱',
  id: 1,
  complete: 0
}, {
  title: 'kadhf的护发素打算减肥h',
  id: 2,
  complete: 1
}, {
  title: '打算减肥会员我也一样',
  id: 3,
  complete: 1
}, {
  title: '我晚点回闪电发货 诶已i',
  id: 4,
  complete: 0
}]
ReactDOM.render(
  <App data={data}/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


