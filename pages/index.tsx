import { NextPage } from "next"
import { Container, Flex, Heading, Stack } from "@chakra-ui/react"
import BrowseButton from "../components/BrowseButton"

const Home: NextPage = () => {
  return (
    <Container maxW={"1080px"}>
      <Flex h={"80vh"} alignItems={"center"} justifyContent={"center"}>
        <Stack spacing={4} align={"center"}>
          <Heading>StellarVisions NFT Galllery</Heading>
          <BrowseButton />
        </Stack>
      </Flex>
    </Container>
  )
}

export default Home
