
// import React, { createContext, useState, useContext } from 'react';
// import "../App.css"

// export const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState('light');

//   const toggleTheme = () => {
//     setTheme((prevTheme) => {
//       switch (prevTheme) {
//         case 'default':
//           return 'light';
//         case 'light':
//           return 'dark';
//         case 'dark':
//           return 'blue';
//         case 'blue':
//           return 'default';
//         default:
//           return 'default';
//       }
//     });
//      console.log("hello");
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// // ThemeSwitcher component to toggle themes
// export const ThemeSwitcher = () => {
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   const handleThemeChange = () => {
//     toggleTheme(); // Toggle the theme using the context function
//   };

//   let buttonText;
//   switch (theme) {
//     case 'default':
//       buttonText = 'Switch to Light Theme';
//       break;
//     case 'light':
//       buttonText = 'Switch to Dark Theme';
//       break;
//     case 'dark':
//       buttonText = 'Switch to Blue Theme';
//       break;
//     case 'blue':
//       buttonText = 'Switch to Default Theme';
//       break;
//     default:
//       buttonText = 'Switch Theme';
//   }

//   return (
//     <button onClick={handleThemeChange}>{buttonText}</button>
//   );
// };

// // ThemeProviderAndSwitcher component to encapsulate both ThemeProvider and ThemeSwitcher
// export const ThemeProviderAndSwitcher = ({ children }) => {
//   return (
//     <ThemeProvider>
//       {children}
//       <ThemeSwitcher />
//     </ThemeProvider>
//   );
// };

// export default ThemeProviderAndSwitcher;

import React, { createContext, useState, useContext } from 'react';
import "../App.css"

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      switch (prevTheme) {
        case 'default':
          return 'light';
        case 'light':
          return 'dark';
        case 'dark':
          return 'blue';
        case 'blue':
          return 'default';
        default:
          return 'default';
      }
    });
     console.log("hello");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// ThemeSwitcher component to toggle themes
export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    toggleTheme();
  };

  let buttonText;
  switch (theme) {
    case 'default':
      buttonText = 'Switch to Light Theme';
      break;
    case 'light':
      buttonText = 'Switch to Dark Theme';
      break;
    case 'dark':
      buttonText = 'Switch to Blue Theme';
      break;
    case 'blue':
      buttonText = 'Switch to Default Theme';
      break;
    default:
      buttonText = 'Switch Theme';
  }

  return (
    <button className="theme-switcher-button" onClick={handleThemeChange}>
      {buttonText}
    </button>
  );
};
// ThemeProviderAndSwitcher component to encapsulate both ThemeProvider and ThemeSwitcher
export const ThemeProviderAndSwitcher = ({ children }) => {
  return (
    <ThemeProvider>
      {children}
      <ThemeSwitcher />
    </ThemeProvider>
  );
};

export default ThemeProviderAndSwitcher;
