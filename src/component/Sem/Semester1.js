import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

import Paper from '../Paper/Paper'

export default function Semester1() {
  const navigate = useNavigate();

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (

    <motion.div
    initial={{y:50, opacity: 0, scale: 0.5 }}
    animate={{ y:0,opacity: 1, scale: 1 }}
    transition={{
      duration: 0.5,
      delay: 0.2,
      ease: [0, 0.71, 0.2, 1.01]
    }}
    >
      <Accordion  sx={{ background:'#f3f3f3',width: '90%' }}  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>
          Alternative English
          </Typography>
          {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
        </AccordionSummary>

        <AccordionDetails sx={{ background:'white' }}>
          <Typography sx={{color:' #B2BEB5'}}>
           Tap on the year
            <a  onClick = {() => navigate('/Paper')}>2019</a>
          </Typography>
        </AccordionDetails>

      </Accordion>

      <Accordion sx={{ background:'#f3f3f3',width: '90%' }}  expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>Business Law</Typography>
           {/* <Typography sx={{ color: 'text.secondary' }}>
             Business Law
          </Typography> */}
        </AccordionSummary>
        <AccordionDetails sx={{ background:'white' }}>
        <Typography sx={{color:' #B2BEB5'}}>
           Tap on the year
            <a  onClick = {() => navigate('/Paper')}>2018</a>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ background:'#f3f3f3',width: '90%' }}  expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>
          Communicative English
          </Typography>
          {/* <Typography sx={{ color: 'text.secondary' }}>
            Filtering has been entirely disabled for whole web server
          </Typography> */}
        </AccordionSummary>
        <AccordionDetails sx={{ background:'white' }}>
        <Typography sx={{color:' #B2BEB5'}}>
           Tap on the year
            <a  onClick = {() => navigate('/Paper')}>2021</a>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ background:'#f3f3f3',width: '90%' }}  expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width:'100%', flexShrink: 0 }}>Economics</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ background:'white' }}>
        <Typography sx={{color:' #B2BEB5'}}>
           Tap on the year
            <a  onClick = {() => navigate('/Paper')}>2019</a>
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion sx={{ background:'#f3f3f3',width: '90%' }}  expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>Financial Accounting</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ background:'white' }}>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>

    </motion.div>
  );
}