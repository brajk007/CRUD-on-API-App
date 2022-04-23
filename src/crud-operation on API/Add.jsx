import React, { useState } from 'react'
import { Button } from 'antd';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import axios from 'axios';
import Show from './Show';


const Add = () => {
  const [text,setText] = useState({
      fname:'',
      lname:''
  });
  
  const handleChange = (e)=>{
     setText({...text,[e.target.name]:e.target.value})
  }

  const handleSubmit=()=>{
    axios.post('https://625bf36fc9e78a8cb9b1a9ba.mockapi.io/banduraj',text)
    .then(()=>alert("data added check on show"))
    .catch((err)=>console.log(err))
    setText(text.fname='',text.lname='')
  }
  console.log(text);
  return (
   <>
   <Row style={{marginTop:"100px"}}>
      <Col span={12} offset={6} >
        <Input size="large" placeholder="Firstname" prefix={<UserOutlined />} style={{marginTop:"20px"}}
          onChange={handleChange} name='fname' value={text.fname}
        />
      <br />
      <Input size="large" placeholder="Lastname" prefix={<UserOutlined />} style={{marginTop:"20px"}}
          onChange={handleChange}  name='lname' value={text.lname}
      />
      <br />
       <Button type="primary" danger style={{marginTop:"20px"}}
       onClick={handleSubmit}
       > 
         Submit
       </Button>
      </Col>
    </Row>
    
   
   </>
  )
}

export default Add
