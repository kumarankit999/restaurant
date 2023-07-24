import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
        <Box sx={{
          my: 15,
          textAlign:"center",
          color:"black",
          fontWeight:"larger",
          // backgroundColor:"blueviolet",
          p:2,
          "& h4":{
            fontWeight:"bold",
            my: 2,
            fontSize: "2rem",

          },
           "& p":{ 
            textAlign:"justify",
            fontWeight:"600px"
           },
           "@media (max-width:600px)":{
             mt:0,
             "& h4": {
              fontSize:"1.5rem",
             }
           }
        }}>
          <Typography variant="h4">
            Welcome to my Restaurant
          </Typography>
          <p>
          Welcome to Wave Restaurant, where waves of flavor crash together to create a truly unforgettable dining experience! Nestled along the sun-kissed shores, our beachfront restaurant promises a journey of culinary delights that will leave your taste buds surfing with joy.

At Wave Restaurant, we are passionate about two things: exceptional cuisine and the mesmerizing beauty of the ocean. Our culinary team consists of skilled and imaginative chefs who are devoted to crafting dishes that not only please the palate but also pay homage to the sea's bounty. Drawing inspiration from coastal regions worldwide, we have curated a menu that showcases an array of seafood delicacies and fusion dishes that celebrate the rich flavors of both land and sea.

Step inside, and you'll be greeted by a warm, relaxed ambiance that mirrors the laid-back charm of the coastal lifestyle. With large windows overlooking the pristine waters, you'll feel as if you're dining right on the beach. The gentle sound of waves crashing nearby sets the perfect tone for a serene and immersive dining experience.

Our commitment to using only the freshest, sustainably sourced ingredients is what sets us apart. From succulent shrimp and tender calamari to the finest catches of the day, every dish is carefully prepared to bring out the true essence of the ocean's bounty. But our menu extends beyond seafood; we cater to all palates with an impressive selection of vegetarian, vegan, and meat options, ensuring that every guest finds something to indulge in.
            </p>
          <br />
          <p>
          Pair your meal with a handcrafted cocktail from our extensive drink menu, which features signature concoctions inspired by the sea, or choose from a curated selection of wines and craft beers that perfectly complement your chosen dish.

At Wave Restaurant, we believe that dining is not just about eating; it's an experience to be cherished. Our attentive and friendly staff are dedicated to providing exceptional service, ensuring that your visit is nothing short of spectacular. Whether you're celebrating a special occasion, enjoying a romantic date night, or simply seeking a memorable culinary adventure, we are here to make your time with us truly unforgettable.

Beyond exquisite food and attentive service, our commitment to sustainability and environmental responsibility is deeply ingrained in our ethos. We strive to minimize our ecological footprint by employing eco-friendly practices and supporting local fishermen and farmers who share our passion for preserving the natural beauty of the ocean.

If you're looking for more than just a meal and wish to embark on a gastronomic journey that embraces the spirit of the sea, look no further than . We invite you to join us on a culinary exploration of flavors, textures, and aromas, all while basking in the captivating ambiance of our wave-inspired haven. We look forward to welcoming you and creating memories that will linger like the gentle echoes of the ocean waves.
            </p>
        </Box>
    </Layout>
  )
}

export default About