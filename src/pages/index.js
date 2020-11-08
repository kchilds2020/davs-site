import React from "react"
import NavigationBar from '../components/NavigationBar'
import SlideShow from '../components/SlideShow'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Home() {
  return (
    <div style={{fontFamily: 'Raleway'}}>
      <NavigationBar/>
      <SlideShow />
      <div style={{color: 'white', fontFamily: 'Raleway'}}>Hello world!!!</div>
    </div>
  )
}
