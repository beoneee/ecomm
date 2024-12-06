"use client";

import ImageInput from "@/components/forms/FormInput/Imageinput";
import TextInput from "@/components/forms/FormInput/Textinput";
import SubmitButton from "@/components/forms/SubmitButton";
import FormHeader from "@/components/forms/FormHeader";
import { makePostRequest } from "@/lib/apiRequest";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextareaInput from "@/components/forms/FormInput/Textareinput";
import { generateSlug } from "@/lib/generateSlug";
import ToggleInput from "@/components/forms/FormInput/Toggleinput";
import SelectInput from "@/components/forms/FormInput/Selectinput";
import { useRouter } from "next/navigation";

export default function NewMarketForm({categories}) {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues:{
   isActive:true
    }
  });
  const isActive=watch("isActive")
  const router=useRouter()
  function redirect(){
    router.push("/dashboard/categories");
  }
  async function onSubmit(data) {
    setLoading(true);
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.logoUrl = imageUrl;
    console.log(data);
    makePostRequest(setLoading, "api/markets", data, "Market", reset,redirect);
    setImageUrl("");
  }
  return (
    <>
      <FormHeader title=" New Market" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          <TextInput
            label="Market Title"
            name="title"
            register={register}
            errors={errors}
           className="w-full"
          />
            <SelectInput
            label="Select Categories"
            name="categoryIds"
            register={register}
            errors={errors}
            className="w-full"
            options={categories}
            multiple={true}
          />

          <ImageInput
            label="Market Logo"
            setImageUrl={setImageUrl}
            imageUrl={imageUrl}
            endpoint="marketLogoUploader"
          />
          <TextareaInput
            label="Market Descriptionn"
            name="description"
            register={register}
            errors={errors}
          />
          <ToggleInput
            label="Market Status "
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Market"
          loadingButtonTitle="Creating Market please wait...."
        />
      </form>
    </>
  );
}
