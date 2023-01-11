import React from 'react';
import * as ReactDOM from 'react-dom/client';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  }

  return (
    <Tabs value={value} onChange={handleChange}>
      <Tab label="Tab 1" />
      <Tab label="Tab 2" />
      <Tab label="Tab 3" />
    </Tabs>
  )
}
  

const root = ReactDOM.createRoot(document.getElementById("root")!)
root.render(<App />)
