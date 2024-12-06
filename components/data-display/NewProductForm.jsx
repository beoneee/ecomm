"use client";
import FormHeader from "@/components/forms/FormHeader";
import ImageInput from "@/components/forms/FormInput/Imageinput";
import SubmitButton from "@/components/forms/SubmitButton";
import TextareaInput from "@/components/forms/FormInput/Textareinput";
import TextInput from "@/components/forms/FormInput/Textinput";
import { generateSlug } from "@/lib/generateSlug";
import { Plus, X } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { makePostRequest } from "@/lib/apiRequest";
import SelectInput from "@/components/forms/FormInput/Selectinput";
import { Item } from "@radix-ui/react-dropdown-menu";
import ArrayItemInput from "../forms/FormInput/ArrayItemInput";
import ToggleInput from "@/components/forms/FormInput/Toggleinput";
import { generateUserCode } from "@/lib/generateUserCode";
import { useRouter } from "next/navigation";

export default function NewProductForm({categories,farmers}) {
  const [imageUrl, setImageUrl] = useState("");
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: true,
      isWholesale: false
    },
  });
  const isActive = watch("isActive");
  const isWholesale = watch("isWholesale");
  console.log(isActive);
  const router =useRouter()
  function redirect(){
    router.push("/dashboard/products");
  }
  async function onSubmit(data) {
    const slug = generateSlug(data.title);
    const productCode= generateUserCode('LLP', data.title)
    data.slug = slug;
    data.imageUrl = imageUrl;
    data.tags = tags;
    data.qty=1,
    data.productCode = productCode;
    console.log(data);
    makePostRequest(setLoading, "api/products", data, "Product", reset,redirect);
    setImageUrl("");
    setTags([])
  }

  return (
    <div>
      <FormHeader title="New Product" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 "
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Product Title"
            name="title"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Product SKU"
            name="sku"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Product Barcode"
            name="barcode"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Product Price (Before Discount)"
            name="productPrice"
            type="number"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Product Sale Price (Discounted)"
            name="salePrice"
            register={register}
            errors={errors}
            type="number"
            className="w-full"
          />
           <TextInput
            label="Product Stock"
            name="productStock"
            register={register}
            errors={errors}
            type="number"
            className="w-full"
          />
          <TextInput
            label="Unit of Measurement (eg Kilograms)"
            name="unit"
            register={register}
            errors={errors}
            className="w-full"
          />
          <SelectInput
            label="Select Category"
            name="categoryId"
            register={register}
            errors={errors}
            className="w-full"
            options={categories}
          />
          <SelectInput
            label="Select Farmer"
            name="farmerId"
            register={register}
            errors={errors}
            className="w-full"
            options={farmers}
          />
            <ToggleInput
            label="Supports Wholesale Selling "
            name="isWholesale"
            trueTitle="Supported"
            falseTitle="Not Supported"
            register={register}
          />
           
            {
              isWholesale&&(
                <>
                 <TextInput
            label="Wholesale Price"
            name="wholesalePrice"
            register={register}
            errors={errors}
            type="number"
            className="w-full"
          />
            <TextInput
            label="Minimum Wholesale Qty"
            name="wholesaleQty"
            register={register}
            errors={errors}
            type="number"
            className="w-full"
          />  
                </>
              )
            }

          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="productImageUploader"
            label="Product Image"
          />
          <ArrayItemInput items={tags} setItems={setTags} itemTitle="tags" />
          <TextareaInput
            label="Product Description"
            name="description"
            register={register}
            errors={errors}
          />
          <ToggleInput
            label="Publish your Product "
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Product"
          loadingButtonTitle="Creating Product please wait....."
        />
      </form>
    </div>
  );
}
