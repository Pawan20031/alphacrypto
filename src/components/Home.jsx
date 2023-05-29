import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import src from "../assests/btccc.png";
import { motion } from "framer-motion";
function Home() {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "28px",
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image w={"full"} h={"full"} objectFit={"contain"} src={src} />
      </motion.div>
      <Text
        fontSize={["xl","6xl"]}
        textAlign={"center"}
        fontWeight={"bold"}
        color={"whiteAlpha.700"}
        mt={"-19"}
      >
        AlphaCrypto
      </Text>
    </Box>
  );
}

export default Home;
