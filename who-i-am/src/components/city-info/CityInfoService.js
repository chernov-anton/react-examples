import axios from 'axios';
import {CITY_API} from 'const';

class CityInfoService {
  async get() {
    const response = await axios.get(CITY_API.URL);

    return response.data;
  }
}

export default new CityInfoService()