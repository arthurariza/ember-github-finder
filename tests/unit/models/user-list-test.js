import { module, test } from 'qunit';
import { setupTest } from 'github-finder/tests/helpers';

module('Unit | Model | user list', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('user-list', {});
    assert.ok(model);
  });
});
