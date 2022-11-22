const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
  

  obj1 ={
    partitionKey: 10
  }
  it("Returns the literal when an appropriate partitionKey is passed" , () => {
    const trivialKey = deterministicPartitionKey(obj1);
    expect(trivialKey).toBe("10");
  });


  obj2 ={
     partitionName:"Val"
  }
  it("Returns the literal when no partitionKey is paased in the event" , () => {
    const trivialKey = deterministicPartitionKey(obj2);
    expect(trivialKey).toBe("77d438cfca74f5bdaa7a4738eaa2a94bb07302ba7b1bc33e8e7318b586b265c71d0b4b76261de8ab45aff7c66b7affeff155ed3472aef6eaecf49054df062037");
  });


  obj3 ={
    partitionKey: "77d438cfca74f5bdaa7a473d3472aef6e777d438cfca74f5bdaa7a4738eaa2a94bb07302ba7b1bc33e8e7318b586b265c71d0b4b76261de8ab45aff7c66b7affeff155ed3472aef6eaecf49054df06203777d438cfca74f5bdaa7a4738eaa2a94bb07302ba7b1bc33e8e7318b586b265c71d0b4b76261de8ab45aff7c66b7affeff155ed3472aef6eaecf49054df06203777d438cfca74f5bdaa7a4738eaa2a94bb07302ba7b1bc33e8e7318b586b265c71d0b4b76261de8ab45aff7c66b7affeff155ed3472aef6eaecf49054df06203777d438cfca74f5bdaa7a4738eaa2a94bb07302ba7b1bc33e8e7318b586b265c71d0b4b76261de8ab45aff7c66b7affeff155ed3472aef6eaecf49054df062037"
 }
 it("Returns the literal when an partitionKey of length > 256 is passed" , () => {
   const trivialKey = deterministicPartitionKey(obj3);
   expect(trivialKey).toBe("236ccdb79c39d8ae229802859980df91963cddf0b2d6d570fd76704908c7fa9556069db06720d661580c4e72757a75695dd37cb6852d8299b9336c5e918b429d");
 });


});






