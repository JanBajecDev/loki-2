
async function main() {
  // @ts-ignore
  const factory = '0xb28Dcd6eD23d5D6A10a742c20666980D5f0f2751'
  const weth = '0xAc0f3FE1343C73BfabE54F5002BB8a0A2d12EB42' // WBNB
  // @ts-ignore
  const Contract = await hre.ethers.getContractFactory('UniswapV2Router02')
  const router = await Contract.deploy(factory, weth)
  console.log('Router deployed to:', router.address)
  console.log('Factory: ', factory)
  console.log('WETH: ', weth)
}
main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error)
      process.exit(1)
    })
