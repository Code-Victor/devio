import react, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login, Signup, HomePage, Dashboard, Details, Edit } from "./pages";
import { databases, Server } from "../appwrite.config";
import { Query } from "appwrite";
import { Repo } from "./types";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/details",
    element: <Details />,
  },
  {
    path: "/:username",
    element: <HomePage />,
    loader: async ({ request, params }) => {
      console.log(params.username);
      let data = await databases.listDocuments(
        Server.databaseID,
        Server.collectionID
      );
      let promise2 = await fetch(
        "https://api.github.com/users/" + params.username + "/repos"
      );
      // sort by stars
      let repos: Repo[] = ((await promise2.json()) as any[])
        .map((repo) => ({
          name: repo.name,
          stars: repo.stargazers_count,
          description: repo.description,
          language: repo.language,
          link: repo.html_url,
        }))
        .sort((a, b) => b.stars - a.stars);

      return { data, repos, repo_length: repos.length };
    },
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
