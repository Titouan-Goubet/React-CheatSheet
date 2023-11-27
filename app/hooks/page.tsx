import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-y-4 h-[75dvh]">
        <Link href="/hooks/use_state" 
            className="w-3/4 py-6 bg-blue rounded-full text-lg text-center">
        UseState
        </Link>
        <Link href="/hooks/use_effect" 
            className="w-3/4 py-6 bg-blue rounded-full text-lg text-center">
        UseEffect
        </Link>
        <Link href="/hooks/use_memo_" 
            className="w-3/4 py-6 bg-blue rounded-full text-lg text-center">
        UseMemo
        </Link>
        <Link href="/hooks/use_ref" 
            className="w-3/4 py-6 bg-blue rounded-full text-lg text-center">
        UseRef
        </Link>
    </div>
  )
}
