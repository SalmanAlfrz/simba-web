import React, { useEffect, useState } from 'react'
import {
    Stack,
    Button, Text, Input, Spacer, Textarea, HStack, FormControl
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDownIcon } from '@chakra-ui/icons'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import axios from "../Api/axios";
import { getCookie } from 'typescript-cookie';
interface FormGradeProps { }
export default function FormSemester() {
    const token = getCookie('token')
    const navigate = useNavigate()
    const [name, setName] = useState("")
    useEffect(() => {
        // get token

    }, [])
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        axios.post('semesters', {
            name: name
        }, {
            headers: {
                'x-access-token': 'api-key',
                'Authorization': `token ${token}`
            }
        })
        alert('Data berhasil ditambahkan')
        navigate('/semester')
    }
    return (
        <Stack spacing={5}>
            <HStack>
                <Text fontSize='2xl' color={"#464E56"}><b>Form Tambah Semester</b></Text>
                <Spacer />
                <Link to="/semester"><ChevronLeftIcon w={7} h={7} /></Link><Link to="/semester"><Text fontSize='lg' color={"#464E56"}>Kembali Ke Halaman Sebelumnya</Text></Link>
            </HStack>
            <br />
            <form onSubmit={handleSubmit} >
                <Text mb={2} fontSize='lg'>Nama Semester</Text>
                <Input h={67} backgroundColor={"#ffffff"} color={"#6D7878"}
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder='Masukkan nama semester...'
                    size='lg'/>
                <br />
                <Button type="submit" marginTop={10} color={"#ffffff"} backgroundColor="#6867AC" w='100%' height={67}>Simpan</Button>
            </form>
        </Stack>
    )
}