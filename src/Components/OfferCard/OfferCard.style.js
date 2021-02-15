import styled from 'styled-components';

const wrapperGray = "filter: grayscale(100%);";

export const Wrapper = styled.div`
	height: 289px;
	width: 216px;

	margin: 10px;
	padding: 10px;

	color: white;
	background-color: #252525;

	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	${props => props.value ? wrapperGray : ""}

	background-image:
    linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.90)),
		url(${props => props.urlImg});
		background-position: center;
		background-size: cover;
	background-position-y: 0px;

	box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.8);

	&:hover{
		background-image:
    		linear-gradient(to bottom,rgba(255,255, 255, 0.20), rgba(0, 0, 0, 0.70) ),
				url(${props => props.urlImg});
				background-position: center;
				background-position-y: 0px;
				
	}
	transition: .5s ease; 

	h1{
		font-size: 25px;
	}
	h2 {
		font-size: 15px;
	}
	
	.old-price {
		font-size: 12px;
		text-decoration: line-through;

		color:#d2565a;
	}
	.new-Price {
		font-size: 30px;

		width:50%;
		display: flex;
		flex-direction: row;
		align-items: center;

		color: #a3d39c;
		font-weight: 600;
	}
	.percentage-off {
		background-color: #f26522;
		width: 50%;

		display: flex;
		flex-direction: row-reverse;
		align-items: center;
		justify-content: center;
		width: 65px;
		height: 28px;

		border-radius: 40px;
	}
`;

export const Bottom = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;