import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/common/Header";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session} refetchInterval={5 * 60}>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <main className="relative flex h-full min-h-screen flex-col bg-zinc-50 dark:bg-zinc-900">
          <div className="w-3/4 mx-auto">
            <Header />
            <Component {...pageProps} />
          </div>
        </main>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default App;
