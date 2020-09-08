import moment from 'moment';

import { API_KEY } from '@env'

const weatherMapCommonUrl = 'http://api.openweathermap.org/data/2.5';

export const weatherUrl = `${weatherMapCommonUrl}/weather?APPID=${API_KEY}`;

export const dateTemplate = `${moment().format('DD.MM.YY HH:mm')}`;

export const fieldItems = ['Температура', 'Влажность', 'Ширина', 'Долгота'];
