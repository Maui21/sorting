describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles an array with 1', function(){
    expect( bubbleSort([2]) ).toEqual( [2] );
  });
  it('handles an array with many', function(){
    expect( bubbleSort([7,4,6,8]) ).toEqual( [4,6,7,8] );
  });
  it('handles an array with dups', function(){
    expect( bubbleSort([4,7,6,8,3,4,6,10]) ).toEqual( [3,4,4,6,6,7,8,10] );
  });
});
