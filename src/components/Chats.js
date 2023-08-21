import React from 'react'
import Image from '../img/happy-student-with-graduation-hat-diploma-grey.jpg'
const Chats = () => {
    return (
        <div className="Chats">
            <div className="userChat">
               <img src={Image} alt="" />
               <div className="userChatInfo">
                   <span>Jane</span>
                   <p>Hello</p>
               </div>
           </div>
        </div>
    )
}

export default Chats
