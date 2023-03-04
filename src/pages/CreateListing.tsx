import React, { useState } from "react";

const CreateListing = () => {
  const [type, setType] = useState<string>("rent");
  const [parking, setParking] = useState<boolean>(false);
  const [furnished, setfurnished] = useState<boolean>(false);
  const [offer, setOffer] = useState<boolean>(true);
  function handleChange() {
    console.log("");
  }
  return (
    <main className="max-w-md mx-auto px-2">
      <h1 className="text-3xl text-center mt-6">Crete a Listing</h1>
      <form>
        <p className="text-lg mt-6 font-semibold">Sell / Rent</p>
        <div className="flex gap-5">
          <button
            type="button"
            id="type"
            value="sale"
            onClick={handleChange}
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg
             focus:shadow-lg transition duration-150 ease-in-out w-full
            ${type === "rent" ? "bg-white text-black" : "bg-slate-600 text-white"}`}
          >
            sell
          </button>
          <button
            type="button"
            id="type"
            value="sale"
            onClick={handleChange}
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg
             focus:shadow-lg transition duration-150 ease-in-out w-full
            ${type === "sale" ? "bg-white text-black" : "bg-slate-600 text-white"}`}
          >
            rent
          </button>
        </div>
        <p className="text-lg mt-6 font-semibold">Name</p>
        <input type="text"
          id="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full px-4 py-2 text-xl outline-none text-gray-700 bg-white border border-gray-300 rounded transition
          duration 200 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
          maxLength={32}
          minLength={10}
        />
        <div className="flex space-x-6 mb-6">
          <div>
            <p className="text-lg font-semibold">Beds</p>
            <input
              type="number"
              id="bedrooms"
              min={1}
              onChange={handleChange}
              max={50}
              required
              className="w-full text-center px-4 py-2 text-xl outline-none text-gray-700 bg-white border border-gray-300 rounded transition
              duration 200 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
            />
          </div>
          <div>
            <div>
              <p className="text-lg font-semibold">Baths</p>
              <input
                type="number"
                id="bathrooms"
                min={1}
                onChange={handleChange}
                max={50}
                required
                className=" w-full text-center px-4 py-2 text-xl outline-none text-gray-700 bg-white border border-gray-300 rounded transition
              duration 200 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
              />
            </div>
          </div>
        </div>
        <p className="text-lg mt-6 font-semibold">Parking spot</p>
        <div className="flex gap-5">
          <button
            type="button"
            id="parking"
            onClick={handleChange}
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg
             focus:shadow-lg transition duration-150 ease-in-out w-full
            ${!parking  ? "bg-white text-black" : "bg-slate-600 text-white"}`}
          >
            yes
          </button>
          <button
            type="button"
            id="parking"
            onClick={handleChange}
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg
             focus:shadow-lg transition duration-150 ease-in-out w-full
            ${parking  ? "bg-white text-black" : "bg-slate-600 text-white"}`}
          >
            no
          </button>
        </div>
        <p className="text-lg mt-6 font-semibold">Furnished</p>
        <div className="flex gap-5">
          <button
            type="button"
            id="furnished"
            value="true"
            onClick={handleChange}
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg
             focus:shadow-lg transition duration-150 ease-in-out w-full
            ${!furnished ? "bg-white text-black" : "bg-slate-600 text-white"}`}
          >
            yes
          </button>
          <button
            type="button"
            id="furnished"
            value="sale"
            onClick={handleChange}
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg
             focus:shadow-lg transition duration-150 ease-in-out w-full
            ${furnished ? "bg-white text-black" : "bg-slate-600 text-white"}`}
          >
            no
          </button>
        </div>
        <p className="text-lg mt-6 font-semibold">Address</p>
        <textarea
          id="address"
          placeholder="Address"
          onChange={handleChange}
          className="w-full px-4 py-2 text-xl outline-none text-gray-700 bg-white border border-gray-300 rounded transition
          duration 200 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
          required
        />
        <p className="text-lg font-semibold">Description</p>
        <textarea
          id="description"
          placeholder="Description"
          onChange={handleChange}
          className="w-full px-4 py-2 text-xl outline-none text-gray-700 bg-white border border-gray-300 rounded transition
          duration 200 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
          required
        />
        <p className="text-lg font-semibold">Offers</p>
        <div className="flex gap-5 mb-6">
          <button
            type="button"
            id="offer"
            value="true"
            onClick={handleChange}
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg
             focus:shadow-lg transition duration-150 ease-in-out w-full
            ${!offer ? "bg-white text-black" : "bg-slate-600 text-white"}`}
          >
            yes
          </button>
          <button
            type="button"
            id="offer"
            value="sale"
            onClick={handleChange}
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg
             focus:shadow-lg transition duration-150 ease-in-out w-full
            ${offer ? "bg-white text-black" : "bg-slate-600 text-white"}`}
          >
            no
          </button>
        </div>
        <div className="flex items-center mb-6">
          <div className="">
            <p className="text-lg font-semibold">Regular price</p>
            <div className="flex w-full justify-center items-center space-x-6">
              <input
                type="number"
                id="regularPrice"
                min={50}
                max={400000000000}
                onChange={handleChange}
                required
                className="w-full text-center px-4 py-2 text-xl outline-none text-gray-700 bg-white border
                border-gray-300 rounded transition duration 200 ease-in-out focus:text-gray-700
                focus:bg-white focus:border-slate-600"
              />
              {type === "rent" && (
                <div className="flex self-start mt-3">
                  <p className="text-md w-full whitespace-nowrap">$ / Month</p>
                </div>
              )}
            </div>
          </div>
        </div>
        {offer && (
          <div className="flex items-center mb-6">
            <div className="">
              <p className="text-lg font-semibold">Discounted Price</p>
              <div className="flex w-full justify-center items-center space-x-6">
                <input
                  type="number"
                  id="discoutedPrice"
                  min={50}
                  max={400000000000}
                  onChange={handleChange}
                  required={offer}
                  className="w-full text-center px-4 py-2 text-xl outline-none text-gray-700 bg-white border
                 border-gray-300 rounded transition duration 200 ease-in-out focus:text-gray-700
                 focus:bg-white focus:border-slate-600"
                />
                {type === "rent" && (
                  <div className="flex self-start mt-3">
                    <p className="text-md w-full whitespace-nowrap">$ / Month</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        <div>
          <div className="mb-6">
            <p className="text-lg font-semibold">Images</p>
            <p className="text-gray-600">The first image will be the cover (max 6)</p>
            <input
              type="file"
              id="images"
              onChange={handleChange}
              accept=".jpg,.png,.jpeg"
              multiple
              required
              className="w-full px-3 py-1.5 border bg-white border-gray-300 rounded transition duration-150
              ease-in-out focus:border-slate-600"
            />
          </div>
        </div>
        <button
          type="submit"
          className="mb-6 w-full px-7 py-3 bg-blue-600 text-white font-medium text-sm uppercase rounded
          shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-800
          active:shadow-lg transition duration-150 ease-in-out"
        >
          Create Listing
        </button>
      </form>
    </main>
  );
};

export default CreateListing;
