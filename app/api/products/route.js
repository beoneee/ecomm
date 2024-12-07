// import db from "@/lib/db";
// // import { descriptorn } from "chart.js/dist/core/core.defaults";
// import { NextResponse } from "next/server";

// export async function POST(request) {
//   try {
//     const {
//       barcode,
//       categoryId,
//       descripton,
//       farmerId,
//       imageUrl,
//       isActive,
//       isWholesale,
//       productCode,
//       productPrice,
//       salePrice,
//       sku,
//       slug,
//       tags,
//       title,
//       unit,
//       wholesalePrice,
//       productStock,
//       qty,
//       wholesaleQty,
//     } = await request.json();
//     const parsedWholesaleQty = parseInt(wholesaleQty) || 0;
//     const parsedProductStock = parseInt(productStock) || 0;
//     const parsedQty = parseInt(qty) || 0;

//     const existingProduct = await db.product.findUnique({
//       where: {
//         slug,
//       },
//     });
//     if (existingProduct) {
//       return NextResponse.json(
//         {
//           data: null,
//           message: "Product already exists",
//         },
//         { status: 409 }
//       );
//     }
//     const newProduct = await db.product.create({
//       data: {
//         barcode,
//         categoryId,
//         descripton,
//         userId: farmerId,
//         imageUrl,
//         isActive,
//         isWholesale,
//         productCode,
//         productPrice: parseFloat(productPrice),
//         salePrice: parseFloat(salePrice),
//         sku,
//         slug,
//         tags,
//         title,
//         unit,
//         wholesalePrice: parseFloat(wholesalePrice),
//         wholesaleQty: parsedWholesaleQty,
//         productStock: parsedProductStock,
//         qty: parsedQty,
//         category: {
//           connect: {
//             id: categoryId,
//           },
//         },
//         user: {
//           connect: {
//             id: farmerId,
//           },
//         },
//       },
//     });
//     console.log(newProduct);
//     return NextResponse.json(newProduct);
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json(
//       {
//         message: "Failed to create Product",
//         error,
//       },
//       { status: 500 }
//     );
//   }
// }

// export async function GET(request) {
//   try {
//     const products = await db.product.findMany({
//       orderBy: {
//         createdAt: "desc",
//       },
//     });
//     return NextResponse.json(products);
//   } catch (error) {
//     return NextResponse.json(
//       {
//         message: "Failed to Fetch Products",
//         error,
//       },
//       { status: 500 }
//     );
//   }
// }

import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const {
      barcode,
      categoryId,
      farmerId,
      isWholesale,
      productCode,
      productPrice,
      salePrice,
      slug,
      sku,
      title,
      description,
      imageUrl,
      isActive,
      tags,
      unit,
      wholesalePrice,
      wholesaleQty,
      productStock,
      qty,
    } = await req.json();

    const parsedWholesaleQty = parseInt(wholesaleQty) || 0;
    const parsedProductStock = parseInt(productStock) || 0;
    const parsedQty = parseInt(qty) || 0;

    const existingProduct = await db.product.findUnique({
      where: { slug },
    });

    if (existingProduct) {
      return NextResponse.json(
        {
          data: null,
          message: "Product already exists",
        },
        { status: 409 }
      );
    }

    const newProduct = await db.product.create({
      data: {
        barcode,
        productCode,
        productPrice: parseFloat(productPrice),
        salePrice: parseFloat(salePrice),
        slug,
        sku,
        title,
        description,
        imageUrl,
        isActive,
        tags,
        unit,
        isWholesale,
        wholesalePrice: parseFloat(wholesalePrice),
        wholesaleQty: parsedWholesaleQty,
        productStock: parsedProductStock,
        qty: parsedQty,
        category: {
          connect: {
            id: categoryId,
          },
        },
        user: {
          connect: {
            id: farmerId,
          },
        },
      },
    });

    return NextResponse.json(
      { data: newProduct, message: "Product created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating product:", error.message);
    return NextResponse.json(
      { message: "Failed to create product", error: error.message },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  try {
    const products = await db.product.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(products);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to fetch product",
        error,
      },
      { status: 500 }
    );
  }
}
