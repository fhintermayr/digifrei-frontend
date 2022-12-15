import { SafeHtmlPipe } from './safe-html.pipe';
import {DomSanitizer} from "@angular/platform-browser";
import {TestBed} from "@angular/core/testing";

describe('SafeHtmlPipe', () => {

  let sanitizer: DomSanitizer;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ DomSanitizer ]
    });

    sanitizer = TestBed.inject(DomSanitizer);
  });

  it('create an instance', () => {
    const pipe = new SafeHtmlPipe(sanitizer);
    expect(pipe).toBeTruthy();
  });
});
