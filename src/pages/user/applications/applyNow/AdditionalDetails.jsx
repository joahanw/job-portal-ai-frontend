import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { formatThousands } from "@/lib/rupiahFormatter";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import React from "react";

const AdditionalDetails = ({
  expectedSalary,
  setExpectedSalary,
  availableForm,
  setAvailableForm,
}) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          Additional Details
        </h2>
        <p className="text-slate-600">
          Provide Salary expectations and availability (both optional)
        </p>
      </div>

      <Card>
        <CardContent className="space-y-5">
          <div className="space-y-2">
            <Label>Expected Salary (IDR)</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm font-medium">
                Rp
              </span>
              <Input
                placeholder="e.g. 8.000.000"
                type="text"
                inputMode="numeric"
                value={formatThousands(expectedSalary)}
                onChange={(e) =>
                  setExpectedSalary(e.target.value.replace(/\D/g, ""))
                }
                className="pl-9 py-5"
              />
            </div>
          </div>

          {/* Available Form Date */}
          <div className="space-y-2">
            <Label>Available From</Label>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={`py-5 w-full justify-start text-left font-normal ${!availableForm ? "text-muted-foreground" : ""}`}
                >
                  <CalendarIcon className="mr-2 size-4" />
                  {availableForm ? format(availableForm, "PPP") : "Pick a Date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={availableForm}
                  onSelect={(date) => {
                    setAvailableForm(date);
                    setOpen(false);
                  }}
                  autoFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdditionalDetails;
