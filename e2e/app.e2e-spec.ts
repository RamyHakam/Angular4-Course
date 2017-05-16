import { Angular4CoursePage } from './app.po';

describe('angular4-course App', () => {
  let page: Angular4CoursePage;

  beforeEach(() => {
    page = new Angular4CoursePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
