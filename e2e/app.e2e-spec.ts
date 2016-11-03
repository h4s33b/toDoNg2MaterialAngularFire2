import { ToDong2MaterialAngularFire2Page } from './app.po';

describe('to-dong2-material-angular-fire2 App', function() {
  let page: ToDong2MaterialAngularFire2Page;

  beforeEach(() => {
    page = new ToDong2MaterialAngularFire2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
