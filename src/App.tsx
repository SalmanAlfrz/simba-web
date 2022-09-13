import React, {useEffect } from "react"
import {
  ChakraProvider,
  theme
} from "@chakra-ui/react"
import {Routes, Route} from 'react-router-dom';
import Main from "./Main"
import SignIn from "./Pages/SignIn";
import ForgotPassword from "./Pages/ForgotPassword";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Routes>
        <Route path='/login' element={<SignIn/>} />
        <Route path='/forgot-password' element={<ForgotPassword/>} />
        <Route path='/*' element={<Main/>} />
    </Routes>
  </ChakraProvider>
)
