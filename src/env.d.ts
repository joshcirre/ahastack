/// <reference types="astro/client" />


interface Window {
    Alpine: import('alpinejs').Alpine;
  }

  interface ImportMetaEnv {
    readonly PUBLIC_APPWRITE_ENDPOINT: string
    readonly PUBLIC_APPWRITE_PROJECT: string
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
