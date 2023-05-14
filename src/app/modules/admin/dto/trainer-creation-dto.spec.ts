import { TrainerCreationDto } from './trainer-creation-dto';

describe('TrainerCreationDto', () => {
  it('should create an instance', () => {
    expect(new TrainerCreationDto(
      "Alainna",
      "Kriss",
      "elizabeth_gottq0oi@critical.ev",
      "J6gk1u4sewUcD",
      0
    )).toBeTruthy();
  });
});
