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
import { generateCouponCode } from "@/lib/generateCouponCode";
import { generateUserCode } from "@/lib/generateUserCode";
import ToggleInput from "@/components/forms/FormInput/Toggleinput";
import { useRouter } from "next/navigation";
import NewFarmerForm from "@/components/data-display/NewFarmerForm";

export default function NewFarmer() {

  return (
    <div>
      <FormHeader title="New Farmer" />
        <NewFarmerForm/>
    </div>
  );
}
