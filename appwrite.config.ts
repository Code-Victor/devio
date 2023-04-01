import { Client, Account, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("64272293736af6b1185b");

const account = new Account(client);
const databases = new Databases(client);

export {
    client,
    account,
    databases
}