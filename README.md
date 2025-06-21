# Fast React Pizza

A modern pizza ordering web application built with React, Redux Toolkit, and Vite.

## Features

- Browse a menu of pizzas fetched from a remote API
- Add, remove, and update pizza items in your cart
- Place orders with optional priority handling
- Search for existing orders by order number
- Autofill delivery address using geolocation
- Responsive, mobile-friendly UI with Tailwind CSS
- Error handling and loading states

## Tech Stack

- [React](https://react.dev/) for UI development
- [Redux Toolkit](https://redux-toolkit.js.org/) for state management
- [React Router](https://reactrouter.com/) for routing
- [Vite](https://vitejs.dev/) for fast development and build
- [Tailwind CSS](https://tailwindcss.com/) for styling

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Start the development server:**
   ```sh
   npm run dev
   ```

3. **Build for production:**
   ```sh
   npm run build
   ```

## Project Structure

- `src/features/` – Feature modules (cart, menu, order, user)
- `src/services/` – API service functions
- `src/ui/` – Reusable UI components
- `src/utils/` – Utility and helper functions

## License

This project is for educational