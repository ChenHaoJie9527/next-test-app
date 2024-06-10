import ThemeProvider from "@/providers/theme-providers";
import UpdateBtn from "./app-components/Update-btn";
import Product from "./app-components/components";
import FavoriteBtn from "./app-components/favoriteBtn";
import dynamic from "next/dynamic";

// 动态导入 不需要服务器进行预渲染组件
const DynamicFavoriteBtn = dynamic(
  () => import("@/app/app-components/favoriteBtn"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <main className="flex flex-col items-center mt-32 gap-12 text-xl">
      <h1 className="text-5xl font-mono">My Store</h1>
      <ThemeProvider>
        <Product />
      </ThemeProvider>
      <FavoriteBtn />
      {/* <DynamicFavoriteBtn /> */}
      <UpdateBtn />
    </main>
  );
}
