import React from "react"
import NavigationBar from '../components/NavigationBar'
import SlideShow from '../components/SlideShow'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Home() {
  return (
    <>
      <NavigationBar/>
      <SlideShow />
      <div>Hello world!!!</div>
    </>
  )
}
