define(function (require) {
  var registerSuite = require('intern!object');
  var assert = require('intern/chai!assert');

  registerSuite({
    name: 'index',

    'greeting form': function () {
      return this.remote
        .get(require.toUrl('http://www.chegg.com'))
        .setFindTimeout(7000)
        .findByCssSelector('body.loaded')
        .end()
        .findById('#autosuggest-input')
        .click()
        .type('Selenium')
        .end()
        .findByCssSelector('a.autosuggest-search-btn')
        .click()
        .end()
        .findById('greeting')
        .getVisibleText()
        .then(function (text) {
          assert.strictEqual(text, 'Hello, Elaine!',
          'Greeting should be displayed when the form is submitted');
        });
    }
  });
});
