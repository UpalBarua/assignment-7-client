import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { donationCategories } from "@/config";
import { useUpdateDonationMutation } from "@/redux/api/api";
import { Check, Loader2, X } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

type DonationFormData = {
  _id?: string;
  title: string;
  amount: string;
  category: (typeof donationCategories)[number];
  description: string;
};

type DonationUpdateDialogProps = {
  isDialogOpen: boolean;
  setIsDialogOpen: Dispatch<SetStateAction<boolean>>;
  donationData: DonationFormData;
};

export function DonationUpdateDialog({
  isDialogOpen,
  setIsDialogOpen,
  donationData,
}: DonationUpdateDialogProps) {
  const [updateDonation] = useUpdateDonationMutation();

  const [donationCategory, setDonationCategory] = useState<
    (typeof donationCategories)[number] | ""
  >("");

  const { register, reset, handleSubmit } = useForm<DonationFormData>();

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    reset(donationData);
    setDonationCategory(donationData?.category);
  }, [donationData]);

  const onSubmit: SubmitHandler<DonationFormData> = async ({
    amount,
    description,
    title,
  }) => {
    try {
      setIsSubmitting(true);
      const updatedDonation = {
        title,
        amount,
        description,
        category: donationCategory,
      };

      await updateDonation({ body: updatedDonation, id: donationData._id });

      toast.success("Donation updated!");
      setIsDialogOpen(false);
    } catch (error) {
      console.log(error);
      toast.error("Failed to Add New Donation");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent className="border border-foreground/10 shadow-md rounded-md">
        <DialogHeader>
          <DialogTitle>Edit Donation</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label>Donation Title</Label>
            <Input placeholder="example title" {...register("title")} />
          </div>
          <div className="space-y-2">
            <Label>Donation Category</Label>
            <Select
              onValueChange={(val: (typeof donationCategories)[number]) =>
                setDonationCategory(val)
              }
              value={donationData?.category}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {donationCategories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Donation Amount</Label>
            <Input placeholder="$10,000" {...register("amount")} />
          </div>
          <div className="space-y-2">
            <Label>Short Description</Label>
            <Textarea
              placeholder="a short description of the donation"
              className="resize-none h-[14rem]"
              {...register("description")}
            />
          </div>
          <div className="flex items-center justify-end gap-x-2">
            <Button
              className="flex items-center gap-x-2 text-red-500"
              variant="outline"
              size="sm"
              onClick={() => {
                reset();
                setDonationCategory("");
              }}
            >
              <X className="w-5 h-5" />
              <span>Cancel Post</span>
            </Button>
            <Button
              className="flex items-center gap-x-2"
              size="sm"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Check className="w-5 h-5" />
              )}
              <span>Publish Post</span>
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
