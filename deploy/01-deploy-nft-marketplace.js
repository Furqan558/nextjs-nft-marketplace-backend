const { network } = require("hardhat")
const { developmentChains } = require("../helper-hardhat-config")
const { verify } = require("../utils/verify")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    log("----------------------------------------------------------")
    let arguments = []
    const nftMarketplace = await deploy("NftMarketplace", {
        from: deployer,
        args: this.arguments,
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
    })

    //Verify the Deployment
    if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        log("Verifying...")
        await (nftMarketplace.address, arguments)
    }
}

module.exports.tags = ["all", "nftmarketplace"]
