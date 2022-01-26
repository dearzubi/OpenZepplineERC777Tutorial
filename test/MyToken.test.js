require('@openzeppelin/test-helpers/configure')({ provider: web3.currentProvider, environment: 'truffle' });

const {singletons } = require('@openzeppelin/test-helpers');

const MyToken =  artifacts.require('MyToken');

contract('MyToken', function (accounts) {
  beforeEach(async function () {

    await singletons.ERC1820Registry(accounts[0]);

    myToken = await MyToken.deployed();
  });

  it("gives the owner of the token 1M tokens",async()=>{

    let balance = await myToken.balanceOf(accounts[0]);

    balance = web3.utils.fromWei(balance,'ether');

    assert.equal(balance,'1000000','Balance should be 1M tokens for contract creator')
  })
});