import React, { useEffect, useState } from 'react'
import { Box, Center, Stack, Button, HStack, Text, Avatar, TableContainer, Table, Thead, Tr, Th, Td, Tbody, Flex, Spacer } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { AddIcon, ChevronLeftIcon } from '@chakra-ui/icons'
import axios from "../Api/axios";
import { getCookie } from 'typescript-cookie';

declare function require(moduleName: string): any;
var Plotly = require('plotly.js/lib/index-basic.js');
var input = [
  {
    kategori: "Membaca",
    ekspresi: "Angry",
    count: 0

  },
  {
    kategori: "Membaca",
    ekspresi: "Disgust",
    count: 0

  },
  {
    kategori: "Membaca",
    ekspresi: "Fear",
    count: 0

  },
  {
    kategori: "Membaca",
    ekspresi: "Happy",
    count: 80

  },
  {
    kategori: "Membaca",
    ekspresi: "Sad",
    count: 0

  },
  {
    kategori: "Membaca",
    ekspresi: "Surprise",
    count: 0
  },
  {
    kategori: "Membaca",
    ekspresi: "Neutral",
    count: 0
  },
  {
    kategori: "Menulis",
    ekspresi: "Angry",
    count: 0

  },
  {
    kategori: "Menulis",
    ekspresi: "Disgust",
    count: 0

  },
  {
    kategori: "Menulis",
    ekspresi: "Fear",
    count: 0

  },
  {
    kategori: "Menulis",
    ekspresi: "Happy",
    count: 60

  },
  {
    kategori: "Menulis",
    ekspresi: "Sad",
    count: 0

  },
  {
    kategori: "Menulis",
    ekspresi: "Surprise",
    count: 0
  },
  {
    kategori: "Menulis",
    ekspresi: "Neutral",
    count: 0
  },
  {
    kategori: "Menggambar",
    ekspresi: "Angry",
    count: 0

  },
  {
    kategori: "Menggambar",
    ekspresi: "Disgust",
    count: 0

  },
  {
    kategori: "Menggambar",
    ekspresi: "Fear",
    count: 0

  },
  {
    kategori: "Menggambar",
    ekspresi: "Happy",
    count: 70

  },
  {
    kategori: "Menggambar",
    ekspresi: "Sad",
    count: 0

  },
  {
    kategori: "Menggambar",
    ekspresi: "Surprise",
    count: 0
  },
  {
    kategori: "Menggambar",
    ekspresi: "Neutral",
    count: 0
  },
  {
    kategori: "Berhitung",
    ekspresi: "Angry",
    count: 0

  },
  {
    kategori: "Berhitung",
    ekspresi: "Disgust",
    count: 0

  },
  {
    kategori: "Berhitung",
    ekspresi: "Fear",
    count: 0

  },
  {
    kategori: "Berhitung",
    ekspresi: "Happy",
    count: 50

  },
  {
    kategori: "Berhitung",
    ekspresi: "Sad",
    count: 0

  },
  {
    kategori: "Berhitung",
    ekspresi: "Surprise",
    count: 0
  },
  {
    kategori: "Berhitung",
    ekspresi: "Neutral",
    count: 0
  }
]
let kategoris: string[] = [];
let ekspresis: string[] = [];
let counts: number[] = [];
for (var i = 0; i < input.length; i++) {
  kategoris.push(input[i].kategori)
  ekspresis.push(input[i].ekspresi)
  counts.push(input[i].count)
}
var aktivitas1 = {
  x: kategoris,
  y: ekspresis,
  mode: 'markers',
  marker: {
    size: counts
  }
};
var data = [aktivitas1];

var layout = {
  title: 'Data Analisis',
  showlegend: false,
  height: 600,
  width: 600
};
export default function DetailStudent() {
  const token = getCookie('token')
  const [murid, setMurid] = useState({
    student: {
      id: 0,
      name: '',
      birthDate: 0
    },
    analytics: '',
    reports: [{
      value: '',
      description: '',
      activity: {
        name: ''
      }
    }]
  })

  const [kegiatan, setKegiatan] = useState([{
    id: 0,
    name: '',
    description: '',
    time: '',
    semesterID: 0
  }])
  const url = window.location.href
  const id = url.substring(url.length - 1)
  console.log(id)
  useEffect(() => {
    //get dashboard
    Plotly.newPlot('chart', data, layout);
    axios.get('reports?student_id=' + id + '&semester_id=1', {
      headers: {
        'x-access-token': 'api-key',
        'Authorization': `token ${token}`
      }
    })
      .then((res) => {
        let data = res.data.data
        setMurid(data)
      })

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
      <HStack>
        <Spacer />
        <Link to="/murid"><ChevronLeftIcon w={7} h={7} /></Link><Link to="/murid"><Text fontSize='lg' color={"#464E56"}>Kembali Ke Halaman Sebelumnya</Text></Link>
      </HStack>
      <Flex>
        <Avatar size='2xl' name='Nassya Putri Riyani' src='../Images/murid.PNG' />
        <Stack pl={5} pt={8}>
          <Text fontSize='2xl' color={"#464E56"}><b>{murid.student.name}</b></Text>
          <Text fontSize='lg' color={"#464E56"}>3 Years</Text>
        </Stack>
        <Spacer />
        <Button mt={8} mr={5} backgroundColor="#6867AC" color={'white'} >Semester 1</Button>
        <Button mt={8} backgroundColor="white" color={'#6867AC'} variant='outline'>Semester 2</Button>
      </Flex>
      <Stack spacing={20} pt={5}>
        <Box borderWidth='1px' backgroundColor="white" borderRadius='xl' >
          <Center>
            <div id='chart'></div>
          </Center>
        </Box>
        <Box borderWidth='1px' backgroundColor="white" borderRadius='xl' h={490}>
          <Flex p={5}>
            <Text fontSize='xl' color={"#464E56"}><b>Laporan Nilai</b></Text>
            <Spacer />
            <Link to={'/murid/add-nilai/' + murid.student.id}><Button backgroundColor="white" color={'black'} variant='outline'>Tambah Nilai <AddIcon ml={2} /></Button></Link>
          </Flex>
          <TableContainer>
            <Table variant='striped'>
              <Thead>
                <Tr>
                  <Th>Kegiatan Montessori</Th>
                  <Th>Nilai</Th>
                  <Th>Deskripsi</Th>
                </Tr>
              </Thead>
              <Tbody>
                {
                  murid.reports.map((data, index) => {
                    return (
                      <Tr>
                        <Td>{data.activity.name}</Td>
                        <Td>{data.value}</Td>
                        <Td >{data.description}</Td>
                      </Tr>
                    )
                  })
                }
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Stack>
    </Stack>
  )
}