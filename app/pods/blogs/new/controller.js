import Ember from 'ember';

export default Ember.Controller.extend({
    actions:{
        addBlog(){
            let newBlog = this.store.createRecord('blog',{
                title:this.get('title'),
                body:this.get('body'),
                date:new Date()
            });
            newBlog.set('author',this.get('model'));
            newBlog.save().then(
                ()=>{
                    this.set('title','');
                    this.set('body','');
                    this.transitionToRoute('blogs');
                },
                ()=>{newBlog.deleteRecord();}
            )
        }
    }
});
