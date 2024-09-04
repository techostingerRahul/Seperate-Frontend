import React from "react";
import "./assets/Registrationfour.css";
import Registeril from "./assets/Register_illustration.svg";
import ImageUploading from 'react-images-uploading';
import { FaTrashAlt, FaEdit, FaTrash } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";

const RegistrationFour = ({submitAndRedirect,skip}) => {
    const navigate = useNavigate()
    const [images, setImages] = React.useState([]);
    const maxNumber = 4;

    const onChange = (imageList, addUpdateIndex) => {
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        submitAndRedirect()
        // localStorage.setItem('isBasicRegistrationCompleted', true);
        // const imagePaths = images.map(image => image.data_url);

        // try {
        //     const response = await fetch('your-backend-endpoint', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({ images: imagePaths }),
        //     });

        //     if (response.ok) {
        //         console.log('Images uploaded successfully');
        //     } else {
        //         console.error('Image upload failed');
        //     }
        // } catch (error) {
        //     console.error('Error uploading images:', error);
        // }
    };

    return (
        <div className="registration-containerfour">
            <div className="content-wrapperfour">
                <div className="image-sectionfour">
                    <img
                        src={Registeril}
                        alt="Wedding Illustration"
                        className="wedding-imagefour"
                    />
                </div>
                <div className="form-section-container">
                    <div className="register-title-container">
                        <h1 className="register-title">Register</h1>
                    </div>
                    <form className="form-sectionfour" onSubmit={handleSubmit}>
                        <p className="stepfour">Step 4/4</p>
                        <p className="upload-text">Add the best photos of you</p>
                        <div className="upload-containerfour">
                            <ImageUploading
                                multiple
                                value={images}
                                onChange={onChange}
                                maxNumber={maxNumber}
                                dataURLKey="data_url"
                            >
                                {({
                                    imageList,
                                    onImageUpload,
                                    onImageRemoveAll,
                                    onImageUpdate,
                                    onImageRemove,
                                    isDragging,
                                    dragProps,
                                }) => (
                                    <div className="upload-wrapperfour">
                                        <div className="image-gridfour">
                                            {imageList.map((image, index) => (
                                                <div key={index} className="image-itemfour">
                                                    <img src={image['data_url']} alt="" />
                                                    <div className="image-item__btn-wrapper">
                                                        <FaEdit
                                                            className="icon"
                                                            onClick={() => onImageUpdate(index)}
                                                            title="Edit Image"
                                                        />
                                                        <FaTrash
                                                            className="icon"
                                                            onClick={() => onImageRemove(index)}
                                                            title="Remove Image"
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                            {imageList.length < 4 && (
                                                <div
                                                    className={`image-itemfour upload-placeholder ${isDragging ? 'dragging' : ''}`}
                                                    onClick={onImageUpload}
                                                    {...dragProps}
                                                >
                                                    <span className="plus-icon">+</span>
                                                </div>
                                            )}
                                        </div>
                                        {imageList.length > 0 && (
                                            <div className="remove-all-wrapper">
                                                <FaTrashAlt
                                                    className="remove-all-icon"
                                                    onClick={onImageRemoveAll}
                                                    title="Remove All Images"
                                                />
                                            </div>
                                        )}
                                    </div>
                                )}
                            </ImageUploading>
                        </div>
                        <p style={{ display: 'flex', justifyContent: "flex-end", color: '#ab1d79', fontWeight: "bold" }}> at least 2 photos</p>
                        <button type="submit" className="submit-buttonfour">
                            Next
                        </button>
                        <button onClick={skip}>
                            <p className="skip-button">Skip for now</p>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegistrationFour;
