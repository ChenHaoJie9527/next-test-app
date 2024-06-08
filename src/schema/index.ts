import { z } from "zod"

export const formSchema = z.object({
    name: z.string({
        invalid_type_error: 'invalid_type_error',
        required_error: 'name required',
    }).min(5),
    age: z.string({
        invalid_type_error: 'invalid_type_error',
        required_error: 'age required',
    }).min(1),
})

export type FormSchema = z.infer<typeof formSchema>