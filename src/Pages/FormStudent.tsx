import React, { useEffect, useState } from 'react'
import {
    Stack,
    Button,
    Text,Input, Select, HStack,Spacer
  } from '@chakra-ui/react';
import { Link, useNavigate  } from "react-router-dom"
import { ChevronDownIcon } from '@chakra-ui/icons'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import axios from "../Api/axios";
import { getCookie } from 'typescript-cookie';
interface FormGradeProps{}
export default function FormStudent(){
    const token = getCookie('token')
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [birthDate, setbirthDate] = useState("")
    useEffect(() => {
        // get token
        
      },[])
      const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        axios.post('students', {
            name: name,
            birthDate: birthDate
        },{
          headers: {
            'x-access-token': 'api-key',
            'Authorization': `token ${token}`
          }
        })
        alert('Data berhasil ditambahkan')
        navigate('/murid')
    }
    return (
    <Stack spacing={5}>
        <HStack>
            <Text fontSize='2xl' color={"#464E56"}><b>Form Tambah Murid</b></Text>
            <Spacer/>
            <Link to="/murid"><ChevronLeftIcon w={7} h={7}/></Link><Link to="/murid"><Text fontSize='lg'color={"#464E56"}>Kembali Ke Halaman Sebelumnya</Text></Link>
        </HStack>
        <br />
        <form onSubmit={handleSubmit} >
        <Text fontSize='lg'>Nama</Text>
        <Input h={67} backgroundColor={"#ffffff"} color={"#6D7878"}
            // value={value}
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder='Masukkan nama murid'
            size='lg'
            style={{marginBottom:'10px'}}/>
        <Text fontSize='lg'>Tempat Lahir</Text>
        <Input h={67} backgroundColor={"#ffffff"} color={"#6D7878"}
            // value={value}
            // onChange={handleChange}
            placeholder='Masukkan tempat lahir murid'
            size='lg'
            style={{marginBottom:'10px'}}/>
        <Text fontSize='lg'>Tanggal Lahir</Text>
        <Input  h={67} backgroundColor={"#ffffff"} color={"#6D7878"}
            placeholder="Masukkan tanggal lahir murid"
            size="md"
            type="date"
            onChange={(e) => setbirthDate(e.target.value)}
            value={birthDate}
            />
        <Text fontSize='lg'>Alamat</Text>
        <Input h={67} backgroundColor={"#ffffff"} color={"#6D7878"}
            // value={value}
            // onChange={handleChange}
            placeholder='Masukkan alamat murid'
            size='lg'
            style={{marginBottom:'10px'}}/>
        <Text fontSize='lg'>Jenis Kelamin</Text>
        <Select placeholder='Pilih jenis kelamin' h={67} backgroundColor={"#ffffff"} color={"#6D7878"}>
            <option value='Laki-laki'>Laki-laki</option>
            <option value='Perempuan'>Perempuan</option>
        </Select>
        <br />
        <Button type="submit" marginTop={10} color={"#ffffff"} backgroundColor="#6867AC" height={67}>Simpan</Button>
        </form>
    </Stack>
    )
}