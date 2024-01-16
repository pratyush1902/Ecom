import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Cateogary({onSelectCategory}) {
    const [data,setData]=useState([]);
    const[error,setError]=useState('no error');

    useEffect(()=>{
        const getCategory=async()=>{
            try{
                const response=await axios.get('https://api.escuelajs.co/api/v1/categories/')
                setData(response.data.slice(2,6));
                console.log(response.data.slice(2,5))
                setError('no error');
            }catch(error){
                setData([]);
                setError('404 Error not found');
            }
        }
        getCategory();
    },[]);
  return (

    <div>
<h1 className='cat_head'>Shop by  category</h1>
<div className='cat_list'> 
        {data && data.map(i=>(
            
                   
            
            <Card className='card' id={i.id} style={{ width: '16rem',borderRadius:'10px',padding:'20px', margin:'20px' }}>
      <Card.Img variant="top" src={ i.image} style={{maxHeight:'220px'}} />
      <Card.Body className="cards__overlay">
        <Card.Title>{i.name}</Card.Title>
        
        <Button onClick={() => onSelectCategory(i.id)} variant="danger">Shop</Button>
      </Card.Body>
    </Card>
   
        ))}
     

     </div> 
        {!error}
      
    </div>
  )
}

export default Cateogary
