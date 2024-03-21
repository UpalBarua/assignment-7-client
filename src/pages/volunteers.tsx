import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useAddVolunteersMutation } from "@/redux/api/api";
import { Check, Loader2, X } from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

type VolunteerFormData = {
  name: string;
  email: string;
  phone: string;
  location: string;
  objective: string;
};

export function Volunteers() {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [addVolunteer] = useAddVolunteersMutation();

  const { register, reset, handleSubmit } = useForm<VolunteerFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit: SubmitHandler<VolunteerFormData> = async ({
    name,
    email,
    phone,
    location,
    objective,
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

      const newVolunteer = {
        name,
        email,
        phone,
        location,
        objective,
        image: data.url,
      };

      addVolunteer(newVolunteer);
      toast.success("New Donation Added");

      reset();
      setImageFile(null);
    } catch (error) {
      console.log(error);
      toast.error("Failed to Add New Donation");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="container max-w-5xl mx-auto px-4">
      <Heading className="text-center">Volunteers</Heading>
      <div className="grid grid-cols-1 rounded-md shadow-md border-foreground/10 sm:border sm:grid-cols-2">
        <div className="hidden sm:block">
          <img
            src="https://images.unsplash.com/photo-1617953141905-b27fb1f17d88?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="volunteers image"
            className="min-h-full rounded-md"
          />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 sm:p-6 lg:p-8 rounded-md"
        >
          <div className="space-y-2">
            <Label>Picture</Label>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) =>
                e.target.files && setImageFile(e.target.files[0])
              }
            />
          </div>
          <div className="space-y-2">
            <Label>Name</Label>
            <Input placeholder="your name" {...register("name")} />
          </div>
          <div className="space-y-2">
            <Label>Location</Label>
            <Input placeholder="city/village" {...register("location")} />
          </div>
          <div className="space-y-2">
            <Label>Email</Label>
            <Input
              placeholder="example@email.com"
              type="email"
              {...register("email")}
            />
          </div>
          <div className="space-y-2">
            <Label>Phone</Label>
            <Input placeholder="01234567890" {...register("phone")} />
          </div>
          <div className="space-y-2">
            <Label>Objective</Label>
            <Textarea
              placeholder="write what you want to achive"
              className="resize-none h-[14rem]"
              {...register("objective")}
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
      </div>
    </section>
  );
}
