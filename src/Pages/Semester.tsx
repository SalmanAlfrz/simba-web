import React, { useEffect, useState } from 'react'
import { getCookie } from 'typescript-cookie';
import axios from "../Api/axios";
import {
    Box,
    Stack,
    Button,Text,
    Center,Flex,
    Spacer,Input
  } from '@chakra-ui/react';
import {
Table, Thead, Tbody, Tr, Th, Td, TableContainer,
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { Link} from 'react-router-dom';
export default function Semester(){
    const [semester, setSemester] = useState([{
        id:0,
        name:''
    }])
    const token = getCookie('token')
    useEffect(() => {
        //get dashboard
        axios.get('semesters', {
          headers: {
            'x-access-token': 'api-key',
            'Authorization': `token ${token}`
          }
        })
        .then((res) => {
            setSemester(res.data.data);
        })
      },[])
    return (
        <Stack spacing={4}>
            <Text fontSize='2xl' mb="-25px" color={"#464E56"}><b>Semester</b></Text>
            <br />
            <Box borderWidth='1px' backgroundColor="white" borderRadius='xl' h={490}>
                <Flex p={5}>
                    <Text fontSize='xl' color={"#464E56"}><b>{semester.length} Semester Terdaftar</b></Text>
                    <Spacer />
                    <Link to='/semester/add'><Button backgroundColor="white" color={'black'} variant='outline'>Tambah Semester <AddIcon ml={2} w={3} mt={0.5}/></Button></Link>
                </Flex>
                <TableContainer>
                    <Table variant='striped'>
                        <Thead>
                        <Tr>
                            <Th>No</Th>
                            <Th>Nama Semester</Th>
                        </Tr>
                        </Thead>
                        <Tbody>
                            {
                                semester.map((data, index)=>{
                                    return(
                                        <Tr key={data.id}>
                                            <Td>{index+1}</Td>
                                            <Td>{data.name}</Td>
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