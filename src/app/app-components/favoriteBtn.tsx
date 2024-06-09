"use client"

import { Button } from "@/components/ui/button";
import { useState } from "react";
import HeartFilledIcon from "./heart-filled-icon";
import HeartIcon from "./heart-icon";

export default function FavoriteBtn() {
  const [isFavorite, setIsFavorite] = useState(false);
  return <Button className="bg-[#ffffff] hover:bg-[#ececec]">{isFavorite ? <HeartFilledIcon /> : <HeartIcon />}</Button>;
}
