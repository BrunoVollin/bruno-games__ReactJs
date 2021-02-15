import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    overflow-y: auto;
`;

export const Left = styled.div`
    background-color: #363636;
    width: 100%;
`;

export const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center;
    background-color: #252525;
    
    height: 600px;
`;