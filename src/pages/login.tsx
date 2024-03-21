import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLoginUserMutation } from "@/redux/api/api";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hook";
import { verifyToken } from "@/utils/verifyToken";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

type LoginFormData = {
  email: string;
  password: string;
};

export function Login() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useAppDispatch();
  const [login] = useLoginUserMutation();

  const { register, reset, handleSubmit } = useForm<LoginFormData>();

  const onSubmit: SubmitHandler<LoginFormData> = async ({
    email,
    password,
  }) => {
    try {
      setIsSubmitting(true);

      const userData = {
        email,
        password,
      };

      const res = await login(userData).unwrap();
      const user = verifyToken(res?.token);
      dispatch(setUser({ user: user, token: res?.token }));

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
      <Heading className="text-center">Login</Heading>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
            <span>Login</span>
          )}
        </Button>
      </form>
      <div className="flex items-center justify-center py-6">
        <Link to="/register" className="hover:underline underline-offset-2">
          Create a new account instead
        </Link>
      </div>
    </section>
  );
}
