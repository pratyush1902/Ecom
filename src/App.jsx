 import {React,useState }from 'react'
import NavbarPage from './Components/NavbarPage'
 
import './Style/Style.css'
import Hero_Slider from './Components/Hero_Slider'
import Cateogary from './Components/Cateogary'
import ProductListByCategory  from'./Components/Product'
 

 
 function App() {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const handleSelectCategory = categoryId => {
    setSelectedCategoryId(categoryId);
  };
   return (
     <div>
      <NavbarPage/>
      <Hero_Slider/>
      <div className="cate_main">
      <Cateogary onSelectCategory={handleSelectCategory}/>
      {selectedCategoryId && <ProductListByCategory categoryId={selectedCategoryId} />}

      </div>
     
      
     </div>
   )
 }
 
 export default App
 