import { Skeleton } from "@/components/ui/skeleton";
async function Loading() {
  console.log('working');
  await new Promise((resolve, reject) => {
    return setTimeout(() => {
       resolve()
    }, 2000);
  })
  return (
    <div className=" flex items-center justify-center min-h-screen z-50">
      {/* <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div> */}
      <p className=" text-3xl text-red-600">loading ....</p>
    </div>
  );
}

export default Loading;