import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const farmerData = await request.json();
    const newFarmerProfile = await db.farmerProfile.create({
      data: {
        code: farmerData.code,
        contactPerson: farmerData.contactPerson,
        contactPersonPhone: farmerData.contactPersonPhone,
        profileImageUrl: farmerData.profileImageUrl,
        email: farmerData.email,
        name: farmerData.name,
        notes: farmerData.notes,
        phone: farmerData.phone,
        physicalAddress: farmerData.physicalAddress,
        terms: farmerData.terms,
        isActive: farmerData.isActive,
        products: farmerData.products,
        landSize: parseFloat(farmerData.landSize),
        mainCrop: farmerData.mainCrop,
        userId: farmerData.userId,
      },
    });
    console.log("Created Farmer Profile:", newFarmerProfile);
    return NextResponse.json(newFarmerProfile);
  } catch (error) {
    console.error("Error creating farmer profile:", error.message);
    return NextResponse.json(
      { message: "Failed to create farmers", error: error.message },
      { status: 500 }
    );
  }
}
export async function GET(request) {
  try {
    const profiles = await db.farmerProfile.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(profiles);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to Fetch Profile",
        error,
      },
      { status: 500 }
    );
  }
}
