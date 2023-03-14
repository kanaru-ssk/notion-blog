// define type of environment variables
declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_NOTION_TOKEN: string;
    readonly NEXT_PUBLIC_NOTION_DATABASE: string;
  }
}
