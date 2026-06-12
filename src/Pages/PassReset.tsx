import React, { useState } from 'react'
import AuthLayout from '../Layout/AuthLayout'
import Input from '../Component/Input'
import Button from '../Component/Button'
import { useNavigate } from 'react-router'
import { MdRemoveRedEye } from "react-icons/md";
import { PiEyeSlashFill } from "react-icons/pi";
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const PassResetSchema = z
  .object({
    newPassword: z.string().min(8, 'Password must be at least 8 characters').regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/, 'Password must include letters and numbers'),

    confirmNewPassword: z.string().min(8, 'Password must be at least 8 characters').regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/, 'Password must include letters and numbers'),
  })
  .refine(
    (data) => data.newPassword === data.confirmNewPassword,
    {
      message: "Passwords don't match",
      path: ["confirmNewPassword"],
    }
  );

type PassResetValue = z.infer<typeof PassResetSchema>;

export default function PassReset() {
  const navigate = useNavigate();

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PassResetValue>({
    resolver: zodResolver(PassResetSchema),
  });

  const onSubmit = (data: PassResetValue) => {
    console.log("Form Submitted:", data);
    navigate('/login');
  };

  return (
    <AuthLayout
      heading="Reset Password"
      subHeading="Create a new password for your account"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        {/* New Password */}
        <div className="flex flex-col gap-2">
          <label
            className="font-semibold text-[18px]"
            htmlFor="NewPassword"
          >
            New Password
          </label>

          <div className="relative">
            <Input
              type={showNewPassword ? "text" : "password"}
              id="NewPassword"
              className="block my-2"
              placeholder="Enter your new password"
              {...register("newPassword")}
            />

            <span
              className="absolute right-4 top-5 cursor-pointer"
              onClick={() =>
                setShowNewPassword(!showNewPassword)
              }
            >
              {showNewPassword ? (
                <PiEyeSlashFill size={20} />
              ) : (
                <MdRemoveRedEye size={20} />
              )}
            </span>
          </div>

          {errors.newPassword && (
            <p className="text-red-500 text-sm">
              {errors.newPassword.message}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col gap-2">
          <label
            className="font-semibold text-[18px]"
            htmlFor="ConfirmNewPassword"
          >
            Confirm Password
          </label>

          <div className="relative">
            <Input
              type={showConfirmPassword ? "text" : "password"}
              id="ConfirmNewPassword"
              className="block my-2"
              placeholder="Confirm password"
              {...register("confirmNewPassword")}
            />

            <span
              className="absolute right-4 top-5 cursor-pointer"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
            >
              {showConfirmPassword ? (
                <PiEyeSlashFill size={20} />
              ) : (
                <MdRemoveRedEye size={20} />
              )}
            </span>
          </div>

          {errors.confirmNewPassword && (
            <p className="text-red-500 text-sm">
              {errors.confirmNewPassword.message}
            </p>
          )}
        </div>

        <Button
          content="Update Password"
          type="submit"
          className="mt-8"
        />
      </form>
    </AuthLayout>
  );
}