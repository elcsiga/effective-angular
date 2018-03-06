import { IsPrimPipe } from './is-prim.pipe';

describe('IsPrimPipe', () => {
  it('create an instance', () => {
    const pipe = new IsPrimPipe();
    expect(pipe).toBeTruthy();
  });
});
