import { requestAsBrowser } from '@crawlers/utils';

// Get the HTML of a web page
const { body } = await requestAsBrowser({ url: 'https://www.example.com' });
console.log(body);