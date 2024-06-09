import { createServerAction } from "zsa";
import z from "zod";

export const printTextAction = createServerAction()
  .input(
    z.object({
      name: z.string().min(5).max(10),
      age: z.string().min(1)
    }),
  )
  .output(z.string())
  .handler(async ({ input }) => {
    await new Promise((resolve, reject) => setTimeout(resolve, 1000))
    return `Success ${input.name}`
  });

export const incrementNumberAction = createServerAction()
  .input(
    z.object({
      number: z.number(),
    })
  )
  .handler(async ({ input }) => {
    // Sleep for .5 seconds
    await new Promise((resolve) => setTimeout(resolve, 500));
    // Increment the input number by 1
    return input.number + 1;
  });
