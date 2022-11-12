import { HttpService } from './http.service';

import { IGeolocation } from '@interfaces/geolocation';

const SECRET = import.meta.env['VITE_GEOLOCATION_KEY'];
const BASE_ENDPOINT = `https://api.ipbase.com/json/?apikey=${SECRET}`;

class GeolocationService extends HttpService {
  findLocation() {
    this.configRequest(BASE_ENDPOINT);

    return this.get<IGeolocation>();
  }
}

export default new GeolocationService();
