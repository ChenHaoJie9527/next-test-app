import z from "zod"
import { createServerAction } from "zsa"

const createObject = z.object({
    message: z.string()
})

export const helloAction = createServerAction().input(createObject).handler(async ({ input }) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return {
        result: `hello ${input.message || 'N/A'}`
    }
})