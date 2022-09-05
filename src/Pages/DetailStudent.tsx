import {Box, Stack, Button,Text, Avatar, TableContainer, Table, Thead, Tr, Th, Td, Tbody, Flex, Spacer} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { AddIcon } from '@chakra-ui/icons'
export default function DetailStudent(){
    return (
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
                    <Link to='/add-nilai'><Button backgroundColor="white" color={'black'} h={33} w={150} variant='outline'>Add Grades <AddIcon ml={2}/></Button></Link>
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
    )
}