const StackMin = require('./stackMin.prac.5.js');
let s = new StackMin();
describe('CH 3.2 - StackMin', () => {
  it('correctly accepts elements into the stack and returns the correct minimum', () => {
    s.push(9);
    s.push(8);
    s.push(1);
    s.push(2);
    s.push(1);
    s.push(9);
    expect(s.min()).toEqual(1);
  });

  it('correctly shows the next element, and the minimum if their values are different', () => {

    s = new StackMin();
    s.push(9);
    s.push(8);
    s.push(1);
    s.push(2);
    s.push(1);
    s.push(9);
    s.pop();
    s.pop();
    expect(s.peek()).toEqual(2);
    expect(s.min()).toEqual(1);
  });

  it('correctly displays a minimum even if you inserted duplicate minimums and popped them out', () => {

    s = new StackMin();
    s.push(9);
    s.push(8);
    s.push(1);
    s.push(2);
    s.push(1);
    s.push(9);
    s.pop();
    s.pop();

    s.pop();
    s.pop();
    expect(s.peek()).toEqual(8);
    expect(s.min()).toEqual(8);
  });

  it('correctly returns true when the `isEmpty()` method is used, and undefined when empty', () => {

    s = new StackMin();
    s.push(9);
    s.push(8);
    s.push(1);
    s.push(2);
    s.push(1);
    s.push(9);
    s.pop();
    s.pop();
    s.pop();
    s.pop();
    s.pop();
    s.pop();
    // expect(s.isEmpty()).toBe(true);
    expect(s.min()).toBeNull();
  });
});