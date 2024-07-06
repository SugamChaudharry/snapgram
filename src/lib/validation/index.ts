import { z } from "zod";

export const SignupValidation = z.object({
    name: z.string().min(2 , {message: "Name is to Short"}),
    username: z.string().min(2 , {message: "UserName is to Short"}),
    email: z.string().email(),
    password: z.string().min(8, {message: "Password length should we atleast of 8"})  
  });