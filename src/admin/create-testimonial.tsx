import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useAddTestimonialMutation } from "@/redux/api/api";
import { Check, Loader2, X } from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

type TestimonialFormData = {
  name: string;
  review: string;
};

export function CreateTestimonial() {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [addTestimonial] = useAddTestimonialMutation();

  const { register, reset, handleSubmit } = useForm<TestimonialFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit: SubmitHandler<TestimonialFormData> = async ({
    name,
    review,
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

      const newTestimonial = {
        name,
        review,
        image: data.url,
      };

      addTestimonial(newTestimonial);
      toast.success("New Testimonial Added");

      reset();
      setImageFile(null);
    } catch (error) {
      console.log(error);
      toast.error("Failed to Add New Testimonial");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="pb-8">
      <Heading>Add New Testimonial</Heading>
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
          <Label>Name</Label>
          <Input placeholder="your name" {...register("name")} />
        </div>
        <div className="space-y-2">
          <Label>Review</Label>
          <Textarea
            placeholder="your review"
            className="resize-none h-[14rem]"
            {...register("review")}
          />
        </div>
        <div className="flex items-center justify-end gap-x-2">
          <Button
            className="flex items-center gap-x-2 text-red-500"
            variant="outline"
            size="sm"
            onClick={() => {
              reset();
              setImageFile(null);
            }}
          >
            <X className="w-5 h-5" />
            <span>Cancel</span>
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
            <span>Publish</span>
          </Button>
        </div>
      </form>
    </section>
  );
}
