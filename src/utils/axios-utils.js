import axios from 'axios';


const headers = {
    'X-User-Agent': 'desktop',
    'X-Proxy-Location': 'US',
    'X-RapidAPI-Key': '64ce583f6cmshce4b855f123415cp13a2e0jsn8a9ae68c203b',
    'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
  }
const client = axios.create( {
    baseURL: 'https://google-search3.p.rapidapi.com/api/v1/',
    headers: headers
} )

export const request = ( {...options} ) => {
    console.log('request masuk di utils');

    return client(options)
}

