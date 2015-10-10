import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('contact');
  },
  actions: {
    redirectToContact: function(contact) {
      this.transitionTo('contacts.contact', contact);
    },
  },
});
