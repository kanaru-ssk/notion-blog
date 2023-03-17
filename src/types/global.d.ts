// define type of environment variables
declare namespace NodeJS {
  interface ProcessEnv {
    readonly NOTION_TOKEN: string;
    readonly NOTION_DATABASE: string;
  }
}
