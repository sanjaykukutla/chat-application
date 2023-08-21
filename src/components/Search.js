import React from 'react'
import Image from '../img/happy-student-with-graduation-hat-diploma-grey.jpg'
const Search = () => {
    return (
        <div className="search">
            <div className="searchForm">
                <input type="text" placeholder="Find a User"/>
            </div>
           <div className="userChat">
               <img src={Image} alt="" />
               <div className="userChatInfo">
                   <span>Jane</span>
                   <p>Hello!</p>
               </div>
           </div>
        </div>
    )
}

export default Search
