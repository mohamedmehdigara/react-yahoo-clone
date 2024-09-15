import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledSettings = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 20px;
  margin-left: 400px;
`;

const StyledSettingGroup = styled.div`
  margin-bottom: 20px;
`;

const StyledSettingLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const StyledSettingInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
`;

const StyledSettingCheckbox = styled.input`
  margin-right: 5px;
`;

const StyledSettingButton = styled.button`
  background-color: #f0f0f0;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

const Settings = () => {
  const [theme, setTheme] = useState('light');
  const [fontSize, setFontSize] = useState('medium');
  const [password, setPassword] = useState('');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
    // Apply theme changes (e.g., update CSS variables)
  };

  const handleFontSizeChange = (event) => {
    setFontSize(event.target.value);
    // Apply font size changes (e.g., update CSS variables)
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNotificationsChange = (event) => {
    setNotificationsEnabled(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle password change or save settings logic here
    console.log('Settings saved!');
  };

  return (
    <StyledSettings>
      <h2>Settings</h2>
      <StyledSettingGroup>
        <StyledSettingLabel>Theme:</StyledSettingLabel>
        <select value={theme} onChange={handleThemeChange}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </StyledSettingGroup>
      <StyledSettingGroup>
        <StyledSettingLabel>Font Size:</StyledSettingLabel>
        <select value={fontSize} onChange={handleFontSizeChange}>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </StyledSettingGroup>
      <StyledSettingGroup>
        <StyledSettingLabel>Password:</StyledSettingLabel>
        <StyledSettingInput
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </StyledSettingGroup>
      <StyledSettingGroup>
        <StyledSettingLabel>Notifications:</StyledSettingLabel>
        <StyledSettingCheckbox
          type="checkbox"
          checked={notificationsEnabled}
          onChange={handleNotificationsChange}
        />
        <span>Enable notifications</span>
      </StyledSettingGroup>
      <StyledSettingButton type="submit" onClick={handleSubmit}>
        Save Settings
      </StyledSettingButton>
    </StyledSettings>
  );
};

export default Settings;