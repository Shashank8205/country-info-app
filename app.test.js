const { getCurrency, getLanguages } = require('./app');

test('getCurrency returns currency name and symbol', () => {
  const input = { INR: { name: 'Indian rupee', symbol: '₹' } };
  expect(getCurrency(input)).toBe('Indian rupee (₹)');
});

test('getCurrency returns N/A when undefined', () => {
  expect(getCurrency(undefined)).toBe('N/A');
});

test('getLanguages returns language list', () => {
  const input = { hin: 'Hindi', eng: 'English' };
  const result = getLanguages(input);
  expect(result).toContain('Hindi');
  expect(result).toContain('English');
});

test('getLanguages returns N/A when undefined', () => {
  expect(getLanguages(undefined)).toBe('N/A');
});
