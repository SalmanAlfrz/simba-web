import React, {useEffect } from "react"
import {
  ChakraProvider,
  theme
} from "@chakra-ui/react"
import Main from "./Main"
import SignIn from "./Pages/SignIn";
import {Routes, Route} from 'react-router-dom';
export const App = () => (
  <ChakraProvider theme={theme}>
    <Routes>
        <Route path='/login' element={<SignIn/>} />
        <Route path='/*' element={<Main/>} />
    </Routes>
  </ChakraProvider>
)
