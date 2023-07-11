import { useState } from 'react'

export function Slider() {
  const [current, setcurrent] = useState(0)
  const slide = [
    { id: 1, content: 'Slide 1' },
    { id: 2, content: 'Slide 2' },
    { id: 3, content: 'Slide 3' }
  ]
  const prevSlide = () => {
    setcurrent(current === 0 ? slide.length - 1 : current - 1)
  }

  const nextSlide = () => {
    setcurrent(current === slide.length - 1 ? 0 : current + 1)
  }
  return (
    <div className="slider">
      <button onClick={prevSlide} className="slider__btn slider__btn--prev">
        Prev
      </button>

      <div className="slider__content">
        {slide.map((slide, index) => (
          <div
            key={slide.id}
            className={`slider__slide ${
              index === current ? 'slider__slide--active' : ''
            }`}
          >
            {slide.content}
          </div>
        ))}
      </div>

      <button onClick={nextSlide} className="slider__btn slider__btn--next">
        Next
      </button>
    </div>
  )
}
