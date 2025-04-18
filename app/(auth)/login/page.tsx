import { LoginForm } from "@/components/auth/login-form";
import { Suspense } from "react";

export default function Page() {
  return (
    <>
    <Suspense fallback={<p>Loading</p>}>
      <LoginForm/>
    </Suspense>
    </>
  );
}
