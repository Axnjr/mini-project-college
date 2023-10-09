import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import Paper from '@mui/material/Paper';

export default function SimpleBottomNavigation() {

  const openNewTab = (url) => {
    window.open(url, '_blank').focus();
  }
  
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor:"black", color:"white" }} elevation={3}>
    <BottomNavigation
      showLabels
    >
      <BottomNavigationAction value='https://axn.vercel.app' label="Me" icon={<EmojiPeopleIcon />} />
      <BottomNavigationAction value='https://github.com/Axnjr/mini-project-college' label="Github" icon={<GitHubIcon />} />
    </BottomNavigation>
  </Paper>
  );
}
