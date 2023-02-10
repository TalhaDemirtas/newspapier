import axios from 'axios';

export default class BaseService {

  instance = null;

  constructor(config) {
    this.instance = axios.create(config);
  }

  get(url, config) {
    return this.instance.get(url, config);
  }
}
