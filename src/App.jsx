import { createBrowserRouter, RouterProvider } from "react-router"
import Layout from "./wrappers/Layout"
import HomePage from "./pages/HomePage"
import MoviePage from "./pages/MoviePage"
import { MovieProvider } from "./context/Moviecontext"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />
      },
      {
        path: "moviePage",
        element: <MoviePage />
      }
    ]
  }

], {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true
  }
})

const App = () => {
  return (
    <MovieProvider>
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true
        }}
      >
      </RouterProvider>
    </MovieProvider>
  )
}

export default App