import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

export default function SimpleBottomNavigation() {
  const openNewTab = (url) => {
    window.open(url, '_blank').focus();
  }

  return (
    <nav style={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: "#d2e823", color: "black", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <a href="https://axn.vercel.app">Me<EmojiPeopleIcon /></a>
      <a href="https://github.com/Axnjr/mini-project-college">GitHub <GitHubIcon /></a>
    </nav>
  );
}