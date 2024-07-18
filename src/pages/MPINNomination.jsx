import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const formSchema = z.object({
  mpin: z.string().regex(/^\d{6}$/, { message: "MPIN must be exactly 6 digits" }),
  confirmMpin: z.string().regex(/^\d{6}$/, { message: "MPIN must be exactly 6 digits" }),
}).refine((data) => data.mpin === data.confirmMpin, {
  message: "MPINs do not match",
  path: ["confirmMpin"],
});

const MPINNomination = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mpin: "",
      confirmMpin: "",
    },
  });

  const onSubmit = (values) => {
    console.log(values);
    // TODO: Implement MPIN submission logic
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Nominate Your MPIN</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="mpin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>MPIN</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Enter 6-digit MPIN" {...field} maxLength={6} />
                    </FormControl>
                    <FormDescription>
                      Your MPIN must be 6 digits long.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmMpin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm MPIN</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Confirm 6-digit MPIN" {...field} maxLength={6} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">Submit MPIN</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default MPINNomination;