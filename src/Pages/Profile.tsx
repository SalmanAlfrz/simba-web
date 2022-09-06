import { Box, Stack, HStack, Center, Button, Text, Avatar, Input, Table, Thead, Tr, Th, Td, Tbody, Flex, Spacer } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon } from '@chakra-ui/icons'
export default function DetailStudent() {
    return (
        <Stack spacing={4}>
            <HStack>
                <Spacer/>
                <Link to="/dashboard"><ChevronLeftIcon w={7} h={7}/></Link><Link to="/dashboard"><Text fontSize='lg'color={"#464E56"}>Kembali Ke Halaman Sebelumnya</Text></Link>
            </HStack>
            <HStack>
                <Avatar size='xl' name='Nassya Putri Riyani' src='../Images/murid.PNG' />
                <Stack pl={5}>
                    <Text fontSize='2xl' color={"#464E56"}><b>Nassya Putri Riyani</b></Text>
                    <Text fontSize='lg' color={"#464E56"}>3 Years</Text>
                </Stack>
                <Spacer />
                <Button mt={8} borderColor="#ff0000" backgroundColor="white" color={'#ff0000'} h={50} variant='outline'>Sign Out</Button>
            </HStack>
            <Stack spacing={5} pt={5}>
                <Text fontSize='xl' color={"#464E56"}><b>Informasi Akun</b></Text>
                <Stack spacing={5}>
                    <Text fontSize='lg'>Email</Text>
                    <Input h={67} backgroundColor={"#ffffff"} color={"#6D7878"}
                        // value={value}
                        // onChange={handleChange}
                        placeholder='Masukkan email...'
                        size='lg'
                        style={{ marginBottom: '10px' }} />
                    <br />
                    <Text fontSize='lg' color={"#f00"}>Masukkan kata sandi baru hanya jika Anda ingin mengubah kata sandi akun anda.</Text>
                    <Text fontSize='lg' color={"#6D7878"} mt={5}>Kata Sandi</Text>
                    <Input h={67} backgroundColor={"#ffffff"} color={"#6D7878"} size='lg'
                        // onChange={(e) => setPwd(e.target.value)}
                        // value={pwd}
                        pr='4.5rem'
                        placeholder='Masukkan password'
                    />
                    <br />
                    <Button marginTop={10} color={"#ffffff"} backgroundColor="#6867AC" height={67}>Simpan</Button>
                </Stack>
            </Stack>
        </Stack>
    )
}