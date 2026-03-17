import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return(
    <div className="min-h-dvh flex flex-col gap-2 p-4 items-center justify-center">
      <h2 className="text-4xl">Hello Next JS</h2>
      <p className="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, quis corrupti, esse corporis placeat in voluptas harum commodi molestias optio eveniet cum accusantium quasi debitis porro at tempore, dolorum minus.</p>
      <Link href="signin" className="btn btn-outline">SignIn</Link>
    </div>
  )
}
