import { Client, Account, Databases } from 'appwrite';

export const client = new Client();

client
    .setEndpoint(import.meta.env.PUBLIC_APPWRITE_ENDPOINT)
    .setProject(import.meta.env.PUBLIC_APPWRITE_PROJECT);

const account = new Account(client);
const databases = new Databases(client);

export const appwrite = {
    client,
    account,
    databases,
};
