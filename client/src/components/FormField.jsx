import React from 'react'

const FormField = ({LabelName ,type ,name,placeholder,value,handleChange,isSurpriseMe, handleSurpriseMe}) => {
  return (
    <div>
      <div
      className="flex items-center gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-lg font-medium text-grey-900">
            {LabelName}
        </label>
        {isSurpriseMe && (
          <button
          type="button"
          onClick={handleSurpriseMe}
          className="font-bold text-xs bg-[#DC143C] 
          py-2 px-3 rounded-[6px] text-[#f9fafe]">Surprise Me</button>
        )}     
    </div>
    <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          required
          className="bg-gray-50  border border-gray-300 text-gray-900
          text-sm rounded-lg focus:ring-[black] focus:border-[black] outline-none block w-full p-3 "
          >
          </input>


    </div>
  )
}

export default FormField