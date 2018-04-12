import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
    author: belongsTo('author'),
    comment: hasMany('comment')
});
