const {network, ethers, getNamedAccounts, deployments} = require("hardhat");
const {developmentChains, networkConfig} = require("../hardhat-helper.config");
const supplyChainArtifacts = require("../artifacts/contracts/SupplyChain.sol/SupplyChain.json");

// const ethers = require("ethers");

const providerUrl = "http://127.0.0.1:8545";
const privateKey = "8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63";
const addr = "0xFE3B557E8Fb62b89F4916B721be55cEb828dBd73";

async function advanceBlocks(numBlocks) {
    for (let i = 0; i < numBlocks; i++) {
        await ethers.provider.send("evm_mine", []);
    }
}

module.exports = async({getNamedAccounts, deployments})=>{
    const {deploy} = deployments;

    const provider = new ethers.JsonRpcProvider(providerUrl, "any");
    const signer = new ethers.Wallet(privateKey, provider);

    const factory = new ethers.ContractFactory(supplyChainArtifacts.abi,supplyChainArtifacts.bytecode, signer);

    const SupplyChain = await factory.deploy();
    await SupplyChain.waitForDeployment();

    console.log("Supplychain deployed... ");

    // const SupplyChainUsable = await ethers.getContract("SupplyChain",signer.address);

    const supplyChainAddress = await SupplyChain.getAddress();
    console.log(supplyChainAddress);

    // await advanceBlocks(5);
    // const random = await SupplyChain.getRandom();
    // console.log(random);

    console.log(await provider.getBlockNumber());
    
}