export { auth as middleware } from "@/auth"

export const config = {
    runtime: "nodejs",
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
