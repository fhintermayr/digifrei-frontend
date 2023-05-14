import { Department } from './department';

describe('Department', () => {
  it('should create an instance', () => {
    expect(new Department(5, "IT")).toBeTruthy();
  });
});
