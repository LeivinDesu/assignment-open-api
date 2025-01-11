import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class WeatherService {
    private readonly apiUrl = 'https://api.openweathermap.org/data/2.5/weather'; 
  private readonly apiKey = '365ebbffe61154a57756bbe43b6771ca';


  async getWeather(city: string): Promise<any> {
    try {
      const response = await axios.get(this.apiUrl, {
        params: {
          q: city,
          appid: this.apiKey,
          units: 'metric',
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Error fetching weather data');
    }
  }
}
