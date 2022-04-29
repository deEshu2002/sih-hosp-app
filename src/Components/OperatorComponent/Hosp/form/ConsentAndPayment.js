import React from "react";

export default function ConsentAndPayment() {
  return (
    <div>
      <div className="flex justify-start">
        <div className="mb-3 w-96">
          <label
            htmlFor="formFile6"
            className="form-label inline-block mb-2 text-gray-700 text-sm font-medium"
          >
            Consent to be treated
          </label>
          <input
            className="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary_text focus:outline-none"
            type="file"
            id="formFile6"
          />
        </div>
      </div>
      <div className="flex justify-start">
        <div className="mb-3 w-96">
          <label
            htmlFor="formFile7"
            className="form-label inline-block mb-2 text-gray-700 text-sm font-medium"
          >
            Consent for Insaurance
          </label>
          <input
            className="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary_text focus:outline-none"
            type="file"
            id="formFile7"
          />
        </div>
      </div>

      <hr className="my-3" />
      <label
        htmlFor="Payment"
        className="form-label inline-block mb-6 text-gray-900 text-sm font-medium"
      >
        Payment Details
      </label>
      <div className="grid xl:grid-cols-3 xl:gap-6">
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="floating_room_charges"
            id="floating_room_charges"
            className="form-input-effect peer"
            required
          />
          <label
            htmlFor="floating_room_charges"
            className="form-label-effect"
          >
            Room Charges
          </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="number"
            name="floating_days_number"
            id="floating_days_number"
            className="form-input-effect peer"
          />
          <label
            htmlFor="floating_days_number"
            className="form-label-effect"
          >
            No of Days
          </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="floating_total_charge"
            id="floating_total_charge"
            className="form-input-effect peer"
            required
          />
          <label
            htmlFor="floating_total_charge"
            className="form-label-effect"
          >
            Total Charges
          </label>
        </div>
      </div>
      <div className="grid xl:grid-cols-2 xl:gap-6">
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="floating_service_charges"
            id="floating_service_charges"
            className="form-input-effect peer"
            placeholder=" "
            required=""
          />
          <label
            htmlFor="floating_service_charges"
            className="form-label-effect"
          >
            Services Charges
          </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="Date"
            name="floating_billing_date"
            id="floating_billing_date"
            className="form-input-effect peer"
            required
          />
          <label
            htmlFor="floating_billiong_date"
            className="form-label-effect"
          >
            Billing Date
          </label>
        </div>
      </div>
    

      <div className=" mb-6 flex-auto  w-96">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="payMode"
          >
           Payment Mode
          </label>
          <div className="relative">
            <select
              defaultValue={"Card"}
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-primary_text"
              id="payMode"
            >
              <option value={"Card"} >Credit/Debit</option>
              <option value={"Bank Transfer"} >Bank Transfer</option>
              <option value={"E-wallet"} >E-wallet</option>
              <option value={"Cash"} >Cash</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

      <div className="relative z-0 mb-6 w-full group mt-4">
        <input
          type="text"
          name="floating_payment_mode"
          id="floating_payment_mode"
          className="form-input-effect peer"
          required
        />
        <label
          htmlFor="floating_payment_mode"
          className="form-label-effect"
        >
          Payment Mode Note
        </label>
      </div>

      <div className="grid xl:grid-cols-2 xl:gap-6">
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="floating_overall_charges"
            id="floating_overall_charges"
            className="form-input-effect peer"
            required
          />
          <label
            htmlFor="floating_overall_charges"
            className="form-label-effect"
          >
            Overall Charges
          </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="floating_bill_number"
            id="floating_bill_number"
            className="form-input-effect peer"
            required
          />
          <label
            htmlFor="floating_bill_number"
            className="form-label-effect"
          >
            Bill number
          </label>
        </div>
      </div>
    </div>
  );
}
