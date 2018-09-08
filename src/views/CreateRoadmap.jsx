import React from 'react';
import styled from 'styled-components';
import RoadmapWrapper from './styledComponents/RoadmapWrapper';
import roadmapData from './roadmapData';

const Title = styled.div`
  font-size: 1.2em;
  text-align: left;
  font-weight: 600;
  color: #3F51B5;
  padding: 5px;
  text-transform: capitalize;
  box-shadow: 0px 2px #BDBDBD;
  line-height: 40px
`;

const Wrapper = styled.section`
  height: 100vh;
  margin-top: -75vw;
  padding-top: 75vw;
`;

class CreateRoadmap extends React.Component {
	constructor(props) {
		super(props)
		console.log(roadmapData);
	}

	render () {
		return (
			<Wrapper>
				<Title>Roadmap - Revenue Recognition</Title>
				<RoadmapWrapper>
					{
						roadmapData.lanes.map(lane => 
							<div className="row">
								<div className="card" color={lane.color} noLeftBorder>
									<div className="section">{lane.name}</div>
								</div>
								{
								lane.columns.map(column => 
									<div className="card" color={lane.color}>
										{
										column.items.map(item => 
											<div className="cardItem">
												{item.item}
											</div>
										)
										}
									</div>
								)
								}
							</div>
						)
					}

				</RoadmapWrapper>
			</Wrapper>
		)
	}
}

export default CreateRoadmap;

