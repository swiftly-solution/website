import { ThemeProvider } from "@/components/ui/theme-provider";
import { store } from "@/modules/state";
import "@/styles/globals.css";
import "@/styles/markdownStyle.css";
import 'highlight.js/styles/github-dark.css';
import 'remark-github-blockquote-alert/alert.css'
import { StoreProvider } from "easy-peasy";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider store={store}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </StoreProvider>
  )
}
