const { expect } = require("chai");
// Requirement: The object 'user' should have the property 'name'
// expect(user).to.have.property('name');

const user = {name: 'satoshi', age: 22}

describe('オブジェクトの名前を見るよ', () => {
  it('should name satoshi', () => {
    expect(user.name).to.equal("satoshi");
  })
})
