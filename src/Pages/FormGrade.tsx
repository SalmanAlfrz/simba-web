import React from "react";
import background from "../Images/logo.svg";
import icon_home from "../Images/icon_home.svg";
import icon_students_active from "../Images/icon_students_active.svg";
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
import { ChevronDownIcon } from '@chakra-ui/icons'
import { AddIcon } from '@chakra-ui/icons'
interface FormGradeProps{}
export default function FormGrade(){
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
                    <Button backgroundColor="#ffffff" color="#6D7878" w={180} style={{height:'50px'}}><img src={icon_home} alt=""  color="#6867AC"/><Text fontSize='lg' pl={3} ><b>Dashboard</b></Text></Button>
                    <Button backgroundColor="#EDECF8" color="#6867AC" w={180} style={{height:'50px'}}><img src={icon_students_active} alt="" /><Text fontSize='lg' pl={3} color="#6867AC" ><b>Students</b></Text></Button>
                    <Button backgroundColor="#ffffff" color="#6D7878" w={180} style={{height:'50px'}}><img src={icon_subjects} alt="" /><Text fontSize='lg' pl={3} ><b>Subjects</b></Text></Button>
                    <Button backgroundColor="#ffffff" color="#6D7878" w={180} style={{height:'50px'}}><img src={icon_teachers} alt="" /><Text fontSize='lg' pl={3} ><b>Teachers</b></Text></Button>
                    <Button backgroundColor="#ffffff" color="#6D7878" w={180} style={{height:'50px'}}><img src={icon_parents} alt="" /><Text fontSize='lg' pl={3} ><b>Parents</b></Text></Button>
                    
                </Stack>
            </Center>
            </GridItem>
            <GridItem pr={4} pb={10} area={'main'}>
                <Box borderWidth='1px' backgroundColor="#F4F4FB" borderRadius='xl' p={10}>
                <Center>
                <Stack spacing={4} mt={8}>
                    <Flex>
                        <Avatar size='2xl' name='Nassya Putri Riyani' src='../Images/murid.PNG' />
                        <Stack pl={5} pt={8}>
                            <Text fontSize='2xl' color={"#464E56"}><b>Nassya Putri Riyani</b></Text>
                            <Text fontSize='lg' color={"#464E56"}>3 Years</Text>
                        </Stack>
                        <Spacer />
                        <Button  mt={8} mr={5} backgroundColor="#6867AC" color={'white'} h={33} w={150}>Semester 1</Button>
                        <Button  mt={8} backgroundColor="white" color={'#6867AC'} h={33} w={150} variant='outline'>Semester 2</Button>
                    </Flex>
                    <Stack spacing={20} pt={5}>
                        <Box borderWidth='1px' backgroundColor="white" borderRadius='xl' h={490} w={972}>
                        </Box>
                        <Box borderWidth='1px' backgroundColor="white" borderRadius='xl' h={490}>
                        <Flex p={5}>
                            <Text fontSize='xl' color={"#464E56"}><b>Grades Report</b></Text>
                            <Spacer />
                            <Button backgroundColor="white" color={'black'} h={33} w={150} variant='outline'>Add Grades <AddIcon ml={2}/></Button>
                        </Flex>
                        <TableContainer>
                            <Table variant='striped'>
                                <Thead>
                                <Tr>
                                    <Th>Week</Th>
                                    <Th>Grade</Th>
                                    <Th>Descriptions</Th>
                                    <Th>Actions</Th>
                                </Tr>
                                </Thead>
                                <Tbody>
                                <Tr>
                                    <Td>1</Td>
                                    <Td>3</Td>
                                    <Td >Berkembang Sesuai Harapan</Td>
                                    <Td></Td>
                                </Tr>
                                <Tr>
                                    <Td>2</Td>
                                    <Td>2</Td>
                                    <Td >Masih Berkembang</Td>
                                    <Td></Td>
                                </Tr>
                                <Tr>
                                    <Td>3</Td>
                                    <Td>1</Td>
                                    <Td >Belum Berkembang</Td>
                                    <Td></Td>
                                </Tr>
                                <Tr>
                                    <Td>4</Td>
                                    <Td>4</Td>
                                    <Td >Berkembang Sangat Baik</Td>
                                    <Td></Td>
                                </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                        </Box>
                    </Stack>
                </Stack>
                </Center>
                </Box>
            </GridItem>
        </Grid>
    )
}