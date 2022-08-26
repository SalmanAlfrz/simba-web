import React from "react";
import background from "../Images/logo.svg";
import icon_home_active from "../Images/icon_home_active.svg";
import icon_students from "../Images/icon_students.svg";
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
    Spacer,
  } from '@chakra-ui/react';
  import { Link} from 'react-router-dom';
import { ChevronDownIcon } from '@chakra-ui/icons'
interface DashboardProps{}
export default function Dashboard(){
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
                    <Button backgroundColor="#EDECF8" color="#6867AC" w={180} style={{height:'50px'}}><img src={icon_home_active} alt="" /><Text fontSize='lg' pl={3} color={"#6867AC"} ><b><Link to='/'>Dashboard</Link></b></Text></Button>
                    <Button backgroundColor="#ffffff" color="#6D7878" w={180} style={{height:'50px'}}><img src={icon_students} alt="" /><Text fontSize='lg' pl={3} ><b><Link to='/students'>Students</Link></b></Text></Button>
                    <Button backgroundColor="#ffffff" color="#6D7878" w={180} style={{height:'50px'}}><img src={icon_subjects} alt="" /><Text fontSize='lg' pl={3} ><b>Subjects</b></Text></Button>
                    <Button backgroundColor="#ffffff" color="#6D7878" w={180} style={{height:'50px'}}><img src={icon_teachers} alt="" /><Text fontSize='lg' pl={3} ><b>Teachers</b></Text></Button>
                    <Button backgroundColor="#ffffff" color="#6D7878" w={180} style={{height:'50px'}}><img src={icon_parents} alt="" /><Text fontSize='lg' pl={3} ><b>Parents</b></Text></Button>
                    
                </Stack>
            </Center>
            </GridItem>
            <GridItem pr={4} pb={10} area={'main'}>
                <Box borderWidth='1px' backgroundColor="#F4F4FB" borderRadius='xl' p={10}>
                <Stack spacing={4}>
                    <Text fontSize='xl' color={"#464E56"}><b>Summary</b></Text>
                    <Box borderWidth='1px' backgroundColor="white" borderRadius='xl' h={123}>
                    <Flex color='white'>
                        <Center w='25%' h={123}>
                        <Stack spacing={2} textAlign='center'>
                            <Text fontSize='2xl' color={"#464E56"}><b>58</b></Text>
                            <Text fontSize='md' color={"#6D7878"}>Students</Text>
                        </Stack>
                        </Center>
                        <Center w='25%'>
                        <Stack spacing={2} textAlign='center'>
                            <Text fontSize='2xl' color={"#464E56"}><b>58</b></Text>
                            <Text fontSize='md' color={"#6D7878"}>Subjects</Text>
                        </Stack>
                        </Center>
                        <Center w='25%' h={123}>
                        <Stack spacing={2} textAlign='center'>
                            <Text fontSize='2xl' color={"#464E56"}><b>0</b></Text>
                            <Text fontSize='md' color={"#6D7878"}>xxxx</Text>
                        </Stack>
                        </Center>
                        <Center w='25%'>
                        <Stack spacing={2} textAlign='center'>
                            <Text fontSize='2xl' color={"#464E56"}><b>0</b></Text>
                            <Text fontSize='md' color={"#6D7878"}>xxxx</Text>
                        </Stack>
                        </Center>
                    </Flex>
                    </Box>
                    <Flex pt={5}>
                        <Text fontSize='xl' color={"#464E56"}><b>Today Analytics</b></Text>
                        <Spacer />
                        <Menu>
                            <MenuButton as={Button} background="white" rightIcon={<ChevronDownIcon />}>
                            <Text fontSize='md' color={"#6867AC"}>Choose Subjects</Text>
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Students</MenuItem>
                                <MenuItem>Subjects</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                    <Box borderWidth='1px' backgroundColor="white" borderRadius='xl' h={490}>
                    </Box>
                </Stack>
                </Box>
            </GridItem>
        </Grid>
    )
}