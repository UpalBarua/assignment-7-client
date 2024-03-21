import { DonationUpdateDialog } from "@/components/donation-update-dialog";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Heading } from "@/components/ui/heading";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useDeleteDonationMutation,
  useGetDonationQuery,
} from "@/redux/api/api";
import { DonationPost } from "@/types";
import { useState } from "react";

export function DonationManagement() {
  const { data, isLoading } = useGetDonationQuery("");
  const [donationData, setDonationData] =
    useState<Omit<DonationPost, "image">>();

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [deleteDonation] = useDeleteDonationMutation();

  if (isLoading) {
    return <p>Loading....</p>;
  }

  return (
    <section className="pb-10">
      <Heading className="text-center">Manage Donations</Heading>
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Amonut</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map(
            ({ _id, title, amount, category, description }: DonationPost) => (
              <TableRow key={_id}>
                <TableCell>{title}</TableCell>
                <TableCell>{amount}</TableCell>
                <TableCell>{category}</TableCell>
                <TableCell className="flex items-center gap-x-4">
                  <Button
                    onClick={() => {
                      setDonationData({
                        _id,
                        title,
                        amount,
                        category,
                        description,
                      });
                      setIsDialogOpen(true);
                    }}
                    size="sm"
                  >
                    Edit
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="destructive" size="sm">
                        Delete
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="flex border-foreground/10 flex-col items-center justify-center">
                      <p className="text-center">
                        Are you sure you want to delete <strong>{title}</strong>
                        ?
                      </p>
                      <Button
                        onClick={() => deleteDonation(_id)}
                        variant="destructive"
                        size="sm"
                      >
                        Delete
                      </Button>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ),
          )}
        </TableBody>
      </Table>
      <DonationUpdateDialog
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
        donationData={donationData as DonationPost}
      />
    </section>
  );
}
