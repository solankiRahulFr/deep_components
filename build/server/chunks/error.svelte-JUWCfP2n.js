import { c as create_ssr_component, a as subscribe, f as escape } from './ssr-QcpZni2m.js';
import { p as page } from './stores-ICJBnHX0.js';
import './exports-mq_1S73-.js';

const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<h1>${escape($page.status)}</h1> <p>${escape($page.error?.message)}</p>`;
});

export { Error as default };
//# sourceMappingURL=error.svelte-JUWCfP2n.js.map
