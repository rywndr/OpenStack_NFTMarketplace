import { Avatar, Box, Flex, Heading, Link, Text } from "@chakra-ui/react"
import { ConnectWallet, useAddress } from "@thirdweb-dev/react"
import NextLink from "next/link"
import styles from "../styles/Home.module.css"

export const Navbar = () => {
  const address = useAddress()

  return (
    <Box maxW={"1200px"} m={"auto"} py={"10px"} px={"48px"}>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Flex alignItems={"center"}>
          <Link as={NextLink} href={"/"}>
            <Box w={10} h={10} borderRadius={"full"} overflow={"hidden"} mr={2}>
              <img src={"/images/nexusmart.png"} alt={"Logo"} />
            </Box>
          </Link>
          <Link as={NextLink} href={"/"}>
            <Heading size={"md"}>StellarVision</Heading>
          </Link>
        </Flex>
        <Flex direction={"row"}>
          <Link as={NextLink} href="/" mx={2.5}>
            <Text>Home</Text>
          </Link>
          <Link as={NextLink} href="/buy" mx={2.5}>
            <Text>Marketplace</Text>
          </Link>
          <Link as={NextLink} href="/sell" mx={2.5}>
            <Text>Sell</Text>
          </Link>
        </Flex>
        <Flex dir={"row"} alignItems={"center"}>
          <ConnectWallet theme={"light"} className={styles.customWallet} />
          {address && (
            <Link as={NextLink} href={`/profile/${address}`} mx={4}>
              <Avatar size={"md"} />
            </Link>
          )}
        </Flex>
      </Flex>
    </Box>
  )
}
