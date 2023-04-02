import { Technologies } from "./components/Technologies";

export interface GithubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: null;
  hireable: null;
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: Date;
  updated_at: Date;
}
export interface ListResponse {
  total: number;
  documents: Document[];
}

export interface Document {
  name: string;
  github_username: string;
  large_bio: string;
  short_bio: string;
  tools: Technologies[];
  linkedin_url: string;
  instagram_url: string;
  twitter_url: string;
  facebook_url: string;
  avatar_url: string;
  $id: string;
  $createdAt: Date;
  $updatedAt: Date;
  $permissions: string[];
  $collectionId: string;
  $databaseId: string;
}
export interface Repo {
  name: string;
  description: string;
  language: string;
  stars: string;
  link: string;
}
