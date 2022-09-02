import React from "react";
import background from "../Images/logo.svg";
import icon_home from "../Images/icon_home.svg";
import icon_students from "../Images/icon_students.svg";
import icon_subjects_active from "../Images/icon_subjects_active.svg";
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
    Spacer,Input, Select, Textarea
  } from '@chakra-ui/react';
  import { Link} from 'react-router-dom';
import { ChevronDownIcon } from '@chakra-ui/icons'
import { AddIcon } from '@chakra-ui/icons'
interface FormKegiatanProps{}
export default function FormKegiatan(){
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
                    <Link to='/dashboard'><Button justifyContent="flex-start" backgroundColor="#ffffff" color="#6D7878" w={180} style={{height:'50px'}}><img src={icon_home} width={21} height={21} alt="" /><Text fontSize='lg' pl={3}><b>Dashboard</b></Text></Button></Link>
                    <Link to='/murid'><Button justifyContent="flex-start" backgroundColor="#ffffff" color="#6D7878" w={180} style={{height:'50px'}}><img src={icon_students} width={21} height={21} alt="" /><Text fontSize='lg' pl={3} ><b>Murid</b></Text></Button></Link>
                    <Link to='/kegiatan'><Button justifyContent="flex-start" backgroundColor="#EDECF8" color="#6867AC" w={180} style={{height:'50px'}}><img src={icon_subjects_active} width={21} height={21} alt="" /><Text fontSize='lg' pl={3} ><b>Kegiatan</b></Text></Button></Link>
                    <Link to='/guru'><Button justifyContent="flex-start" backgroundColor="#ffffff" color="#6D7878" w={180} style={{height:'50px'}}><img src={icon_teachers} width={21} height={21} alt="" /><Text fontSize='lg' pl={3} ><b>Guru</b></Text></Button></Link>
                    <Link to='/orang-tua'><Button justifyContent="flex-start" backgroundColor="#ffffff" color="#6D7878" w={180} style={{height:'50px'}}><img src={icon_parents} width={21} height={21} alt="" /><Text fontSize='lg' pl={3} ><b>Orang Tua</b></Text></Button></Link>
                </Stack>
            </Center>
            </GridItem>
            <GridItem pr={4} pb={10} area={'main'}>
                <Box borderWidth='1px' backgroundColor="#F4F4FB" borderRadius='xl' p={10}>
                <Center>
                <Stack spacing={5} mt={8}>
                    <Text fontSize='2xl' mb="-25px" color={"#464E56"}><b>Form Tambah Kegiatan Montessori</b></Text>
                    <Text fontSize='lg' pt={10}>Semester</Text>
                    <Select placeholder='Pilih Semester' h={67} w={1080} backgroundColor={"#ffffff"} color={"#6D7878"}>
                        <option value='option1'>Semester 1</option>
                        <option value='option2'>Semester 2</option>
                    </Select>
                    <Text fontSize='lg' pt={5}>Kegiatan Montessori</Text>
                    <Input h={67} w={1080} backgroundColor={"#ffffff"} color={"#6D7878"}
                        // value={value}
                        // onChange={handleChange}
                        placeholder='Masukkan Kegiatan Montessori...'
                        size='lg'
                        style={{marginBottom:'10px'}}/>
                    <Text fontSize='lg' pt={5}>Deskripsi</Text>
                    <Textarea placeholder='Masukan deskripsi nilai kegiatan...' backgroundColor={"#ffffff"} color={"#6D7878"} h={150}/>
                    <Text fontSize='lg' pt={5}>Tanggal Kegiatan Montessori</Text>
                    <Input  h={67} w={1080} backgroundColor={"#ffffff"} color={"#6D7878"}
                        placeholder="Masukkan Kegiatan Montessori"
                        size="md"
                        type="datetime-local"
                        />
                        <Button marginTop={10} color={"#ffffff"} backgroundColor="#6867AC" height={67} width={1080}>Simpan</Button>
                </Stack>
                </Center>
                </Box>
            </GridItem>
        </Grid>
    )
}