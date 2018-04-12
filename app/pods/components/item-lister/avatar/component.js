import Ember from 'ember';

 const componentClass = Ember.Component.extend({
});

componentClass.reopenClass({
    positionalParams:['image']
});

export default componentClass;