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
            className="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
            className="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            type="file"
            id="formFile7"
          />
        </div>
      </div>

      <hr className="my-3" />
      <label
        htmlFor="Payment"
        className="form-label inline-block mb-2 text-gray-900 text-sm font-medium"
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
      <label
        htmlFor="payMode"
        className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-400"
      >
        Payment Mode
      </label>
      <select
        defaultValue={"Card"}
        id="payMode"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value={"Card"}>Credit/Debit</option>
        <option value={"Bank Transfer"}>Bank Transfer</option>
        <option value={"E-wallet"}>E-wallet</option>
        <option value={"Cash"}>Cash</option>
      </select>

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
          Payment Mode Details
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
