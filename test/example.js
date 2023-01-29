const { expect } = require("chai");
let user = {name: 'Scott'};
// Requirement: The object 'user' should have the property 'name'
expect(user).to.have.property('name');