import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AuthLayout from "@/layouts/AuthLayout";
import { cn } from "cn";
import { ArrowRight, Lock, Mail } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./authSchema";
import { Button } from "@/components/ui/button";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <AuthLayout
      title="Welcome Back"
      description="Sign in to continue your job search journey"
      footerText="Don't have an account?"
      footerLink="/register"
      footerLinkText="Create an account"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="space-y-2">
          <Label>Email Address</Label>
          <div className="relative group">
            <div className="absolute left-3 top-1/2 -translate-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
              <Mail className="h-4 w-4 ml-2" />
            </div>
            <Input
              id="email"
              type="email"
              placeholder="e.g john@gmail.com"
              {...register("email")}
              className={cn(
                "pl-10 h-11 transition-all",
                errors.email
                  ? "border-red-300 focus-visible:ring-red-500"
                  : "focus-visible:ring-primary focus-visible:border-primary",
              )}
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label>Password</Label>
          <div className="relative group">
            <div className="absolute left-3 top-1/2 -translate-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
              <Lock className="h-4 w-4 ml-2" />
            </div>
            <Input
              id="password"
              type="password"
              placeholder="provide your password"
              {...register("password")}
              className={cn(
                "pl-10 h-11 transition-all",
                errors.password
                  ? "border-red-300 focus-visible:ring-red-500"
                  : "focus-visible:ring-primary focus-visible:border-primary",
              )}
            />
          </div>
        </div>

        <Button
          type="submit"
          className="w-full hover:bg-primary/90 shadow-md hover:shadow-lg"
        >
          Sign In
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </form>
    </AuthLayout>
  );
};

export default Login;
