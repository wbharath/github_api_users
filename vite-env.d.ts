interface ImportMetaEnv {
  readonly VITE_GITHUB_TOKEN: string
  // Add other env variables as needed
  // readonly VITE_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
