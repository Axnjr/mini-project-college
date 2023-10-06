import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import Paper from '@mui/material/Paper';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

export default function SimpleBottomNavigation({ theme, changeTheme }) {

  const openNewTab = (url) => {
    window.open(url, '_blank').focus();
  }
  
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
    <BottomNavigation
      showLabels
      // ignore value change to not highlight
      value={'theme'}
      onChange={(event, newValue) => {
        if (newValue === 'theme') {
          changeTheme()
        } else {
          openNewTab(newValue);
        }
      }}
    >
      {/* <BottomNavigationAction value='https://johndao.com/blog' label="About" icon={<HelpCenterIcon />} /> */}
      <BottomNavigationAction value='https://johndao.com/blog/how-to-build-an-image-classifier-with-react' label="About" icon={<QuestionMarkIcon />} />
      <BottomNavigationAction value='https://johndao.com' label="Me" icon={<EmojiPeopleIcon />} />
      <BottomNavigationAction value='https://github.com/jnddao' label="Github" icon={<GitHubIcon />} />
      <BottomNavigationAction value='theme' label="Theme" icon={theme === 'light' ? <LightModeIcon /> : <DarkModeIcon />} />
    </BottomNavigation>
  </Paper>
  );
}
