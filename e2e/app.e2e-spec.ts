import { PluginSkeletonPage } from './app.po';

describe('plugin-skeleton App', () => {
  let page: PluginSkeletonPage;

  beforeEach(() => {
    page = new PluginSkeletonPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
