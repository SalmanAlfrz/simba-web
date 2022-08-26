import React from "react";
import background from "../Images/logo.svg";
import icon_home from "../Images/icon_home.svg";
import icon_students_active from "../Images/icon_students_active.svg";
import icon_subjects from "../Images/icon_subjects.svg";
import icon_teachers from "../Images/icon_teachers.svg";
import icon_parents from "../Images/icon_parents.svg";
import {
    Grid,
    GridItem,
    Box,
    Stack,
    Button,
    HStack,
    Text,
    Center,Avatar, WrapItem, Wrap, Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex,
    Spacer,Input, Select
  } from '@chakra-ui/react';
  import { Link} from 'react-router-dom';
import { ChevronDownIcon } from '@chakra-ui/icons'
interface StudentsProps{}
export default function Students(){
    return (
        <Grid
            templateAreas={`"nav header"
                            "nav main"
                            "nav footer"`}
            gridTemplateRows={'90px 1fr'}
            gridTemplateColumns={'300px 1fr'}
            // color='#464E56'
            // fontWeight='bold'
            >
            <GridItem style={{textAlign:"end"}} mr={4} mt={4} pl='2' area={'header'}>
            <Menu>
                <MenuButton h={51} as={Button} background="white" rightIcon={<ChevronDownIcon />}>
                <HStack spacing='0'>
                <Wrap mr={3}>
                    <WrapItem>
                        <Avatar size='md' name='Salman Alfarizi' src='' />
                    </WrapItem>
                </Wrap>
                <Text fontSize='lg' color={"#464E56"}>Salman Alfarizi</Text>
                </HStack>
                </MenuButton>
                <MenuList>
                    <MenuItem>Log Out</MenuItem>
                </MenuList>
                </Menu>
            </GridItem>
            <GridItem w={300} area={'nav'}>
            <Center>
                <Stack spacing={1} mt={10}>
                    <img src={background} style={{height:'100px',marginBottom:'80px'}}/>
                    <Button backgroundColor="#ffffff" color="#6D7878" w={180} style={{height:'50px'}}><img src={icon_home} alt=""  color="#6867AC"/><Text fontSize='lg' pl={3} ><b><Link to='/'>Dashboard</Link></b></Text></Button>
                    <Button backgroundColor="#EDECF8" color="#6867AC" w={180} style={{height:'50px'}}><img src={icon_students_active} alt="" /><Text fontSize='lg' pl={3} color="#6867AC"><b><Link to='/students'>Students</Link></b></Text></Button>
                    <Button backgroundColor="#ffffff" color="#6D7878" w={180} style={{height:'50px'}}><img src={icon_subjects} alt="" /><Text fontSize='lg' pl={3} ><b>Subjects</b></Text></Button>
                    <Button backgroundColor="#ffffff" color="#6D7878" w={180} style={{height:'50px'}}><img src={icon_teachers} alt="" /><Text fontSize='lg' pl={3} ><b>Teachers</b></Text></Button>
                    <Button backgroundColor="#ffffff" color="#6D7878" w={180} style={{height:'50px'}}><img src={icon_parents} alt="" /><Text fontSize='lg' pl={3} ><b>Parents</b></Text></Button>
                    
                </Stack>
            </Center>
            </GridItem>
            <GridItem pr={4} pb={10} area={'main'}>
                <Box borderWidth='1px' backgroundColor="#F4F4FB" borderRadius='xl' p={10}>
                <Center>
                <Stack spacing={4} mt={8}>
                    <Text fontSize='2xl' mb="-25px" color={"#464E56"}><b>Students</b></Text>
                    <Flex color='white'>
                        <Center pr={23}>
                        <Input h={55} w={300} color={"#6D7878"} backgroundColor="#FFFFFF"
                        // value={value}
                        // onChange={handleChange}
                        placeholder='Enter your email'
                        size='lg'
                        style={{marginBottom:'10px'}}/>
                        </Center>
                        <Center pr={23} pb={2.5}>
                        <Select placeholder='Select option' h={55} w={300} color={"#6D7878"} backgroundColor="#FFFFFF">
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                        </Center>
                        <Center h={123} pb={2.5}>
                            <Button backgroundColor="#6867AC" h={54} w={150}>Search</Button>
                        </Center>
                    </Flex>
                    <Flex pt={5}>
                        <Text fontSize='2xl' color={"#464E56"}><b>24 Students Available</b></Text>
                    </Flex>
                    <Grid templateColumns='repeat(3, 1fr)' gap={20}>
                        <Box borderWidth='1px' backgroundColor="white" borderRadius='xl' h={358} w={290}>
                            <Stack spacing={2} mt={10}>
                                <Center>
                                    <Avatar size='2xl' name='Nassya Putri R' src='' />
                                </Center>
                                <Center pt={5}>
                                    <Text fontSize='lg' color={"#464E56"}><b>Nassya Putri R</b></Text>
                                </Center>
                                <Center>
                                    <Text fontSize='lg' color={"#464E56"}>3 Years</Text>
                                </Center>
                                <Center>
                                    <Button backgroundColor="#6867AC" color={'white'} h={54} w={150}><Link to='/students/detail'>Details</Link></Button>
                                </Center>
                            </Stack>
                        </Box>
                    </Grid>
                </Stack>
                </Center>
                </Box>
            </GridItem>
        </Grid>
    )
}