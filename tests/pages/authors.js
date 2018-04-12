import {
  create,
  visitable,
  clickable,
  collection,
  fillable,
  text
} from 'ember-cli-page-object';

export default create({
  visitAuthors: visitable('/authors'),
  visitAuthorsNew: visitable('/authors/new'),
  addAuthorBtn: clickable('[data-test-add-author]'),
  deleteAuthorBtn: clickable('[data-test-delete-author]'),
  authorPhoto:clickable('[data-test-author-photo]'),
  firstName: fillable('[data-test-first-name]'),
  lastName: fillable('[data-test-last-name]'),
  saveAuthorBtn: clickable('[data-test-save-author]'),
  authorsCol: collection({
    itemScope: '[data-test-author-id]',
    item:{
        fullName:text('[data-test-author-full-name]')
    }
  })
});
