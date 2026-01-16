import { validateEmail } from './emailValidator';

describe('Email Validator - IPL Social', () => {
  test('devrait rejeter un email sans @', () => {
    expect(validateEmail('testexample.com')).toBe(false);
  });
  
  test('devrait rejeter un email avec plusieurs @', () => {
    expect(validateEmail('test@@example.com')).toBe(false);
  });
  
});