document.addEventListener('DOMContentLoaded', () => {
  var data = document.getElementById('shopify-app-init').dataset;
  var AppBridge = window['app-bridge'];
  var createApp = AppBridge.default;
  window.app = createApp({
    apiKey: data.apiKey,
    host: data.host,
  });

  console.log("This is a test: ",data);
  var actions = AppBridge.actions;
  var TitleBar = actions.TitleBar;
  TitleBar.create(app, {
    title: data.page,
  });
});
