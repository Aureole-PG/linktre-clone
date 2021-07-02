import React from 'react';
import {Title} from '../styles/text';
import {Div, Img} from '../styles/containers';
export default function User({user, userImg, comments}) {
    return (
        <Div grid>
            <Div className="center">
                <Img round src={userImg??'https://via.placeholder.com/150?text=404'}/>
            </Div>
            
            <Div  padding={"10px 0 0 0"} className="center">
                <Title>{user}</Title>
            </Div>
            {comments}
        </Div>
    )
}
