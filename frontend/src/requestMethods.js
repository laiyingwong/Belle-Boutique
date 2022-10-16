import axios from 'axios';

const BASE_URL = 'http://localhost:5050/api/';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzM2YzNmFlMmFlZThmNjhkYTQ2ZGVhYiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NjU3ODQyOTksImV4cCI6MTY2NjA0MzQ5OX0.W6UE3yDzxlAu-0wuGXIapIB7aUnB3UOMCU0mhXpiLQo';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});

export const stripeRequest = axios.create({
  baseURL: BASE_URL,
  header: {
    Authorization: `Bearer ${process.env.REACT_APP_STRIPE_SECRET}`,
  },
});
