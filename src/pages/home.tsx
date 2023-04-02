import React from "react";
import {
  Header,
  Hero,
  About,
  Portfolio,
  Technologies,
  Cta,
} from "../components";
import { useLoaderData, useParams } from "react-router-dom";
import { ListResponse, Repo } from "../types";

function Homepage() {
  const loaderRes = useLoaderData() as {
    data: ListResponse;
    repos: Repo[];
    repo_length: number;
  };
  console.log(loaderRes);
  const { username } = useParams();
  const userData = loaderRes.data.documents.find(
    (doc) => doc.github_username === username
  )!;
  const socialLinks = {
    twitter: userData.twitter_url,
    linkedin: userData.linkedin_url,
    instagram: userData.instagram_url,
    facebook: userData.facebook_url,
    github: "https://github.com/" + userData.github_username,
  };
  if (!userData) {
    <div>
      <h1>404</h1>
    </div>;
  }
  return (
    <div className="bg-primary text-white">
      <Header title={userData.github_username} />
      <Hero
        name={userData.name}
        bio={userData.short_bio}
        avatar_url={userData.avatar_url}
      />
      <About bio={userData.large_bio} username={userData.github_username} />
      <Portfolio repos={loaderRes.repos} />
      <Technologies />
      <Cta {...socialLinks} />
    </div>
  );
}

export default Homepage;
