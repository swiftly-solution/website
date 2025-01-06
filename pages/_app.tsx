import { ThemeProvider } from "@/components/ui/theme-provider";
import { store } from "@/modules/state";
import "@/styles/globals.css";
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
