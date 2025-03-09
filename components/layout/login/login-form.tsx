"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useTranslation } from "react-i18next"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PasswordInput } from "@/components/password-input"

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
  password: z.string().min(6, {
    message: "Mật khẩu phải có ít nhất 6 ký tự.",
  }),
})

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const { t } = useTranslation()
  const router = useRouter()
  const [currentPassword, setCurrentPassword] = useState("")

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
const { errors } =form.formState;
  function onSubmit(data: any) {
    console.log("Login Data:", data)
    // router.push("/dashboard")
  }
  const { isOpen, openSheet, sheetType } = useSheet();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("flex w-full  flex-col gap-10", className)}
        {...props}
      >
        <div className="flex flex-col items-start gap-5 text-start">
          <h1 className="text-xl font-bold">{t("login-sheet.title")}</h1>
        </div>
        <div className="grid gap-6">
          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("login-sheet.email.label")}</FormLabel>
                <FormControl>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t("login-sheet.email.placeholder")}
                    {...field}
                    className={cn(
                      "border",
                      errors.email ? "border-red-500" : "border-gray-300"
                    )}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password Field */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center">
                  <FormLabel>{t("login-sheet.password.label")}</FormLabel>

                </div>
                <FormControl>
                  <PasswordInput
                    placeholder={t("login-sheet.password.placeholder")}
                    id="current_password"
                    value={currentPassword}
                    className={cn(
                      "border",
                      errors.email ? "border-red-500" : "border-gray-300"
                    )}
                    onChange={(e) => {
                      setCurrentPassword(e.target.value)
                      field.onChange(e)
                    }}
                    autoComplete="current-password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
                  <div
                  onClick={(e) => {
                    e.preventDefault(); 
                    openSheet("signup"); 
                  }}
                  className="ml-auto text-sm underline-offset-4 hover:underline cursor-pointer"
                >
                  {t("login-sheet.forgot_password")}
                </div>
          {/* Submit Button */}
          <Button type="submit" className="w-full">
            {t("login-sheet.submit")}
          </Button>
        </div>
        <div className="text-start leading-7 text-sm">
  <p>
    {t("login-sheet.register_prompt.text")}{" "}
    <span
      onClick={() => openSheet("signup")}
      className="text-hightlight cursor-pointer  underline"
    >
      {t("login-sheet.register_prompt.link")}
    </span>
  </p>
  <p>
    {t("login-sheet.resend_email.text")}{" "}
    <span
      onClick={() => openSheet("register-resend-verify-email")}
      className="text-hightlight cursor-pointer underline"
    >
      {t("login-sheet.resend_email.link")}
    </span>
  </p>
</div>

      </form>
    </Form>
  )
}
