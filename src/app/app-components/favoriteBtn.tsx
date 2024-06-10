"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import HeartFilledIcon from "./heart-filled-icon";
import HeartIcon from "./heart-icon";

export default function FavoriteBtn() {
  console.log('111111111111');
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    const isFavoriteValue = localStorage.getItem("isFavorite") || 'not value';
    console.log('isFavoriteValue =>', isFavoriteValue);
  }, []);
  return (
    <Button className="bg-[#ffffff] hover:bg-[#ececec]">
      {isFavorite ? <HeartFilledIcon /> : <HeartIcon />}
    </Button>
  );
}
