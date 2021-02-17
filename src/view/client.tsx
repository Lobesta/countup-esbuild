import React from 'react';
import { hydrate } from 'react-dom';
import CountUp from './countup';

hydrate(<CountUp />, document.querySelector('#react-app-target'));
