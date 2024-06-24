import { z } from "zod"

const SingUpSechmaValidation = z.object({
    username: z.string({ message: "User Name is required" }),
    email: z.string().email({ message: "Email must be valid " }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
    number: z.string().min(11, { message: "Number Must required" }).max(11, { message: "Number Must Under 11digit" }),
    semester: z.enum(["1st", "2nd", "3rd", "4th", "5th", "6th", "7th"], { message: "Semester is required, Make sure to remove extra-space" }),
})


export {
    SingUpSechmaValidation
}