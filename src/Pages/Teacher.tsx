import React, { useEffect, useState } from 'react'
import { getCookie } from 'typescript-cookie';
import axios from "../Api/axios";
import {
    Box,
    Stack,
    Button, Text,
    Center, Flex,
    Spacer, Input
} from '@chakra-ui/react';
import {
    Table, Thead, Tbody, Tr, Th, Td, TableContainer,
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom';
export default function Teacher() {
    const [guru, setGuru] = useState([{
        id: 0,
        name: '',
        phoneNumber: ''
    }])
    const token = getCookie('token')
    useEffect(() => {
        //get dashboard
        axios.get('teachers', {
            headers: {
                'x-access-token': 'api-key',
                'Authorization': `token ${token}`
            }
        })
            .then((res) => {
                setGuru(res.data.data);
            })
    }, [])
    return (
        <Stack spacing={4}>
            <Text fontSize='2xl' mb="-25px" color={"#464E56"}><b>Guru</b></Text>
            <Flex color='white'>
                <Center pr={23}>
                    <Input h={55} w={300} color={"#6D7878"} backgroundColor="#FFFFFF"
                        placeholder='Masukkan nama guru...'
                        size='lg'
                        style={{ marginBottom: '10px' }} />
                </Center>
                <Center h={123} pb={2.5}>
                    <Button backgroundColor="#6867AC" h={54} w={150}>Cari Guru</Button>
                </Center>
            </Flex>

            <Box borderWidth='1px' backgroundColor="white" borderRadius='xl' h={490} >
                <Flex p={5}>
                    <Text fontSize='xl' color={"#464E56"}><b>{guru.length} Guru Terdaftar</b></Text>
                    <Spacer />
                    <Link to='/guru/add'><Button backgroundColor="white" color={'black'} variant='outline'>Tambah Guru <AddIcon ml={2} w={3} mt={0.5} /></Button></Link>
                </Flex>
                <TableContainer>
                    <Table variant='striped'>
                        <Thead>
                            <Tr>
                                <Th>No</Th>
                                <Th>Nama Guru</Th>
                                <Th>No Telepon</Th>
                                {/* <Th>Aksi</Th> */}
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                guru.map((data, index) => {
                                    return (
                                        <Tr key={data.id}>
                                            <Td>{index + 1}</Td>
                                            <Td>{data.name}</Td>
                                            <Td>{data.phoneNumber}</Td>
                                            {/* <Td></Td> */}
                                        </Tr>
                                    )
                                })
                            }
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </Stack>
    )
}