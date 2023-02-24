import { ClickedOutsideDirective } from './clicked-outside.directive';
import {ElementRef} from "@angular/core";

export class MockElementRef extends ElementRef {}

describe('ClickedOutsideDirective', () => {
  it('should create an instance', () => {
    const directive = new ClickedOutsideDirective(new MockElementRef(""));
    expect(directive).toBeTruthy();
  });
});
