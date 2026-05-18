"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    await signIn.email(
      {
        email,
        password,
      },
      {
        onSuccess: () => {
          toast.success("Welcome back");
          router.push("/");
        },
        onError: (ctx) => {
          toast.error(ctx.error.message || "Invalid credentials");
        },
      }
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-4">
      <Card className="w-full max-w-md p-6">
        <h1 className="text-3xl font-black">Welcome back</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Login to your JKart account.
        </p>

        <form onSubmit={handleLogin} className="mt-6 space-y-4">
          <Input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button className="w-full" type="submit">
            Login
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-semibold text-black">
            Create account
          </Link>
        </p>
      </Card>
    </main>
  );
}