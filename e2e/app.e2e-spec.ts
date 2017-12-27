import { ZienForumPage } from './app.po';

describe('zien-forum App', () => {
  let page: ZienForumPage;

  beforeEach(() => {
    page = new ZienForumPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
