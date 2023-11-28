## OpenStack NFT Marketplace

### Marketplace Smart Contract Features

- Sell NFTs on marketplace
- Create auctions where the highest bidder, after a certain period, wins the NFT
- Make offers on unlisted NFTs
- Create an open marketplace where any user can list NFTs for sale, like OpenSea.
- View NFT(s) currently owned by a wallet

### Technologies used for the project

For this project I decided to take a bit of a different approach by using Marketplace Smart Contract that is provided by thirdweb and deployed with thirdweb, it makes it easy for beginner web3 devs to start their journey making their own dApps, and by using this Smart Contract, and the robustness of the code is ensured.
- [Marketplace V3 contract](https://thirdweb.com/thirdweb.eth/MarketplaceV3)
- [Smart Contract Source Code](https://mumbai.polygonscan.com/address/0x41E21F469eEF7b48b080b694D5879F4636D8cC0f#code)
- [Deployed Smart Contract](https://thirdweb.com/mumbai/0x2361F5e05320b70Eed1074fC6D4914ddbd7458E9)

The frontend application is built using React, it also uses Chakra UI, a component library for React, to style the UI components. Additionally, it uses Thirdweb SDK for interacting with smart contracts.

### How to clone and run on your local development server:

Clone
```bash
git clone https://github.com/rywndr/OpenStack_NFTMarketplace.git
```

Install necessary dependencies
```bash
npm install
```

run on local development server
```bash
npm run dev
```

[Live Demo](https://stellarvision.vercel.app/)

### Learn More

To learn more about thirdweb and Next.js, take a look at the following resources:

- [thirdweb React Documentation](https://docs.thirdweb.com/react) - learn about thirdweb React SDK.
- [thirdweb TypeScript Documentation](https://docs.thirdweb.com/typescript) - learn about thirdweb JavaScript/TypeScript SDK.
- [thirdweb Portal](https://docs.thirdweb.com) - check thirdweb guides and development resources.
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Templates](https://thirdweb.com/templates)
