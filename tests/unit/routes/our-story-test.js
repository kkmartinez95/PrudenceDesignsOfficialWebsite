import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | ourStory', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:our-story');
    assert.ok(route);
  });
});
