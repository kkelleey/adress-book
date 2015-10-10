import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    delete: function(contact) {
      contact.deleteRecord();
      contact.save();
      this.transitionTo('contacts');
    },
  },
});
