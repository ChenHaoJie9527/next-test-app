"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import HeartFilledIcon from "./heart-filled-icon";
import HeartIcon from "./heart-icon";

export default function FavoriteBtn() {
  const [isFavorite, setIsFavorite] = useState(false);
  let hasFagoted;
  if (typeof window !== "undefined") {
    hasFagoted = true;
  }
  // const isFavoriteValue = localStorage.getItem("isFavorite") || "not value";
  // console.log("isFavoriteValue =>", isFavoriteValue);
  return (
    <div>
      <Button className="bg-[#ffffff] hover:bg-[#ececec]">
        {isFavorite ? <HeartFilledIcon /> : <HeartIcon />}
        {/* suppressHydrationWarning：消除水合报警 */}
        {/* <div suppressHydrationWarning>当前页面是服务端预渲染嘛？{hasFagoted ? "Yes" : "Noe"}</div> */}
      </Button>
      <div>当前页面是服务端预渲染嘛？{hasFagoted ? "Yes" : "Noe"}</div>
    </div>
  );
}
