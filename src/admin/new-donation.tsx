import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
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
import { Textarea } from "@/components/ui/textarea";
import { donationCategories } from "@/config";
import { useAddDonationMutation } from "@/redux/api/api";
import { Check, Loader2, X } from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

type DonationFormData = {
  title: string;
  description: string;
  amount: string;
};

export function NewDonation() {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [donationCategory, setDonationCategory] = useState<
    (typeof donationCategories)[number] | ""
  >("");

  const [addDonation] = useAddDonationMutation();
  const { register, reset, handleSubmit } = useForm<DonationFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit: SubmitHandler<DonationFormData> = async ({
    amount,
    description,
    title,
  }) => {
    try {
      setIsSubmitting(true);
      if (!imageFile) return;

      const formData = new FormData();
      formData.append("image", imageFile);

      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
        {
          method: "POST",
          body: formData,
        },
      );

      if (!response.ok) {
        throw new Error("Image upload failed");
      }

      const { data } = await response.json();

      const newDonation = {
        title,
        amount,
        description,
        category: donationCategory,
        image: data.url,
      };

      addDonation(newDonation);
      toast.success("New Donation Added");

      reset();
      setImageFile(null);
      setDonationCategory("");
    } catch (error) {
      console.log(error);
      toast.error("Failed to Add New Donation");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="pb-8">
      <Heading>Add New Donation</Heading>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <Label>Picture</Label>
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => e.target.files && setImageFile(e.target.files[0])}
          />
        </div>
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
              setImageFile(null);
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
    </section>
  );
}
