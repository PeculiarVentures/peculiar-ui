import '@emotion/react';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface Theme {
    mode: 'light' | 'dark';
  }
}
