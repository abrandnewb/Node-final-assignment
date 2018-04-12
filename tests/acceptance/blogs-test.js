import { test } from 'qunit';
import moduleForAcceptance from 'ember-node-mission/tests/helpers/module-for-acceptance';
import blogPage from '../pages/blogs';

moduleForAcceptance('Acceptance | blogs',{
  beforeEach(){  
    let author = server.create('author');
    let blogs = server.createList('blog', 1);
    blogs.forEach(blog => {
      blog.update('author', author)
    });
  }
});

test('visiting /blogs', function(assert) {
  blogPage.visitBlogs();

  andThen(function() {
    assert.equal(currentURL(), '/blogs','visits /blogs');
  });
});

test('"read more" button redirect to /blogs/id',function(assert){
  blogPage.visitBlogs();
  blogPage.readMoreBtn();
  andThen(function(){
    //how to replace the hardcoded id --- since the list is random it works sometimes (if id is 1)
      assert.equal(currentURL(),'/blogs/1','redirected to /blogs/id');      
  });
});

test('add new blog',function(assert){
  blogPage.visitBlogsNew();
  blogPage.newTitle('blog title one');
  blogPage.newBody('blog body one');
  blogPage.addBlogBtn();
  andThen(function(){
    assert.equal(currentURL(),'/blogs','redirect to /blogs');
    assert.equal(blogPage.blogsCol().count,2,'after adding a new blog, list count should be 2');
    assert.equal(blogPage.blogsCol(0).title,'blog title one','accepting fields correctly');
  });
});

test('add comment to a blog',function(assert){
  let commentCoount = blogPage.commentCol().count;
  blogPage.visitBlogs();
  blogPage.readMoreBtn();
  blogPage.newCommentBody('this is a new comment.');
  blogPage.addCommentBtn();

  andThen(function(){
    assert.equal(blogPage.commentCol().count,commentCoount+1,'comment added successfully');
    assert.equal(blogPage.commentCol(0).commentBody,'this is a new comment.','comment body added correctly')
  });
});