import React from 'react'

function Cards(props) {
  console.log('props:',props.userName)
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black mg-4">
      <img
      src="https://cdn.pixabay.com/photo/2017/03/28/11/59/alone-2181885_1280.jpg"
      alt=""
      className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
      />
      <div className="mt-6 mb-2">
        <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
          Title
        </span>
        <h2 className="text-xl font-semibold tracking-wide">{props.userName}</h2>
      </div>
      <p className="text-gray-300">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
        amet
      </p>
      <button type="button" className="px-8 py-3 font-semibold rounded-full dark:bg-gray-100 text-white">{props.btnText || "Button"}→</button>
  </div>
  )
}

export default Cards
