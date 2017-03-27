
import React from 'react';
import ReactDOM from 'react-dom';

import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';

import 'bootstrap/less/bootstrap.less';
import '../less/style.less';


import logo from '../images/logo.png';
const navbarInstance = (
	<Navbar inverse collapseOnSelect>
		<Navbar.Header>
			<Navbar.Brand>
				<a href="#">
					<span><img src={logo} /></span>
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


ReactDOM.render(
	navbarInstance,
	document.getElementById('root')
);
