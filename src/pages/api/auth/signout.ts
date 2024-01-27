import type { APIRoute } from "astro";
import { appwrite } from "./../../../lib/appwrite";

export const GET: APIRoute = async ({ cookies, redirect }) => {
    await appwrite.account.deleteSession('current');

    return redirect("/signin");
  };
