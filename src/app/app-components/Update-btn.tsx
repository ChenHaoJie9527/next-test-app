"use client"
import { Button } from "@/components/ui/button";

export default function UpdateBtn() {
  return (
    <Button
      onClick={() => {
        console.log("Update");
      }}
    >
      Update
    </Button>
  );
}
