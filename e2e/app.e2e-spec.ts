import { WebresumePage } from './app.po';

describe('webresume App', function() {
  let page: WebresumePage;

  beforeEach(() => {
    page = new WebresumePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
