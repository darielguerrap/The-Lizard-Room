import React from 'react';
import { WebsiteInnerWindow } from './components/websiteinnerwindow/innerwindow/WebsiteInnerWindow';
import { WebsiteBackground } from './components/websitebackground/WebsiteBackground';
import { WebsiteInnerWindowBackground } from './components/innerwindowbackground/WebsiteInnerWindowBackground';

export const TheLizardRoomWebsite = () => {
  return (
    <>
      <WebsiteBackground />
      <WebsiteInnerWindowBackground />
      <WebsiteInnerWindow />       
    </>
  )
};


