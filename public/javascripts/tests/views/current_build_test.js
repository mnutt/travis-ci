describe('Views: the current build tab', function() {
  beforeEach(function() {
    var repository = INIT_DATA.repositories[1];
    var repository_path = repository.user.login + '/' + repository.name;

    goTo('#!/' + repository_path);
    waitsFor(buildTabActive(repository_path, 'current'), 'the "current" tab to become active');
  });

  it('shows repository details', function() {
    expectTexts('#main .repository', {
      'h3': 'josevalim/enginex',
      '.number': '1',
      '.commit-hash': '565294c',
      '.commit-message': 'Update Capybara',
      '.duration': '20 sec',
    });
  });
});
