import Navbar from "../../components/Navbar/Index";
import Sectionpages from "../../components/Sectionpages";
import Footer from "../../components/Footer";
import { React, useState, useEffect } from "react";
import Axios  from "axios";
import FormInput from "../../components/Forminput";




const SearchPages = ()=> {


  return (
    <>
      <Navbar></Navbar>
      <Sectionpages></Sectionpages>
      <FormInput></FormInput>
  
    
      
      <Footer></Footer>
    </>
  );

}



export default SearchPages;
