import React, { useEffect, useState } from 'react'
import LogItems from './LogItems';
import Preloader from '../layouts/Preloader';
const Logs = () => {
    const [logs,setLogs]= useState([]);
    const [loading,setLoading] = useState(false)

    useEffect(() => {
      getLogs();
      //eslint-disable-next-line
    }, [])
    
    const getLogs = async()=> {
        setLoading(true);
        const res = await fetch("/logs");
        const  data  = await res.json();
        setLogs(data);
        setLoading(false);
    }
    if (loading) {
       return <Preloader/>
    }
  return (
    <div>
        <ul className='collection with-header'>
            <li className='collection-header center' >
                <h4>System Logs</h4>
            </li>
            {!loading && logs.length ===0 ? (<p className='center'>No logs to Show...</p>):
            logs.map(log =>(
                <LogItems log={log} key={log.id}/>
            ))}
        </ul>
    </div>
  )
}

export default Logs