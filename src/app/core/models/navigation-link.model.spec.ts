import { NavigationLinkModel } from './navigation-link.model';

describe('NavigationLinkModel', () => {
  it('should create an instance', () => {
    expect(new NavigationLinkModel("Free Cookies", "/free-cookies")).toBeTruthy();
  });
});
