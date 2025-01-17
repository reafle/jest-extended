import predicate from './predicate';

describe('toContainValue Predicate', () => {
  const shallow = { hello: 'world', bool: false, nothing: undefined, absent: null, empty: '', zero: 0 };
  const deep = { message: { hello: 'world' } };
  const deepArray = { message: [{ hello: 'world' }] };

  describe('returns true', () => {
    test.each([['world'], [false], [undefined], [null], [''], [0]])(
      'when given object contains primitive value: %s',
      value => {
        expect(predicate(shallow, value)).toBe(true);
      },
    );

    test('when given object contains object value', () => {
      expect(predicate(deep, { hello: 'world' })).toBe(true);
    });

    test('when given object contains array value', () => {
      expect(predicate(deepArray, [{ hello: 'world' }])).toBe(true);
    });
  });

  describe('returns false', () => {
    test.each([['world'], [false], [undefined], [null], [''], [0]])(
      'when given object does not contain primitive value: %s',
      value => {
        expect(predicate({}, value)).toBe(false);
      },
    );

    test('when given object does not contain object value', () => {
      expect(predicate(deep, { foo: 'bar' })).toBe(false);
    });

    test('when given object does not contain array value', () => {
      expect(predicate(deepArray, [{ bar: 'foo' }])).toBe(false);
    });
  });
});
