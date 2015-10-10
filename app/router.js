import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('contacts', { path: '/' }, function() {
    this.route('contact', { path: '/:contact_id' }, function() {});
    this.route('new', { path: '/new' }, function() {});
  });
});

export default Router;
