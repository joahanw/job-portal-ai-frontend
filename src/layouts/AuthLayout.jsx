import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Sparkle, Sparkles } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const AUTH_IMAGE =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";

const indicatorsData = [
  { dot: "bg-emerald-400", text: "100K+ Jobs" },
  { dot: "bg-blue-400", text: "50K+ Companies" },
  { dot: "bg-violet-400", text: "100K+ Students" },
];
const AuthLayout = ({
  title,
  description,
  children,
  footerText,
  footerLink,
  footerLinkText,
}) => {
  return (
    <div className="min-h-screen flex">
      {/* Left Side */}
      <section className="hidden lg:flex lg:w-[52%] xl:w-[60%] relative overflow-hidden">
        <img
          src={AUTH_IMAGE}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-0 from-slate-900/70 via-slate-900/10 to-transparent" />
        <div className="absolute bottom-10 left-10 text-white">
          <div className="flex items-center gap-2 mb-4">
            <div className="border-slate-400 border rounded-lg p-2">
              <Sparkles />
            </div>
            <span className="text-lg font-semibold text-white/90 tracking-wide uppercase">
              JohanWork.AI
            </span>
          </div>
          <h2 className="text-3xl font-bold leading-snug">
            Your next career move <br /> starts here.
          </h2>
          <p className="text-white/70 mt-3 text-sm leading-relaxed max-w-sm">
            AI-powered job matching, smart resume builder, and real-time
            insights - all in one place.
          </p>
          <div className="flex items-center gap-5 mt-6">
            {indicatorsData.map((item) => (
              <div className="flex items-center gap-1.5">
                <div className={`h-1.5 w-1.5 rounded-full ${item.dot}`} />
                <span className="text-xs text-white/80 font-medium">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Righ Side */}
      <section className="flex-1 relative overflow-hidden bg-linear-to-br from-slate-50 via-primary/5 to-slate-50">
        <div className="relative flex flex-col items-center justify-center min-h-screen p-6 sm:p-10">
          <div className="min-w-lg">
            {/* Logo */}
            <div className="text-center mb-8 animate-in fade-in slide-in-from-top-4 duration-500">
              <div className="flex items-center justify-center gap-2 group">
                <div className="text-white bg-primary p-2 rounded-lg">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h1 className="text-3xl font-bold text-slate-900">
                  JohanWork<span className="text-primary">.AI</span>
                </h1>
              </div>
              <p className="text-sm text-slate-600 mt-2">
                AI-Powered Career Platform
              </p>
            </div>

            {/* Auth Card */}
            <Card className="border-slate-200/60 shadow-xl backdrop-blur-sm bg-white/80 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <CardHeader className="space-y-2 pb-4">
                <CardTitle className="text-2xl font-bold text-center bg-linear-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  {title}
                </CardTitle>
                {description && (
                  <CardDescription className="text-center text-base">
                    {description}
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent className="pt-2">{children}</CardContent>
            </Card>
            <p className="text-center text-sm text-slate-600 mt-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              {footerText}{" "}
              <Link
                to={footerLink}
                className="font-semibold text-primary hover:text-primary/80 transition-colors underline-offset-4 hover:underline"
              >
                {footerLinkText}
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuthLayout;
