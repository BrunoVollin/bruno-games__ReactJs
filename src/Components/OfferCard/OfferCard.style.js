import styled from 'styled-components';

export const Wrapper = styled.div`
	height: 289px;
	width: 216px;

	margin-left: 200px;
	margin-top: 200px;
	padding: 10px;

	color: white;
	background-color: #252525;

	display: flex;
	flex-direction: column;
	justify-content: flex-end;

	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

	background-image:
    linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.90)),
    /* url('https://upload.wikimedia.org/wikipedia/pt/f/f7/Cyberpunk_2077_capa.png'); */
		url(${props => props.urlImg});
		background-position: center;
	background-position-y: 0px;


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
	align-items: flex-end;
`;