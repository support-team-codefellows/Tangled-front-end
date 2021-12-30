
import React, { useEffect, useState } from "react";

import { Button, ButtonGroup } from '@chakra-ui/react'

import {useSelector} from "react-redux"
import axios from 'axios';

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>oOo<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< //

function Telephone() {
  const [telephoneData,setTelephoneData]=useState([])

  

  const data = useSelector(state => state)
  console.log('data',data);


  

  useEffect( () => {

    async function name() {

      setTelephoneData( await axios.get('http://localhost:3500/telephoneTicket'))
      console.log('telephoneData',telephoneData);
    }
    
    name()
  
  }, [data]);

  


  

  return (
    <div>

<Button colorScheme='blue'>Button</Button>
<h1>dsfdsf</h1>
  
    </div >
  );
}

export default Telephone;






