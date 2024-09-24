import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledNotifications = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 999; /* Ensure notifications are always on top */
`;

const StyledNotification = styled.div`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: #f5f5f5;
  cursor: pointer;
`;

const StyledNotificationContent = styled.p`
  margin: 0;
`;

const StyledNotificationCloseButton = styled.button`
  float: right;
  padding: 5px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  useEffect(() => {
    // Simulate receiving notifications (replace with your actual logic)
    const interval = setInterval(() => {
      const newNotification = {
        id: notifications.length + 1,
        message: 'You have a new email from John Doe.',
        timestamp: new Date().toLocaleTimeString()
      };
      setNotifications([...notifications, newNotification]);
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleNotificationClick = (notificationId) => {
    // Handle notification click logic (e.g., mark as read, open related item)
    console.log('Notification clicked:', notificationId);
  };

  const handleCloseNotification = (notificationId) => {
    setNotifications(notifications.filter((notification) => notification.id !== notificationId));
  };

  const handleNotificationsChange = (event) => {
    setNotificationsEnabled(event.target.checked);
  };

  return (
    <StyledNotifications>
      {notificationsEnabled && notifications.map((notification) => (
        <StyledNotification key={notification.id}>
          <StyledNotificationContent>{notification.message}</StyledNotificationContent>
          <StyledNotificationCloseButton onClick={() => handleCloseNotification(notification.id)}>
            X
          </StyledNotificationCloseButton>
        </StyledNotification>
      ))}
    </StyledNotifications>
  );
};

export default Notifications;