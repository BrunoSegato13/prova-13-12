import { React } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Error from '../../components/ErrorComponent';

function ErrorPage(){
  return(
    <>
    <Header/>
    <Error/>
    <Footer/>
    </>
  )
}

export default ErrorPage;