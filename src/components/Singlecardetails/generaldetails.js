import React from 'react'
import { cars } from '../../utilis/Cardata'
function generaldetails() {
  // const checklistdata = [
  //   { status: true, name: 'Bluetooth' },

  // ]
  return (
    <div className='bg-white rounded-md px-4 py-6 md:py-8 shadow-md '>
      {/* car description */}
      <div className='space-y-2 lg:space-y-4  '>
        <h1 className='font-bold text-sm sm:text-base  px-4  md:text-lg lg:text-xl border-b pb-2 sm:px-6 md:px-8 '>
          Car Description
        </h1>
        {/* group */}
        <div className='w-full pt-2 space-y-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 md:px-8  sm:space-y-0  sm:gap-8 md:gap-10'>
          {/* carname */}
          <div className='space-y-2 w-full'>
            <h1 htmlFor='' className='text-xs lg:text-sm'>
              Car Name
            </h1>
            <div className=' bg-white  border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'>
              Volks wagen
            </div>
          </div>
          {/* carmodel */}
          <div className='space-y-2 w-full '>
            <h1 htmlFor='' className='text-xs lg:text-sm'>
              Car Model
            </h1>
            <div className=' bg-white  border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'>
              XLE Series
            </div>
          </div>
          {/* plate no */}
          <div className='space-y-2 w-full'>
            <h1 htmlFor='' className='text-xs lg:text-sm'>
              Plate Number
            </h1>
            <div className=' bg-white  border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'>
              Xter34epe
            </div>
          </div>

          {/* miles */}
          <div className='space-y-2 w-full'>
            <h1 htmlFor='' className='text-xs lg:text-sm'>
              Miles on car
            </h1>
            <div className=' bg-white   border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'>
              2400
            </div>
          </div>

          {/* fuel*/}
          <div className='space-y-2 w-full'>
            <h1 htmlFor='' className='text-xs lg:text-sm'>
              Fuel Type
            </h1>
            <div className=' bg-white   border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'>
              Diesel
            </div>
          </div>

          {/* door*/}
          <div className='space-y-2 w-full'>
            <h1 htmlFor='' className='text-xs lg:text-sm'>
              Car Door
            </h1>
            <div className=' bg-white   border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'>
              4
            </div>
          </div>

          {/* seat */}
          <div className='space-y-2 w-full'>
            <h1 htmlFor='' className='text-xs lg:text-sm'>
              Number of Seats
            </h1>
            <div className=' bg-white   border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'>
              2
            </div>
          </div>

          {/* pickup */}
          <div className='space-y-2 w-full'>
            <h1 htmlFor='' className='text-xs lg:text-sm'>
              Preferred Pick Up location
            </h1>
            <div className=' bg-white   border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'>
              No 10 Rumola Road Aba Nigeria
            </div>
          </div>
          {/* drop off */}
          <div className='space-y-2 w-full'>
            <h1 htmlFor='' className='text-xs lg:text-sm'>
              Prefered Drop Off Location
            </h1>
            <div className=' bg-white  border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'>
              No 10 Rumola Road Aba Nigeria
            </div>
          </div>
          {/* city */}
          <div className='space-y-2 w-full'>
            <h1 htmlFor='' className='text-xs lg:text-sm'>
              City
            </h1>
            <div className=' bg-white  border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'>
              Aba
            </div>
          </div>
          {/* state */}
          <div className='space-y-2 w-full'>
            <h1 htmlFor='' className='text-xs lg:text-sm'>
              State
            </h1>
            <div className=' bg-white   border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'>
              Abia State
            </div>
          </div>
          {/*country */}
          <div className='space-y-2 w-full '>
            <h1 htmlFor='' className='text-xs lg:text-sm'>
              Country
            </h1>
            <div className=' bg-white  border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'>
              Nigeria
            </div>
          </div>
          {/* message */}
          <div className='sm:col-span-2 lg:col-span-3 w-full space-y-2'>
            <h1 htmlFor='' className='text-xs lg:text-sm'>
              Car Description
            </h1>
            <div className=' bg-white   border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatem dignissimos architecto nobis numquam. Blanditiis animi
              sit, rem facilis iusto quae nam ab. Officia dolorum corporis harum
              illum porro, ut exercitationem quisquam? Praesentium nam omnis
              iusto molestiae quam exercitationem id quasi inventore culpa,
              illum quaerat delectus est placeat, alias laboriosam soluta optio
              sapiente labore, ab rem rerum fugiat? Officia, ad impedit hic fuga
              dolor esse ipsa illum tenetur praesentium itaque fugiat iure
              suscipit modi. Reprehenderit pariatur deserunt est dolore? Tenetur
              pariatur doloribus possimus fugit ea atque et ab, impedit
              doloremque recusandae aut, veritatis ipsum eligendi officiis.
              Maxime illo praesentium accusamus natus.
            </div>
          </div>
          {/* car features*/}
          {/* <div className='sm:col-span-2 lg:col-span-3 w-full space-y-2'>
            <h1 htmlFor='' className='text-xs lg:text-sm'>
              Car Features
            </h1>
            <div className='flex flex-col justify-start items-start sm:w-1/2 space-y-4 lg:space-y-6 '>
              {checklistdata.map((item, index) => {
                return (
                  <div key={index} className='space-x-4 lg:space-x-6'>
                    <input
                      type='checkbox'
                      name=''
                      id=''
                      defaultChecked={item?.status}
                      className='accent-white scale-175 lg:scale-200'
                    />
                    <button
                      className={
                        'text-xl  lg:text-2xl underline text-blue-600 cursor-pointer'
                      }
                    >
                      {item?.name}
                    </button>
                  </div>
                )
              })}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default generaldetails
