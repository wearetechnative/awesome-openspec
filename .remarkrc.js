import {createConfig} from 'awesome-lint/config.js';
import alphabeticalOrder from './rules/alphabetical-order.js';
import listItemLength from './rules/list-item-length.js';

const awesomeLintRules = await import('awesome-lint/rules/index.js').then(m => m.default);

const config = createConfig([...awesomeLintRules, alphabeticalOrder, listItemLength]);

export default {plugins: config};
