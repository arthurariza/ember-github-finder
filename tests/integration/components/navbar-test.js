import { module, test } from 'qunit';
import { setupRenderingTest } from 'github-finder/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | navbar', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders with Title and Links', async function (assert) {
    await render(hbs`<Navbar />`);

    assert.dom('[data-test-navbar]').exists();
    assert.dom('[data-test-navbar-tittle]').hasText('Github Finder');
    assert.dom('[data-test-navbar-links-list]').exists({ count: 3 });

    assert.dom('[data-test-link="index"]').hasText('Home');
    assert.dom('[data-test-link="about"]').hasText('About');
    assert.dom('[data-test-link="users"]').hasText('Users');
  });
});
