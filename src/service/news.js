import BaseService from './base';

export default class NewsService extends BaseService {
  _page = 1;
  _pageSize = 10;
  
  get page() {
    return this._page || 1;
  }
  set page(value) {
    if (value < 1) {
      throw new Error('Page number cannot be less than 1');
    }

    this._page = value;
  }

  get pageSize() {
    return this._pageSize || 10;
  }
  set pageSize(value) {
    if (value < 1) {
      throw new Error('Page size cannot be less than 1');
    }

    if (value >= 100) {
      throw new Error('Page size cannot be greater than 100');
    }

    this._pageSize = value;
  }

  constructor(page = 1, pageSize = 10) {
    super({
      baseURL: 'https://newsapi.org/v2/',
      params: {
        apiKey: import.meta.env.VITE_apiKey,
        page: page || 1,
        pageSize: pageSize || 10,
      }
    });

    this.page = page || 1;
    this.pageSize = pageSize || 10;
  }

  getTopHeadlines(cat_name) {
    return this.get('/top-headlines', {
      params: {
        country: 'tr',
        category: cat_name,
      }
    });
  }

  getEverything(search_term) {
    return this.get('/everything', {
      params: {
        q: search_term,
      }
    });
  }
}
