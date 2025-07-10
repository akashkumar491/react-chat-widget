import React from 'react';
import ReactDOM from 'react-dom/client';
import ChatWidget from './ChatWidget';

window.renderChatWidget = function ({ propertyId }) {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = ReactDOM.createRoot(container);
  root.render(<ChatWidget propertyId={propertyId} />);
};
