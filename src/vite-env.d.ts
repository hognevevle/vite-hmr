/// <reference types="vite/client" />

interface ImportMetaEnv {
  BASE_URL: string
  VITE_IFRAME_URL: string
  VITE_TYPING_ENDPOINT: string
  VITE_TOKEN_ENDPOINT: string
  VITE_API_URL: string
  IS_TEST: boolean
  DEV: boolean
  NODE_ENV: "development" | "production"
  PORT?: string
  PWD: string
}
