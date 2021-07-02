import React,{useEffect, useState} from 'react';
import {Container,Div,Img,ResposiveContainer} from './../styles/containers';
import usersApi from  '../data/data.json'
import Button from '../components/Button';
import Icons from '../components/Icons';
import User from '../components/User';
export default function Main() {
    const {data,colors} = usersApi;
    const [userInfo, setUserInfo] = useState({}) 
    const [imgbackground, setImgBackground] = useState("");  
    useEffect(()=>{
        setUserInfo(data[0]);
        const index= Math.floor(Math.random() * 3)
        setImgBackground (colors[index]) ;
    },[])
    return (
        <Container  image={imgbackground} full>
            <ResposiveContainer>    
                <Div className="center"  padding={"0 0 40px 0"}>
                    <User user={userInfo.user} userImg={userInfo.userImg} comments={userInfo.comment}/>
                </Div>
                {   userInfo.events?(
                            <>
                                {
                                    userInfo.events.map((e,index)=>(
                                        <Button key={index} imgUrl={e.imgUrl} onClick={()=>window.location.href=e.link} text={e.info}/>
                                    ))
                                }
                            </>
                        ) 
                    :null
                }
                <Div className="center"  padding={"10px 0 40px 0"}>
                    {userInfo.socialMedia?(
                        <>
                        
                        {
                            userInfo.socialMedia.map((e,index)=>(
                                
                                    <Icons key={index} icon={e.name.toLowerCase()} url={e.link} />
                            ))
                        }
                        </>
                    ):null
                        
                    }
                </Div>
                
                
            </ResposiveContainer>
            
        </Container>
    )
}
