import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['compare-basket'],
  classNameBindings: ['isActive:compare-basket--active', 'isFull:compare-basket--full'],

  isActive: function() {
    return this.get('comparison.length') > 0;
  }.property('comparison.@each'),

  isFull: function() {
    return this.get('comparison.length') >= 3;
  }.property('comparison.@each')
});
