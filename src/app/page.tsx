import ThemeProvider from "@/providers/theme-providers";
import UpdateBtn from "./app-components/Update-btn";
import Product from "./app-components/components";
import FavoriteBtn from "./app-components/favoriteBtn";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center mt-32 gap-12 text-xl">
      <h1 className="text-5xl font-mono">My Store</h1>
      <ThemeProvider>
        <Product />
      </ThemeProvider>
      <FavoriteBtn />
      <UpdateBtn />
    </main>
  );
}
