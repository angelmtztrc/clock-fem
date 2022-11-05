import axios from 'axios';

export class HttpService {
  constructor(
    private path = '',
    private headers: Record<string, string> = {
      'Content-Type': 'application/json'
    }
  ) {}

  protected configRequest(path: string, headers?: Record<string, string>) {
    this.path = path;
    if (headers) this.headers = headers;
  }

  protected async get<R>(): Promise<R> {
    return axios
      .get(this.path, { headers: this.headers })
      .then(res => res.data)
      .catch(e => console.log(e)); // TODO: add a middleware for errors
  }
}
