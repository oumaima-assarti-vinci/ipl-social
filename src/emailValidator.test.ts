import { validateEmail } from './emailValidator';

describe('Email Validator - IPL Social', () => {
  test('devrait rejeter un email sans @', () => {
    expect(validateEmail('testexample.com')).toBe(false);
  });
  
  test('devrait rejeter un email avec plusieurs @', () => {
    expect(validateEmail('test@@example.com')).toBe(false);
  });

   test('devrait accepter un email avec un seul @', () => {
    expect(validateEmail('test@example.com')).toBe(true);
  });

  test('devrait rejeter un email sans point dans le domaine', () => {
    expect(validateEmail('test@example')).toBe(false);
  });

});