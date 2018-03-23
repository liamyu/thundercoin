// var TokenERC20 = artifacts.require("TokenERC20");
// var ThunderCoin = artifacts.require("ThunderCoin");
var ThunderCoin = artifacts.require("./ThunderCoin.sol");

module.exports = function (deployer) {
  // deployer.deploy(TokenERC20);
  deployer.deploy(ThunderCoin, 20000000, "Thunder Coin", "TC");
};
