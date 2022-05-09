import React, { Component } from 'react';
import { Button } from '@mui/material';
 
export class ImageUploadPreviewComponent extends Component {

    fileObj = [];
    fileArray = [];

    constructor(props) {
        super(props)
        this.state = {
            file: [null]
        }
        this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
        this.uploadFiles = this.uploadFiles.bind(this)
    }

    uploadMultipleFiles(e) {
        this.fileObj.push(e.target.files)
        for (let i = 0; i < this.fileObj[0].length; i++) {
            this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
        }
        this.setState({ file: this.fileArray })
        this.props.handleChange('images');
    }
 
    uploadFiles(e) {
        e.preventDefault()
        console.log(this.state.file)
    }
 
    render() {  //probati sa key = index kod .map funkcije
        return (
            <form>
                <div defaultValue={this.props.images} onChange={this.props.uploadMultipleFiles} 
                className="form-group multi-preview">
                    {(this.fileArray || []).map(url => (
                        <img width="60" height="30" src={url} alt="" key={url} />
                    ))}
                </div>
                <div>
                  <label>Upload images</label>
                </div>
                <br></br>
                <div className="form-group">
                    <label class="custom-file-upload">
                      <input variant="outlined" 
                      color='primary' type="file" className="form-control" onChange= {this.props.handleChange('images')} multiple />
                    </label>
                </div>
            </form >
        )
    }
}

export default ImageUploadPreviewComponent;