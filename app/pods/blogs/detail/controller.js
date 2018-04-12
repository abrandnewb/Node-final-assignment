import Ember from 'ember';

export default Ember.Controller.extend({
    actions:{
        addComment(blog){
            //add comment to a blog
            if(this.get('commentBody')!=='' && this.get('commentBody')!==undefined){
                let newComment = this.store.createRecord('comment',{
                    date:new Date(),
                    body:this.get('commentBody')
                });
                blog.get('comment').pushObject(newComment);
                newComment.save().then(
                    ()=>{
                        this.set('commentBody','');
                    },
                    ()=>{newComment.deleteRecord();}
                )
            }
        }
    }
});
