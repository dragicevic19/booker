import React from 'react'
import DeletableChips from './AdditionalService'

const ShowAdditionalServices = ({ additionalServices, onDelete, onClick, handleChange, values }) => {
  return (
    <>
        {additionalServices.map(     (additionalService, index) => (
        <DeletableChips key={index} additionalService={additionalService}
        onDelete={onDelete} onClick={onClick} handleChange={handleChange} values={values}></DeletableChips>
        ))}
    </>
  )
}

export default ShowAdditionalServices