import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FileText } from "lucide-react";
import React, { useState } from "react";

const CreateResumeDialog = ({ open, onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [isDefault, setIsDefault] = useState(false);
  const handleClose = () => {
    onClose();
  };
  const handleSubmit = () => {
    console.log("Form Data", { title, isDefault });
  };
  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <FileText />
            Create New Resume
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-5">
          <div className="space-y-1.5">
            <Label>Resume Title</Label>
            <Input
              value={title}
              placeholder="e.g Backend Developer"
              onChange={(e) => setTitle(e.target.value)}
            />
            <p>{title.length} / 150</p>
          </div>
          <div>
            <Field orientation="horizontal">
              <Checkbox checked={isDefault} onCheckedChange={setIsDefault} />
              <FieldContent>
                <FieldLabel htmlFor="terms-checkbox-2">
                  Set as Default
                </FieldLabel>
                <FieldDescription>
                  Auto-selected when applying without choosing a version
                </FieldDescription>
              </FieldContent>
            </Field>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Create Resume</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateResumeDialog;
