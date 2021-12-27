declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: string;
    PORT: string;
    DATABASE: string;
    DATABASE_PASSWORD: string;
    JWT_KEY: string;
    JWT_EXPIRES_IN: string;
    JWT_COOKIE_EXPIRES_IN: string;
  }
}
