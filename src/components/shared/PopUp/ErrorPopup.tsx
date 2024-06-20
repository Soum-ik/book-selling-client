import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { TbFaceIdError } from "react-icons/tb";

const ErrorPopup = ({ error }: { error: string }) => (
  <Alert className=" fixed right-5 bottom-5 bg-cardColor border border-textColor text-red-600" variant="destructive">
    <TbFaceIdError className="h-4 w-4" />
    <AlertTitle>Error</AlertTitle>
    <AlertDescription>
      {error}
    </AlertDescription>
  </Alert>
);

export default ErrorPopup;
