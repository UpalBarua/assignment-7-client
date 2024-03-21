import { GratitudeDialog } from "@/components/gratitude-dialog";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { PageLoader } from "@/components/ui/page-loader";
import { formatDate } from "@/lib/utils";
import { useGetCommentsQuery } from "@/redux/api/api";
import { Comment } from "@/types";
import { useState } from "react";

export function Community() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { data: comments, isLoading } = useGetCommentsQuery("");

  if (isLoading) return <PageLoader />;

  return (
    <section className="max-w-5xl container mx-auto px-4 pt-[max(1rem,_2.5dvw)]">
      <div className="flex items-center justify-between pb-6 md:pb-8">
        <Heading className="!pb-0">Community Wall</Heading>
        <Button onClick={() => setIsDialogOpen(true)}>Express Gratitude</Button>
      </div>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {comments?.map(({ name, comment, postDate }: Comment) => (
          <li
            key={name}
            className="bg-secondary border max-w-[24rem] mx-auto sm:mx-0 leading-relaxed
            border-foreground/10 space-y-3 p-4 rounded-md shadow-md"
          >
            <p>{comment}</p>
            <div className="text-foreground/60 text-sm">
              <h3>{name}</h3>
              <time>{formatDate(postDate)}</time>
            </div>
          </li>
        ))}
      </ul>
      <GratitudeDialog
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
      />
    </section>
  );
}
