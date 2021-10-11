import axios from 'axios';

const KEY = 'AIzaSyCZem9tPnWfkMCLU3avskAtHNtY7P4MUlk';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults: 10,
        key: KEY ,
    }
})