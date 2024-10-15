import React from "react";
import PageBanner from "../../components/PageBanner";
import bg_img from "../../assets/images/hero-image-2.jpg";
import FoodTable from "../../components/FoodTable";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();

  return (
    <div className="pb-10">
      <PageBanner title="Cart" bg_img={bg_img} />
      <div className="flex flex-wrap gap-8 px-3 pt-20 pb-6 md:px-6">
        <div className="hidden md:block flexGrowBigScreen">
          <FoodTable />
        </div>
        <FoodTable hidden={true} />
        <div className="flex-1 px-3 mt-8 md:mt-0">
            <div className="flex items-center justify-between max-w-xs md:max-w-lg">
              <h4 className="text-lg font-semibold">Sub-total</h4>
              <p className="font-bold">$556</p>
            </div>
            <p className="mt-5 mb-4 md:max-w-lg">
              You have to pay the total amount by Cash or Card. Also, you
              can order by directly talking with us on phone.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => navigate("/order/1")}
                className="text-white rounded-md btn"
              >
                Checkout
              </button>
              <button
                onClick={() => navigate("/menu")}
                className="text-white rounded-md btn"
              >
                Continue Shopping
              </button>
            </div>
          </div>
      </div>
    </div>
  );
}
