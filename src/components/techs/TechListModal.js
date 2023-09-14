import React, { useEffect} from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getTechs} from '../../actions/techActions'
import TechItems from './TechItems';
const TechListModal = ({getTechs,tech:{techs,loading}}) => {
    useEffect(() => {
      getTechs();
      //eslint-disable-next-line
    }, [])
  return (
    <div id="tech-list-modal" className='modal'>
        <ul className='collection with-header'>
            <li className='collection-header'><h4>Technicains</h4></li>
            {!loading && 
              techs !== null && 
              techs.map(tech =>(
                <TechItems tech={tech} key={tech.id}/>
            ))}
        </ul>
    </div>
  )
}
TechListModal.propTypes ={
  tech: PropTypes.object.isRequired,
  getTechs:PropTypes.func.isRequired
}
const mapStateToProps = state =>({
  tech:state.tech
})
export default connect(mapStateToProps,{getTechs})(TechListModal);