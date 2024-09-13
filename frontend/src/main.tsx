import React from "react"
import ReactDOM from "react-dom/client"

import App from "./App"
import "./index.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Feed from "./pages/Feed"
import Upload from "./pages/Upload"
import Profile from "./pages/Profile"
import SinglePost from "./pages/SinglePost"
import { ApolloProvider } from "@apollo/client"
import { client } from "./utils/apolloClient"
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev"
import ProtectedRoutes from "./components/ProtectedRoutes"

loadDevMessages()
loadErrorMessages()

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoutes>
        <Feed />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/upload",
    element: (
      <ProtectedRoutes>
        <Upload />
      </ProtectedRoutes>
    ),
  },

  //profile page with dynamic id parameter
  {
    path: "/profile/:id",
    element: <Profile />,
  },
  {
    path: "/post/:id",
    element: <SinglePost />,
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />

      <App />
    </ApolloProvider>
  </React.StrictMode>
)