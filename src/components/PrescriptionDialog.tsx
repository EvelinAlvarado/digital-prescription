import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Prescription } from "@/Types/user";
import { PrescriptionCard } from "./PrescriptionCard";

interface PrescriptionDialogProps {
  prescription: Prescription;
}

export function PrescriptionDialog({ prescription }: PrescriptionDialogProps) {
  console.log("prescription desde PrescriptionDialog", prescription);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Ver Receita</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[60rem]">
        <PrescriptionCard prescription={prescription} />
      </DialogContent>
    </Dialog>
  );
}
