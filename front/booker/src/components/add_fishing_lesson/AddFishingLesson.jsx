import { Button, TextField, styled } from "@mui/material"
import BasicDateRangePicker from "./BasicDateRangePicker"
import NestedList from "./FishingEquipment"
import FormDialog from "./AdditionalServicesDialog"
import ImageUploadPreviewComponent from "./UploadImages" 
import CountrySelect from "./Countries"
import { NumberPicker } from "react-widgets/cjs"
import CurrencyInput from "react-currency-input-field"
import { Label } from "@mui/icons-material"
import DeletableChips from "./AdditionalService"
import { useState, useEffect } from "react"
import ShowAdditionalServices from "./ShowAdditionalServices"


const AddFishingLesson = ({handleChange, uploadMultipleFiles, uploadFiles, fileObj, fileArray, values, validation}) => {

    //Additional services section

    const clickOutput = () => {
      console.log(values.country)
    }

    const [additionalServices, setAdditionalServices] = useState([])

    useEffect(() => {
        const getAdditionalServices = async () => {
          const additionalServicesFromServer = await fetchAdditionalServices()
          setAdditionalServices(additionalServicesFromServer)
        }
    
        getAdditionalServices()
      }, [])

    const addAdditionalService = async (additionalService) => {
        const res = await fetch('http://localhost:5000/additionalServices', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(additionalService),
        })
        
        const data = await res.json()
    
        setAdditionalServices ([...additionalServices, data])
      }

      const fetchAdditionalService = async(id) => {
        const res = await fetch(`http://localhost:5000/additionalServices/${id}`)
        const data = await res.json()
    
        return data
      }

      const fetchAdditionalServices = async() => {
        const res = await fetch('http://localhost:5000/additionalServices')
        const data = await res.json()
    
        return data
      }

      const deleteAdditionalService = async (id) => {
        await fetch(`http://localhost:5000/additionalServices/${id}`, {
          method: 'DELETE'
        })
    
        setAdditionalServices(additionalServices.filter((additionalService) => additionalService.id !== id))
      }

      const additionalServiceDetails = (id) =>{
          console.log(id)
      }

      //Images Section
      const [images, setImages] = useState([])

    useEffect(() => {
        const getImages = async () => {
          const imagesFromServer = await fetchImages()
          setImages(imagesFromServer)
        }
    
        getImages()
      }, [])

    const addImages = async (image) => {
        const res = await fetch('http://localhost:5000/images', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(image),
        })
        
        const data = await res.json()
    
        setImages ([...images, data])
      }

      const fetchImage = async(id) => {
        const res = await fetch(`http://localhost:5000/images/${id}`)
        const data = await res.json()
    
        return data
      }

      const fetchImages = async() => {
        const res = await fetch('http://localhost:5000/images')
        const data = await res.json()
    
        return data
      }

      const deleteImage = async (id) => {
        await fetch(`http://localhost:5000/images/${id}`, {
          method: 'DELETE'
        })
    
        setImages(images.filter((image) => image.id !== id))
      }

  return (
    <div>
        <h1>Add a new fishing lesson</h1>
        <div className="add-service-container">
            <div className="service-name">
                <TextField
                    error={ !validation.nameValid.value && validation.nameValid.enable }
                    helperText={ !validation.nameValid.value && validation.nameValid.enable ? validation.formErrors.name : '' }
                    onChange={handleChange('name')}
                    required
                    fullWidth
                    placeholder="Service name"
                    label="Service name"
                ></TextField>
            </div>

            <div className="country">
                <CountrySelect 
                  handleChange={handleChange}
                  validation={validation}
                  values={values}
                  ></CountrySelect>
            </div>  

            <div className="price">
                <label>Price   </label>
                <CurrencyInput
                    error={ !validation.priceValid.value && validation.priceValid.enable }
                    helperText={ !validation.priceValid.value && validation.priceValid.enable ? validation.formErrors.price : '' }
                    onChangeCapture={handleChange('price')}
                    maxLength={5}
                    prefix="$"
                    allowNegativeValue={false}
                    aria-errormessage="Invalid input"
                    required
                    fullWidth
                    placeholder="Lesson price"
                    label="Lesson price"
                ></CurrencyInput>
            </div>

            <div className="city">
                <TextField
                    error={ !validation.cityValid.value && validation.cityValid.enable }
                    helperText={ !validation.cityValid.value && validation.cityValid.enable ? validation.formErrors.city : '' }
                    onChange={handleChange('city')}
                    required
                    fullWidth
                    placeholder="City"
                    label="City of event"
                ></TextField>
            </div>

            <div className="cancellation-fee">
                <label>Fee                                                  </label>
                <CurrencyInput
                    maxLength={3}
                    onChangeCapture={handleChange('fee')}
                    prefix="$"
                    required
                    allowNegativeValue={false}
                    fullWidth
                    placeholder="Cancellation fee"
                    label="Cancellation fee"
                    
                ></CurrencyInput>
            </div>

            <div className="address">
                <TextField
                    error={ !validation.addressValid.value && validation.addressValid.enable }
                    helperText={ !validation.addressValid.value && validation.addressValid.enable ? validation.formErrors.address : '' }
                    onChange={handleChange('address')}
                    required
                    fullWidth
                    placeholder="Address"
                    label="Address"
                ></TextField>
            </div>

            <div className="service-description">
                <TextField
                    required
                    error={ !validation.descriptionValid.value && validation.descriptionValid.enable }
                    helperText={ !validation.descriptionValid.value && validation.descriptionValid.enable ? validation.formErrors.description : '' }
                    onChange={handleChange('description')}
                    fullWidth
                    placeholder="Description"
                    label="Description"
                    multiline
                    rows={2}
                ></TextField>
            </div>

            <div className="rules">
                <TextField
                    required
                    error={ !validation.rulesValid.value && validation.rulesValid.enable }
                    helperText={ !validation.rulesValid.value && validation.rulesValid.enable ? validation.formErrors.rules : '' }
                    onChange={handleChange('rules')}
                    fullWidth
                    placeholder="Rules of conduct"
                    label="Rules of conduct"
                    multiline
                    rows={2}
                ></TextField>
            </div>

            <div className="max-num-attendants">
                <TextField
                  type={NumberPicker}
                  error={ !validation.maxNumAttendantsValid.value && validation.maxNumAttendantsValid.enable }
                  helperText={ !validation.maxNumAttendantsValid.value && validation.maxNumAttendantsValid.enable ? validation.formErrors.maxNumAttendants : '' }
                  onChange={handleChange('maxNumAttendants')}
                  required
                  fullWidth
                  placeholder="Max num of attendants"
                  label="Max num of attendants"

                ></TextField>
            </div>

            <div className="fishing-equipment">
                <NestedList
                  handleChange={handleChange}
                ></NestedList>
            </div>

            {additionalServices.length < 5 ?(<div className="additional-services">
                <FormDialog onAddAdditionalService={addAdditionalService}>

                </FormDialog>
            </div>) : "Achieved maximum of 5 additional services!"}

            <div className="show-additional-services">
                 <ShowAdditionalServices additionalServices={additionalServices} onDelete={deleteAdditionalService} onClick = {additionalServiceDetails}
                 handleChange={handleChange}
                 values={values}
                 ></ShowAdditionalServices> 
            </div>

            <div className="images">
                <ImageUploadPreviewComponent onAddImage={addImages} values={values} handleChange={handleChange} uploadMultipleFiles={uploadMultipleFiles} uploadFiles={uploadFiles} fileObj={fileObj} fileArray={fileArray}
                ></ImageUploadPreviewComponent>
            </div>

            <div className='cancel-button'>
                <Button variant='contained' component="span" color='error' size='large'>Cancel</Button>
            </div>

            <div className='submit-button'>
                <Button disabled={!validation.formValid} variant='contained' component="span" color='success' size='large'
                onClick={clickOutput}
                >Submit</Button>
            </div>

        </div>
    </div>
  )
}

export default AddFishingLesson