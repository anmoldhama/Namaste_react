import Sum from "../Sum";

test('The test case is to calculate the sum of two numbers: ', ()=>{
    const result = Sum(3,4);

    expect(result).toBe(5);
});