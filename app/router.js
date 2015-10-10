import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('contacts', { path: '/' }, function() {
    this.route('contact', { path: '/:contact_id' }, function() {});
    this.route('new', { path: '/new' }, function() {});
    this.route('edit', { path: '/:contact_id/edit' }, function() {});
  });
});

export default Router;
