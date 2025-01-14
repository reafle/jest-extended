import * as matcher from './';

expect.extend(matcher);

describe('.toBeOneOf', () => {
  test('passes when value is in given array', () => {
    expect(1).toBeOneOf([1, 2, 3]);
  });

  test('fails when value is not in given array', () => {
    expect(() => expect(4).toBeOneOf([1, 2, 3])).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBeOneOf', () => {
  test('passes when value is not in given array', () => {
    expect(4).not.toBeOneOf([1, 2, 3]);
  });

  test('fails when value is in given array', () => {
    expect(() => expect(1).not.toBeOneOf([1, 2, 3])).toThrowErrorMatchingSnapshot();
  });
});
