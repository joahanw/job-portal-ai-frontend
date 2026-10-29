import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React from "react";

const SectionDialog = ({ title, children, open, onClose, onSave }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-3">{children}</div>
        <DialogFooter>
          <Button variant="outline" size="lg" onClick={onClose}>
            Cancel
          </Button>
          <Button size="lg" onClick={onSave}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SectionDialog;
