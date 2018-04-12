import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return this.store.findAll('blog');
    },
    actions:{
        displayBlog(blogId){
            this.transitionTo('blogs.detail',blogId);
        }
    }
});
