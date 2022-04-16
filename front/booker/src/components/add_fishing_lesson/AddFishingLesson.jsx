import { Button, TextField, styled } from "@mui/material"
import BasicDateRangePicker from "./BasicDateRangePicker"
import NestedList from "./FishingEquipment"
import FormattedInputs from "./NumberInput"
import FormDialog from "./AdditionalServices"
import UploadButtons from "./UploadImages"


const AddFishingLesson = () => {
  return (
    <div>
        <h1>Add a new fishing lesson</h1>
        <div className="add-service-container">
            <div className="service-name">
                <TextField
                    required
                    fullWidth
                    placeholder="Service name"
                    label="Service name"
                ></TextField>
            </div>

            <div className="address">
                <TextField
                    required
                    fullWidth
                    placeholder="Address"
                    label="Address"
                ></TextField>
            </div>

            <div className="service-description">
                <TextField
                    required
                    fullWidth
                    placeholder="Description"
                    label="Description"
                    multiline
                    rows={2}
                ></TextField>
            </div>

            <div className="num-attendants">
                
            </div>

            <div className="rules">
                <TextField
                    required
                    fullWidth
                    placeholder="Rules of conduct"
                    label="Rules of conduct"
                    multiline
                    rows={2}
                ></TextField>
            </div>

            <div className="discount-period">
                <BasicDateRangePicker>

                </BasicDateRangePicker>
            </div>

            <div className="fishing-equipment">
                <NestedList></NestedList>
            </div>

            <div className="max-num-attendants">
                <FormattedInputs></FormattedInputs>
            </div>

            <div className="price">
                <TextField
                    required
                    fullWidth
                    placeholder="Lesson price"
                    label="Lesson price"
                ></TextField>
            </div>

            <div className="cancellation-fee">
                <TextField
                    required
                    fullWidth
                    placeholder="Cancellation fee"
                    label="Cancellation fee"
                ></TextField>
            </div>

            <div className="additional-services">
                <FormDialog>

                </FormDialog>
            </div>

            <div className="images">
                <UploadButtons></UploadButtons>
            </div>

            <div className='cancel-button'>
                <Button variant='contained' component="span" color='error' size='large'>Cancel</Button>
            </div>

            <div className='submit-button'>
                <Button variant='contained' component="span" color='success' size='large'>Submit</Button>
            </div>

        </div>
    </div>
  )
}

export default AddFishingLesson