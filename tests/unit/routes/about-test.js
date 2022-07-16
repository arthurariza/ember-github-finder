import { module, test } from 'qunit';
import { setupTest } from 'github-finder/tests/helpers';

module('Unit | Route | about', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:about');
    assert.ok(route);
  });
});