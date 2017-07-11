import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {BrowserRouter, Link, Route, NavLink} from 'react-router-dom';

import {LinkContainer} from 'react-router-bootstrap';

import 'bootstrap/less/bootstrap.less';
import '../less/style.less';

import {Career,Footer} from './components';


import logo from '../images/logo.png';
const navbarInstance = (
	<Navbar inverse collapseOnSelect>
		<Navbar.Header>
			<Navbar.Brand>
				<a href="#">
					<span><img src={logo}/></span>
					青色麦田
				</a>
			</Navbar.Brand>
			<Navbar.Toggle />
		</Navbar.Header>
		<Navbar.Collapse>
			<Nav pullRight>
				<NavItem eventKey={1} href="#">首页</NavItem>
				<NavItem eventKey={2} href="#">关于我们</NavItem>
				<NavItem eventKey={3} href="#">成功案例</NavItem>
				<NavItem eventKey={4} href="#">解决方案</NavItem>
				<NavItem eventKey={5} href="#">伙伴计划</NavItem>
				<NavItem eventKey={6} href="#">加入我们</NavItem>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
);
class App extends Component {
	render() {
		return <div>App</div>;
	}
}
class Home extends Component {
	render() {
		return <div>Home</div>;
	}
}
class About extends Component {
	render() {
		return <div>About</div>;
	}
}
class Inbox extends Component {
	render() {
		return <div>Inbox</div>;
	}
}
const routers = (
	<BrowserRouter>
		<div>
			<Navbar inverse collapseOnSelect>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#">
							<span><img src={logo}/></span>
							青色麦田
						</a>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav pullRight>
						<LinkContainer to="/" exact={true}><NavItem eventKey={1}>首页</NavItem></LinkContainer>
						<LinkContainer to="/about"><NavItem eventKey={2} href="#">关于我们</NavItem></LinkContainer>
						<LinkContainer to="/about"><NavItem eventKey={3} href="#">成功案例</NavItem></LinkContainer>
						<LinkContainer to="/about"><NavItem eventKey={4} href="#">解决方案</NavItem></LinkContainer>
						<LinkContainer to="/about"><NavItem eventKey={5} href="#">伙伴计划</NavItem></LinkContainer>
						<LinkContainer to="/career"><NavItem eventKey={6} href="#">加入我们</NavItem></LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			{/*<Route path="/" component={App}>*/}
			{/*<IndexRoute component={Home} />*/}
			<Route exact={true} path="/" render={() => (
				<div>Index</div>
			)}/>
			<Route path="/about" component={About}/>
			<Route path="/inbox" component={Inbox}/>
			<Route path="/career" component={Career}/>
			{/*</Route>*/}
			<Footer/>
		</div>
	</BrowserRouter>
);


ReactDOM.render(
	routers,
	document.getElementById('root')
);
