import { z } from "zod";

const pageSchema = z.object({
    page: z.string().min(1, "Invalid page."),
    category: z.string().min(1, "Invalid category.")
})

export default pageSchema