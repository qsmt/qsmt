import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {BrowserRouter, Link, Route, NavLink} from 'react-router-dom';

import {LinkContainer} from 'react-router-bootstrap';

import 'bootstrap/less/bootstrap.less';
import '../less/style.less';

import {Index, About,Portfolio,Solutions,Partners,Career,Footer} from './components';


import logo from '../images/logo.png';

const routers = (
	<BrowserRouter>
		<div>
			<Navbar inverse collapseOnSelect>
				<Navbar.Header>
					<Navbar.Brand>
						<Link to='/'>
							<span><img src={logo}/></span>
							青色麦田
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav pullRight>
						<LinkContainer to="/" exact={true}><NavItem eventKey={1}>首页</NavItem></LinkContainer>
						<LinkContainer to="/about"><NavItem eventKey={2} href="#">关于我们</NavItem></LinkContainer>
						<LinkContainer to={Portfolio.path}><NavItem eventKey={3} href="#">成功案例</NavItem></LinkContainer>
						<LinkContainer to="/solutions"><NavItem eventKey={4} href="#">解决方案</NavItem></LinkContainer>
						<LinkContainer to="/partners"><NavItem eventKey={5} href="#">伙伴计划</NavItem></LinkContainer>
						<LinkContainer to="/career"><NavItem eventKey={6} href="#">加入我们</NavItem></LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<Route exact={true} path="/" component={Index}/>
			<Route path="/about" component={About}/>
			<Route path={Portfolio.path} component={Portfolio}/>
			<Route path="/solutions" component={Solutions}/>
			<Route path="/partners" component={Partners}/>
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
