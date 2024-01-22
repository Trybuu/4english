import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import EnglishLearningPage from './pages/EnglishLearningPage'
import HomePage from './pages/HomePage'
import HomeLayout from './layouts/HomeLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: '/app',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <EnglishLearningPage />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App
