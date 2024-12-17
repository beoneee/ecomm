
import FormHeader from "@/components/forms/FormHeader";
import NewFarmerForm from "@/components/data-display/NewFarmerForm";
import { getData } from "@/lib/getData";

export default async function NewFarmer({params:{id}}) {
  const farmer = await getData(`farmer/${id}`)

  return (
    <div>
      <FormHeader title="New Farmer" />
        <NewFarmerForm updateData={farmer}/>
    </div>
  );
}
