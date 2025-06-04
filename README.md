# Drink Master - React Cocktail Finder

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React Router](https://img.shields.io/badge/React%20Router-v6-blue)](https://reactrouter.com/)
[![TanStack Query](https://img.shields.io/badge/TanStack%20Query-v4/v5-brightgreen)](https://tanstack.com/query/)

## 📝 Description

Drink Master is a dynamic web application built with React that allows users to explore a vast database of cocktails. Users can search for their favorite drinks, view detailed recipes including ingredients and instructions, and discover new concoctions. The application leverages TheCocktailDB API for fetching drink data and utilizes modern React features like React Router v6 for navigation and data loading, and TanStack Query (React Query) for efficient server state management. It also includes a newsletter signup feature.

## ✨ Features

- **Search Cocktails:** Find cocktails by name using TheCocktailDB API.
- **Browse Cocktails:** Displays a list of cocktails with images, names, glass type, and alcoholic information.
- **Detailed View:** Click on a cocktail to see its detailed recipe, including ingredients, measurements, and instructions.
- **Client-Side Routing:** Smooth navigation between Home, About, Newsletter, and individual cocktail pages using React Router v6.
- **Efficient Data Fetching:**
  - Uses React Router **Loaders** to fetch data before rendering pages.
  - Integrates **TanStack Query (React Query)** for robust server state management, caching, and background updates.
- **Newsletter Signup:** A functional newsletter form that submits data (to `course-api.com`).
- **User Feedback:**
  - Global loading indicators during page transitions and data fetching.
  - Error pages for invalid routes or API issues.
  - Toast notifications for actions like newsletter subscription using `react-toastify`.
- **Styled Components:** Custom styling for components using `styled-components` wrappers.

## 🚀 Live Demo

[Link to Live Demo](#)

## 🛠️ Technologies Used

- **Frontend:** React.js (Vite assumed)
- **Routing:** React Router DOM v6 (including Loaders, Actions, `useNavigation`)
- **Server State Management:** TanStack Query (React Query v4/v5)
- **HTTP Client:** Axios
- **Styling:** Styled Components, CSS
- **Notifications:** `react-toastify`
- **API:**
  - [TheCocktailDB API](https://www.thecocktaildb.com/api.php) for cocktail data.
  - `course-api.com` for newsletter submissions.

## ⚙️ Setup and Installation

To run this project locally, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/VidyasagarAkhumukhi/MixMaster
    cd <your-repository-directory-name>
    ```

2.  **Install dependencies:**
    Make sure you have Node.js and npm (or yarn) installed.

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    This will typically open the application in your default browser (e.g., `http://localhost:5173` for Vite). TheCocktailDB API is public and does not require an API key for the used endpoints.

## 📖 Usage

1.  Open the application in your browser.
2.  **Homepage (Landing):**
    - Use the search bar to type the name of a cocktail (e.g., "Margarita", "Mojito"). The default search is "Gin".
    - Click "Search" or press Enter.
    - A list of matching cocktails will be displayed.
3.  **Cocktail Details:**
    - Click the "Details" button on any cocktail card to navigate to its dedicated page.
    - Here you'll find the image, name, category, alcoholic info, glass type, ingredients, and instructions.
    - Click "back home" to return to the previous search results or the landing page.
4.  **Navigation:**
    - Use the Navbar to navigate to "Home", "About", and "Newsletter" pages.
5.  **Newsletter:**
    - Fill out the form on the Newsletter page and click "submit".
    - You will receive a toast notification indicating success or failure.

## 🏗️ Project Structure

- `src/`: Contains the main source code.
  - `assets/`: Static assets and styled-component wrappers.
    - `wrappers/`: Contains styled-component wrapper files (e.g., `Navbar.js`, `CocktailCard.js`).
  - `components/`: Reusable UI components.
    - `CocktailCard.jsx`
    - `CocktailList.jsx`
    - `Navbar.jsx`
    - `SearchForm.jsx`
  - `pages/`: Route components.
    - `About.jsx`
    - `Cocktail.jsx` (handles fetching and displaying single cocktail details)
    - `Error.jsx` (global error page for router)
    - `HomeLayout.jsx` (main layout wrapper with Navbar and Outlet)
    - `Landing.jsx` (homepage with search and cocktail list)
    - `Newsletter.jsx` (newsletter signup form and submission logic)
    - `SinglePageError.jsx` (error element for specific routes)
    - `index.js` (exports all pages)
  - `App.jsx`: Sets up the React Router configuration and `QueryClientProvider`.
  - `main.jsx`: Application entry point, renders `App` and sets up `ToastContainer`.
  - `index.css`: Global CSS styles and variables.
- `public/`: Static assets served by the build tool (e.g., `_redirects` for Netlify).
- `.gitignore`: Specifies intentionally untracked files.
- `package.json`: Lists project dependencies and scripts.
- `vite.config.js` (if using Vite): Vite configuration file.

## 💡 Technical Highlights

- **React Router v6 Data Layer:**
  - **Loaders:** Functions like `loader` in `Landing.jsx` and `Cocktail.jsx` are used to fetch data before a route renders, improving perceived performance and data handling.
  - **Actions:** The `action` function in `Newsletter.jsx` handles form submissions seamlessly with React Router.
  - **`useNavigation`:** Provides information about the state of navigation (e.g., 'idle', 'submitting', 'loading') for UI feedback.
- **TanStack Query (React Query):**
  - Integrated with React Router loaders (`queryClient.ensureQueryData`) to pre-fetch and cache data.
  - `useQuery` hook is used in components to subscribe to cached data.
  - Provides benefits like caching, background refetching, and stale-while-revalidate strategies, reducing API calls and improving UX.
  - `ReactQueryDevtools` are included for easy debugging of query states.
- **Styled Components:** Wrapper components in `assets/wrappers/` encapsulate styles, promoting maintainable and co-located styling.

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-awesome-feature`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some awesome feature'`).
5.  Push to the branch (`git push origin feature/your-awesome-feature`).
6.  Open a Pull Request.
