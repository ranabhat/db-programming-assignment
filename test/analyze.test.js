const analyze = require('../helpfunctions')

test('from provided text calculate array of[ text length , word count, character count - test1]', () => {
  expect(analyze.analyze('text te')).toEqual([7, 6, 2, [{ e: 2 }, { t: 3 }, { x: 1 }]])
})

test('from provided text calculate array of[ text length , word count, character count -test2]', () => {
  expect(analyze.analyze('text te$298  .')).toEqual([14, 11, 3, [{ e: 2 }, { t: 3 }, { x: 1 }]])
})

test('from provided text calculate array of[ text length , word count, character count -test3]', () => {
  expect(analyze.analyze('hello 2 times  ')).toEqual([15, 11, 3, [{ e: 2 }, { h: 1 }, { i: 1 }, { l: 2 }, { m: 1 }, { o: 1 }, { s: 1 }, { t: 1 }]])
})

test('when empty text provide -test4', () => {
  expect(analyze.analyze('')).toEqual([0, 0, 0, []])
})

test('when capital letters provided -test5', () => {
  expect(analyze.analyze('eHllo')).toEqual([5, 5, 1, [{ e: 1 }, { h: 1 }, { l: 2 }, { o: 1 }]])
})