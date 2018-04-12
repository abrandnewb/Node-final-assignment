import Ember from 'ember';

 const componentClass = Ember.Component.extend({
});

componentClass.reopenClass({
    positionalParams:['text']
});

export default componentClass;