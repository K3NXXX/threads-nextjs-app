"use client"

import { useForm } from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { userValidation } from "@/lib/validations/user"
import { Button } from "@/components/ui/button"
import * as z from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

interface Props {
    userData: {
        id: string,
        objectId: string,
        username: string,
        name: string,
        bio: string,
        image: string,
    }
    btnTitle: string
}

const AccountProfile = ({userData, btnTitle}: Props) => {
    const form = useForm({
      resolver: zodResolver(userValidation),
      defaultValues: {
        profile_photo: "",
        name: "",
        username:"",
        bio: "",
      }
    
    })

    function onSubmit(values: z.infer<typeof userValidation>) {
    }

  return (
    <Form {...form}>
      <form
      onSubmit={form.handleSubmit(onSubmit)} 
      className="flex flex-col justify-start gap-10">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="flex items-center gap-4">
              <FormLabel className="account-form_image-label">Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default AccountProfile