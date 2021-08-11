import React, {useState} from 'react'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Page from './components/Page'

function App() {
  const [pages] = useState([
    {
      name: 'about'
    },
    {
      name: 'contact'
    },
    {
      name: 'portfolio'
    },
    {
      name: 'resume'
    }
  ])

  const [currentPage, setCurrentPage] = useState(pages[0])
  return (
    <> 
    <Header
    Pages = {pages}
    setCurrentPage = {setCurrentPage}
    currentPage = {currentPage}
    
    />
    <Page currentPage = {currentPage} />
    <Footer />
    
    </>
  );


}

export default App;
