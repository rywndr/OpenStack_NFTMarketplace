import {
  Button,
  Card,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react"
import {
  ConnectWallet,
  ThirdwebNftMedia,
  useAddress,
  useContract,
  useOwnedNFTs,
} from "@thirdweb-dev/react"
import React, { useState } from "react"
import { NFT_COLLECTION_ADDRESS } from "../const/addresses"
import type { NFT as NFTType } from "@thirdweb-dev/sdk"
import NFTGrid from "../components/NFTGrid"
import SaleInfo from "../components/SaleInfo"
import styles from "../styles/Home.module.css"

export default function Sell() {
  const { contract } = useContract(NFT_COLLECTION_ADDRESS)
  const address = useAddress()
  const { data, isLoading } = useOwnedNFTs(contract, address)

  const [selectedNFT, setSelectedNFT] = useState<NFTType>()

  return (
    <Container maxW={"1080px"} p={5}>
      {address ? (
        <>
          <Heading>Sell NFT(s)</Heading>
          <Text>Select which NFTs you own to sell.</Text>
          {!selectedNFT ? (
            <NFTGrid
              data={data}
              isLoading={isLoading}
              overrideOnclickBehavior={nft => {
                setSelectedNFT(nft)
              }}
              emptyText={"You don't own any NFTs."}
            />
          ) : (
            <Flex justifyContent={"center"} my={10}>
              <Card w={"75%"}>
                <SimpleGrid columns={2} spacing={10} p={5}>
                  <ThirdwebNftMedia
                    metadata={selectedNFT.metadata}
                    width="100%"
                    height="100%"
                  />
                  <Stack>
                    <Flex justifyContent={"right"}>
                      <Button
                        onClick={() => {
                          setSelectedNFT(undefined)
                        }}
                      >
                        X
                      </Button>
                    </Flex>
                    <Heading>{selectedNFT.metadata.name}</Heading>
                    <SaleInfo nft={selectedNFT} />
                  </Stack>
                </SimpleGrid>
              </Card>
            </Flex>
          )}
        </>
      ) : (
        <Flex h={"80vh"} alignItems={"center"} justifyContent={"center"}>
          <Stack spacing={4} align={"center"}>
            <Heading>{"Connect your wallet to sell your owned NFT(s)"}</Heading>
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
