describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect( split([4,7,6,8,3,4,6,10,78]) ).toEqual( [[4,7,6,8] , [3,4,6,10,78]]) 
  });
});
describe('Merge Sort', function(){
  it('handles an empty array', function(){
    expect( mergeSort([]) ).toEqual( [] );
  });
  it('handles an array with 1', function(){
    expect( mergeSort([2]) ).toEqual( [2] );
  });
  it('handles an array with many', function(){
    expect( mergeSort([7,4,6,8]) ).toEqual( [4,6,7,8] );
  });
  it('handles an array with dups', function(){
    expect( mergeSort([7,4,8,6,3,4,6,10]) ).toEqual( [3,4,4,6,6,7,8,10] );
  });
});
// describe('Merge Sort', function(){
//   it('takes one array and breaks it into a bunch of arrays with 1 index and then reconstructs it as a sorted array', function(){
// expect(mergeSort)  });
// });
// describe('Merge', function(){
//     it ('It takes two sorted arrays and returns one sorted array', function(){
//         expect( merge([1,8,9,52,70],[9,11,34,54,67,90]).toEqual([1,8,9,9,11,34,52,54,67,70,90]))
//     });
// });