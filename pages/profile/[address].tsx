import { Container, Flex, Heading, Stack, Text } from "@chakra-ui/react"
import {
  ConnectWallet,
  useAddress,
  useContract,
  useOwnedNFTs,
} from "@thirdweb-dev/react"
import React from "react"
import {
  MARKETPLACE_ADDRESS,
  NFT_COLLECTION_ADDRESS,
} from "../../const/addresses"
import { useRouter } from "next/router"
import NFTGrid from "../../components/NFTGrid"
import styles from "../../styles/Home.module.css"

export default function ProfilePage() {
  const router = useRouter()
  const address = useAddress()

  const { contract: nftCollection } = useContract(NFT_COLLECTION_ADDRESS)

  const { contract: marketplace } = useContract(
    MARKETPLACE_ADDRESS,
    "marketplace-v3"
  )

  const { data: ownedNfts, isLoading: loadingOwnedNfts } = useOwnedNFTs(
    nftCollection,
    router.query.address as string
  )
  console.log(ownedNfts)
  return (
    <Container maxW={"1080px"} p={5}>
      {address ? (
        <>
          <Heading>{"Owned NFT(s)"}</Heading>
          <Text>Browse and manage your owned NFTs.</Text>
          <NFTGrid
            data={ownedNfts}
            isLoading={loadingOwnedNfts}
            emptyText={"You don't own any NFTs."}
          />
        </>
      ) : (
        <Flex h={"80vh"} alignItems={"center"} justifyContent={"center"}>
          <Stack spacing={4} align={"center"}>
            <Heading>{"Connect your wallet to view your owned NFT(s)"}</Heading>
            <ConnectWallet
              theme={"light"}
              className={styles.customWalletPage}
            />
          </Stack>
        </Flex>
      )}
    </Container>
  )
}
