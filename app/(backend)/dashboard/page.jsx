import Heading from "@/components/backend/layout/Heading";
import CustomDataTable from "@/components/data-display/CustomDataTable";
import DashboardCharts from "@/components/data-display/DashboardCharts";
import LargeCards from "@/components/data-display/LargeCards";
import FarmerDashboard from "@/components/data-display/pageDashboard/FarmerDashboard";
import UserDashboard from "@/components/data-display/pageDashboard/UserDashboard";
import SmallCards from "@/components/data-display/SmallCards";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import React from "react";

export default async function page() {
  const session = await getServerSession(authOptions)
  const role =session?.user?.role
  if(role==="USER"){
    return <UserDashboard/>
  }
  if(role==="FARMER"){
    return <FarmerDashboard/>
  }
  return (
    <div>
      <Heading title="Dashboard Overview" />
      <LargeCards />
      <SmallCards />
      <DashboardCharts />
      <CustomDataTable />
    </div>
  );
}
