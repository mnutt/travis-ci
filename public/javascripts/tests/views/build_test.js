describe('Views: the build tab', function() {
  beforeEach(function() {
    this.repository = INIT_DATA.repositories[1];
    this.repository_path = this.repository.user.login + '/' + this.repository.name;

    goTo('#!/josevalim/enginex/builds/' + this.repository.last_build.id);
    waitsFor(buildTabActive(this.repository_path, 'build'), 'the "' + this.repository_path + '" tab to become active');
  });

  it('shows build details', function() {
    expectText('#main h3', this.repository_path);
    expectTexts('#tab_build.active', {
      'h5': 'Build #1',
      '.commit-hash': '565294c',
      '.commit-message': 'Update Capybara',
      '.duration': '20 sec',
      '.log': 'enginex build 1 log ...'
    });
  });
});
