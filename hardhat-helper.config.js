const networkConfig = {
    5: {
        name: "goerli",
        ethUsdPriceFeed: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
    },
    1337: {
        name: "besu",
    }
};

const developmentChains = ["hardhat", "localhost", "besu"];
const DECIMALS = 8;
const INITIAL_ANSWER = 200000000000;
module.exports = {
    networkConfig,
    developmentChains,
    DECIMALS,
    INITIAL_ANSWER,
};