import Component from 'svelte-tag';

import './app.css'
import App from './App.svelte'
import './i18n.js';

// const app = new App({
//   target: document.getElementById('app'),
// })
// export default app

new Component({component: App, tagname: 'product-menu'});