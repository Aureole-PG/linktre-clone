import styled from 'styled-components';

export const ResposiveContainer= styled.div`
    display: block;
    @media (max-width: 600px) {
        max-width: 600px;
    }
    @media (min-width: 600px) {
        max-width: 600px;
    }
    @media (min-width: 992px) {
        
        max-width: 600px;
    }
    @media (min-width: 1200px) {
        max-width: 1200px;
    }
`;

export const Container = styled.div`
    position: relative;
    box-sizing:   border-box;
    display: flex;
    height: ${props=>props.full?'100vh':''};
    width: ${props=>props.width?props.width: 'auto'};
    justify-content: center;
    /* align-items: center; */
    padding-block: 50px;
    background-image: ${props=>props.image?props.image:'linear-gradient(to top, #a8edea 0%, #fed6e3 100%);'};
    overflow-y: scroll;
`;

export const Img = styled.img`
    border-radius: ${props=> props.round? '50%': 'auto'};
    width: 100px;
    height: 100px;
`;

export const Div = styled.div`
    display: ${props=>props.grid?'grid': 'flex'};
    align-items: center;
    width: ${props=>props.width?props.width: 'auto'};
    padding: ${props=>props.padding?props.padding:'auto'};
    &.space-between{
        justify-content: space-between;
    }
    &.center{
        justify-content: center;
    }
    &.space-around{
        justify-content: space-around;
    }
    &.disable-a{
        pointer-events: none;
    }
`;

