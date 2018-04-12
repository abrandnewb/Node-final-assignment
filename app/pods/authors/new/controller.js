import Ember from 'ember';

export default Ember.Controller.extend({
    actions:{
        addAuthor(){
            if(this.get('firstName')!==undefined || this.get('lastName')!==undefined){
                let newAuthor = this.store.createRecord('author',{
                firstName:this.get('firstName'),
                lastName: this.get('lastName'),
                dateCreated: new Date(),
                bio:this.get('bio')
            });
            newAuthor.save().then(
                ()=>{
                    this.set('firstName','');
                    this.set('lastName','');
                    this.set('bio','');
                    this.transitionToRoute('authors');
                },
                ()=>{newAuthor.deleteRecord();}
            )
        }}
    }
});

