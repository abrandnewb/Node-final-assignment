import DS from "ember-data";
import Ember from 'ember';

export default DS.Model.extend({
    title: DS.attr('string'),
    body: DS.attr('string'),
    date: DS.attr('date'),
    dateFormated:Ember.computed('date',function(){
        let month = this.get('date').getMonth()+1;//month starts from 0
        month = month<10?'0'+month:month;
        let dd = this.get('date').getDate();
        dd = dd<10?'0'+dd:dd;
            return `${dd}-${month}-${this.get('date').getFullYear()}`;
    }),

    author: DS.belongsTo('author'),
    comment: DS.hasMany('comment')
});