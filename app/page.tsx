import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-y-4 h-[75dvh]">
      <Link href="/hooks" 
            className="w-3/4 py-6 bg-blue rounded-full text-lg text-center">
        React Hooks
      </Link>
      <Link href="/library" 
            className="w-3/4 py-6 bg-blue rounded-full text-lg text-center">
        React Libraries
      </Link>
    </div>
  )
}
