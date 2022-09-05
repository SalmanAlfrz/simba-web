import React, { useEffect, useState } from 'react'
import {Box, Stack, Button,Text, Center, MenuButton, MenuList, MenuItem, Flex, Spacer, Menu} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { getCookie } from 'typescript-cookie';
import axios from "../Api/axios";
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bubble } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);  
export default function Dashboard(){
    const [murid, setMurid] = useState()
    const [kegiatan, setKegiatan] = useState()
    const [guru, setGuru] = useState()
    const [parents, setparents] = useState()
    const token = getCookie('token')
    useEffect(() => {
        //get dashboard
        axios.get('dashboard', {
          headers: {
            'x-access-token': 'api-key',
            'Authorization': `token ${token}`
          }
        })
        .then((res) => {
            setMurid(res.data.data.count_student);
            setKegiatan(res.data.data.count_activity);
            setGuru(res.data.data.count_teacher);
            setparents(res.data.data.count_parent);
        })
      },[])

    const options = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };
      
    const data = {
        datasets: [
          {
            label: 'Red dataset',
            data: Array.from({ length: 50 }, () => ({
              x: faker.datatype.number({ min: -100, max: 100 }),
              y: faker.datatype.number({ min: -100, max: 100 }),
              r: faker.datatype.number({ min: 5, max: 20 }),
            })),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Blue dataset',
            data: Array.from({ length: 50 }, () => ({
              x: faker.datatype.number({ min: -100, max: 100 }),
              y: faker.datatype.number({ min: -100, max: 100 }),
              r: faker.datatype.number({ min: 5, max: 20 }),
            })),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };

    return (
        <Stack spacing={4}>
            <Text fontSize='2xl' color={"#464E56"}><b>Summary</b></Text>
            <Box borderWidth='1px' backgroundColor="white" borderRadius='xl' h={123}>
            <Flex color='white'>
                <Center w='25%' h={123}>
                <Stack spacing={2} textAlign='center'>
                    <Text fontSize='2xl' color={"#464E56"}><b>{murid}</b></Text>
                    <Text fontSize='md' color={"#6D7878"}>Murid</Text>
                </Stack>
                </Center>
                <Center w='25%'>
                <Stack spacing={2} textAlign='center'>
                    <Text fontSize='2xl' color={"#464E56"}><b>{kegiatan}</b></Text>
                    <Text fontSize='md' color={"#6D7878"}>Kegiatan</Text>
                </Stack>
                </Center>
                <Center w='25%' h={123}>
                <Stack spacing={2} textAlign='center'>
                    <Text fontSize='2xl' color={"#464E56"}><b>{guru}</b></Text>
                    <Text fontSize='md' color={"#6D7878"}>Guru</Text>
                </Stack>
                </Center>
                <Center w='25%'>
                <Stack spacing={2} textAlign='center'>
                    <Text fontSize='2xl' color={"#464E56"}><b>{parents}</b></Text>
                    <Text fontSize='md' color={"#6D7878"}>Orang Tua</Text>
                </Stack>
                </Center>
            </Flex>
            </Box>
            <Flex pt={5}>
                <Text fontSize='2xl' color={"#464E56"}><b>Today Analytics</b></Text>
                <Spacer />
                <Menu>
                    <MenuButton as={Button} background="white" rightIcon={<ChevronDownIcon />}>
                    <Text fontSize='md' color={"#6867AC"}>Choose Subjects</Text>
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Students</MenuItem>
                        <MenuItem>Subjects</MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
            <Box borderWidth='1px' backgroundColor="white" borderRadius='xl' h={490}>
                <Bubble options={options} data={data} />
            </Box>
        </Stack>
    )
}