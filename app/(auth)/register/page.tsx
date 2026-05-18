"use client";

import Link from "next/link";
import { useState } from "react";
import { signUp } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    await signUp.email(
      {
        name,
        email,
        password,
      },
      {
        onSuccess: () => {
          toast.success("Account created successfully");
          router.push("/login");
        },
        onError: (ctx) => {
          toast.error(ctx.error.message || "Something went wrong");
        },
      }
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-4">
      <Card className="w-full max-w-md p-6">
        <h1 className="text-3xl font-black">Create account</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Join JKart and start shopping today.
        </p>

        <form onSubmit={handleRegister} className="mt-6 space-y-4">
          <Input
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

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
            Create account
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-black">
            Login
          </Link>
        </p>
      </Card>
    </main>
  );
}