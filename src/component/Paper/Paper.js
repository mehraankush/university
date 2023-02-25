import React from 'react'
import './Paper.scss'
import pdf from '../../static/paper.pdf'
import {FaCloudDownloadAlt} from 'react-icons/fa'

const Paper = () => {




  return (
    <div className='container'>
          <div className='cover'>
            <p>Previous Year Question Papers</p>
            <h1>2019 | previous year Question paper</h1>
          </div>
         <div className='frame'>
            <iframe  type="image/pdf" src={`${pdf}#toolbar=0&navpanes=0`}  />
            <h4>No content</h4>
             <div>
                <button>Only this</button>
                <button>Get Everything</button>
             </div>
         </div>
         <div className='download'>
              <button><a href={pdf} download> <FaCloudDownloadAlt/>download</a></button>
         </div>
   </div>
  )
}

export default Paper