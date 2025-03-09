"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from "next/navigation"
import { useTranslation } from "react-i18next"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useSheet } from "@/hooks/useSheet"

const formSchema = z.object({
  email: z.string().email({
    message: "Email không hợp lệ.",
  }),
})

export function ResendVerificationForm({ className, ...props }: React.ComponentPropsWithoutRef<"form">) {
  const { t } = useTranslation()
  const router = useRouter()
  
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })
  const { isOpen, openSheet, sheetType } = useSheet();

  function onSubmit(data: any) {
    console.log("Resend Verification Data:", data)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("flex w-full  flex-col gap-10", className)}
        {...props}
      >
        <div className="flex flex-col items-start gap-3 text-center">
          <h1 className="text-xl font-bold">{t("resend-verification.title")}</h1>
          <p className="text-xs text-gray-600">{t("resend-verification.description")}</p>
        </div>
        <div className="grid gap-6">
          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("resend-verification.email.label")}</FormLabel>
                <FormControl>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t("resend-verification.email.placeholder")}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button type="submit" className="w-full">
            {t("resend-verification.submit")}
          </Button>
        </div>
        
        {/* Login Prompt */}
        <div className="text-start text-sm">
          <p>
            {t("resend-verification.login_prompt.text")} {" "}
            <span
              onClick={() => openSheet("login")}
              className="text-hightlight cursor-pointer underline"
            >
              {t("resend-verification.login_prompt.link")}
            </span>
          </p>
        </div>
      </form>
    </Form>
  )
}