import { useState, useEffect } from "react";
import React from "react";
import background from "../Images/SignIn.svg";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Flex, Center, Text, Box, Stack, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'
import { getCookie, setCookie } from 'typescript-cookie'
import { Link, useNavigate } from "react-router-dom"
import axios from "../Api/axios";

export default function SignIn() {
    const navigate = useNavigate()
    const token = getCookie('token')
    useEffect(() => {
        if (token) {
            navigate('/dashboard')
        }
        else {
            navigate('/login')
        }
    }, [])
    const [email, setEmail] = useState("")
    const [pwd, setPwd] = useState("")
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        if (!email) {
            return (
                alert('Masukkan email')
            )
        }
        else if (!pwd) {
            alert('Masukkan password')
        }
        else {
            axios.post('sign-in', {
                email: email,
                password: pwd,
            }, {
                headers: {
                    'x-access-token': 'api-key'
                },
            }).then(function (response) {
                // handle success
                setCookie('token', response.data.access_token, { expires: 1 });
                alert('Login Berhasil')
                navigate('/dashboard')
            })
                .catch(function (error) {
                    // handle error
                    alert('Email atau Password Salah!')
                })
        }
    }
    return (
        <Center style={{ paddingTop: '12px' }}>
            <Box borderWidth='1px' borderRadius='xl' w={1300} h={720}>
                <Flex color='white' style={{ alignItems: 'center' }}>
                    <Center>
                        <img src={background} style={{ borderRadius: '10px', height: '720px' }} />
                    </Center>
                    <Center>
                        <Stack spacing={3}>
                            <Text fontSize='5xl' color={"#464E56"}><b>Selamat Datang</b></Text>
                            <Text fontSize='xl' color={"#6D7878"} style={{ marginBottom: '50px' }}>Sangat menyenangkan melihatmu menggunakan SIMBA,<br></br>ayo login sekarang!</Text>
                            <form onSubmit={handleSubmit} >
                                <Text fontSize='lg' color={"#6D7878"}>Email</Text>
                                <Input h={67} color={"#6D7878"}
                                    // value={value}
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    placeholder='Masukkan email'
                                    size='lg'
                                    style={{ marginBottom: '10px' }} />
                                <Text fontSize='lg' color={"#6D7878"} mt={5}>Kata Sandi</Text>
                                <InputGroup size='lg' color={"#6D7878"} style={{ marginBottom: '10px' }}>
                                    <Input h={67} size='lg'
                                        onChange={(e) => setPwd(e.target.value)}
                                        value={pwd}
                                        pr='4.5rem'
                                        type={show ? 'text' : 'password'}
                                        placeholder='Masukkan password'
                                    />
                                    <InputRightElement width='4.5rem'>
                                        <Button mt={5} size='sm' onClick={handleClick}>
                                            {show ? <ViewIcon /> : <ViewOffIcon />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                <Link to="/forgot-password"><Text color={"#6867AC"} style={{ marginBottom: '50px', textAlign: 'right' }}>Lupa Kata Sandi?</Text></Link>
                                <Button h={50} w={500} type="submit" backgroundColor="#6867AC">Login</Button>
                            </form>
                        </Stack>
                    </Center>
                </Flex>
            </Box>
        </Center>
    )
}