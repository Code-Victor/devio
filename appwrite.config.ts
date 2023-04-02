import { Client, Account, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("64272293736af6b1185b");

const account = new Account(client);
const databases = new Databases(client);

export const Server = {
  collectionID: "64284b5236fa51bdea40",
  databaseID: "6428489a7dc0360c55a8",
};

export { client, account, databases };
