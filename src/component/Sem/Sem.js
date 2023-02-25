import React,{useState} from 'react'
import { motion } from 'framer-motion'


import Semester1  from './Semester1'
import Semester2  from './Semester2'
import Semester3  from './Semester3'
import './Sem.scss'




const Sem = () => {

  const [active, setActive] = useState("first");


  return (
    <motion.div 
    className='paper'>
        <div className='sem'>
          <button onClick={() => setActive("first")}>Semester 1</button>
          <button onClick={() => setActive("second")}>Semester 2</button>
          <button onClick={() => setActive("third")}>Semester 3</button>
        </div>
        
        <motion.div
           className='subjects'
           whileInView={{opacity:[0,1]}}
           transition={{duration:0.5,delayChildren:0.5}}
        >
           {active === "first" && <Semester1/>}
           {active === "second" && <Semester2/>}
           {active === "third" && <Semester3/>}
        </motion.div>
     
      </motion.div>
  )
}

export default Sem