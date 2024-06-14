import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  InputLeftAddon,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  Icon,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalFooter,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react';
import { useState } from 'react';
import React from 'react';
import Background from '../assets/images/view1.jpg';
import WaceAnimation from './waveAnimation';

// const avatars = [
//   {
//     name: 'Ryan Florence',
//     url: 'https://bit.ly/ryan-florence',
//   },
//   {
//     name: 'Segun Adebayo',
//     url: 'https://bit.ly/sage-adebayo',
//   },
//   {
//     name: 'Kent Dodds',
//     url: 'https://bit.ly/kent-c-dodds',
//   },
//   {
//     name: 'Prosper Otemuyiwa',
//     url: 'https://bit.ly/prosper-baba',
//   },
//   {
//     name: 'Christian Nwamba',
//     url: 'https://bit.ly/code-beast',
//   },
// ];

export default function SectionBanner() {
  return (
    <Box
      position={'relative'}
      id="careers"
      className="relative bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1503475072824-1dafaf16c41c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-[500px] bg-no-repeat"
    >
      {/* <Box position={'relative'} id="careers" className="relative bg-cover bg-center h-[600px] bg-no-repeat" style={{ backgroundImage: `url(${Background})` }}> */}
      {/* <div class="absolute inset-0 z-1 bg-black/40 sm:bg-transparent sm:from-black/95 sm:to-black/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div> */}
      <Container as={SimpleGrid} zIndex={10} maxW={'7xl'} columns={{ base: 1, md: 2 }} spacing={{ base: 10, lg: 32 }} py={{ base: 10, sm: 20, lg: 32 }}>
        <Flex justifyItems={'center'} alignContent={'center'} spacing={{ base: 10, md: 20 }}>
          <Heading lineHeight={1.1} color={'#ffff'} fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
            Every place has a story to tell
          </Heading>
        </Flex>
      </Container>
      <WaceAnimation />

      {/* <Blur position={'absolute'} top={-10} left={-10} style={{ filter: 'blur(70px)' }} /> */}
    </Box>
  );
}

export const Blur = (props) => {
  return (
    <Icon width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })} zIndex={useBreakpointValue({ base: -1, md: -1, lg: -1 })} height="560px" viewBox="0 0 528 560" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  );
};
