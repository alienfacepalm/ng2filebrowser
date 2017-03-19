import { FileTreePage } from './app.po';

describe('file-tree App', function() {
  let page: FileTreePage;

  beforeEach(() => {
    page = new FileTreePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
