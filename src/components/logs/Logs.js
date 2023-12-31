import React, { useEffect} from 'react'
import {connect} from 'react-redux'
import LogItems from './LogItems';
import PropTypes from 'prop-types';
import { getLogs } from '../../actions/logActions';
import Preloader from '../layouts/Preloader';
const Logs = ({log:{logs,loading},getLogs}) => {
    useEffect(() => {
      getLogs();
      //eslint-disable-next-line
    }, [])
    
    if (loading || logs===null) {
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
Logs.propTypes = {
  log:PropTypes.object.isRequired,
  getLogs:PropTypes.func.isRequired
}
const mapStateToProps = state => ({
  log: state.log
})
export default connect(mapStateToProps,{getLogs})(Logs);