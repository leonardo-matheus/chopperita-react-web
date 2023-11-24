import React, { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";

interface ProductImageProps {
  onImageCapture: (imageSrc: string) => void;
}

const ProductImage: React.FC<ProductImageProps> = ({ onImageCapture }) => {
  const webcamRef = useRef<Webcam | null>(null);
  const [capturing, setCapturing] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const displaySize = 270;
  const uploadSize = 1000;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (webcamRef.current) {
        // Set the webcam size for capturing
        webcamRef.current.video.width = displaySize;
        webcamRef.current.video.height = displaySize;
      }
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  const capture = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setCapturing(true);
      setCapturedImage(imageSrc);
      onImageCapture(imageSrc);
    }
  };

  const recapture = () => {
    setCapturing(false);
    setCapturedImage(null);
  };

  const containerStyle: React.CSSProperties = {
    position: "relative",
    width: `${displaySize}px`,
    height: `${displaySize}px`,
    overflow: "hidden",
    borderRadius: "10px",
    margin: "40px 30px", // Adicionado para centralizar e dar margens laterais de 10px
  };

  const webcamStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover", // Adicionado para garantir que a imagem cubra todo o container sem distorções
  };

  const buttonContainerStyle: React.CSSProperties = {
    textAlign: "center",
    marginTop: "16px",
    marginLeft: "30px",
  };

  const buttonStyle: React.CSSProperties = {
    width: "100%",
  };

  return (
    <MDBox maxWidth={300}>
      <MDBox style={containerStyle}>
        {capturing ? (
          <MDBox style={webcamStyle}>
            {capturedImage && <img src={capturedImage} alt="Captured" style={{ width: "100%" }} />}
          </MDBox>
        ) : (
          <Webcam
            audio={false}
            screenshotFormat="image/jpeg"
            ref={(webcam) => (webcamRef.current = webcam)}
            videoConstraints={{ facingMode: "user", width: displaySize, height: displaySize }}
            style={webcamStyle}
          />
        )}
      </MDBox>
      <MDBox style={buttonContainerStyle}>
        {!capturing && (
          <MDButton onClick={capture} variant="contained" style={buttonStyle}>
            Tirar Foto
          </MDButton>
        )}
        {capturing && (
          <MDButton onClick={recapture} variant="contained" style={buttonStyle}>
            Tirar Outra
          </MDButton>
        )}
      </MDBox>
    </MDBox>
  );
};

export default ProductImage;
