"use client";
import { useState } from "react";
import { useServerAction } from "zsa-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FormSchema, formSchema } from "@/schema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { printTextAction } from "./actions";

export default function PageHome() {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: undefined,
      age: undefined,
    },
  });
  const { execute, data, isPending, isError, error, isSuccess } =
    useServerAction(printTextAction);
  const onSubmit = async (values: FormSchema) => {
    console.log(values);
    const [data, err] = await execute(values);
    if (err) {
      console.error(err);
      return;
    }
    console.log("data =>", data);
    form.reset({
      name: "",
      age: "",
    });
  };
  return (
    <div className="w-full  flex items-center justify-center h-screen flex-col space-y-4">
      <Form {...form}>
        <form className=" space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => {
              return (
                <div className="flex items-center justify-start">
                  <FormItem className="flex items-center space-x-2">
                    <FormLabel className="text-[20px]">Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                    {/* {form.formState.errors.name?.message && (
                      <p>{form.formState.errors.name.message}</p>
                    )} */}
                  </FormItem>
                </div>
              );
            }}
          />
          <FormField
            name="age"
            control={form.control}
            render={({ field }) => {
              return (
                <div className="flex items-center justify-start">
                  <FormItem className="flex items-center space-x-2">
                    <FormLabel className="text-[20px]">Age</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </div>
              );
            }}
          />
          <Button>{isPending ? "Saving..." : "Save"}</Button>
          {isError && <div>Error: {JSON.stringify(error.fieldErrors)}</div>}
          {isSuccess && <div>Success: {JSON.stringify(data)}</div>}
        </form>
      </Form>
    </div>
  );
}
