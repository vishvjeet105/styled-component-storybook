import '@storybook/addon-console';
import { setConsoleOptions } from '@storybook/addon-console';

setConsoleOptions({
  panelExclude: [],
});
import { configure } from '@storybook/react';

const req = require.context('../src/components', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}
configure(loadStories, module);
