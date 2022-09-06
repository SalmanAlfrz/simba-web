import React, { useEffect, useState } from 'react'
import {
    Stack,
    Button,
    Text,Input, HStack, Spacer
  } from '@chakra-ui/react';
  import { Link, useNavigate } from 'react-router-dom';
  import { ChevronLeftIcon } from '@chakra-ui/icons'
  import axios from "../Api/axios";
  import { getCookie } from 'typescript-cookie'
interface FormTeacherProps{}
export default function FormTeacher(){
    const token = getCookie('token')
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone_number, setPhone_number] = useState("")
    const [nip, setNip] = useState("")
    useEffect(() => {
    }, [])
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        axios.post('teachers', {
            name: name,
            email: email,
            password: password,
            phone_number: phone_number,
            nip: nip
        }, {
            headers: {
                'x-access-token': 'api-key',
                'Authorization': `token ${token}`
            }
        })
        alert('Data berhasil ditambahkan')
        navigate('/guru')
    }
    return (    
    <Stack spacing={5}>
        <HStack>
            <Text fontSize='2xl' color={"#464E56"}><b>Form Tambah Guru</b></Text>
            <Spacer/>
            <Link to="/guru"><ChevronLeftIcon w={7} h={7}/></Link><Link to="/guru"><Text fontSize='lg'color={"#464E56"}>Kembali Ke Halaman Sebelumnya</Text></Link>
        </HStack>
        <br />
        <form onSubmit={handleSubmit} >
        <Text fontSize='lg'>NIP</Text>
        <Input h={67}backgroundColor={"#ffffff"} color={"#6D7878"}
            onChange={(e) => setNip(e.target.value)}
            value={nip}
            placeholder='Masukkan NIP...'
            size='lg'
            style={{marginBottom:'10px'}}/>
        <Text fontSize='lg'>Nama Guru</Text>
        <Input h={67} backgroundColor={"#ffffff"} color={"#6D7878"}
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder='Masukkan Nama Guru...'
            size='lg'
            style={{marginBottom:'10px'}}/>
        <Text fontSize='lg' >Tanggal Lahir</Text>
        <Input  h={67} backgroundColor={"#ffffff"} color={"#6D7878"}
            placeholder="Masukkan tanggal lahir..."
            size="md"
            type="date"
            />
        <Text fontSize='lg' >Nomor Telepon</Text>
        <Input h={67} backgroundColor={"#ffffff"} color={"#6D7878"}
            onChange={(e) => setPhone_number(e.target.value)}
            value={phone_number}
            placeholder='Masukkan nomor telepon...'
            size='lg'
            style={{marginBottom:'10px'}}/>
        <Text fontSize='lg'>Hari Mengajar</Text>
        <Input h={67} backgroundColor={"#ffffff"} color={"#6D7878"}
            // value={value}
            // onChange={handleChange}
            placeholder='Masukkan hari mengajar...'
            size='lg'
            style={{marginBottom:'10px'}}/>
            <br />
        <Text fontSize='2xl' mb="-25px" mt={5} color={"#464E56"}><b>Credential</b></Text>
        <Text fontSize='lg'>Email</Text>
        <Input h={67} backgroundColor={"#ffffff"} color={"#6D7878"}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder='Masukkan email...'
            size='lg'
            style={{marginBottom:'10px'}}/>
        <Text fontSize='lg'>Kata Sandi</Text>
        <Input h={67} backgroundColor={"#ffffff"} color={"#6D7878"}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder='Masukkan kata sandi...'
            size='lg'
            style={{marginBottom:'10px'}}/>
        <br />
        <Button type="submit" marginTop={10} color={"#ffffff"} backgroundColor="#6867AC" height={67}>Simpan</Button>
        </form>
    </Stack>
    )
}