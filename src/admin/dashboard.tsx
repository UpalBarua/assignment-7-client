import { Heading } from "@/components/ui/heading";
import { useGetDonationQuery } from "@/redux/api/api";
import { DonationPost } from "@/types";
import { ResponsiveContainer } from "recharts";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export function Dashboard() {
  const { data, isLoading } = useGetDonationQuery("");

  if (isLoading) {
    return <p>Loading....</p>;
  }

  return (
    <section>
      <Heading className="text-center">Our Donation Stats</Heading>
      <div className="flex items-center justify-center">
        <ResponsiveContainer width={800} height={300}>
          <LineChart
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            data={data.map(({ amount, ...rest }: DonationPost) => ({
              amount: Number(amount.slice(1).split(",").join("")),
              ...rest,
            }))}
          >
            <Line type="monotone" dataKey="amount" stroke="#8884d8" />
            <CartesianGrid
              stroke="#ccc"
              strokeDasharray="5 5"
              className="text-white"
            />
            <XAxis dataKey="title" tick={{ fill: "#fff" }} />
            <YAxis tick={{ fill: "#fff" }} />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
