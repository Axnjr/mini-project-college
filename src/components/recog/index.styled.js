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
    color: ${props => props.theme.accent};
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
    color: green;
  }
`;

export default RecogAppWrapper;