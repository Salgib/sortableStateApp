import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'section',
  classNames: ['grid'],

  actions: {
    toggleCompare: function(product, comparison) {
      comparison.pushObject(product);
    }
  }
});
