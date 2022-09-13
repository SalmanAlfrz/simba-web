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
    kategori: "Membaca",
    ekspresi: "Angry",
    count: 10

  },
  {
    kategori: "Membaca",
    ekspresi: "Disgust",
    count: 0

  },
  {
    kategori: "Membaca",
    ekspresi: "Fear",
    count: 10

  },
  {
    kategori: "Membaca",
    ekspresi: "Happy",
    count: 40

  },
  {
    kategori: "Membaca",
    ekspresi: "Sad",
    count: 10

  },
  {
    kategori: "Membaca",
    ekspresi: "Surprise",
    count: 20
  },
  {
    kategori: "Membaca",
    ekspresi: "Neutral",
    count: 60
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
    count: 30

  },
  {
    kategori: "Menulis",
    ekspresi: "Sad",
    count: 20

  },
  {
    kategori: "Menulis",
    ekspresi: "Surprise",
    count: 40
  },
  {
    kategori: "Menulis",
    ekspresi: "Neutral",
    count: 60
  },
  {
    kategori: "Menggambar",
    ekspresi: "Angry",
    count: 10

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
    count: 10

  },
  {
    kategori: "Menggambar",
    ekspresi: "Surprise",
    count: 20
  },
  {
    kategori: "Menggambar",
    ekspresi: "Neutral",
    count: 50
  },
  {
    kategori: "Berhitung",
    ekspresi: "Angry",
    count: 10

  },
  {
    kategori: "Berhitung",
    ekspresi: "Disgust",
    count: 0

  },
  {
    kategori: "Berhitung",
    ekspresi: "Fear",
    count: 20

  },
  {
    kategori: "Berhitung",
    ekspresi: "Happy",
    count: 30

  },
  {
    kategori: "Berhitung",
    ekspresi: "Sad",
    count: 40

  },
  {
    kategori: "Berhitung",
    ekspresi: "Surprise",
    count: 20
  },
  {
    kategori: "Berhitung",
    ekspresi: "Neutral",
    count: 30
  }
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