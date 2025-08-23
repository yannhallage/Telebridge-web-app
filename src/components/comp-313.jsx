import {

  LogOut,

} from 'lucide-react';
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
} from "./ui/alert-dialog"
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button"

export default function AlertComponent() {
  const navigate = useNavigate();
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <span ><LogOut className="h-5 w-5 text-gray-600" /></span>
      </AlertDialogTrigger>
      <AlertDialogContent className={"max-w-[425px]"}>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            Take a moment to review the details provided to ensure you
            understand the implications.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className={'bg-red-500 text-white hover:bg-gray-700'} onClick={() => {
            navigate('/')
          }}>Deconnexion</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
