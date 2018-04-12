import {
  create,
  visitable,
  clickable,
  collection,
  fillable,
  text
} from 'ember-cli-page-object';

export default create({
  visitBlogs: visitable('/blogs'),
  visitBlogsNew: visitable('/blogs/new'),
    readMoreBtn:clickable('[data-test-read-more]'),
    newTitle:fillable('[data-test-new-blog-title]'),
    newBody:fillable('[data-test-new-blog-body]'),
    addBlogBtn:clickable('[data-test-save-blog]'),

    newCommentBody:fillable('[data-test-new-comment-body]'),
    addCommentBtn: clickable('[data-test-save-comment]'),

    blogsCol: collection({
      itemScope: '[data-test-blog-id]',
      item:{
          title:text('[data-test-blog-title] > .title')
      }
    }),

    commentCol: collection({
      itemScope: '[data-test-comment-id]',
      item:{
        commentBody:text('[data-test-comment-body]')
      }
    })
});
