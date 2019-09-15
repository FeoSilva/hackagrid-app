import Vue from 'vue';

const vue_fb = {};

vue_fb.install = function install(Vue, options) {
  (function(d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = '//connect.facebook.net/en_US/sdk.js';
    fjs.parentNode.insertBefore(js, fjs);
    console.log('setting fb sdk');
  })(document, 'script', 'facebook-jssdk');

  window.fbAsyncInit = function onSDKInit() {
    window.FB.init(options);
    window.FB.AppEvents.logPageView();
    Vue.FB = window.FB;
    window.dispatchEvent(new Event('fb-sdk-ready'));
    vue_fb.sdk = window.FB; // do not forget this line
  };

  Vue.FB = undefined;
};

Vue.use(vue_fb, {
  appId: '267659906914316',
  autoLogAppEvents: true,
  xfbml: true,
  version: 'v2.9',
});

export default ({ app }, inject) => {
  inject('fb', vue_fb);
};
