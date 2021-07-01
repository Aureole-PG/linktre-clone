import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: ${props=>props.full?'100vh':''};
    width: ${props=>props.width?props.width: 'auto'};
    justify-content: center;
    align-items: center;
    background-image: ${props=>props.color?'linear-gradient(to top, #a8edea 0%, #fed6e3 100%)':''};
    
`;

export const ImgContainer = styled.div`
    width: 100px;
    height: 100px;
    
`;

export const Div = styled.div`
    display: flex;
    align-items: center;
    &.space-between{
        justify-content: space-between;
    }
    &.center{
        justify-content: center;
    }
    &.space-around{
        justify-content: space-around;
    }
`;

