import React,{useEffect,useState} from 'react'
import { Table, Tag, Space } from 'antd';
import { Button } from 'antd';
import axios from 'axios';
import { Row, Col } from 'antd';
import { Modal } from 'antd';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';





const Show = () => {
  const [list,setList] = useState([])
  const [flag,setFlag] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [state,setState] = useState({
       fname:"",
       lname:""
  })

  const getData=()=>{
    axios.get('https://625bf36fc9e78a8cb9b1a9ba.mockapi.io/banduraj')
    .then((resp)=>setList(resp.data))
  }
  useEffect(()=>{
    getData()
  },[isModalVisible])

  useEffect(()=>{
    getData()
  },[flag])


  const handleChnage=(e)=>{
      setState({...state,[e.target.name] : e.target.value}) 
  }

  const deletItem=(id)=>{
    axios.delete('https://625bf36fc9e78a8cb9b1a9ba.mockapi.io/banduraj'+"/"+id)
     .then(()=> setFlag(!flag))
  }
  const editData=(id,row)=>{
    setIsModalVisible(true);
    setState(row)
  }
 


  const handleOk = () => {
     axios.put('https://625bf36fc9e78a8cb9b1a9ba.mockapi.io/banduraj'+"/"+state.id,state).then(()=>{
        alert('Data Edited')
        setIsModalVisible(false)
     })
    }

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  console.log(state);

  const columns = [
    {
        title: 'fname',
        dataIndex: 'fname',
        key: 'fname',
        render: text => <a>{text}</a>,
      
      },
      {
        title: 'lname',
        dataIndex: 'lname',
        key: 'lname',
        render: text => text,
      },
      {
        title: 'Update',
        dataIndex: 'id',
        key: 'id',
        render: (text,row) => <Button type="primary" onClick={()=> editData(text,row)} >Update Data</Button>,
      },
      {
        title: 'Delete',
        dataIndex: 'id',
        key: 'id',
        render: text => <Button type="danger" onClick={()=> deletItem(text)} >Delete Data</Button>,
      }
]

  return (
    <Row style={{marginTop:"200px"}}>
    <Col span={12} offset={6}>
        <h3>Notes Data</h3>
      <Table columns={columns} dataSource={list} />
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <Input size="large" placeholder="fname" value={state.fname} onChange={handleChnage} name='fname' prefix={<UserOutlined />} /> <br/>

      <Input size="large" style={{marginTop:"20px"}} placeholder="lname" value={state.lname} onChange={handleChnage} name='lname' prefix={<UserOutlined />} /> 
      </Modal>
        </Col> 
        </Row>
  )

}
export default Show;
