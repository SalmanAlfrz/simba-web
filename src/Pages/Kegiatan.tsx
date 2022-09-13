import React, { useEffect, useState } from 'react'
import { Box, Stack, Button, Text, Center, TableContainer, Input, Spacer, Flex, Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { AddIcon } from '@chakra-ui/icons'
import { getCookie } from 'typescript-cookie';
import axios from "../Api/axios";
import Moment from 'moment';
export default function Kegiatan() {
    const [kegiatan, setKegiatan] = useState([{
        id: 0,
        name: '',
        description: '',
        time: '',
        semesterID: 0
    }])
    const token = getCookie('token')
    useEffect(() => {
        //get dashboard
        axios.get('activities', {
            headers: {
                'x-access-token': 'api-key',
                'Authorization': `token ${token}`
            }
        })
            .then((res) => {
                setKegiatan(res.data.data);
            })
    }, [])
    return (
        <Stack spacing={4}>
            <Text fontSize='2xl' mb="-25px" color={"#464E56"}><b>Kegiatan Montessori</b></Text>
            <Flex color='white'>
                <Center pr={23}>
                    <Input h={55} w={300} color={"#6D7878"} backgroundColor="#FFFFFF"
                        // value={value}
                        // onChange={handleChange}
                        placeholder='Masukkan Nama Kegiatan...'
                        size='lg'
                        style={{ marginBottom: '10px' }} />
                </Center>
                <Center h={123} pb={2.5}>
                    <Button backgroundColor="#6867AC" h={54} w={150}>Cari Kegiatan</Button>
                </Center>
            </Flex>
            <Box borderWidth='1px' backgroundColor="white" borderRadius='xl'>
                <Flex p={5}>
                    <Text fontSize='xl' color={"#464E56"}><b>{kegiatan.length} Kegiatan Terdaftar</b></Text>
                    <Spacer />
                    <Link to='/kegiatan/add'><Button backgroundColor="white" color={'black'} variant='outline'>Tambah Kegiatan <AddIcon ml={2} w={3} mt={0.5} /></Button></Link>
                </Flex>
                <TableContainer>
                    <Table variant='striped'>
                        <Thead>
                            <Tr>
                                <Th>No</Th>
                                <Th>Semester</Th>
                                <Th>Kegiatan Montessori</Th>
                                <Th>Deskripsi</Th>
                                <Th>Tanggal Kegiatan</Th>
                                {/* <Th>Aksi</Th> */}
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                kegiatan.map((data, index) => {
                                    return (
                                        <Tr key={data.id}>
                                            <Td>{index + 1}</Td>
                                            <Td>{data.semesterID}</Td>
                                            <Td>{data.name}</Td>
                                            <Td>{data.description}</Td>
                                            <Td >{Moment(data.time).format('YYYY-MM-DD')}</Td>
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