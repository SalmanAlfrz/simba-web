import React from "react";
import background from "../Images/SignIn.svg";
import { Image, Spacer, Center, Square, Text, Box,Stack, Input,InputGroup,InputRightElement, Button, ButtonGroup, Link } from '@chakra-ui/react'
interface ForgotPasswordProps{

}
export default function ForgotPassword(){
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    return(
        <Center style={{paddingTop:'12px'}}>
            <Box borderWidth='1px' borderRadius='xl'w={1300} h={720}>
                <Center h={720} color='white'>
                    <Stack spacing={3}>
                        <Text fontSize='5xl' color={"#464E56"}><b>Forgot your password?</b></Text>
                        <Text fontSize='xl' color={"#6D7878"} style={{marginBottom:'72px'}}>No worries, you’ll get a reset instructions.</Text>
                        <Text fontSize='lg' color={"#6D7878"}>Email</Text>
                        <Input h={67} color={"#6D7878"}
                            // value={value}
                            // onChange={handleChange}
                            placeholder='Enter your email ...'
                            size='lg'
                            style={{marginBottom:'10px'}}/>
                        <Link color={"#6867AC"} style={{marginBottom:'50px',textAlign:'right'}}>Back to login</Link>
                        <Button backgroundColor="#6867AC">Reset My Password</Button>
                    </Stack>
                </Center>
            </Box>
        </Center>
    )
}