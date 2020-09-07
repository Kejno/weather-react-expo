import moment from 'moment';

const API_KEY = 'f4d61446de61165f65bca27cc37b0b1b';

const weatherMapCommonUrl = 'http://api.openweathermap.org/data/2.5';

export const weatherUrl = `${weatherMapCommonUrl}/weather?APPID=${API_KEY}`;

export const dateTemplate = `${moment().format('DD.MM.YY HH:mm')}`
