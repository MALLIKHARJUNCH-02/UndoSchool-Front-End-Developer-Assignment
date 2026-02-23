import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Age from './Components/Age/Age'
// import Card from './Components/Cards/Card'
import NewLaunches from './Components/NewLaunches/NewLaunches'
import FeaturedCourses from './Components/FeaturedCourses/FeaturedCourses'
import TopTeachers from './Components/TopTeachers/TopTeachers'
import Webinar from './Components/Webinar/Webinar'
import PopularCategories from './Components/PopularCategories/PopularCategories'
import Time from './Components/Time/Time'
import LastComponent from './Components/LastComponent/LastComponent'
import Footer from './Components/Footer/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Hero/>
      <Age/>
      <NewLaunches/>
      <FeaturedCourses/>
      <TopTeachers/>
      <Webinar/>
      <PopularCategories/>
      <Time/>
      <LastComponent/>
      <Footer/>
    </>
  )
}

export default App
