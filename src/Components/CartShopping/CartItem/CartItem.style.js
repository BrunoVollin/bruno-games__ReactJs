import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: #363636;
    width: 600px;
    height: 100px;
    margin: 10px;

    display: flex;

`;

export const CartImage = styled.div`
    height: 100px;
    width: 100px;
    

    background-image:
    linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.0)),
		url(${props => props.urlImg});
		background-position: center;
		background-size: cover;
	background-position-y: 0px;
    box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.8);
     
    `;

export const CartInfos = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 10px;
`;

export const Name = styled.div`
	h3{
		font-weight: 400;
		color: #A1A1A1;
	}
`;

export const Prices = styled.div`
	display: flex;
	flex-direction: column;
	.old-price {
		font-size: 12px;
		text-decoration: line-through;
		display: flex;
		justify-content: flex-end;
	
		color:#d2565a;
	}
	.new-price {
		font-size: 20px;
		align-items: center;

		color: #a3d39c;
		font-weight: 600;
	}

	h4 {
		display:flex;
		justify-content: flex-end;
		font-weight: 300;
	}
`;




