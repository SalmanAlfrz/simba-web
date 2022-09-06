import React, { useEffect, useState } from 'react'
import {
    Stack,
    Button,
    HStack,
    Text, Spacer, Input, Select, Textarea
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeftIcon } from '@chakra-ui/icons'
import axios from "../Api/axios";
import { getCookie } from 'typescript-cookie';
import { AddIcon } from '@chakra-ui/icons'
interface FormKegiatanProps { }
export default function FormKegiatan() {
    const token = getCookie('token')
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [time, setTime] = useState("")
    const [semester_id, setSemester_id] = useState("")
    const [description, setDescription] = useState("")
    const [semester, setSemester] = useState([{
        id:0,
        name:''
    }])
    useEffect(() => {
        // get token
        axios.get('semesters', {
            headers: {
              'x-access-token': 'api-key',
              'Authorization': `token ${token}`
            }
          })
          .then((res) => {
              setSemester(res.data.data);
          })
    }, [])
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        axios.post('activities', {
            name: name,
            time: time,
            semester_id: Number(semester_id),
            description: description
        }, {
            headers: {
                'x-access-token': 'api-key',
                'Authorization': `token ${token}`
            }
        })
        alert('Data berhasil ditambahkan')
        navigate('/kegiatan')
    }
    return (
        <Stack spacing={5}>
            <HStack>
                <Text fontSize='2xl' color={"#464E56"}><b>Form Tambah Kegiatan Montessori</b></Text>
                <Spacer />
                <Link to="/kegiatan"><ChevronLeftIcon w={7} h={7} /></Link><Link to="/kegiatan"><Text fontSize='lg' color={"#464E56"}>Kembali Ke Halaman Sebelumnya</Text></Link>
            </HStack>
            <br />
            <form onSubmit={handleSubmit} >
            <Text fontSize='lg'>Semester</Text>
            <Select placeholder='Pilih Semester' h={67} backgroundColor={"#ffffff"} color={"#6D7878"} 
                onChange={(e) => setSemester_id(e.target.value)}>
                {semester.map((data,index) => {
                    return(<option value={data.id} key={index}>{data.name}</option>)
                })}
            </Select>
            <Text fontSize='lg'>Kegiatan Montessori</Text>
            <Input h={67} backgroundColor={"#ffffff"} color={"#6D7878"}
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder='Masukkan Kegiatan Montessori...'
                size='lg'
                style={{ marginBottom: '10px' }} />
            <Text fontSize='lg'>Deskripsi</Text>
            <Textarea value={description} placeholder='Masukan deskripsi nilai kegiatan...' backgroundColor={"#ffffff"} color={"#6D7878"} h={150} onChange={(e) => setDescription(e.target.value)}/>
            <Text fontSize='lg'>Tanggal Kegiatan Montessori</Text>
            <Input h={67} backgroundColor={"#ffffff"} color={"#6D7878"}
                placeholder="Masukkan Kegiatan Montessori"
                size="md"
                type="date"
                onChange={(e) => setTime(e.target.value)}
                value={time}
            />
            <br />
            <Button type="submit" marginTop={10} color={"#ffffff"} backgroundColor="#6867AC" height={67} >Simpan</Button>
            </form>
        </Stack>
    )
}