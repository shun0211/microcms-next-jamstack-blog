import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'hirocho',
  apiKey: process.env.API_KEY,
});
