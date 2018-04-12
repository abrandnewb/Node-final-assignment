import { test } from 'qunit';
import moduleForAcceptance from 'ember-node-mission/tests/helpers/module-for-acceptance';
import authorPage from '../pages/authors';


moduleForAcceptance('Acceptance | authors',{
  beforeEach(){
    server.createList('author',1);
  }
});

test('visiting /authors', function(assert){
    assert.expect(2);
    authorPage.visitAuthors();
    andThen(function(){
      assert.equal(currentURL(),'/authors','visiting /authors is working');
      assert.equal(authorPage.authorsCol().count,1,'the total author list must be 1');
    });
  });

test('clicking authors photo redirect to authors/id',function(assert){
  authorPage.visitAuthors();
  authorPage.authorPhoto();
  andThen(function(){    
    //how do i get the author 'id' so that it won't be hardcoded in the assertion - /authors/1
    //in beforeeach() i only created one author b/c if morethan one the following line works sometimes when it matches id==1
    assert.equal(currentURL(),'/authors/1','redirected to /authors/id, any id');
  });
});

test('deleting author',function(assert){
    authorPage.visitAuthors();
    authorPage.deleteAuthorBtn();
    andThen(function(){
      assert.equal(authorPage.authorsCol().count,0,'authors list decresed by 1');
    });
  });

test('"Add Author" button redirect to /authors/new',function(assert){
    authorPage.visitAuthors();
    authorPage.addAuthorBtn();
    andThen(function(){
        assert.equal(currentURL(),'/authors/new','redirected to /authors/new');      
    });
  });
  
test('adding new user',function(assert){
    authorPage.visitAuthorsNew();
    authorPage.firstName('Biniyam A.');
    authorPage.lastName('Haile');
    authorPage.saveAuthorBtn();
    andThen(function(){
      assert.equal(currentURL(),'/authors','after saving should redirect to /authors');
      assert.equal(authorPage.authorsCol().count,2,'the total list must increment by 1');
      assert.equal(authorPage.authorsCol(0).fullName,'Biniyam A. Haile','correctly accepted fields');
    });
  }); 

 