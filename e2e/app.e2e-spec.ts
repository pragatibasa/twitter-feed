import { TwitterFeedPage } from './app.po';

describe('twitter-feed App', () => {
  let page: TwitterFeedPage;

  beforeEach(() => {
    page = new TwitterFeedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
