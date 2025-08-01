"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const formSchema = z.object({
  email: z.string().min(5 , { error: "Enter atleaset 5 characters"}),
  password: z.string().min(5, "Minimum 5 characters required"),
  passwordConfirm: z.string(),
});
const Register = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log("handle submit for register");
  };
  return (
    <main className=" flex flex-col gap-8 justify-center items-center min-h-screen">
      <Card className="w-[450px] min-w-[350px]">
        <CardHeader>
          <CardTitle>Register</CardTitle>

          <CardDescription>Let's get you registered.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-8">
             <FormField
             control={form.control}
             name="email"
             render={ ({field})=>(
                   <FormItem>
                    <FormLabel>
                        Email
                    </FormLabel>
                    <FormControl>
                        <Input {...field}></Input>
                    </FormControl>
                    <FormMessage/>
                   </FormItem>
             )}
             />

             <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Set a password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="set a strong password"
                      ></Input>
                    </FormControl>
               
                  </FormItem>

                )}
              ></FormField>

              {<FormField
                control={form.control}
                name="passwordConfirm"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel >Confirm Passowrd</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Confirm your password"
                      ></Input>
                    </FormControl>
                  </FormItem>
                )}
              ></FormField> }
    
               <Button > Register</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </main>
  );
};

export default Register;
