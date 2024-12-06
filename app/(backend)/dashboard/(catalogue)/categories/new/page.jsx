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
import { makePostRequest } from "@/lib/apiRequest";
import SelectInput from "@/components/forms/FormInput/Selectinput";
import ToggleInput from "@/components/forms/FormInput/Toggleinput";
import { useRouter } from "next/navigation";

export default function NewCategory() {
  const [imageUrl, setImageUrl] = useState("");
  // const markets = [];
  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: true,
    },
  });
  const isActive = watch("isActive");
  const router = useRouter();
  function redirect() {
    router.push("/dashboard/categories");
  }
  async function onSubmit(data) {
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    console.log(data);
    makePostRequest(
      setLoading,
      "api/categories",
      data,
      "Category",
      reset,
      redirect
    );
    setImageUrl("");
  }

  return (
    <div>
      <FormHeader title="New category" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 "
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Category Title"
            name="title"
            register={register}
            errors={errors}
          />
          <TextareaInput
            label="Category Description"
            name="description"
            register={register}
            errors={errors}
          />
          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="categoryImageUploader"
            label="Category Image"
          />

          <ToggleInput
            label="Publish your Category "
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Category"
          loadingButtonTitle="Creating Category please wait....."
        />
      </form>
    </div>
  );
}
