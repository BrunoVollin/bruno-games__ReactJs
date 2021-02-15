import styled from 'styled-components';
import '../../shared/ScrollBar.css'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 85vh;
    overflow-y: auto;
    overflow-x: hidden;
    h1{
        margin: 20px;
    }
`;

export const Map = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    max-height: 85vh;
`;

