import React, { useEffect, useState } from 'react';
import background from "../Images/logo.svg";
import icon_home_active from "../Images/icon_home_active.svg";
import icon_home from "../Images/icon_home.svg";
import icon_students_active from "../Images/icon_students_active.svg";
import icon_students from "../Images/icon_students.svg";
import icon_subjects_active from "../Images/icon_subjects_active.svg";
import icon_subjects from "../Images/icon_subjects.svg";
import icon_teachers_active from "../Images/icon_teachers_active.svg";
import icon_teachers from "../Images/icon_teachers.svg";
import icon_parents_active from "../Images/icon_parents_active.svg";
import icon_parents from "../Images/icon_parents.svg";
import icon_semester_active from "../Images/icon_semester_active.svg";
import icon_semester from "../Images/icon_semester.svg";
import { Stack, Button, Text} from "@chakra-ui/react";
import {Link} from 'react-router-dom';
export default function NavbarParents(){
    return (
        <Stack spacing={1} mt={10} float='right'>
            <img src={background} style={{height:'100px',marginBottom:'80px'}}/>
            <Link to='/dashboard'><Button justifyContent="flex-start" backgroundColor="#ffffff" color="#6D7878" w={180} style={{height:'50px'}}><img src={icon_home} width={21} height={21} alt="" /><Text fontSize='lg' pl={3} ><b>Dashboard</b></Text></Button></Link>
            <Link to='/murid'><Button justifyContent="flex-start" backgroundColor="#ffffff" color="#6D7878" w={180} style={{height:'50px'}}><img src={icon_students} width={21} height={21} alt="" /><Text fontSize='lg' pl={3} ><b>Murid</b></Text></Button></Link>
            <Link to='/semester'><Button justifyContent="flex-start" backgroundColor="#ffffff" color="#6D7878" w={180} style={{height:'50px'}}><img src={icon_semester} width={21} height={21} alt="" /><Text fontSize='lg' pl={3} ><b>Semester</b></Text></Button></Link>
            <Link to='/kegiatan'><Button justifyContent="flex-start" backgroundColor="#ffffff" color="#6D7878" w={180} style={{height:'50px'}}><img src={icon_subjects} width={21} height={21} alt="" /><Text fontSize='lg' pl={3} ><b>Kegiatan</b></Text></Button></Link>
            <Link to='/guru'><Button justifyContent="flex-start" backgroundColor="#ffffff" color="#6D7878" w={180} style={{height:'50px'}}><img src={icon_teachers} width={21} height={21} alt="" /><Text fontSize='lg' pl={3} ><b>Guru</b></Text></Button></Link>
            <Link to='/orang-tua'><Button justifyContent="flex-start" backgroundColor="#EDECF8" color="#6867AC" w={180} style={{height:'50px'}}><img src={icon_parents_active} width={21} height={21} alt="" /><Text fontSize='lg' pl={3} ><b>Orang Tua</b></Text></Button></Link>
        </Stack>
    )
}