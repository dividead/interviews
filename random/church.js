const Id = x => x;

const True = a => b => a;
const False = a => b => b;
const If = p => a => b => p(a)(b);
// const Zero = n =>
// const EQ = a => b => 

// console.log(If(EQ(2)(3))(5)(7))
