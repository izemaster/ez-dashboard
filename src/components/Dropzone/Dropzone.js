import React, { Component } from 'react'
import './Dropzone.css'
import {Button} from 'reactstrap'
import cloud_upload from '../../assets/images/cloud_upload-24px.svg'

class Dropzone extends Component {
  constructor(props) {
    super(props);
    this.fileInputRef = React.createRef();
    this.state = {hightlight : false}

  }

  openFileDialog = () => {
    if (this.props.disabled) return;
    this.fileInputRef.current.click();
  }

  onFilesAdded = (evt) => {
    if (this.props.disabled) return;
    console.log(evt.target.files);
    //fileUpload(evt.target.files)
    //const files = evt.target.files;

  }
  fileUpload = (file) => {
    console.log(file)
    let formData = new FormData();
    formData.append('file_upload',file);
    fetch('http://dennis.cesti.de/api/v1/file_asset', { // Your POST endpoint
      method: 'POST',
      body: formData // This is your file object
    }).then(
      response => response.json() // if the response is a JSON object
    ).then(
      success => {
        console.log(success)
        this.createAsset(success);
      } // Handle the success response object

    ).catch(
      error => console.log(error) // Handle the error response object
    );
  };
  createAsset = (uri) => {
    let formData = new FormData();
    let jsonData = {
              "is_enabled": 1,
              "mimetype": "image",
              "end_date": "2020-01-05T01:08:26.492Z",
              "is_active": 1,
              "duration": "12",
              "is_processing": 0,
              "asset_id": "12345",
              "name": "JoshuaSeLaCome",
              "nocache": 0,
              "uri": uri,
              "skip_asset_check": 0,
              "play_order": 0,
              "start_date": "2020-01-03T01:08:26.492Z"
            }

    formData.append('asset_id',12345);
    formData.append('model',JSON.stringify(jsonData));
    fetch('http://dennis.cesti.de/api/v1.1/assets', {
      mode : 'cors',
      method : 'POST',
      body : formData
    }).then(
      response => response.json()
    ).then(
      success => console.log(success)
    ).catch(
      error => console.log(error)
    );

  }
  onDragOver = (evt) => {
    evt.preventDefault();

    if (this.props.disabled) return;

    this.setState({ hightlight: true });
  }

  onDragLeave = () => {
    this.setState({ hightlight: false });
  }

  onDrop = (event) => {
    event.preventDefault();

    if (this.props.disabled) return;
    const files = event.dataTransfer.files;
    this.fileUpload(files[0])
    this.setState({ hightlight: false });
  }



  render() {
    return (
      <div className={`Dropzone ${this.state.hightlight ? "Highlight" : ""}`}
        onDragOver={this.onDragOver}
        onDragLeave={this.onDragLeave}
        onDrop={this.onDrop}
        >
        <img
          alt="upload"
          className="Icon"
          src={cloud_upload}
        />

        <input
          ref={this.fileInputRef}
          className="FileInput"
          type="file"
          onChange={this.onFilesAdded}
        />
        <span>ARRASTRA Y SUELTA</span>
        <span>-O-</span>
        <Button
        color="primary" onClick={this.openFileDialog}
        style={{ cursor: this.props.disabled ? "default" : "pointer" }}>
        <i className="fa fa-cloud-upload"></i>&nbsp;&nbsp;&nbsp;Subir archivos</Button>{' '}
      </div>
    );
  }
}

export default Dropzone;
