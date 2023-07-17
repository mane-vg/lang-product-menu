import { addMessages, register, init, getLocaleFromNavigator } from 'svelte-i18n';

// register('de', () => import('./lib/i18n/de.json'));
// register('en', () => import('./lib/i18n/en.json'));
// register('fr', () => import('./lib/i18n/fr.json'));
// register('es', () => import('./lib/i18n/es.json'));
// register('it', () => import('./lib/i18n/it.json'));

import de from './lib/i18n/de.json';
import en from './lib/i18n/en.json';
import fr from './lib/i18n/fr.json';
import es from './lib/i18n/es.json';
import it from './lib/i18n/it.json';
import pt from './lib/i18n/pt.json';

addMessages('de', de);
addMessages('en', en);
addMessages('fr', fr);
addMessages('es', es);
addMessages('it', it);
addMessages('pt', pt);

let initialLocale = document.getElementsByTagName('html')[0].getAttribute('lang');

init({
    fallbackLocale: 'en',
    initialLocale: initialLocale,
});