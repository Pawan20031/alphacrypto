import { Avatar, Box, Stack, VStack ,Text} from '@chakra-ui/react'
import React from 'react';
import pic from "../assests/pic2.jpg";

const Footer = () => {
  return (
    <Box
    bgColor={"blackAlpha.900"}
    color={"whiteAlpha.700"}
    minH={"48"}
    px={"16"}
    py={["16","8"]}
    >

<Stack direction={["column","row"]} h={"full"} alignItems={"center"}>
    <VStack w={"full"} alignItems={["center","flex-start"]}>
        <Text fontWeight={"bold"}>About Us</Text>
        <Text fontSize={"sm"} letterSpacing={"widest"} textAlign={["center","left"]} >We are building the most influential, trusted information platform for a global community engaged in the transformation of the financial system and the emerging crypto economy. AlphaCrypto is an integrated platform for media, events, data & indices for the next generation of investing and the future of money.</Text>

    </VStack>
    <VStack>
        <Avatar boxSize={"28"} mt={["4","0"]} src={pic}/>
        <Text fontWeight={"bold"}>Pawan Kumar</Text>
        {/* <Text>Pawan Kumar</Text> */}
    </VStack>
</Stack>

    </Box>
  )
}

export default Footer
