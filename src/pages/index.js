import React from "react"
import NavBar from '../components/NavBar'
import SocialMediaNav from '../components/SocialMediaNav'
import SlideShow from '../components/SlideShow'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Home() {
  return (
    <>
      {/* <SocialMediaNav /> */}
      <NavBar/>
      <SlideShow />
      <div>Hello world!!!</div>
    </>
  )
}
