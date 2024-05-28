import { Box, Button, Container, Flex, Heading, HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="brand.800" color="white" py={4} px={8}>
        <Flex justify="space-between" align="center">
          <Heading size="lg">MySite</Heading>
          <HStack spacing={8}>
            <Button variant="link" color="white">Home</Button>
            <Button variant="link" color="white">Features</Button>
            <Button variant="link" color="white">Contact</Button>
          </HStack>
        </Flex>
      </Box>

      {/* Hero Section */}
      <Container centerContent maxW="container.md" height="80vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4} textAlign="center">
          <Heading as="h1" size="2xl">Welcome to MySite</Heading>
          <Text fontSize="lg">Your journey to excellence starts here.</Text>
          <Button colorScheme="teal" size="lg">Get Started</Button>
        </VStack>
      </Container>

      {/* Features Section */}
      <Box bg="gray.100" py={16}>
        <Container maxW="container.md">
          <VStack spacing={8} textAlign="center">
            <Heading as="h2" size="xl">Features</Heading>
            <Text fontSize="lg">Discover the amazing features we offer.</Text>
            <HStack spacing={8} justify="center">
              <Box p={4} bg="white" shadow="md" borderRadius="md">
                <Heading as="h3" size="md">Feature 1</Heading>
                <Text mt={2}>Description of feature 1.</Text>
              </Box>
              <Box p={4} bg="white" shadow="md" borderRadius="md">
                <Heading as="h3" size="md">Feature 2</Heading>
                <Text mt={2}>Description of feature 2.</Text>
              </Box>
              <Box p={4} bg="white" shadow="md" borderRadius="md">
                <Heading as="h3" size="md">Feature 3</Heading>
                <Text mt={2}>Description of feature 3.</Text>
              </Box>
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="brand.800" color="white" py={8}>
        <Container maxW="container.md" textAlign="center">
          <Text mb={4}>Contact us: info@mysite.com</Text>
          <HStack spacing={4} justify="center">
            <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebook />} />
            <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
            <IconButton as="a" href="#" aria-label="Instagram" icon={<FaInstagram />} />
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;