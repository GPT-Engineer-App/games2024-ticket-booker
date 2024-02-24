import React from "react";
import { Box, Button, Container, Flex, Heading, SimpleGrid, Text, Image } from "@chakra-ui/react";
import { FaUserCircle, FaShoppingCart, FaTicketAlt } from "react-icons/fa";

const Index = () => {
  // Placeholder function for handling ticket selection
  const handleSelectTicket = (ticketType) => {
    console.log(`Selected ticket type: ${ticketType}`);
    // This should interact with a shopping cart context or state management
  };

  return (
    <Container maxW="container.xl">
      <Flex align="center" justify="space-between" my={4}>
        <Heading as="h1" size="xl">
          Jeux Olympiques de Paris 2024
        </Heading>
        <Button leftIcon={<FaUserCircle />} colorScheme="teal">
          Espace Administrateur
        </Button>
      </Flex>

      <SimpleGrid columns={[1, null, 3]} spacing={10} my={8}>
        <Box>
          <Image src="https://images.unsplash.com/photo-1658581872509-c8d19777bd24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvbHltcGljcyUyMGxvZ298ZW58MHx8fHwxNzA4ODA3ODk2fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Olympics Logo" />
          <Text mt={2}>Découvrez les épreuves et célébrez l'esprit sportif!</Text>
        </Box>
        <Box>
          <Image src="https://images.unsplash.com/photo-1612195444187-5903d4b30902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvbHltcGljJTIwc3RhZGl1bXxlbnwwfHx8fDE3MDg4MDc4OTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Olympic Stadium" />
          <Text mt={2}>Visitez les stades iconiques et vivez les compétitions en direct!</Text>
        </Box>
        <Box>
          <Image src="https://images.unsplash.com/photo-1541252260730-0412e8e2108e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvbHltcGljJTIwYXRobGV0ZXN8ZW58MHx8fHwxNzA4ODA3ODk3fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Olympic Athletes" />
          <Text mt={2}>Encouragez vos athlètes préférés et soyez partie de l'histoire!</Text>
        </Box>
      </SimpleGrid>

      <Heading as="h2" size="lg" my={4}>
        Réservez Vos Tickets
      </Heading>
      <SimpleGrid columns={[1, null, 3]} spacing={10}>
        <Button leftIcon={<FaTicketAlt />} colorScheme="blue" onClick={() => handleSelectTicket("Solo")}>
          Solo (1)
        </Button>
        <Button leftIcon={<FaTicketAlt />} colorScheme="green" onClick={() => handleSelectTicket("Duo")}>
          Duo (2)
        </Button>
        <Button leftIcon={<FaTicketAlt />} colorScheme="purple" onClick={() => handleSelectTicket("Familial")}>
          Familiale (4)
        </Button>
      </SimpleGrid>

      <Flex align="center" justify="center" my={4}>
        <Button leftIcon={<FaShoppingCart />} colorScheme="orange" size="lg">
          Finaliser la réservation
        </Button>
      </Flex>
    </Container>
  );
};

export default Index;
