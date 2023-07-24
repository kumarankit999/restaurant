import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'
import '../styles/HomeStyles.css';
// import Food from '../images/assorted-indian-food-dark-wooden-background-dishes-appetizers-cuisine-curry-butter-chicken-rice-lentils-paneer-88514094.webp'
import Food from '../images/stewed-cabbage-ready-eating-homemade-braised-vegan-food-spices-herbs-cutlery-stewed-cabbage-ready-eating-homemade-braised-259284641.webp'

const Home = () => {
  return (
    <Layout>
      <div className='home' style={{backgroundImage:`url(${Food})`}}>
        <div className='headerContainer'>
          <h1>Wave Restaurant</h1>
          <p>Welcome to our Restaurant online!</p>
          <Link to="/menu">
          <button>
            ORDER NOW
          </button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home