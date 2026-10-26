import AuthLayout from "@/layouts/AuthLayout";
import React from "react";
import { registerSchema } from "./authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { cn } from "cn";
import {
  ArrowRight,
  Briefcase,
  CheckCircle,
  Lock,
  Mail,
  User,
  Users,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import RoleButton from "./RoleButton";
import { Button } from "@/components/ui/button";

const Register = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      role: "ROLE_JOB_SEEKER",
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
  };

  const selectedRole = watch("role");
  return (
    <AuthLayout
      title="Create your account"
      description="Start your AI-powered job search journey"
      footerText="Already have an account?"
      footerLink="/login"
      footerLinkText="Login"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="space-y-2">
          <Label>Full Name</Label>
          <div className="relative group">
            <div className="absolute left-3 top-1/2 -translate-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
              <User className="h-4 w-4 ml-2" />
            </div>
            <Input
              id="fullName"
              type="fullName"
              placeholder="John Doe"
              {...register("fullName")}
              className={cn(
                "pl-10 h-11 transition-all",
                errors.fullName
                  ? "border-red-300 focus-visible:ring-red-500"
                  : "focus-visible:ring-primary focus-visible:border-primary",
              )}
            />
          </div>
        </div>
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
        <div className="space-y-2">
          <Label>Confirm Password</Label>
          <div className="relative group">
            <div className="absolute left-3 top-1/2 -translate-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
              <Lock className="h-4 w-4 ml-2" />
            </div>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              {...register("confirmPassword")}
              className={cn(
                "pl-10 h-11 transition-all",
                errors.confirmPassword
                  ? "border-red-300 focus-visible:ring-red-500"
                  : "focus-visible:ring-primary focus-visible:border-primary",
              )}
            />
          </div>
        </div>
        <div className="space-y-3">
          <Label>I am a...</Label>
          <div className="grid grid-cols-2 gap-3">
            <RoleButton
              setValue={setValue}
              selectedRole={selectedRole}
              name="Job Seeker"
              description="Find your dream job"
              role="ROLE_JOB_SEEKER"
              icon={User}
            />
            <RoleButton
              setValue={setValue}
              selectedRole={selectedRole}
              name="Employer"
              description="Hire top talent"
              role="ROLE_EMPLOYER"
              icon={Briefcase}
            />
          </div>
        </div>
        <Button
          type="submit"
          className="w-full hover:bg-primary/90 shadow-md hover:shadow-lg"
        >
          Register
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </form>
    </AuthLayout>
  );
};

export default Register;
