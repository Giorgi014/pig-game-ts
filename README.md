# Pig Game

Pig Game is a simple two-player dice game implemented with React, TypeScript, and Vite. The goal is to reach the target score before your opponent by rolling dice and strategically holding your points.

## Gameplay

- Each player takes turns rolling a die.
- If a player rolls a 1, their current turn score resets and the turn passes to the other player.
- If a player rolls 2–6, the value is added to their current turn score.
- Players can choose to "Hold" to add their current turn score to their total score and pass the turn.
- The first player to reach the target score (default: 100) wins.

## Project Structure

- [`src/App.tsx`](src/App.tsx): Main app entry, sets up routing.
- [`src/components/Main/Main.tsx`](src/components/Main/Main.tsx): Main game layout and state management.
- [`src/components/Game/Game.tsx`](src/components/Game/Game.tsx): Game logic and controls.
- [`src/components/Game/Dice/`](src/components/Game/Dice/): Dice face components.
- [`src/components/Players/PlayerOne.tsx`](src/components/Players/PlayerOne.tsx), [`src/components/Players/PlayerTwo.tsx`](src/components/Players/PlayerTwo.tsx): Player panels.
- [`src/components/Type.tsx`](src/components/Type.tsx): Type definitions for props and state.

## Libraries Used

- **React**: UI library for building interactive interfaces.
- **React DOM**: DOM bindings for React.
- **React Router DOM**: Routing for React applications.
- **TypeScript**: Typed superset of JavaScript for safer code.
- **Vite**: Fast build tool and development server.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **@vitejs/plugin-react**: Vite plugin for React support.
- **@tailwindcss/vite**: Vite plugin for Tailwind CSS integration.
- **ESLint**: Linting tool for code quality.
- **typescript-eslint**: TypeScript support for ESLint.
- **eslint-plugin-react-hooks**: Linting rules for React hooks.
- **eslint-plugin-react-refresh**: Linting rules for React Fast Refresh.
- **Globals**: Provides global variable definitions for ESLint.

## How to Run the Project

1. **Install dependencies**  
   Run in your project directory:

   ```sh
   npm install
   ```

2. **Start the development server**

   ```sh
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) in your browser.

3. **Build for production**

   ```sh
   npm run build
   ```

4. **Preview the production build**

   ```sh
   npm run preview
   ```

5. **Lint the code**
   ```sh
   npm run lint
   ```

## Configuration Files

- [`vite.config.ts`](vite.config.ts): Vite configuration.
- [`tsconfig.json`](tsconfig.json), [`tsconfig.app.json`](tsconfig.app.json), [`tsconfig.node.json`](tsconfig.node.json): TypeScript configs.
- [`eslint.config.js`](eslint.config.js): ESLint configuration.

## License

This project is for educational purposes.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
