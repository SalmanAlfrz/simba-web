import React, { useEffect, useState } from 'react'
import {
    Stack,
    Button,
    Text, Input, Select, HStack, Spacer
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeftIcon } from '@chakra-ui/icons'
import axios from "../Api/axios";
import { getCookie } from 'typescript-cookie'
interface FormParentProps { }
export default function FormParent() {
    const token = getCookie('token')
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone_number, setPhone_number] = useState("")
    const [student_id, setStudent_id] = useState("")
    const [murid, setMurid] = useState([{
        id:0,
        name:'',
        birthDate:0
    }])
    useEffect(() => {
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
    }, [])
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        axios.post('parents', {
            name: name,
            email: email,
            password: password,
            phone_number: phone_number,
            student_id: Number(student_id)
        }, {
            headers: {
                'x-access-token': 'api-key',
                'Authorization': `token ${token}`
            }
        })
        alert('Data berhasil ditambahkan')
        navigate('/orang-tua')
    }
    return (
        <Stack spacing={5}>
            <HStack>
                <Text fontSize='2xl' color={"#464E56"}><b>Form Tambah Orang Tua</b></Text>
                <Spacer />
                <Link to="/orang-tua"><ChevronLeftIcon w={7} h={7} /></Link><Link to="/orang-tua"><Text fontSize='lg' color={"#464E56"}>Kembali Ke Halaman Sebelumnya</Text></Link>
            </HStack>
            <br />
            <form onSubmit={handleSubmit} >
            <Text mb={2} fontSize='lg'>Nama Orang Tua</Text>
            <Input h={67} backgroundColor={"#ffffff"} color={"#6D7878"}
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder='Masukkan nama orang tua...'
                size='lg'/>
            <Text mb={2} mt={5} fontSize='lg'>Nama Anak</Text>
            <Select placeholder='Pilih anak' h={67} backgroundColor={"#ffffff"} color={"#6D7878"} 
                onChange={(e) => setStudent_id(e.target.value)}>
                {
                    murid.map((data,index) => {
                        return(<option key={index} value={data.id}>{data.name}</option>)
                    })
                }
            </Select>
            <Text mb={2} mt={5} fontSize='lg'>Nomor Telepon</Text>
            <Input h={67} backgroundColor={"#ffffff"} color={"#6D7878"}
                onChange={(e) => setPhone_number(e.target.value)}
                value={phone_number}
                placeholder='Masukkan nomor telepon...'
                size='lg'
                style={{ marginBottom: '10px' }} />
            <br />
            <Text  fontSize='2xl' mb={2} mt={5} color={"#464E56"}><b>Credential</b></Text>
            <Text mb={2} mt={5} fontSize='lg' >Email</Text>
            <Input h={67} backgroundColor={"#ffffff"} color={"#6D7878"}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder='Masukkan email...'
                size='lg'/>
            <Text mb={2} mt={5} fontSize='lg' >Kata Sandi</Text>
            <Input h={67} backgroundColor={"#ffffff"} color={"#6D7878"}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder='Masukkan kata sandi...'
                size='lg'/>
            <br />
            <Button type="submit" marginTop={10} color={"#ffffff"} backgroundColor="#6867AC" w='100%' height={67}>Simpan</Button>
            </form>
        </Stack>
    )
}