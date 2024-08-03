import { createApp } from 'app/app';

(() => {
  const root = document.querySelector('#app');
  const app = createApp();

  if (root) root.append(app);
})();
