import React, { useEffect, useState } from 'react';
import { Container, Grid, GridItem, Box, Stack, Button, HStack, Text, Center, Avatar, WrapItem, Menu, Wrap, MenuButton, MenuList, MenuItem} from "@chakra-ui/react";
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import { ChevronDownIcon } from '@chakra-ui/icons'
import NabarDashboard from './Components/NavbarDashboard';
import Dashboard from "./Pages/Dashboard";
import Students from "./Pages/Students";
import DetailStudent from "./Pages/DetailStudent";
import NavbarStudents from './Components/NavbarStudents';
import NavbarKegiatan from './Components/NavbarKegiatan';
import NavbarTeacher from './Components/NavbarTeacher';
import NavbarParents from './Components/NavbarParents';
import { getCookie } from 'typescript-cookie';
import axios from "./Api/axios";
import Kegiatan from './Pages/Kegiatan';
import Parent from './Pages/Parent';
import Teacher from './Pages/Teacher';
const Main = () => {
  const [users, setUserList] = useState()
  const location = useLocation(); // once ready it returns the 'window.location' object
  const url = location.pathname
  const navigate = useNavigate()
  const token = getCookie('token')
  useEffect(() => {
    if(url === '/'){
      navigate('/dashboard')
    }
    if(!token){
      navigate('/login')
    }
    //get credential
    axios.get('credential', {
      headers: {
        'x-access-token': 'api-key',
        'Authorization': `token ${token}`
      }
    })
    .then((res) => {
      setUserList(res.data.data.name);
    })
  })

  
return ( 
    <Grid
    templateAreas={`"nav header"
                    "nav main"
                    "nav footer"`}
    gridTemplateRows={'90px 1fr'}
    gridTemplateColumns={'300px 1fr'}
    // color='#464E56'
    // fontWeight='bold'
    >
    <GridItem style={{textAlign:"end"}} mr={4} mt={4} pl='2' area={'header'}>
        <Menu>
        <MenuButton h={51} as={Button} background="white" rightIcon={<ChevronDownIcon />}>
        <HStack spacing='0'>
        <Wrap mr={3}>
            <WrapItem>
                <Avatar size='md' name='Salman Alfarizi' src='' />
            </WrapItem>
        </Wrap>
        <Text fontSize='lg' color={"#464E56"}>{users}</Text>
        </HStack>
        </MenuButton>
        <MenuList>
            <MenuItem>Log Out</MenuItem>
        </MenuList>
        </Menu>
    </GridItem>
    <GridItem w={300} area={'nav'}>
    <Center>
      <Routes>
        <Route path='/dashboard' element={<NabarDashboard/>} />
        <Route path='/murid' element={<NavbarStudents/>} />
        <Route path='/murid/detail' element={<NavbarStudents/>} />
        <Route path='/kegiatan' element={<NavbarKegiatan/>} />
        <Route path='/guru' element={<NavbarTeacher/>} />
        <Route path='/orang-tua' element={<NavbarParents/>} />
      </Routes>
    </Center>
    </GridItem>
    <GridItem pr={4} pb={10} area={'main'}>
        <Box borderWidth='1px' backgroundColor="#F4F4FB" borderRadius='xl' p={10}>
        <Container maxW='container.xl'>
          <Routes>
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/murid' element={<Students/>} />
            <Route path='/murid/detail' element={<DetailStudent/>} />
            <Route path='/kegiatan' element={<Kegiatan/>} />
            <Route path='/guru' element={<Teacher/>} />
            <Route path='/orang-tua' element={<Parent/>} />
          </Routes>
        </Container>
        </Box>
    </GridItem>
  </Grid>
);
}
export default Main;