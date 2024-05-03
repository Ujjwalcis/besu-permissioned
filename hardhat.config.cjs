require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("hardhat-deploy")


module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.8",
      },
       {
         version: "0.8.20",
       },
       {
          version: "0.7.6",
       },
       {
        version: "0.7.5",
       },
       {
        version: "0.8.17",
       },
       {
        version: "0.6.6",
       },
       {
        version: "0.5.16",
       },
      ],

  },
  namedAccounts: {
    deployer: {
        default: 0, // here this will by default take the first account as deployer
        1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
    },
  },
  defaultNetwork: "besu",
  networks: {
      hardhat: {
          chainId: 31337,
          allowUnlimitedContractSize: true,
      },
      besu: {
        chainId: 1337,
        url: "http://127.0.0.1:8545",
        allowUnlimitedContractSize: true,

      }
  }
 
};
