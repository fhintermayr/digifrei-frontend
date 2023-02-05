import { NavigationBarItemModel } from './navigation-bar-item.model';

describe('NavigationBarItemModel', () => {
  it('should create an instance', () => {
    expect(new NavigationBarItemModel("Free Cookies", "/free-cookies")).toBeTruthy();
  });
});
