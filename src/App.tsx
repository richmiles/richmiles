import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { css } from '@emotion/css'
import theme from './theme';


var background = css`
  background-color: ${theme.colors.background};
  width: 100%;
  height: 100%;`

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className={background} >
        Hello world.
      </div>
    </ThemeProvider>

  )
}