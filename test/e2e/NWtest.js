const config = require('../../nightwatch.conf.js');

module.exports = {
  'OCD-b login page': function(browser) {
    browser
      .url('http://localhost:4000/')
      .assert.urlEquals('http://localhost:4000/')
      .waitForElementVisible('body')
      .assert.title('OCD-B | Your ultimate code review database')
      .assert.elementPresent('#login_username')
      .assert.elementPresent('#login_password')
      .assert.elementPresent('#login_btn')
      .assert.elementPresent('.register_link')
      .end();
  }
};
