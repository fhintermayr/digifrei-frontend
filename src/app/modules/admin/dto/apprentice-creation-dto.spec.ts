import { ApprenticeCreationDto } from './apprentice-creation-dto';

describe('ApprenticeCreationDto', () => {
  it('should create an instance', () => {
    expect(new ApprenticeCreationDto(
      "Alainna",
      "Kriss",
      "elizabeth_gottq0oi@critical.ev",
      "J6gk1u4sewUcD",
      0,
      0
    )).toBeTruthy();
  });
});
