import React from 'react';
import ReactDOM from 'react-dom/client';
import ChatWidget from './ChatWidget';

function injectCSS(href) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  document.head.appendChild(link);
}

injectCSS("https://react-chat-widget-eight.vercel.app/ChatWidget.css");



window.renderChatWidget = function ({ propertyId }) {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = ReactDOM.createRoot(container);
  root.render(<ChatWidget propertyId={propertyId} />);
};
