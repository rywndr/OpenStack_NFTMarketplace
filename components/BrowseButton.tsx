import { Box, Text } from "@chakra-ui/react"
import NextLink from "next/link"

export default function BrowseButton() {
  return (
    <Box
      as={NextLink}
      href="/buy"
      w="35%"
      textAlign="center"
      p="1rem"
      boxShadow="7px 7px 3px rgba(0, 0, 0, 0.6)"
      borderRadius="10px"
      bg="#edcdc0"
      color="black"
      fontWeight="semibold"
      fontSize="medium"
      border="1px solid black"
    >
      <Text>Browse NFTs</Text>
    </Box>
  )
}
