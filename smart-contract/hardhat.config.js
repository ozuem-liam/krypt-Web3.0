require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/oQjcHVWEHTdsM4ZY3puZT-cuamnogVVn',
      accounts: [ '0574fa5f72284a4e06151fa7f2fdaad0907eacfb361e165bd6c132ae6604fa5d' ]
    }
  }
}