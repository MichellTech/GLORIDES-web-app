import React, { useState } from 'react'
import { GrClose } from 'react-icons/gr'
import { BiSolidCarGarage } from 'react-icons/bi'
import { LuFuel } from 'react-icons/lu'
import { GiGearStickPattern, GiCarSeat } from 'react-icons/gi'
import { FaFileInvoiceDollar } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { closeFilter, setAllsearchedcars } from '@/features/rental/filterSlice'

function Filterparams() {
  const dispatch = useDispatch()
  const { allsearchedcars, returnedcars } = useSelector((store) => store.rental)
  const [selectedCarDoors, setSelectedCarDoors] = useState(null)
  const [selectedFuelType, setSelectedFuelType] = useState(null)
  const [selectedGearType, setSelectedGearType] = useState(null)
  const [selectedPricing, setSelectedPricing] = useState(null)

  function filterCarsByAttributes() {
    const filters = {
      car_doors: selectedCarDoors,
      fuel_type: selectedFuelType,
      gear_type: selectedGearType,
    }

    // Filtering by selected options
    let filteredCars = allsearchedcars.filter((car) => {
      return Object.keys(filters).every((key) => {
        return !filters[key] || car[key] === filters[key]
      })
    })

    // Sorting by pricing if selectedPricing is provided
    if (selectedPricing) {
      filteredCars = filteredCars.sort((a, b) => {
        const costA = a.rent_cost
        const costB = b.rent_cost

        if (selectedPricing === 'highest') {
          return costB - costA
        } else if (selectedPricing === 'lowest') {
          return costA - costB
        }

        return 0
      })
    }

    return filteredCars
  }

  const handleApplyFilter = () => {
    dispatch(setAllsearchedcars(filterCarsByAttributes()))
    dispatch(closeFilter())
  }

  // Helper function to reset filters
  const handleResetFilter = () => {
    // Reset the selected values and dispatch to Redux state
    setSelectedCarDoors(null)
    setSelectedFuelType(null)
    setSelectedGearType(null)
    setSelectedPricing(null)
    dispatch(setAllsearchedcars(returnedcars))
    // Close the filter modal
    dispatch(closeFilter())
  }

  // Helper function to handle selecting Car Doors
  const handleCarDoorsClick = (doors) => {
    setSelectedCarDoors((prev) => (prev === doors ? null : doors))
  }

  // Helper function to handle selecting Fuel Type
  const handleFuelTypeClick = (fuelType) => {
    setSelectedFuelType((prev) => (prev === fuelType ? null : fuelType))
  }

  // Helper function to handle selecting Gear Type
  const handleGearTypeClick = (gearType) => {
    setSelectedGearType((prev) => (prev === gearType ? null : gearType))
  }

  // Helper function to handle selecting Pricing
  const handlePricingClick = (pricing) => {
    setSelectedPricing((prev) => (prev === pricing ? null : pricing))
  }

  const selectedOptionsCount = [
    selectedCarDoors,
    selectedFuelType,
    selectedGearType,
    selectedPricing,
  ].filter(Boolean).length

  return (
    <div className='bg-white h-[100vh] relative overflow-y-auto md:h-full md:max-w-xs'>
      <div className='border-b sticky top-0 left-0 right-0 bg-white py-6'>
        <div className='flex justify-between items-center  px-4   '>
          {/* close */}
          <div className=' cursor-pointer'>
            <h1 className='text-xl  md:text-base font-bold'> All Filters</h1>
          </div>
          {/* rclose all */}
          <div
            onClick={() => dispatch(closeFilter())}
            className='borde  px-3 py-1 cursor-pointer'
          >
            <GrClose className='text-2xl lg:text-xl text-babypurple font-bold' />
          </div>
        </div>
      </div>
      {/* car door */}
      <div className='space-y-4 lg:space-y-6 px-6 py-3'>
        <div className='flex items-center gap-4'>
          <BiSolidCarGarage className='text-base' />
          <h1 className='text-sm'>Car Doors</h1>
        </div>
        <div className='grid grid-cols-2 gap-4 lg:gap-2 max-w-xs'>
          <div
            className={`border px-2 py-2 cursor-pointer text-center rounded-sm text-xs ${
              selectedCarDoors === 2 ? 'bg-blue-500 text-white' : ''
            }`}
            onClick={() => handleCarDoorsClick(2)}
          >
            <h1>Two (2)</h1>
          </div>
          <div
            className={`border px-2 py-2 cursor-pointer text-center rounded-sm text-xs ${
              selectedCarDoors === 4 ? 'bg-blue-500 text-white' : ''
            }`}
            onClick={() => handleCarDoorsClick(4)}
          >
            <h1>Four (4)</h1>
          </div>
        </div>
      </div>
      {/* ... rest of your code */}
      {/* fuel type */}
      <div className='space-y-4 lg:space-y-6 px-6 py-3 '>
        <div className='flex items-center gap-4'>
          <LuFuel className='text-base ' />
          <h1 className='text-sm'>Fuel Type</h1>
        </div>
        <div className='grid grid-cols-2 gap-4 lg:gap-2 max-w-xs'>
          <div
            className={`border px-2 py-2 cursor-pointer text-center rounded-sm text-xs ${
              selectedFuelType === 'Diesel' ? 'bg-blue-500 text-white' : ''
            }`}
            onClick={() => handleFuelTypeClick('Diesel')}
          >
            <h1>Diesel </h1>
          </div>
          <div
            className={`border px-2 py-2 cursor-pointer text-center rounded-sm text-xs ${
              selectedFuelType === 'PMS' ? 'bg-blue-500 text-white' : ''
            }`}
            onClick={() => handleFuelTypeClick('PMS')}
          >
            <h1>PMS </h1>
          </div>
          <div
            className={`border px-2 py-2 cursor-pointer text-center rounded-sm text-xs ${
              selectedFuelType === 'Solar' ? 'bg-blue-500 text-white' : ''
            }`}
            onClick={() => handleFuelTypeClick('Solar')}
          >
            <h1>Solar </h1>
          </div>
          <div
            className={`border px-2 py-2 cursor-pointer text-center rounded-sm text-xs ${
              selectedFuelType === 'Electric' ? 'bg-blue-500 text-white' : ''
            }`}
            onClick={() => handleFuelTypeClick('Electric')}
          >
            <h1>Electric </h1>
          </div>
        </div>
      </div>
      {/* ... rest of your code */}
      {/* gear type */}
      <div className='space-y-4 lg:space-y-6 px-6 py-3   '>
        <div className='flex items-center gap-4'>
          <GiGearStickPattern className='text-base ' />
          <h1 className='text-sm'>Gear Type</h1>
        </div>
        <div className='grid grid-cols-2 gap-4 lg:gap-2 max-w-xs'>
          <div
            className={`border px-2 py-2 cursor-pointer text-center rounded-sm text-xs ${
              selectedGearType === 'Manual' ? 'bg-blue-500 text-white' : ''
            }`}
            onClick={() => handleGearTypeClick('Manual')}
          >
            <h1>Manual </h1>
          </div>
          <div
            className={`border px-2 py-2 cursor-pointer text-center rounded-sm text-xs ${
              selectedGearType === 'Automatic' ? 'bg-blue-500 text-white' : ''
            }`}
            onClick={() => handleGearTypeClick('Automatic')}
          >
            <h1>Automatic </h1>
          </div>
        </div>
      </div>
      {/* ... rest of your code */}
      {/* pricing */}
      <div className='space-y-4 lg:space-y-6 px-6 py-3   '>
        <div className='flex items-center gap-4'>
          <FaFileInvoiceDollar className='text-base' />
          <h1 className='text-sm'>Pricing</h1>
        </div>
        <div className='grid grid-cols-2 gap-4 lg:gap-2 max-w-xs'>
          <div
            className={`border px-2 py-2 cursor-pointer text-center rounded-sm text-xs ${
              selectedPricing === 'highest' ? 'bg-blue-500 text-white' : ''
            }`}
            onClick={() => handlePricingClick('highest')}
          >
            <h1>Highest </h1>
          </div>
          <div
            className={`border px-2 py-2 cursor-pointer text-center rounded-sm text-xs ${
              selectedPricing === 'lowest' ? 'bg-blue-500 text-white' : ''
            }`}
            onClick={() => handlePricingClick('lowest')}
          >
            <h1>Lowest </h1>
          </div>
        </div>
      </div>
      {/* ... rest of your code */}
      {/* buttons */}
      <div className='flex justify-center items-center flex-wrap gap-4 pt-8 pb-6 px-6 '>
        <button
          className='px-6 py-3 sm:py-3 bg-babypurple text-white shadow-md rounded-sm text-xs w-max flex-grow'
          onClick={handleApplyFilter}
        >
          Apply Filter ({selectedOptionsCount})
        </button>
        <button
          className='px-6 py-3 sm:py-3 border border-babyblack shadow-md rounded-sm text-xs w-max flex-grow'
          onClick={handleResetFilter}
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default Filterparams
