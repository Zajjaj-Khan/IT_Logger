import React, { useEffect, useState } from 'react'
import TechItems from './TechItems';
const TechListModal = () => {
    const [techs,setTechs]= useState([]);
    const [loading,setLoading] = useState(false)

    useEffect(() => {
      getTechs();
      //eslint-disable-next-line
    }, [])
    
    const getTechs = async()=> {
        setLoading(true);
        const res = await fetch("/techs");
        const  data  = await res.json();
        setTechs(data);
        setLoading(false);
    }
   
  return (
    <div id="tech-list-modal" className='modal'>
        <ul className='collection with-header'>
            <li className='collection-header'><h4>Technicains</h4></li>
            {techs.map(tech=>(
                <TechItems tech={tech} key={tech.id}/>
            ))}
        </ul>
    </div>
  )
}

export default TechListModal