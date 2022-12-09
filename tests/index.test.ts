import { merge } from '../src/test';

describe('testing index file', () => {
  test('empty collections should result in empty collections', () => {
    expect(merge([],[])).toStrictEqual([]);
  });
  test('random sorted lists',() => {
    expect(merge([1,3,9],[2,4,5,6,8,10])).toStrictEqual([1,2,3,4,5,6,8,9,10]);
  });
});