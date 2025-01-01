const {z} = require('zod');

const signupSchema = z.object({
    username: z.
        string({required_error: "Name is required"}).
        trim().
        min(3, {message: "Name must be at least 3 Characters."}).
        max(255, {message: "Name must not be more than 255 Characters."}),
    email: z.
        string("Email is required").
        email({message: "Invalid email address"}).
        trim().
        min(3, {message: "Email must be at least 3 Characters."}).
        max(255, {message: "Email must not be more than 255 Characters."}),
    password: z.
        string({required_error: "Password is required"}).
        trim().
        min(8, {message: "Password must be at least 3 Characters."}).
        max(1024, {message: "Password must not be more than 1024 Characters."}),
});

const loginSchema = z.object({
    email: z.
        string({required_error: "Name is required"}).
        trim().
        min(3, {message: "Email must be at least 3 Characters."}).
        max(255, {message: "Email must not be more than 255 Characters."}),
    password: z.
        string({required_error: "Password is required"}).
        trim().
        min(8, {message: "Password must be at least 3 Characters."}).
        max(1024, {message: "Password must not be more than 1024 Characters."}),
})

module.exports = {signupSchema,loginSchema};