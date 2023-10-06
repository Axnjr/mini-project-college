import React, { useEffect, useState } from 'react';

import RecogAppWrapper from './index.styled';

// mui
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

import { isMobile } from 'react-device-detect';

// tensorflow imports
import '@tensorflow/tfjs-backend-webgl';
const mobilenet = require('@tensorflow-models/mobilenet');

export default function RecogApp () {
  const [model, setModel] = useState(false);
  const [imageFile, setImageFile] = useState(false);
  const [imagePrediction, setImagePrediction] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFileInput = (event) => {
    setImagePrediction(false);

    if (event.target.files[0]) {
      // converts image to url
      setImageFile(URL.createObjectURL(event.target.files[0]));
    } else {
      setImageFile(false);
    }
  }

  const clearUserInput = (event) => {
    setImagePrediction(false);
    setImageFile(false);

  }

  const handlePrediction = async (event) => {
    // clear previous predictions
    setImagePrediction(false);

    if (imageFile) {

      // run the prediction
      setLoading(true);
      const recogImage = document.getElementById('recogImage');
      const predictions = await model.classify(recogImage);
      setImagePrediction(predictions);
      setLoading(false);
    } else {
      alert('Please upload an image');
    }
  }

  // initialisation of model
  useEffect( () => {
    async function loadModel () {
      const model = await mobilenet.load();
      setModel(model);
    }
    loadModel();
  }, [])

  return (
    <RecogAppWrapper>
    {!model 
      ? <> <CircularProgress /><br />Loading model...</>
      : <>
          <a href='https://en.wikipedia.org/wiki/Prometheus' style={{textDecoration: 'none'}} target="_blank noreferrer">
            <h1 className='appHeader'>Promi</h1>
          </a>
          <div>
            An app that recognises what is contained within a provided image <br />
            <small style={{opacity: 0.75}}>For entertainment purposes only</small> <br /><br />

            Upload an image below to begin <br />
          </div>
          {/* Image section */}
          <div className='imageUploadWrapper'>
            <div className='imageUploadInput'>
              <Button onClick={() => document.getElementById('imageUpload').click()} >Upload</Button>
              {isMobile && <Button onClick={() => document.getElementById('imageCaptureUpload').click()}>Capture</Button>}
              <Button onClick={clearUserInput} color="error">Clear</Button>


              <input id='imageUpload' type='file' accept='image/*' onChange={handleFileInput} style={{display: 'none'}} />
              <input id='imageCaptureUpload' type='file' accept='image/*' capture='camera' onChange={handleFileInput} style={{display: 'none'}} />

            </div>
            { imageFile && <img id='recogImage' className='imageUploadPreview' src={imageFile} alt='Upload be predicted'  />}
          </div>
          {imageFile && <Button variant="contained" onClick={handlePrediction} loading={loading ? 1 : 0}>Classify </Button>}
          {imagePrediction && 
          <div>
            <h2>Predictions</h2>
            <small style={{opacity: 0.75}}>Includes confidence of predictions as a percentage</small>
            <div className='predictionList'>{
              imagePrediction.map((item, key) => {
                return (<h3 className={`predictionItem ${key === 0 && 'firstPrediction'}`} key={key}><span className='predictionLabel' >{item.className}</span>: <span className='predictionProbability' >{Math.round(item.probability * 100)}%</span></h3>);
              })
            }</div>
          </div>
          }
        </>
        }
    </RecogAppWrapper>
  );
}
