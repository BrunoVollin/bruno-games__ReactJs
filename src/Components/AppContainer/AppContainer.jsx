import React from 'react';
import { Left, Right, Wrapper } from './AppContainer.style';

const AppContainer = ({left, right}) => {
    return ( <Wrapper>
        <Left>{left}</Left>
        <Right>{right}</Right>
    </Wrapper> );
}
 
export default AppContainer;