import React from 'react'

interface CardProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

const GameCard = ({title, description, buttonText}: CardProps) => {

  return (
    <>
        <div className="hero bg-base-200 w-full h-full rounded-xl">
          <div className="hero-content text-center">
          {/* <div className="hero-content text-center bg-base-200 w-[98%] h-[98%]"> */}
            <div className="max-w-md ">
              <h1 className="text-5xl font-bold">{title || "Title placeholder"}</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                excepturi exercitationem quasi. In deleniti eaque aut repudiandae
                et a id nisi.
              </p>
              <button className="btn btn-primary">{buttonText || "Button placeholder"}</button>
            </div>
          </div>
      </div>
    </>
  );
}

export default GameCard