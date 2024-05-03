// components/ProductTable.jsx
import React from "react";
import products from "../../../product.json";

const ProductTable = () => {
  return (
    <>
      <div className="">
        <h2 className="text-3xl my-8 font-bold mb-4 text-gray-800 text-center">
          Garage Products
        </h2>
      </div>
      <div className="overflow-x-auto m-5 px-8 py-2 border rounded-xl">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 text-black">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-lg font-semibold text-black uppercase tracking-wider"
              >
                Product Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-lg font-semibold text-black uppercase tracking-wider"
              >
                Description
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-lg font-semibold text-black uppercase tracking-wider"
              >
                Price
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((product, index) => (
              <tr key={index} className="hover:scale-105 transition-all">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-base font-medium text-gray-900">
                    {product.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-base text-gray-500">
                    {product.description}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-green-500">
                    ₹{product.price.toFixed(2)}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductTable;
