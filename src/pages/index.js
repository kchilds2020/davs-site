import React from "react"
import NavigationBar from '../components/NavigationBar'
import SlideShow from '../components/SlideShow'
import 'bootstrap/dist/css/bootstrap.min.css';
import Helmet from 'react-helmet'
export default function Home() {
  return (
    <>
    <Helmet title="Home" defer={false} />
    <div style={{fontFamily: 'Raleway'}}>
      <NavigationBar/>
      <SlideShow />
      <div style={{color: 'white', fontFamily: 'Raleway'}}>Hello world!!!</div>
    </div>
    </>
  )
}
