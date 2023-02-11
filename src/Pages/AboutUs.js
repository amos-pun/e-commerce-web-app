import React, { useState } from 'react'
import { Users } from '../AboutCom'

const AboutUs = () => {
    
    const [ about, setAbout ] = useState ("")


  return (
    
    
    <div>
        <div>
            <input 
                type={'text'} 
                placeholder="enter" 
                className='p-1'
                onChange={(e) => setAbout(e.target.value)}
                ></input>
            <ul>
                {Users.filter((u)=> u.name.toLowerCase().includes(about)).map((u)=>(
                    <li key={u.id}>{u.name}</li>
                )
                )}
            </ul>
        </div>
    </div>
  )
}

export default AboutUs