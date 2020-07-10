import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import "./SideBar.scss"
const SideBar = () => {
    const [searching,setSearching] = useState(false)
    return (
        <div className='side-bar__container'>
           Side bar 
           <div className={`side-bar__search ${searching ? "side-bar__search--active" : ""}`} >
               <FontAwesomeIcon icon={faSearch} 
                />
               <input type="text"
                placeholder='Search tweet'
                className='side-bar__search__input'
                onFocus={()=>setSearching(true)}
                onBlur={()=>setSearching(false)}
                />
           </div>
           <div className='side-bar__trend'>
               <div className='title'>
                    Trend for you

               </div>
           </div>
        </div>
    )
}

export default SideBar
