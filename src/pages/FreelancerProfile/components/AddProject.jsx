import React from 'react';
import picture from '../../../assets/images/FreelancerPortfolio/picture.svg'
import { ReactComponent as Arrow } from '../../../assets/images/FreelancerPortfolio/down.svg'
import web from '../../../assets/images/FreelancerPortfolio/web.svg'
import './AddProject.scss'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { projectPost } from 'reduxToolkit/extraReducers';

const AddProject = () => {
    const [inputImages, setinputImages] = useState([]);
    const dispatch = useDispatch();
    const { response } = useSelector(state => state.project);

    const onselectImages = {
        "width": "100%",
        "height": "100%",
        "cursor": "pointer"
    }

    const deleteImage = (index) => {
        const images = [...inputImages]
        images.splice(index, 1)
        setinputImages(images)
    }

    const formSubmit = async (e) => {
        try {
            e.preventDefault()
            const formData = new FormData();
            const { projectTitle, description, tools, link } = e.target

            formData.append("Title", projectTitle.value);
            formData.append("Description", description.value);
            formData.append("Tools", tools.value);
            formData.append("Link", link.value);
            formData.append("ProjectImages", inputImages);

            dispatch(projectPost({ formData }))

            if (response.isSuccess === true) {
                setinputImages([])
                e.target.reset();
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <form className='add_project' onSubmit={formSubmit} >
            <h3 className="add_project_title">
                Add portfolio project
            </h3>
            <div className="add_project_input">
                <label htmlFor='filem' className='add_project_input_label'>
                    Drag and drop or <span>Browser</span>
                </label>
                <input required multiple id='filem' type="file" name='images'
                    accept="image/png, image/jpeg, image/jpg, image/svg, image/webp" onChange={(e) => setinputImages(e.target.files)} />
            </div>
            <ul className="add_project_listimages">
                {
                    [1, 2, 3, 4].map((el, index) => {
                        return (
                            <li key={el} className="add_project_listimages_item">
                                <img src={inputImages[index] ? URL.createObjectURL(inputImages[index]) : picture} alt="good images"
                                    style={inputImages[index] ? onselectImages : null}
                                    onClick={() => inputImages[index] ? deleteImage(index) : null} />
                            </li>
                        )
                    })
                }
            </ul>
            <ul className="add_project_list">
                <li className="add_project_list_item">
                    <h3 className="add_project_list_item_title">Project Title</h3>
                    <input name='projectTitle' required className="add_project_list_item_input" type="text" placeholder='Enter a brief but descriptive title' maxLength={100} />
                </li>
                <li className="add_project_list_item">
                    <h3 className="add_project_list_item_title">Description</h3>
                    <textarea name='description' className="add_project_list_item_input" cols="30" rows="4" placeholder='Describe your project to a buyers' maxLength={1000}></textarea>
                </li>
                <li className="add_project_list_item">
                    <h3 className="add_project_list_item_title">Tools</h3>
                    <div className="add_project_list_item_wrapper">
                        <input name='tools' maxLength={500} required className="add_project_list_item_input" type="text" placeholder='Choose or write the tools that you used' />
                        <div className='add_project_list_item_wrapper_div' ><Arrow className='add_project_list_item_wrapper_div_img' /></div>
                    </div>
                </li>
                <li className="add_project_list_item">
                    <h3 className="add_project_list_item_title">Link</h3>
                    <div className="add_project_list_item_wrapper">
                        <input name='link' required maxLength={100} className="add_project_list_item_input" type="text" placeholder='Provide a link to your project' />
                        <img className='add_project_list_item_wrapper_img' src={web} alt="" />
                    </div>
                </li>
            </ul>
            <div className="freelanceravailable_wrapper">
                <button className='freelanceravailable_wrapper_btn'>Cancel</button>
                <button type='submit' className='freelanceravailable_wrapper_btn1'>Save</button>
            </div>
        </form >
    );
};

export default AddProject;