import { z } from "zod";

const updatePageSchema = z.object({
    key: z.string().min(1, "Invalid key"),
    category: z.string().min(1, "Invalid category"),
    content: z.string().min(1, "Invalid content")
})

export default updatePageSchema