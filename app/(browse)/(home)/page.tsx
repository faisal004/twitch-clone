import { Suspense } from "react";
import { ResultSkeleton, Results } from "./_components/results";


export default function Home() {
  return (
    <div className='h-full p-8 max-w-screen-2xl mx-auto'>
      <Suspense fallback={<ResultSkeleton/>}>
      <Results/>

      </Suspense>
    </div>
  )
}