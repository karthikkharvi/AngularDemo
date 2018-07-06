import { Angular2ProjectPage } from './app.po';

describe('angular2-project App', () => {
  let page: Angular2ProjectPage;

  beforeEach(() => {
    page = new Angular2ProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
