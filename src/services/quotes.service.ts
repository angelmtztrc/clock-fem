import { HttpService } from './http.service';

import { IQuote } from '@interfaces/quote';

const BASE_ENDPOINT = 'https://api.quotable.io';

class QuotesService extends HttpService {
  async findOne() {
    this.configRequest(`${BASE_ENDPOINT}/random`);

    return this.get<IQuote>();
  }
}

export default new QuotesService();
