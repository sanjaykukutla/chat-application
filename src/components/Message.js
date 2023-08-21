import React from 'react'
import Image from '../img/happy-student-with-graduation-hat-diploma-grey.jpg'
const Message = () => {
    return (
        <div className="message owner">
            <div className="messageInfo">
                <img src={Image} alt=""/>
                <span>Just Now</span>
            </div>
            <div className="messageContent">
                <p>Hello</p>
                <img src={Image} alt=""/>
            </div>
        </div>
    )
}

export default Message
