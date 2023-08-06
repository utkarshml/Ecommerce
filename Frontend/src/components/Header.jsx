/* eslint-disable no-unused-vars */
import React from 'react';
import { 
    Text ,
    Link as CLink,
    Box,
    Stack,
    Input,
    Button
} from '@chakra-ui/react';
import { BiSearch , BiCartAlt } from "react-icons/bi"
import { Link } from 'react-router-dom';
function Header() {
  return (
   <header className='p-5 w-100 d-flex flex-column'>
    <Box  w={"full"} display={"flex"} justifyContent={"space-between"}>
         <Text fontSize={"1.5rem"}  textTransform={"uppercase"} fontWeight={"600"} color={"purple.500"}>MyShop</Text>
         <Stack width={"40%"} gap="0" flexDirection={"row"}>
            <Input h={"100%"}   placeholder='Search Product'/>
            <Button height={"2rem"} width={"2rem"} marginLeft={"-4rem"} borderRadius={"50%"}  colorScheme={"purple"} bg={"blue.500"} variant={"ghost"}>
            <BiSearch/>
            </Button>
         </Stack>
      <Box display={"inline-block"}>
        <BiCartAlt/>
      </Box>
    </Box>
  <Box display={"flex"} py={"4"}>
      <nav className='w-100'>
      <CLink><Link to={"/"}>Home</Link></CLink>
      <CLink><Link to={"/shop"}>Shop</Link></CLink>
      <CLink><Link to={"/about"}>About</Link></CLink>
      <CLink><Link to={"/blog"}>Blog</Link></CLink>
      <CLink><Link to={"/contact"}>Contact</Link></CLink>
    </nav>
    <Text>
        7789354128865
    </Text>
  </Box>
  
   </header>
  );
}

export default Header