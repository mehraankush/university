import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Home.scss'
import Sem from '../Sem/Sem'

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='container'>
         <div className='cover'>
           <p>Previous Year Question Papers</p>
           <h1>Dibrugarh University</h1>
         </div>
         <div className='course-btn'>
          <p>select your subject:</p>
            <motion.button
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >B.Com
            </motion.button>
            <motion.button
             whileTap={{ scale: 0.9 }}
             transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >M.Com</motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
             >B.A  </motion.button>
            <motion.button
             whileTap={{ scale: 0.9 }}
             transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >LLB  </motion.button>
         </div>
         <div className='discription'>
             <p>Previous year Question Paper for B.com(Both CBCS and Regular)</p>
             <h1>Bachelor of Commerce</h1>
         </div>
         <Sem/>
    </div>
  )
}

export default Home