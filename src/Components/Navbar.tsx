import React from "react";
import background from "../Images/logo.svg";
import icon_home_active from "../Images/icon_home_active.svg";
import icon_students from "../Images/icon_students.svg";
import icon_subjects from "../Images/icon_subjects.svg";
import icon_teachers from "../Images/icon_teachers.svg";
import icon_parents from "../Images/icon_parents.svg";
import {
    Grid,
    GridItem,
    Box,
    Stack,
    Button,
    HStack,
    Text,
    Center,Avatar, WrapItem, Wrap, Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex,
    Spacer,Container
  } from '@chakra-ui/react';
  import { Link} from 'react-router-dom';
import { ChevronDownIcon } from '@chakra-ui/icons'
interface NavbarProps{
    
}
export default function Navbar(){
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
                <Text fontSize='lg' color={"#464E56"}>Salman Alfarizi</Text>
                </HStack>
                </MenuButton>
                <MenuList>
                    <MenuItem>Log Out</MenuItem>
                </MenuList>
                </Menu>
            </GridItem>
            <GridItem w={300} area={'nav'}>
            <Center>
                <Stack spacing={1} mt={10} float='right'>
                    <img src={background} style={{height:'100px',marginBottom:'80px'}}/>
                    <Link to='dashboard'><Button justifyContent="flex-start" backgroundColor="#EDECF8" color="#6867AC" w={180} style={{height:'50px'}}><img src={icon_home_active} width={21} height={21} alt="" /><Text fontSize='lg' pl={3} ><b>Dashboard</b></Text></Button></Link>
                    <Link to='/murid'><Button justifyContent="flex-start" backgroundColor="#ffffff" color="#6D7878" w={180} style={{height:'50px'}}><img src={icon_students} width={21} height={21} alt="" /><Text fontSize='lg' pl={3} ><b>Murid</b></Text></Button></Link>
                    <Link to='/kegiatan'><Button justifyContent="flex-start" backgroundColor="#ffffff" color="#6D7878" w={180} style={{height:'50px'}}><img src={icon_subjects} width={21} height={21} alt="" /><Text fontSize='lg' pl={3} ><b>Kegiatan</b></Text></Button></Link>
                    <Link to='/guru'><Button justifyContent="flex-start" backgroundColor="#ffffff" color="#6D7878" w={180} style={{height:'50px'}}><img src={icon_teachers} width={21} height={21} alt="" /><Text fontSize='lg' pl={3} ><b>Guru</b></Text></Button></Link>
                    <Link to='/orang-tua'><Button justifyContent="flex-start" backgroundColor="#ffffff" color="#6D7878" w={180} style={{height:'50px'}}><img src={icon_parents} width={21} height={21} alt="" /><Text fontSize='lg' pl={3} ><b>Orang Tua</b></Text></Button></Link>
                </Stack>
            </Center>
            </GridItem>
            <GridItem pr={4} pb={10} area={'main'}>
                <Box borderWidth='1px' backgroundColor="#F4F4FB" borderRadius='xl' p={10}>
                <Container maxW='container.xl' bg='green.400' color='#262626'>
                    "container.sm" Container
                </Container>
                </Box>
            </GridItem>
        </Grid>
    )
}