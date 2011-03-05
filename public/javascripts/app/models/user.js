Travis.Models.User = Backbone.Model.extend({
  initialize: function(attributes) {
    // _.bindAll(this, 'repository', 'isBuilding', 'color', 'duration', 'eta', 'toJSON');
  }
});

Travis.Collections.Users = Backbone.Collection.extend({
  model: Travis.Models.User,
  initialize: function(users, options) {
  },
  comparator: function(user) {
    return user.get('name');
  }
});

