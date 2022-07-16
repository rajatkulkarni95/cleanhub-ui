import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/common/Header";
import { ThemeProvider } from "next-themes";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <main className="relative flex h-full min-h-screen flex-col bg-zinc-50 dark:bg-zinc-900">
        <div className="w-3/4 mx-auto">
          <Header />
          <Component {...pageProps} />
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;
