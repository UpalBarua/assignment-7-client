import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, Loader2, X } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { useAddCommentMutation } from "@/redux/api/api";

type GratitudeFormData = {
  name: string;
  comment: string;
};

type GratitudeDialogProps = {
  isDialogOpen: boolean;
  setIsDialogOpen: Dispatch<SetStateAction<boolean>>;
};

export function GratitudeDialog({
  isDialogOpen,
  setIsDialogOpen,
}: GratitudeDialogProps) {
  const { register, reset, handleSubmit } = useForm<GratitudeFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [addComment] = useAddCommentMutation();

  const onSubmit: SubmitHandler<GratitudeFormData> = async ({
    name,
    comment,
  }) => {
    try {
      setIsSubmitting(true);
      const newGratitudeComment = {
        name,
        comment,
        postDate: new Date().toString(),
      };

      addComment(newGratitudeComment);

      toast.success("Comment posted");
      setIsDialogOpen(false);
    } catch (error) {
      console.log(error);
      toast.error("Failed to post comment");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent className="border border-foreground/10 shadow-md rounded-md">
        <DialogHeader>
          <DialogTitle>Express Gratitude</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label>Name</Label>
            <Input placeholder="your name" {...register("name")} />
          </div>
          <div className="space-y-2">
            <Label>Comment</Label>
            <Textarea
              placeholder="comment expressing your gratitude"
              className="resize-none h-[14rem]"
              {...register("comment")}
            />
          </div>
          <div className="flex items-center justify-end gap-x-2">
            <Button
              className="flex items-center gap-x-2 text-red-500"
              variant="outline"
              size="sm"
              onClick={() => {
                reset();
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
              <span>Post Comment</span>
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
