import * as React from 'react';
import {
	Col,
	Container,
	Row
} from 'reactstrap';
import './App.css';

class App extends React.Component {
	public render() {
		return (
			<Container>
				<Row>
					<Col>Hello</Col>
					<Col>Woo</Col>
				</Row>
			</Container>
		);
	}
}

export default App;
