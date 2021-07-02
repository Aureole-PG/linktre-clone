import React from 'react'
import {SocialMediaIconsReact} from 'social-media-icons-react';
import {Div} from '../styles/containers';
export default function Icons({url,icon}) {
    return (
        <Div padding={'0 5px 0 5px'}>
            <SocialMediaIconsReact icon={icon} url={url} {...iconStyle} />
        </Div>
            
        
    )
}

const iconStyle = {
    borderColor:"rgba(0,0,0,0.25)",
    borderWidth:"1",
    borderStyle:"double",
    iconColor:"rgba(255,255,255,1)",
    backgroundColor:"rgba(0,0,0,0)",
    iconSize:"6",
    roundness:"15%",
    size:"45",
}
