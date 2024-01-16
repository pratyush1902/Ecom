import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { CiSearch } from "react-icons/ci";

function SearchBar() {
  return (
    <div>
          <InputGroup  className="mb-2 col-xs-4 search_form">
        <Form.Control
          placeholder="Search Item"
        
          className='w-50'
        />
        <Button  variant="outline-secondary" id="button-addon2">
         <div className='search_icon'><CiSearch style={{ fontSize: '2em' }} /></div> 
        </Button>
      </InputGroup>
      
    </div>
  )
}

export default SearchBar
