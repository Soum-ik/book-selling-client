import { Skeleton } from "@/components/ui/skeleton";
import { Button } from '@/components/ui/button'
import { cn } from "@/lib/utils";

function Message() {
    return <div className=" w-full  justify-between  flex items-start mt-3">
        <Skeleton className="h-12 w-12 rounded-full bg-textColor/50 mb-2" />
        <div className=" w-9/12 mr-2">
            <textarea name="" className=" px-3 border-none active:border-none text-black  py-2 rounded-lg w-full" cols={2} rows={2} id=""></textarea>
        </div>
        <Button className={cn(' bg-white text-black')}>Send </Button>
    </div>;
}

export default Message;
