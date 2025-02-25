import EmberRouter from '@ember/routing/router';
import config from 'sean-thomas/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('Home', { path: '/' });
  this.route('About');
  this.route('Services');
  this.route('Contact');
  this.route('Portfolio');
});
