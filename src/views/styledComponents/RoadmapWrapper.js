import styled from 'styled-components';


export default styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
  min-height: 70vh;
  margin: 10px;
  padding: 10px;

  .row {
	display: flex;
	align-items: top;
	height: inherit;
	justify-content: space-between;
	width: auto;
	padding: 10px;
	margin: 20px 0;
	position: relative;
  }

  .card {
	display: flex;
	flex-direction: column;
	border-top: 5px solid ${props => props.color ? props.color : '#212121'};
	border-left: ${props => props.noLeftBorder ? '0px' : `1px dotted ${props.color ? props.color : '#212121'}`};
	justify-content: flex-start;
	padding: 10px;
	min-width: 100px;
	max-width: 20%;
	min-height: 60px;
  }

  .card .section {
  	color: ${props => props.color ? props.color : '#212121'};
  	align-self: baseline;
  	font-weight: 600;
  	font-size: large;
  }

  .cardItem {
	  background: #fff;
	  box-shadow:
	    /* The top layer shadow */
	    0 -1px 1px rgba(0,0,0,0.15),
	    /* Padding for demo purposes */
	    padding: 30px;
	  border: 1px solid #BDBDBD;
	  font-size: 1em;
	  cursor: pointer;
	  padding: 10px;
	  width: auto;
	  margin: 2px;
  }
`;