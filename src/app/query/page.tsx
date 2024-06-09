"use client";

import { useState } from "react";
import { helloAction } from "./actions";
import { useServerActionQuery } from "@/lib/server-action-hooks";
import { useDebounce } from "ahooks";
import { Input } from "@/components/ui/input";
export default function Page() {
  const [value, setValue] = useState("");

  const debouncedInput = useDebounce(value, { wait: 300 });
  const { isLoading, data, isError, isSuccess, isPending } =
    useServerActionQuery(helloAction, {
      input: {
        message: debouncedInput,
      },
      queryKey: [debouncedInput],
    });
  return (
    <div className="w-full  flex items-center justify-center h-screen flex-col space-y-4">
      <Input
        placeholder="message..."
        value={value}
        className="w-[400px]"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <p>{isLoading ? "Loading..." : data?.result}</p>
      <p>{isPending ? "Pending..." : data?.result}</p>
      <p>{isError ? isError : ""}</p>
    </div>
  );
}
