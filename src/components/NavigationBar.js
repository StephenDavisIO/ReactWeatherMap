import Logo from './Logo';
import { Navbar, Container, Nav, NavLink } from 'react-bootstrap';

function NavigationBar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <Logo />
                    React Weather Map
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink href="https://github.com/StephenDavisIO/ReactWeatherMap/" target="_blank">View GitHub Repository</NavLink>
                        <NavLink href="https://stephendavis.io/" target="_blank">Stephen Davis</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;
