import { TypewriterEffectSmoothDemo } from "@/components/shared/PopUp/TypewriterEffectSmoothDemo";
import Image from "next/image";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function Page() {
  return (
    
    <AlertDialog>
  <AlertDialogTrigger>Open</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

    
    // <p className=" max-w-7xl p-3 mx-auto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, ipsam! Expedita porro quidem in necessitatibus animi corrupti laborum minus sit voluptates culpa asperiores libero velit optio, adipisci, quae minima distinctio!NavBarNavBar</p>
  );
}
 