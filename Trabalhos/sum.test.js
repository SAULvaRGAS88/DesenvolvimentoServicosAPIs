const sum = require('./sum')

// soma (5,5) = 10

test ('5 ,5 = 10', function(){
    expect(sum(5,5)).toBe(10);
});
test ('-5 ,-5 = 10', function(){
    expect(sum(5,5)).toBe(10);
});