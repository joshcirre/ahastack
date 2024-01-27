import { appwrite } from './../../../lib/appwrite';
import { AppwriteException, ID } from 'appwrite';
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!email || !password) {
    return new Response("Email and password are required", { status: 400 });
  }

  try {
    const data = await appwrite.account.createEmailSession(email, password);
  } catch (error) {
    const appWriteError = error as AppwriteException;
    return new Response(appWriteError.message, { status: 400 });
  }

  return redirect("/dashboard");
};
