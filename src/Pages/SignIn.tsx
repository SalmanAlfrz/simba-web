import React from "react";
import background from "../Images/SignIn.svg";
import {ViewIcon, ViewOffIcon} from '@chakra-ui/icons'
import { Flex, Spacer, Center, Square, Text, Box,Stack, Input,InputGroup,InputRightElement, Button, ButtonGroup, Link } from '@chakra-ui/react'
interface SignInProps{

}
export default function SignIn(){
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    return(
        <Center style={{paddingTop:'12px'}}>
            <Box borderWidth='1px' borderRadius='xl'w={1300} h={720}>
            <Flex color='white'  style={{alignItems:'center'}}>
                <Center>
                    <img src={background} style={{borderRadius:'10px',height:'720px'}}/>
                </Center>
                <Center>
                <Stack spacing={3}>
                    <Text fontSize='5xl' color={"#464E56"}><b>Hi, Welcome Back</b></Text>
                    <Text fontSize='xl' color={"#6D7878"} style={{marginBottom:'90px'}}>It’s nice to see you, please give us your detail</Text>
                    <Text fontSize='lg' color={"#6D7878"}>Email</Text>
                    <Input h={67} w={450} color={"#6D7878"}
                        // value={value}
                        // onChange={handleChange}
                        placeholder='Enter your email'
                        size='lg'
                        style={{marginBottom:'10px'}}/>
                    <Text fontSize='lg' color={"#6D7878"}>Password</Text>
                    <InputGroup size='lg' color={"#6D7878"} style={{marginBottom:'10px'}}>
                        <Input h={67} size='lg'
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            placeholder='Enter your password'
                        />
                        <InputRightElement width='4.5rem'>
                            <Button mt={5} size='sm' onClick={handleClick}>
                            {show ?<ViewIcon/> : <ViewOffIcon/>}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <Link color={"#6867AC"} style={{marginBottom:'50px',textAlign:'right'}}>Forgot Password?</Link>
                    <Button backgroundColor="#6867AC">Sign In</Button>
                </Stack>
                </Center>
            </Flex>
            </Box>
        </Center>
    )
}