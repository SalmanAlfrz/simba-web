import React, { useEffect, useState } from 'react'
import {Stack,
    Button,
    Text,Input, Select, Textarea,Spacer,HStack
} from '@chakra-ui/react';
import { Link,useNavigate } from 'react-router-dom';
import axios from "../Api/axios";
import { getCookie } from 'typescript-cookie';
import { ChevronDownIcon } from '@chakra-ui/icons'
import { ChevronLeftIcon } from '@chakra-ui/icons'
interface FormGradeProps { }
export default function FormGrade() {
    const token = getCookie('token')
    const navigate = useNavigate()
    const [student_id, setstudent_id] = useState("")
    const [activity_id, setactivity_id] = useState("")
    const [value, setvalue] = useState("")
    const [description, setvdescription] = useState("")
    const [kegiatan, setKegiatan] = useState([{
        id:0,
        name:'',
        description:'',
        time:'',
        semesterID:0
    }])
    const [murid, setMurid] = useState({
        student:{
            id:0,
            name:'',
            birthDate:0
        },
        analytics:'',
        reports:[{
            value:'',
            description:'',
            activity:''
        }]
    })
    const url = window.location.href
    const id = url.substring(url.length - 1)
    useEffect(() => {
        axios.get('activities', {
            headers: {
              'x-access-token': 'api-key',
              'Authorization': `token ${token}`
            }
          })
          .then((res) => {
              setKegiatan(res.data.data);
          })
          
        axios.get('reports?student_id='+id+'&semester_id=1', {
            headers: {
              'x-access-token': 'api-key',
              'Authorization': `token ${token}`
            }
          })
          .then((res) => {
              let data = res.data.data
              setMurid(data)
          })
      },[])
      const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        axios.post('reports', {
            student_id: Number(id),
            activity_id: Number(activity_id),
            value: Number(value),
            description: description
        }, {
            headers: {
                'x-access-token': 'api-key',
                'Authorization': `token ${token}`
            }
        })
        // alert('Data berhasil ditambahkan')
        // navigate('/murid/detail'+id)
    }
    console.log(id,activity_id,value,description)
    return (
        <Stack spacing={5}>
            <HStack>
                <Text fontSize='2xl'color={"#464E56"}><b>Form Nilai Kegiatan Montessori Murid</b></Text>
                <Spacer/>
                <Link to="/murid/detail"><ChevronLeftIcon w={7} h={7}/></Link><Link to="/murid/detail"><Text fontSize='lg'color={"#464E56"}>Kembali Ke Halaman Sebelumnya</Text></Link>
            </HStack>
            <br />
            <form onSubmit={handleSubmit} >
            <Text fontSize='lg'>Nama</Text>
            <Input h={67} backgroundColor={"#ffffff"} color={"#6D7878"}
                onChange={(e) => setstudent_id(e.target.value)}
                value={murid.student.name}
                placeholder='Masukkan Nama Murid'
                size='lg'
                style={{ marginBottom: '10px' }} disabled/>
            <Text fontSize='lg'>Jenis Kegiatan Montessori</Text>
            <Select placeholder='Pilih Jenis Kegiatan Montessori' h={67} backgroundColor={"#ffffff"} color={"#6D7878"} onChange={(e) => setactivity_id(e.target.value)}>
                {
                    kegiatan.map((data,index)=>{
                        return(<option value={data.id} key={index}>{data.name}</option>)
                    })
                }
            </Select>
            <Text fontSize='lg'>Nilai</Text>
            <Input h={67} backgroundColor={"#ffffff"} color={"#6D7878"}
                onChange={(e) => setvalue(e.target.value)}
                value={value}
                placeholder='Masukkan nilai kegiatan...'
                size='lg'
                style={{ marginBottom: '10px' }} />
            <Text fontSize='lg'>Deskripsi</Text>
            <Textarea value={description} placeholder='Masukan deskripsi nilai kegiatan...' backgroundColor={"#ffffff"} color={"#6D7878"} h={150} onChange={(e) => setvdescription(e.target.value)}/>
            <br />
            <Button type="submit" marginTop={10} color={"#ffffff"} backgroundColor="#6867AC" height={67}>Simpan</Button>
            </form>
        </Stack>
    )
}