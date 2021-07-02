import React from 'react';
import {Button} from '../styles/buttons';
import {Div,Img} from '../styles/containers';
import { SubTitle } from '../styles/text';
export default function CButton({imgUrl, text , ...rest}) {
    return (
        <Button {...rest}>
            <Div>
                {imgUrl&&(
                    <Div className="center">
                        <Img src={imgUrl} alt="" />
                    </Div>
                )

                }
                
            
                <Div width="100%" padding={'0 10px'} className="center">
                    <SubTitle>
                    {text?text:`
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus non modi obcaecati repellat inventore quidem, reiciendis ipsa quis cumque similique porro harum adipisci cum ducimus beatae? Explicabo itaque debitis ipsum?
                    `}
                    </SubTitle>
                    
                    
                </Div>
            </Div> 
        </Button>
    )
}


