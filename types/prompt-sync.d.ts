declare module 'prompt-sync' {
  interface Prompt { (prompt?: string): string }
  function promptSync(opts?: { sigint?: boolean }): Prompt;
  export default promptSync;
}
