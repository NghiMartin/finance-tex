"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from "next/navigation"
import { useTranslation } from "react-i18next"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useSheet } from "@/hooks/useSheet"

const formSchema = z.object({
  email: z.string().email({
    message: "Email không hợp lệ.",
  }),
})

export function ForgotPasswordForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const { t } = useTranslation()
  const router = useRouter()

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })
  const { errors } = form.formState;
  const { isOpen, openSheet, sheetType } = useSheet();

  function onSubmit(data: any) {
    console.log("Forgot-password Data:", data)
    // router.push("/dashboard")
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("flex w-full flex-col gap-10", className)}
        {...props}
      >
        <div className="flex flex-col items-start gap-5 text-start">
          <h1 className="text-xl font-bold">{t("forgot-password.title")}</h1>
          <p className="text-sm text-gray-500">{t("forgot-password.description")}</p>
        </div>
        <div className="grid gap-6">
          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("forgot-password.email.label")}</FormLabel>
                <FormControl>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t("forgot-password.email.placeholder")}
                    {...field}
                    className={cn(
                      "border",
                      "h-[50px] !important",
                      errors.email ? "border-red-500" : "border-0"
                    )}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Submit Button */}
          <Button type="submit" className="w-full">
            {t("forgot-password.submit")}
          </Button>
          {/* Login Prompt */}
          <p className="text-start text-sm text-gray-500">
            {t("forgot-password.login_prompt.text")} {" "}
            <span  onClick={() => openSheet("login")}  className="text-hightlight cursor-pointer underline">
              {t("forgot-password.login_prompt.link")}
            </span>
          </p>
        </div>
      </form>
    </Form>
  )
}
