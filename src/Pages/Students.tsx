import React, { useEffect, useState } from 'react'
import {Box, Stack, Button,Text, Center, Select, Input, Grid, Flex, Avatar, Menu} from '@chakra-ui/react';
import { Link} from 'react-router-dom';
import { getCookie } from 'typescript-cookie';
import axios from "../Api/axios";
import { render } from '@testing-library/react';
export default function Students(){
    const [murid, setMurid] = useState([{
        id:'',
        name:'',
        birthDate:''
    }])
    const token = getCookie('token')
    useEffect(() => {
        //get dashboard
        axios.get('students', {
          headers: {
            'x-access-token': 'api-key',
            'Authorization': `token ${token}`
          }
        })
        .then((res) => {
            let data = res.data.data
            setMurid(data)
        })
      },[])
      console.log(murid)
    return (
        <Stack spacing={4}>
            <Text fontSize='2xl' mb="-25px" color={"#464E56"}><b>Murid</b></Text>
            <Flex color='white'>
                <Center pr={23}>
                <Input h={55} w={300} color={"#6D7878"} backgroundColor="#FFFFFF"
                // value={value}
                // onChange={handleChange}
                placeholder='Masukkan nama murid...'
                size='lg'
                style={{marginBottom:'10px'}}/>
                </Center>
                <Center h={123} pb={2.5}>
                    <Button backgroundColor="#6867AC" h={54} w={150}>Cari Murid</Button>
                </Center>
            </Flex>
            <Flex pt={5}>
                <Text fontSize='2xl' color={"#464E56"}><b>{murid.length} Students Available</b></Text>
            </Flex>
            <Grid templateColumns='repeat(3, 1fr)' gap={20}>
                {
                    murid.map((data)=>{
                        return(
                            <Box borderWidth='1px' backgroundColor="white" borderRadius='xl' h={358} w={290}>
                                <Stack spacing={2} mt={10}>
                                    <Center>
                                        <Avatar size='2xl' name={data.name} src='' />
                                    </Center>
                                    <Center pt={5}>
                                        <Text fontSize='lg' color={"#464E56"}><b>{data.name}</b></Text>
                                    </Center>
                                    <Center>
                                        <Text fontSize='lg' color={"#464E56"}>3 Years</Text>
                                    </Center>
                                    <Center>
                                        <Link to='/murid/detail'><Button backgroundColor="#6867AC" color={'white'} h={54} w={150}>Details</Button></Link>
                                    </Center>
                                </Stack>
                            </Box>
                        )
                    })
                }
            </Grid>
        </Stack>
    )
}