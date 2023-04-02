import React from "react";
import { BaseLayout } from "../Layout";
import { Button } from "../components";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../hooks";
import { CheckGithubUsername } from "../utils";
import { useNavigate } from "react-router-dom";

const validationSchema = z
  .object({
    username: z.string().min(1, { message: "Github username is required" }),
    email: z.string().min(1, { message: "Email is required" }).email({
      message: "Must be a valid email",
    }),
    password: z
      .string()
      .min(6, { message: "Password must be atleast 6 characters" }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password don't match",
  });
type ValidationSchema = z.infer<typeof validationSchema>;

function Signup() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });
  const { signup } = useAuth();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ValidationSchema> = async (data) => {
    const { username } = data;
    const isAvailable = await CheckGithubUsername(username);
    if (!isAvailable) {
      setError("username", {
        type: "server",
        message: "No such github username exists",
      });
    } else {
      signup(data.email, data.password, data.username);
    }
  };

  return (
    <BaseLayout>
      <div className="flex flex-col justify-center py-8">
        <div className="max-w-xl mx-auto">
          <h1 className="text-center text-3xl font-semibold text-white">
            Create account to start using Devio
          </h1>
          <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-white">
                Github Username
              </label>
              <input
                type="text"
                id="name"
                className="border border-gray-500 rounded-md p-2 bg-transparent text-white"
                {...register("username")}
              />
              {errors.username && (
                <p className="text-xs italic text-red-500 mt-2">
                  {" "}
                  {errors.username?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="border border-gray-500 rounded-md p-2 bg-transparent text-white"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-xs italic text-red-500 mt-2">
                  {" "}
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-white">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="border border-gray-500 rounded-md p-2 bg-transparent text-white"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-xs italic text-red-500 mt-2">
                  {" "}
                  {errors.password?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="confirmPassword" className="text-white">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="border border-gray-500 rounded-md p-2 bg-transparent text-white"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <p className="text-xs italic text-red-500 mt-2">
                  {" "}
                  {errors.confirmPassword?.message}
                </p>
              )}
            </div>
            <Button size="lg" full radii="md">
              Sign UP
            </Button>
          </form>

          <p className="text-center text-white">
            Don’t have an account ?{" "}
            <span className="text-blue-400 text-center">Sign up</span>
          </p>
        </div>
      </div>
    </BaseLayout>
  );
}

export default Signup;
