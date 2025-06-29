import React from 'react'
import { assets, dummyTestimonial } from '../../assets/assets'

const TestimonialsSection = () => {
  return (
    <div className='pb-14 px-8 md:mx-0'>
      <h2 className='text-3xl font-medium text-gray-800'>Testimonials</h2>
      <p className='md:text-base text-gray-500 mt-3'>
        Hear what our students say about our courses. <br />
        Their success stories inspire us to keep providing the best learning experience.
      </p>

      {/* Horizontal scroll container */}
      <div className='flex gap-4 mt-6 overflow-x-auto pb-4'>
        {dummyTestimonial.map((testimonial, index) => (
          <div
            key={index}
            className='min-w-[250px] max-w-[300px] text-sm text-left border border-gray-300
            rounded-lg bg-white shadow-md overflow-hidden flex-shrink-0'
          >
            <div className='flex items-center gap-4 px-4 py-3 bg-gray-100'>
              <img className='h-10 w-10 rounded-full' src={testimonial.image} alt={testimonial.name} />
              <div>
                <h1 className='text-sm font-semibold text-gray-800'>{testimonial.name}</h1>
                <p className='text-gray-600 text-xs'>{testimonial.role}</p>
              </div>
            </div>
            <div className='px-4 pt-2 pb-4'>
              <div className='flex gap-0.5 mb-2'>
                {[...Array(5)].map((_, i) => (
                  <img
                    className='h-4'
                    key={i}
                    src={i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank}
                    alt='star'
                  />
                ))}
              </div>
              <p className='text-gray-500 text-xs line-clamp-3'>{testimonial.feedback}</p>
              <a href='#' className='text-blue-500 underline text-xs mt-2 inline-block'>Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TestimonialsSection
