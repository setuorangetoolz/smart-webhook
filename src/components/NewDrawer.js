import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import SmartHooks from './SmartHooks';
import "./smarthooks.css";

export default function NewDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

 const anchor = 'right';

  return (
    <div>
      
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>Right</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <SmartHooks/>
          </Drawer>
        </React.Fragment>
     
    </div>
  );
}
