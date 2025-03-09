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

const formSchema = z
  .object({
    email: z.string().email({
      message: "Email không hợp lệ.",
    }),
    nickname: z.string().min(3, {
      message: "Biệt danh phải có ít nhất 3 ký tự.",
    }),
    password: z.string().min(6, {
      message: "Mật khẩu phải có ít nhất 6 ký tự.",
    }),
    passwordConfirmation: z.string(),
    referral_code: z.string().optional(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Mật khẩu xác nhận không khớp.",
    path: ["passwordConfirmation"],
  })

export function RegisterForm({
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
      nickname: "",
      password: "",
      passwordConfirmation: "",
      referral_code: "",
    },
  })

  const { errors } = form.formState

  function onSubmit(data: any) {
    console.log("Register Data:", data)
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
          <h1 className="text-xl text-start font-bold">{t("register-sheet.title")}</h1>
        </div>
        <div className="grid gap-6">
          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("register-sheet.email.label")}</FormLabel>
                <FormControl>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t("register-sheet.email.placeholder")}
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

          {/* Nickname Field */}
          <FormField
            control={form.control}
            name="nickname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("register-sheet.nickname.label")}</FormLabel>
                <FormControl>
                  <Input
                    id="nickname"
                    type="text"
                    placeholder={t("register-sheet.nickname.placeholder")}
                    {...field}
                    className={cn(
                      "border",
                      "h-[50px] !important",
                      errors.nickname ? "border-red-500" : "border-0"
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
                <FormLabel>{t("register-sheet.password.label")}</FormLabel>
                <FormControl>
                  <PasswordInput
                    id="password"
                    placeholder={t("register-sheet.password.placeholder")}
                    {...field}
                    value={currentPassword}
                    onChange={(e) => {
                      setCurrentPassword(e.target.value)
                      field.onChange(e)
                    }}
                    className={cn(
                      "border",
                      "h-[50px] !important",
                      errors.password ? "border-red-500" : "border-0"
                    )}
                    autoComplete="new-password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

        

          {/* Referral Code Field */}
          <FormField
            control={form.control}
            name="referral_code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("register-sheet.referral_code.label")}</FormLabel>
                <FormControl>
                  <Input
                    id="referral_code"
                    type="text"
                    placeholder={t("register-sheet.referral_code.placeholder")}
                    {...field}
                    className={cn(
                      "border",
                      "h-[50px] !important",
                      errors.referral_code ? "border-red-500" : "border-0"
                    )}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button type="submit" className="w-full">
            {t("register-sheet.submit")}
          </Button>
          {/* Register Prompt */}
          <div className="relative text-start text-sm ">
            <span className="relative z-10 text-start  text-white">
              {t("register-sheet.login_prompt.text")}{" "}
                <span
                  onClick={(e) => {
                    e.preventDefault(); 
                    openSheet("login"); 
                  }}
                  className="ml-auto  text-sm underline underline-offset-4 text-hightlight cursor-pointer"
                >
                {t("register-sheet.login_prompt.link")}
                </span>

            </span>
          </div>
        </div>
      </form>
    </Form>
  )
}
