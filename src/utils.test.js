// src/utils.test.js
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

// Test for getFullYear
test('getFullYear should return the current year', () => {
  const currentYear = new Date().getFullYear();
  expect(getFullYear()).toBe(currentYear);
});

// Test for getFooterCopy with true argument
test('getFooterCopy should return "Holberton School" when argument is true', () => {
  expect(getFooterCopy(true)).toBe('Holberton School');
});

// Test for getFooterCopy with false argument
test('getFooterCopy should return "Holberton School main dashboard" when argument is false', () => {
  expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

// Test for getLatestNotification
test('getLatestNotification should return the correct string', () => {
  const expectedNotification = '<strong>Urgent requirement</strong> - complete by EOD';
  expect(getLatestNotification()).toBe(expectedNotification);
});
