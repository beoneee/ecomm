"use client";
import FormHeader from "@/components/forms/FormHeader";
import ImageInput from "@/components/forms/FormInput/Imageinput";
import SubmitButton from "@/components/forms/SubmitButton";
import TextareaInput from "@/components/forms/FormInput/Textareinput";
import TextInput from "@/components/forms/FormInput/Textinput";
import { generateSlug } from "@/lib/generateSlug";
import { X } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { generateCouponCode } from "@/lib/generateCouponCode";
import ToggleInput from "@/components/forms/FormInput/Toggleinput";
import { generateIsoFormattedDate } from "@/lib/generateisoFormattedDate";

import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
import { convertIsoDateToNormal } from "@/lib/convertIsoDateToNormal";
import { useSession } from "next-auth/react";


export default function NewCoupon({updateData={}}) {
  const {data:session,status}=useSession
  const vendorId =session?.user?.id
  const expiryDateNormal = convertIsoDateToNormal(updateData.expiryDate)
    const id = updateData?.id??"";
    updateData.expiryDate=expiryDateNormal
  const [loading, setLoading] = useState(false);
  const [couponCode, setCouponCode] = useState();
 
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: true,
      ...updateData
    },
  });
  
  const isActive = watch("isActive");
  const router = useRouter();
  function redirect() {
    router.push("/dashboard/coupons");
    if(status==="loading"){
      return <p>Loading...</p>
    }
  }
  async function onSubmit(data) {
    data.vendorId= vendorId;
    const couponCode = generateCouponCode(data.title, data.expiryDate);
    const isoFormattedDate = generateIsoFormattedDate(data.expiryDate);
    data.expiryDate = isoFormattedDate;
    data.couponCode = couponCode;
    console.log(data);
   if(id){
    makePutRequest(setLoading, `api/coupons/${id}`, data, "Coupon", redirect)
   }else{
    makePostRequest(setLoading, "api/coupons", data, "Coupon", reset, redirect);
   }
  }

  return (
    <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 "
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Coupon Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Coupon Expiry Date"
            name="expiryDate"
            register={register}
            type="date"
            errors={errors}
            className="w-full"
          />
          <ToggleInput
            label="Publish your Coupon "
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle={id ? "Update Coupon" : "Create Coupon"}
          loadingButtonTitle={`${
            id ? "Updating" : "Creating"
          }Creating Coupon please wait.....`}
        />
      </form>
  );
}
