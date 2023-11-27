import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-y-4 h-[75dvh]">
        <Link href="/library/react_hook_form" 
            className="w-3/4 py-6 bg-blue rounded-full text-lg text-center">
        React Hook Form
        </Link>
        <Link href="/library/react_query"
            className="w-3/4 py-6 bg-blue rounded-full text-lg text-center">
        React Query
        </Link>
        <Link href="/library/react_router_dom" 
            className="w-3/4 py-6 bg-blue rounded-full text-lg text-center">
        React Router DOM
        </Link>
        <Link href="/library/material_ui" 
            className="w-3/4 py-6 bg-blue rounded-full text-lg text-center">
        Material UI
        </Link>
        <Link href="/library/swr" 
            className="w-3/4 py-6 bg-blue rounded-full text-lg text-center">
        SWR
        </Link>
        <Link href="/library/zod" 
            className="w-3/4 py-6 bg-blue rounded-full text-lg text-center">
        Zod
        </Link>
    </div>
  )
}
