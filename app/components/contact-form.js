import Ember from 'ember';

export default Ember.Component.extend({
  contact: null,
  actions: {
    save: function() {
      this.get('contact').save().then(contact => {
        this.sendAction('close', contact);
      });
    }
  }
});
