 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const ProductListByCategory = ({ categoryId }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://api.escuelajs.co/api/v1/categories/${categoryId}/products`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error.message);
      }
    };

    fetchProducts();
  }, [categoryId]);
  const trancute=(text,max_len)=>{
    if(text.length>max_len){
     return   text.slice(0,max_len)+"..."
    }
    return text;
  }

  return (
    <div>
      <h1 className='cat_head'>Products for Category {}:</h1>
      <div className='pro_list'>
        {products.map(product => (
       
          <Card    onClick={onSelectProduct(product.id)} id={product.id} className='card' style={{  width: '22rem',borderRadius:'10px',padding:'20px', margin:'20px' ,   }}>
      <Card.Img variant="top" src={product.images} />
      <Card.Body className="cards__overlay">
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          { trancute(product.description,100)}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>${product.price}</ListGroup.Item>
        
      </ListGroup>
      
    </Card>
        ))}
        </div>
     
    </div>
  );
};

export default ProductListByCategory;
