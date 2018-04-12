import Ember from 'ember';

export default Ember.Route.extend({
    model(params){
        return this.store.findRecord('blog',params.blog_id);
    },
    actions:{
        deleteBlog(blog){
            blog.destroyRecord().then(
                ()=>{this.transitionTo('blogs');}
            )
        }
    }
});
