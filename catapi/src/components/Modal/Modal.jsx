import React, {useState, useRef} from "react";
import styles from "./Modal.module.css";
import { fetchUploadImg } from "@/api/catapi"
import { useDispatch, useSelector } from "react-redux";
import {myStatus} from "@/reducers/searchReducer"

const Modal = ({ toggleModal }) => {

    const[image, setImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [uploadState, setUploadState] = useState(null);
    const fileInput = useRef(null);

    const dispatch = useDispatch();

    const status = useSelector(myStatus);

    const handleFile = file => {
        setImage(file);
        setPreviewUrl(URL.createObjectURL(file));
    }

    const handleOndragOver = e => {
        e.preventDefault();
    }

    const handleOndrop = e => {
        e.preventDefault(); 
        e.stopPropagation(); 
        let imageFile = e.dataTransfer.files[0];
        handleFile(imageFile);
    }

    const handleUpload = (e) => {
        e.preventDefault();
        if (image !== null) {
            // console.log(image, previewUrl);
            // console.log("dispatched photo");
            dispatch(fetchUploadImg({file: image}));
            if (status === "succeeded") {
                setUploadState(true)
            } else if (status === "failed") {
                setUploadState(false)
            }
        }
 
    }

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <button
          className={styles.modalCloseBtn}
          type="button"
          onClick={(e) => {
            e.preventDefault();
            toggleModal(false);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="currentColor"
            className={styles.modalCloseBtnSVG}
          >
            <path
              d="M8.05716 8.99997L0.528564 1.47137L1.47137 0.528564L8.99997 8.05716L16.5286 0.528564L17.4714 1.47137L9.94278 8.99997L17.4714 16.5286L16.5286 17.4714L8.99997 9.94278L1.47137 17.4714L0.528564 16.5286L8.05716 8.99997Z"
              fill="currentColor"
            />
          </svg>
        </button>

        <h1 className={styles.modaltitle}>Upload a .jpg or .png Cat Image</h1>
        <p className={styles.modalDescription}>
          Any uploads must comply with the{" "}
          <span className={styles.modalTextHighLight}>
            <a href="#" target="_blank">
              upload guidelines
            </a>{" "}
          </span>
          or face deletion.
        </p>

              
              <div className={styles.modalImgSelect} onDragOver={handleOndragOver}
                onDrop={handleOndrop}
                onClick = { () => fileInput.current.click()}>
                  
{previewUrl !== null ? (<div className="image">
                      <img src={previewUrl} alt='image' className={styles.modalImage} />
            </div>) : (<p className={styles.modalDescription}>
            <span className={styles.modalBoldText}>Drag here </span> your file
            or <span className={styles.modalBoldText}>Click here</span> to
            upload
          </p>)}

                
                <input 
           type="file" 
           accept='image/*' 
           ref={fileInput} hidden 
           onChange={e => handleFile(e.target.files[0])}
          />
            </div>
                 
{previewUrl !== null ? (<><p className={`${styles.modalDescription} ${styles.modalFooterText}`}>
          Image File Name: {image?.name}
        </p>
              <button type="button" className={styles.modalUploadBtn} onClick={(e) => {handleUpload(e)}}>
          Upload photo
              </button>
              </>) : (<p className={`${styles.modalDescription} ${styles.modalFooterText}`}>
          No file selected
        </p>)}
        
        
              

              {uploadState === true &&
              (<div className={styles.modalLogState}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={`${styles.modalLogSVG} ${styles.successLog}`}
          >
            <path
              d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM10 1.33333C5.21353 1.33333 1.33333 5.21353 1.33333 10C1.33333 14.7865 5.21353 18.6667 10 18.6667C14.7865 18.6667 18.6667 14.7865 18.6667 10C18.6667 5.21353 14.7865 1.33333 10 1.33333ZM15.1872 7.08313L9.42904 14.2809L4.90654 10.5121L5.76012 9.48785L9.23763 12.3858L14.1461 6.2502L15.1872 7.08313Z"
              fill="currentColor"
            />
          </svg>
          <p className={styles.modalLogText}>
            Thanks for the Upload - Cat found!
          </p>
                  </div>)}
        
              {uploadState === false && (<div className={styles.modalLogState}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className={`${styles.modalLogSVG} ${styles.errorLog}`}>
  <path  d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM10 1.33333C5.21353 1.33333 1.33333 5.21353 1.33333 10C1.33333 14.7865 5.21353 18.6667 10 18.6667C14.7865 18.6667 18.6667 14.7865 18.6667 10C18.6667 5.21353 14.7865 1.33333 10 1.33333ZM9.05719 10L5.5286 6.4714L6.4714 5.5286L10 9.05719L13.5286 5.5286L14.4714 6.4714L10.9428 10L14.4714 13.5286L13.5286 14.4714L10 10.9428L6.4714 14.4714L5.5286 13.5286L9.05719 10Z" fill="currentColor"/>
</svg>
          <p className={styles.modalLogText}>
            No Cat found - try a different one
          </p>
        </div> )}

        
      </div>
    </div>
  );
};

export default Modal;
