import { module, test } from 'qunit';
import { setupRenderingTest } from 'github-finder/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | user-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.setProperties({
      users: [
        {
          login: 'mojombo',
          id: 1,
          avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
          html_url: 'https://github.com/mojombo',
        },
        {
          login: 'defunkt',
          id: 2,
          avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4',
          html_url: 'https://github.com/defunkt',
        },
      ],
    });

    await render(hbs`<UserList @users={{this.users}}/>`);

    assert.dom('[data-test-users-list]').exists();
    assert.dom('[data-test-users-list-item]').exists({ count: 2 });

    assert
      .dom('[data-test-users-list-item="mojombo"] img')
      .hasAttribute('src', 'https://avatars.githubusercontent.com/u/1?v=4')
      .hasAttribute('width', '50')
      .hasAttribute('height', '50');

    assert.dom('[data-test-users-list-item="mojombo"] p').hasText('mojombo');

    assert
      .dom('[data-test-users-list-item="mojombo"] a')
      .hasText('Profile')
      .hasAttribute('href', 'https://github.com/mojombo')
      .hasAttribute('target', '_blank')
      .hasAttribute('rel', 'noopener noreferrer');

    assert
      .dom('[data-test-users-list-item="defunkt"] img')
      .hasAttribute('src', 'https://avatars.githubusercontent.com/u/2?v=4')
      .hasAttribute('width', '50')
      .hasAttribute('height', '50');

    assert.dom('[data-test-users-list-item="defunkt"] p').hasText('defunkt');

    assert
      .dom('[data-test-users-list-item="defunkt"] a')
      .hasText('Profile')
      .hasAttribute('href', 'https://github.com/defunkt')
      .hasAttribute('target', '_blank')
      .hasAttribute('rel', 'noopener noreferrer');
  });
});
