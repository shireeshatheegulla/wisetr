
import React,{useState,useEffect} from 'react';
import './App.css';
import {Container,Row,Col,Card,Button} from 'react-bootstrap';
import { FaRegEnvelope } from 'react-icons/fa';
import { AiOutlinePhone } from 'react-icons/ai';
import {CgWebsite } from 'react-icons/cg';
import {FcLike} from 'react-icons/fc';

import {RiDeleteBin5Line} from 'react-icons/ri';
import {BiEditAlt} from 'react-icons/bi';

function App() {
  const[posts,setpost]=useState([]);
  useEffect(()=>{
  fetch("http://localhost:8000/users")
  .then((res)=>res.json())
  .then((responseData)=>setpost(responseData));
  
  },[])

  return (
    <div>
      <div className='post-container'>
      <Row md={4} className="g-4">
      {posts.map((post, idx) => (
        <Col key={post.id}>
          <Card border="light" style={{ width: '20rem' }}>
          <Card.Img variant="top" />
          <Card.Body>
          <Card.Text bg- >
          <img src={`https://avatars.dicebear.com/v2/avataaars/${post.username}.svg`} alt="avatar"></img>
          </Card.Text>
          <Card.Title>{post.name}</Card.Title>
          <Card.Title ><FaRegEnvelope/> {post.email}</Card.Title>
          <Card.Title><AiOutlinePhone/> {post.phone}</Card.Title>
          <Card.Title><CgWebsite/> {post.website}</Card.Title>
          <Row md={3} classname="g-5">
          <Card.Title><FcLike/>  <BiEditAlt/>  <RiDeleteBin5Line/> </Card.Title>

          </Row>
    

          </Card.Body>
          </Card>
        </Col>
      ))};
      </Row>


      </div>


      </div>
  
      
    
    
  );
}

export default App;
