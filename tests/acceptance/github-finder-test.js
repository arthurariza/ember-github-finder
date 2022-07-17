import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'github-finder/tests/helpers';

module('Acceptance | github finder', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');

    assert.strictEqual(currentURL(), '/');

    assert.dom('[data-test-navbar]').exists();
    assert.dom('[data-test-navbar-tittle]').hasText('Github Finder');

    assert.dom('h1').hasText('Index');
  });

  test('visiting /about', async function (assert) {
    await visit('/about');

    assert.strictEqual(currentURL(), '/about');

    assert.dom('[data-test-navbar]').exists();
    assert.dom('[data-test-navbar-tittle]').hasText('Github Finder');

    assert.dom('h1').hasText('About');
  });

  test('navigating using the nav-bar', async function (assert) {
    await visit('/');

    assert.dom('[data-test-navbar]').exists();
    assert.dom('[data-test-navbar-tittle]').hasText('Github Finder');
    assert.dom('[data-test-link="index"]').hasText('Home');
    assert.dom('[data-test-link="about"]').hasText('About');

    await click('[data-test-link="about"]');
    assert.strictEqual(currentURL(), '/about');

    await click('[data-test-link="index"]');
    assert.strictEqual(currentURL(), '/');
  });
});
