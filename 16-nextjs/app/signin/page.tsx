import { SignIn } from "@stackframe/stack";
import Link from "next/link"

export default function SignInPage () {
    return(
        <div className="min-h-dvh flex flex-col gap-2 p-4 items-center justify-center">
            <SignIn />
            <Link href="/">Go back home</Link>
        </div>
    )
}