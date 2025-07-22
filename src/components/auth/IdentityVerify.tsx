"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  IconArrowLeft,
  IconCalendarWeek,
  IconLoader2,
} from "@tabler/icons-react";
import { IconEye, IconEyeOff, UploadIcon } from "@/components/ui/icon";

// Extend the schema to include the new fields
const FormSchema = z.object({
  birthday: z.date({ required_error: "Date of birth is required" }),
  id_number: z.string().nonempty({ message: "ID number is required" }),
  idcard_front: z.union([z.instanceof(File), z.string()]),
  idcard_back: z.union([z.instanceof(File), z.string()]),
});

const IDVerify = ({
  email,
  setStep,
}: {
  email: string;
  setStep: (val: number) => void;
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      birthday: undefined,
      id_number: "",
      idcard_front: undefined,
      idcard_back: undefined,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      console.log(data, email);
      setStep(5);
    }, 300);
  }

  return (
    <>
      <h5 className="text-[28px] font-[700] leading-[100%] text-center si:text-start">
        Verify Your Identity
      </h5>
      <p className="!text-[14px] font-[400] text-[#9F9F9F] text-center si:text-start">
        For compliance, we need some basic info.
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-5"
        >
          <FormField
            control={form.control}
            name="birthday"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date of Birth</FormLabel>
                <FormControl>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        id="date"
                        type="button"
                        className={`w-full h-11 rounded-[6px] !bg-[#15101D] !border-[1px] !border-[#381E5B] justify-between font-normal ${
                          field.value
                            ? "text-[#fff]"
                            : "text-muted-foreground hover:text-muted-foreground"
                        }`}
                      >
                        {field.value
                          ? field.value.toLocaleDateString()
                          : "Select date"}
                        <IconCalendarWeek
                          color="#545454"
                          className="!w-[22px] !h-[22px]"
                        />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-auto overflow-hidden p-0"
                      align="start"
                    >
                      <Calendar
                        mode="single"
                        selected={field.value}
                        captionLayout="dropdown"
                        onSelect={(date) => {
                          field.onChange(date);
                          setOpen(false);
                        }}
                      />
                    </PopoverContent>
                  </Popover>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="id_number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ID Number</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={isVisible ? "text" : "password"}
                      placeholder="AB12345678"
                      className="!h-11 rounded-[6px] !bg-[#15101D] border-[#381E5B]"
                      {...field}
                    />
                    <div
                      className="!bg-transparent absolute right-3 top-0 h-full flex items-center cursor-pointer"
                      onClick={() => setIsVisible((v) => !v)}
                    >
                      {!isVisible ? (
                        <IconEye width="22" height="22" />
                      ) : (
                        <IconEyeOff width="22" height="22" />
                      )}
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="idcard_front"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex justify-center sm:justify-start">
                      <label
                        htmlFor="idcard_front-input"
                        style={{
                          width: "100%",
                          height: "158px",
                          borderRadius: "6px",
                          border: "1px solid #381E5B",
                          cursor: "pointer",
                        }}
                        className="overflow-hidden flex justify-center items-center bg-[#15101D]"
                      >
                        {field.value ? (
                          <Image
                            src={
                              typeof window !== "undefined" &&
                              field.value instanceof File
                                ? URL.createObjectURL(field.value)
                                : typeof field.value === "string"
                                ? field.value
                                : ""
                            }
                            unoptimized={true}
                            priority={true}
                            alt="ID card front"
                            width={200}
                            height={200}
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          <div className="flex flex-col gap-3 items-center justify-center">
                            <UploadIcon />
                            <span className="text-[14px] text-center text-[9F9F9F] max-w-[220px] px-2">
                              <span className="font-[700] text-[#9862DB]">
                                Click to upload
                              </span>{" "}
                              ID front side (max. 4800x3400px)
                            </span>
                          </div>
                        )}
                      </label>
                      <Input
                        id="idcard_front-input"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            field.onChange(file);
                          }
                        }}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="idcard_back"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex justify-center sm:justify-start">
                      <label
                        htmlFor="idcard_back-input"
                        style={{
                          width: "100%",
                          height: "158px",
                          borderRadius: "6px",
                          border: "1px solid #381E5B",
                          cursor: "pointer",
                        }}
                        className="overflow-hidden flex justify-center items-center bg-[#15101D]"
                      >
                        {field.value ? (
                          <Image
                            src={
                              typeof window !== "undefined" &&
                              field.value instanceof File
                                ? URL.createObjectURL(field.value)
                                : typeof field.value === "string"
                                ? field.value
                                : ""
                            }
                            unoptimized={true}
                            priority={true}
                            alt="ID card back"
                            width={200}
                            height={200}
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          <div className="flex flex-col gap-3 items-center justify-center">
                            <UploadIcon />
                            <span className="text-[14px] text-center text-[9F9F9F] max-w-[220px] px-2">
                              <span className="font-[700] text-[#9862DB]">
                                Click to upload
                              </span>{" "}
                              ID back side (max. 4800x3400px)
                            </span>
                          </div>
                        )}
                      </label>
                      <Input
                        id="idcard_back-input"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            field.onChange(file);
                          }
                        }}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            variant="common"
            className="login-button rounded-[6px] !w-full !h-11"
            disabled={isSubmitting}
          >
            {isSubmitting && <IconLoader2 className="animate-spin" />}
            Submit & Continue
          </Button>
          <div className="flex justify-center items-center">
            <h5
              className="text-[#9F9F9F] text-[14px] flex items-center gap-2 cursor-pointer"
              onClick={() => {
                setStep(0);
              }}
            >
              <IconArrowLeft color="#7E18FF" />
              Back to sign up
            </h5>
          </div>
        </form>
      </Form>
    </>
  );
};

export default IDVerify;
