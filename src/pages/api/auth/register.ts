import { appwrite } from './../../../lib/appwrite';
import { AppwriteException, ID } from 'appwrite';
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!email || !password) {
    return new Response("Email and password are required", { status: 400 });
  }

  try {
    const response = await appwrite.account.create(ID.unique(), email, password);
  } catch (error) {
    const appWriteError = error as AppwriteException;
    alert(appWriteError.message);
  }

  return redirect("/signin");
};
