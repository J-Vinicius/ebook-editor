"use client"

import EbookConverter from "./components/Conversor";
import Header from "./components/Header";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "./components/ui/toaster";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <EbookConverter />
      <Toaster />
    </ThemeProvider>
  );
}
