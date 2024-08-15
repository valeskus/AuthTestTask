import axios from 'axios';

export const client = axios.create({});

export function init() {
  client.defaults.baseURL = "http://demo0885207.mockable.io";
};
