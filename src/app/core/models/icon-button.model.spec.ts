import { IconButtonModel } from './icon-button.model';

describe('IconButtonModel', () => {
  it('should create an instance', () => {
    expect(new IconButtonModel("Free Cookies", "/free-cookies", "<p>Free Cookies<p/>")).toBeTruthy();
  });
});
