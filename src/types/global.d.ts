// define type of environment variables
declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_DOMAIN: string;
    readonly NOTION_TOKEN: string;
    readonly NOTION_DATABASE: string;
  }
}
