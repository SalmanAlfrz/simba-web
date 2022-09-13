import React from "react";
import background from "../Images/SignIn.svg";
import { Image, Spacer, Center, Square, Text, Box,Stack, Input,InputGroup,InputRightElement, Button, ButtonGroup } from '@chakra-ui/react'
import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "../Api/axios";

export default function ForgotPassword(){
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const [email, setEmail] = useState("")
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        if (!email) {
            return (
                alert('Masukkan email')
            )
        }
        else {
            axios.post('forgot-password', {
                email: email
            }, {
                headers: {
                    'x-access-token': 'api-key'
                },
            }).then(function (response) {
                // handle success
                alert(response)
                
            }).catch(function (error) {
                    // handle error
                    alert(error)

                })
        }
    }
    return(
        <Center style={{paddingTop:'12px'}}>
            <Box borderWidth='1px' borderRadius='xl'w={1300} h={720}>
                <Center h={720} color='white'>
                    <Stack spacing={3}>
                        <form onSubmit={handleSubmit}>
                        <Text fontSize='5xl' color={"#464E56"}><b>Forgot your password?</b></Text>
                        <Text fontSize='xl' color={"#6D7878"} style={{marginBottom:'72px'}}>No worries, you’ll get a reset instructions.</Text>
                        <Text fontSize='lg' color={"#6D7878"}>Email</Text>
                        <Input h={67} color={"#6D7878"}
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            placeholder='Enter your email ...'
                            size='lg'
                            style={{marginBottom:'10px'}}/>
                        <Link  to="/login"><Text color={"#6867AC"} style={{marginBottom:'50px',textAlign:'right'}}>Back to login</Text></Link>
                        <Button type="submit" backgroundColor="#6867AC">Reset My Password</Button>
                        </form>
                    </Stack>
                </Center>
            </Box>
        </Center>
    )
}