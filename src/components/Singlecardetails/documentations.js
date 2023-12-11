import React, { useState } from 'react'
import Iframe from 'react-iframe'
import { AiOutlineFilePdf, AiOutlineClose } from 'react-icons/ai'
import { MdOutlineInsertPhoto, MdCancel } from 'react-icons/md'
function Documentations({ cardata }) {
  const [viewer, setviewer] = useState(false)
  const [fileurl, setFileurl] = useState(null)
  const handleviewer = (url) => {
    setviewer(true)
    setFileurl(url)
  }
  return (
    <>
      <section>
        {!viewer ? (
          <div className='bg-white rounded-md px-4 py-6 md:py-8 shadow-md'>
            {/* car photos */}
            <div className='space-y-6 '>
              <h1 className='font-bold text-sm sm:text-base   md:text-lg lg:text-xl border-b pb-2  '>
                Car Documentations
              </h1>
              {/* group */}
              <div className='w-full flex flex-col  gap-5  lg:gap-7 '>
                {cardata?.car_documents?.map((item, index) => {
                  return (
                    <div key={index}>
                      <div
                        onClick={() => handleviewer(item?.url)}
                        className='flex items-center gap-2 cursor-pointer'
                      >
                        <div>
                          {item?.name.endsWith('pdf') ? (
                            <AiOutlineFilePdf />
                          ) : (
                            <MdOutlineInsertPhoto />
                          )}
                        </div>

                        <h1>{item?.name}</h1>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className='bg-softpurple rounded-md px-4 py-2 md:py-2 shadow-md min-h-[60vh] space-y-4'>
            <div className='flex justify-end '>
              <MdCancel
                onClick={() => setviewer(!viewer)}
                className='text-xl lg:text-2xl'
              />
            </div>

            <div>
              <Iframe
                url={fileurl}
                width='100%'
                height='100%'
                id=''
                className='h-[50vh]'
                display='block'
                position='relative'
                allowFullScreen={true}
              />
            </div>
          </div>
        )}
      </section>
    </>
  )
}

export default Documentations
