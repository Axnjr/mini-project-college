import styled from 'styled-components';

export const RecogAppWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  padding-top: 100px;
  /* min-height: calc(100vh - 200px); */
  h1, h2, h3 {
    text-align: center;
  }

  .appHeader {
    font-size: 100px;
    margin-top: 0px;
    margin-bottom: 20px;
    color: #FFF01F;
    text-transform: uppercase;
  }

  .imageUploadWrapper {
    margin: 20px 0px;
    text-align: center;
  }

  .imageUploadInput {
    margin: auto;
    display: block;
  }

  .imageUploadPreview {
    margin-top: 20px;
    max-height: 400px;
    max-width: 400px;
  }

  .predictionList{
    margin: 20px;
  }

  .predictionItem {
  }
  .firstPrediction {
    color: red;
  }

  .us{
    font-size:1.25rem;
    font-weight:bold;
    letter-spacing:.5px;
  }

  .heading {
    font-size: 3rem;
    letter-spacing: 0px;
    font-weight: bold;
    -webkit-text-stroke-width: 0.5px;
    line-height:0.5;
  }

  .button {
    background-color: white;
    color: black;
    padding-inline: 15px;
    padding-block: 2px;
    margin-inline:0.5rem;
    font-size:1rem;
  }
  
  .button:hover{
    background-color: #d2e823;
    border: 2px solid black;
    color: black;
  }

`;

export default RecogAppWrapper;
