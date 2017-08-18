import React from 'react';
import ReactDOM from 'react-dom';
import Chart from './components/chart';
import rawData from '../data/data.csv';

import {a2c} from '../utils/a2chart';


const data = {
	type:"bar", //bar
	data:a2c(rawData),
	options:{
		responsive: true,
		title: {
			display: true,
			text: "People the are in Charts!"
		},
		hover: {
			mode: 'label'
		},
		tooltips: {
			mode: 'label' //single
		}
	}
};


ReactDOM.render(<Chart width="800" height="300" {...data} />, document.getElementById("react"));
