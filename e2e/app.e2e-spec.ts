import { MickymotsPage } from './app.po';

describe('mickymots App', function() {
  let page: MickymotsPage;

  beforeEach(() => {
    page = new MickymotsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
