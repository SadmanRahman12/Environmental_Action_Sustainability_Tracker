import React, { useContext, useState } from 'react';
import { Container, Row, Col, Nav, Tab, Form, Button, ButtonGroup } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext';
import { FaPalette, FaBell, FaRulerVertical, FaUserShield, FaUniversalAccess, FaLanguage } from 'react-icons/fa';
import './Settings.css';

const Settings = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [notifications, setNotifications] = useState({
    newPost: true,
    habitReminders: true,
  });
  const [units, setUnits] = useState('metric');
  const [fontSize, setFontSize] = useState('medium');
  const [highContrast, setHighContrast] = useState(false);
  const [language, setLanguage] = useState('en');

  const handleNotificationChange = (event) => {
    setNotifications({
      ...notifications,
      [event.target.name]: event.target.checked,
    });
  };

  const handleUnitChange = (event) => {
    setUnits(event.target.value);
  };

  const handleDownloadData = () => {
    alert('Downloading your data...');
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      alert('Deleting your account...');
    }
  };

  return (
    <Container fluid className="settings-page">
      <Tab.Container id="settings-tabs" defaultActiveKey="theme">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="theme">
                  <FaPalette className="me-2" /> Theme
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="notifications">
                  <FaBell className="me-2" /> Notifications
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="units">
                  <FaRulerVertical className="me-2" /> Units
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="privacy">
                  <FaUserShield className="me-2" /> Data & Privacy
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="accessibility">
                  <FaUniversalAccess className="me-2" /> Accessibility
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="language">
                  <FaLanguage className="me-2" /> Language
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="theme">
                <h3>Theme Settings</h3>
                <p>Customize the look and feel of the application.</p>
                <Form.Check
                  type="switch"
                  id="theme-switch"
                  label={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                  checked={theme === 'dark'}
                  onChange={toggleTheme}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="notifications">
                <h3>Notification Settings</h3>
                <p>Choose what you want to be notified about.</p>
                <Form.Check
                  type="checkbox"
                  id="new-post-notification"
                  label="New blog posts"
                  name="newPost"
                  checked={notifications.newPost}
                  onChange={handleNotificationChange}
                />
                <Form.Check
                  type="checkbox"
                  id="habit-reminders-notification"
                  label="Habit reminders"
                  name="habitReminders"
                  checked={notifications.habitReminders}
                  onChange={handleNotificationChange}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="units">
                <h3>Unit Settings</h3>
                <p>Select your preferred measurement units.</p>
                <Form.Select value={units} onChange={handleUnitChange}>
                  <option value="metric">Metric (kg, L)</option>
                  <option value="imperial">Imperial (lbs, gallons)</option>
                </Form.Select>
              </Tab.Pane>
              <Tab.Pane eventKey="privacy">
                <h3>Data & Privacy</h3>
                <p>Manage your account data.</p>
                <Button variant="primary" onClick={handleDownloadData}>
                  Download My Data
                </Button>
                <hr />
                <p>This action is irreversible. Please be certain.</p>
                <Button variant="danger" onClick={handleDeleteAccount}>
                  Delete My Account
                </Button>
              </Tab.Pane>
              <Tab.Pane eventKey="accessibility">
                <h3>Accessibility Settings</h3>
                <p>Adjust the application for your needs.</p>
                <h5>Font Size</h5>
                <ButtonGroup aria-label="Font size">
                  <Button variant={fontSize === 'small' ? 'primary' : 'secondary'} onClick={() => setFontSize('small')}>Small</Button>
                  <Button variant={fontSize === 'medium' ? 'primary' : 'secondary'} onClick={() => setFontSize('medium')}>Medium</Button>
                  <Button variant={fontSize === 'large' ? 'primary' : 'secondary'} onClick={() => setFontSize('large')}>Large</Button>
                </ButtonGroup>
                <hr />
                <h5>High Contrast</h5>
                <Form.Check
                  type="switch"
                  id="high-contrast-switch"
                  label="Enable High Contrast Mode"
                  checked={highContrast}
                  onChange={() => setHighContrast(!highContrast)}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="language">
                <h3>Language Settings</h3>
                <p>Select your preferred language.</p>
                <Form.Select value={language} onChange={(e) => setLanguage(e.target.value)}>
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                  <option value="de">Deutsch</option>
                </Form.Select>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default Settings;
