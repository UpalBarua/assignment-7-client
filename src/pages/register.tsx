import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCreateUserMutation } from "@/redux/api/api";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

type RegisterFormData = {
  name: string;
  email: string;
  password: string;
};

export function Register() {
  const navigate = useNavigate();
  const [createUser] = useCreateUserMutation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, reset, handleSubmit } = useForm<RegisterFormData>();

  const onSubmit: SubmitHandler<RegisterFormData> = async ({
    email,
    password,
    name,
  }) => {
    try {
      setIsSubmitting(true);

      const newUser = {
        email,
        password,
        name,
      };

      await createUser(newUser);
      toast.success("New user created");
      navigate("/");
      reset();
    } catch (error) {
      toast.error("something went wrong");
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="max-w-md container px-4 mx-auto">
      <Heading className="text-center">Create Account</Heading>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <Label>Name</Label>
          <Input placeholder="your name" {...register("name")} />
        </div>
        <div className="space-y-2">
          <Label>Email Address</Label>
          <Input
            placeholder="example@email.com"
            type="email"
            {...register("email")}
          />
        </div>
        <div className="space-y-2">
          <Label>Password</Label>
          <Input
            placeholder="strong passwor"
            type="password"
            {...register("password")}
          />
        </div>
        <Button className="w-full" size="lg" disabled={isSubmitting}>
          {isSubmitting ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <span>Register</span>
          )}
        </Button>
      </form>

      <div className="flex items-center justify-center py-6">
        <Link to="/register" className="hover:underline underline-offset-2">
          Login instead
        </Link>
      </div>
    </section>
  );
}
