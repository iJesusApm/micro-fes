# Microfrontends with React and Webpack

This project is a web application that allows loading a list of characters from two different series or movies: Rick and Morty and Harry Potter. The application is composed of several independent projects implemented as microfrontends, each with its own functionality and responsibility.

## Projects

### HOST

The "HOST" project is the main application that acts as the host for the microfrontends. It allows changing the language of the application and provides buttons to load the character lists from Rick and Morty and Harry Potter.

- **Source Code:** [GitHub](https://github.com/iJesusApm/micro-fes/tree/main/host)
- **Preview:** [Vercel](https://micro-fes-host.vercel.app/)

### Rick and Morty App

The "Rick and Morty App" project is a microfrontend that displays the character list from the Rick and Morty series. The data is obtained from the Rick and Morty API.

- **Source Code:** [GitHub](https://github.com/iJesusApm/micro-fes/tree/main/rick-and-morty-app)
- **Preview:** [Vercel](https://micro-fes-rick-and-morthy.vercel.app/)

### Harry Potter App

The "Harry Potter App" project is another microfrontend that displays the character list from the Harry Potter movies. The data is obtained from the Harry Potter API.

- **Source Code:** [GitHub](https://github.com/iJesusApm/micro-fes/tree/main/harry-potter-app)
- **Preview:** [Vercel](https://micro-fes-harry-potter.vercel.app/)

## Technologies Used

- React with TypeScript
- Webpack
- Styled Components with BEM Methodology
- ESlint and Prettier for code formatting and linting rules
- Translation libraries: react-i18next and i18next
- Testing: Jest and React Testing Library

## Architecture

The project follows a component-based architecture using React, with a clear separation of responsibilities. Each microfrontend is designed to be independent and reusable. Styled Components have been used to manage styles in a modular way.
