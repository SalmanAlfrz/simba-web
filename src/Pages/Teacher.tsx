import React from "react";
import background from "../Images/logo.svg";
import icon_home from "../Images/icon_home.svg";
import icon_students from "../Images/icon_students.svg";
import icon_subjects from "../Images/icon_subjects.svg";
import icon_teachers_active from "../Images/icon_teachers_active.svg";
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
    Spacer,Input, Select
  } from '@chakra-ui/react';
  
  import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
  
import { AddIcon } from '@chakra-ui/icons'
  import { Link} from 'react-router-dom';
import { ChevronDownIcon } from '@chakra-ui/icons'
interface TeacherProps{}
export default function Teacher(){
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
                <Stack spacing={1} mt={10}>
                    <img src={background} style={{height:'100px',marginBottom:'80px'}}/>
                    <Link to='/dashboard'><Button justifyContent="flex-start" backgroundColor="#ffffff" color="#6D7878" w={180} style={{height:'50px'}}><img src={icon_home} width={21} height={21} alt="" /><Text fontSize='lg' pl={3}><b>Dashboard</b></Text></Button></Link>
                    <Link to='/murid'><Button justifyContent="flex-start" backgroundColor="#ffffff" color="#6D7878" w={180} style={{height:'50px'}}><img src={icon_students} width={21} height={21} alt="" /><Text fontSize='lg' pl={3} ><b>Murid</b></Text></Button></Link>
                    <Link to='/kegiatan'><Button justifyContent="flex-start" backgroundColor="#ffffff" color="#6D7878" w={180} style={{height:'50px'}}><img src={icon_subjects} width={21} height={21} alt="" /><Text fontSize='lg' pl={3} ><b>Kegiatan</b></Text></Button></Link>
                    <Link to='/guru'><Button justifyContent="flex-start" backgroundColor="#EDECF8" color="#6867AC" w={180} style={{height:'50px'}}><img src={icon_teachers_active} width={21} height={21} alt="" /><Text fontSize='lg' pl={3} ><b>Guru</b></Text></Button></Link>
                    <Link to='/orang-tua'><Button justifyContent="flex-start" backgroundColor="#ffffff" color="#6D7878" w={180} style={{height:'50px'}}><img src={icon_parents} width={21} height={21} alt="" /><Text fontSize='lg' pl={3} ><b>Orang Tua</b></Text></Button></Link>
                </Stack>
            </Center>
            </GridItem>
            <GridItem pr={4} pb={10} area={'main'}>
                <Box borderWidth='1px' backgroundColor="#F4F4FB" borderRadius='xl' p={10}>
                <Center>
                <Stack spacing={4}>
                    <Text fontSize='xl' mb="-25px" color={"#464E56"}><b>Guru</b></Text>
                    <Flex color='white'>
                        <Center pr={23}>
                        <Input h={55} w={300} color={"#6D7878"} backgroundColor="#FFFFFF"
                        // value={value}
                        // onChange={handleChange}
                        placeholder='Masukkan nama guru...'
                        size='lg'
                        style={{marginBottom:'10px'}}/>
                        </Center>
                        <Center h={123} pb={2.5}>
                            <Button backgroundColor="#6867AC" h={54} w={150}>Cari Guru</Button>
                        </Center>
                    </Flex>
                    
                    <Box borderWidth='1px' backgroundColor="white" borderRadius='xl' h={490} w={1080}>
                        <Flex p={5}>
                            <Text fontSize='xl' color={"#464E56"}><b>4 Guru Terdaftar</b></Text>
                            <Spacer />
                            <Link to='/add-guru'><Button backgroundColor="white" color={'black'} h={33} variant='outline'>Tambah Guru <AddIcon ml={2} w={3} mt={0.5}/></Button></Link>
                        </Flex>
                        <TableContainer>
                            <Table variant='striped'>
                                <Thead>
                                <Tr>
                                    <Th>No</Th>
                                    <Th>Nama Guru</Th>
                                    <Th>Hari Mengajar</Th>
                                    <Th>No Telepon</Th>
                                    <Th>Aksi</Th>
                                </Tr>
                                </Thead>
                                <Tbody>
                                <Tr>
                                    <Td>1</Td>
                                    <Td>Naufal Fawwaz Andriawan</Td>
                                    <Td>Senin, Rabu</Td>
                                    <Td >17/08/2022</Td>
                                    <Td></Td>
                                </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                        </Box>
                </Stack>
                </Center>
                </Box>
            </GridItem>
        </Grid>
    )
}