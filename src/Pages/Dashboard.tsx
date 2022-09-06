import React, { useEffect, useState } from 'react'
import { Box, Stack, Button, Text, Center, MenuButton, MenuList, MenuItem, Flex, Spacer, Menu } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { getCookie } from 'typescript-cookie';
import axios from "../Api/axios";
// import Plot from 'react-plotly.js';

declare function require(moduleName: string): any;
var Plotly = require('plotly.js/lib/index-basic.js');
var input = [
  {
    kategori: "baca",
    ekspresi: "neutral",
    count: 20

  },
  {
    kategori: "baca",
    ekspresi: "negative",
    count: 10

  },
  {
    kategori: "baca",
    ekspresi: "positif",
    count: 70

  },
  {
    kategori: "menulis",
    ekspresi: "neutral",
    count: 20

  },
  {
    kategori: "menulis",
    ekspresi: "negative",
    count: 15

  },
  {
    kategori: "menulis",
    ekspresi: "positif",
    count: 40
  },
  {
    kategori: "menggambar",
    ekspresi: "neutral",
    count: 30

  },
  {
    kategori: "menggambar",
    ekspresi: "negative",
    count: 10

  },
  {
    kategori: "menggambar",
    ekspresi: "positif",
    count: 50
  },
]
let kategoris: string[] = [];
let ekspresis: string[]=[];
let counts: number[]=[];
for(var i = 0; i<input.length;i++)
{
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

export default function Dashboard() {
  const [today_activities, setTodayActivities] = useState([{
  }])
  const [murid, setMurid] = useState()
  const [kegiatan, setKegiatan] = useState()
  const [guru, setGuru] = useState()
  const [parents, setparents] = useState()
  const token = getCookie('token')
  useEffect(() => {
    //get dashboard

    Plotly.newPlot('chart', data, layout);
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
        setTodayActivities(res.data.data.today_activities);
      })
  }, [])

  return (
    <Stack spacing={4}>
      <Text fontSize='2xl' color={"#464E56"}><b>Rekapitulasi</b></Text>
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
        <Text fontSize='2xl' color={"#464E56"}><b>Analisis Hari Ini</b></Text>
        <Spacer />
        <Menu>
          <MenuButton as={Button} background="white" rightIcon={<ChevronDownIcon />}>
            <Text fontSize='md' color={"#6867AC"}>Pilih Kegiatan</Text>
          </MenuButton>
          <MenuList>
            {
              // today_activities.map((data) => {
              //   return(
              //     <MenuItem>{data}</MenuItem>
              //   )
              // })
            }
          </MenuList>
        </Menu>
      </Flex>
      <Box borderWidth='1px' backgroundColor="white" borderRadius='xl' p={5}>
        <Center>
          <div id="chart">{}</div>
        </Center>
      </Box>
    </Stack>
  )
}