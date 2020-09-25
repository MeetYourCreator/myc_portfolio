import React, { useState, useEffect } from 'react'
import {useParams } from 'react-router-dom'
import useStyles from './ReviewFormStyles.jsx' 
export default function ReviewForm({
  rows, cols, createReview
}) {
  const [formData, setFormData] = useState({
    title: "",
    userName: "",
    description: "",
    score: "0",
  })

  const { id } = useParams()

  const { title, userName, description, score} = formData

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const classes = useStyles()

  return (
    <>
      <div className={classes.body}>
        <div className={classes.form}>
          <form
            // onSubmit={(e) => {
            //   e.preventDefault()
            //   console.log("onSubmit ReviewForm.jsx 123")
            //   createReview(formData, id)
            // }}
            alt="review-form"
          >
            <label>
              <div className={classes.formHeader}>
                <input
                  type="number"
                  min="0"
                  max="5"
                  className={classes.newScore}
                  name="score"
                  value={score}
                  onChange={handleChange}
                ></input>
                <input
                  type="text"
                  placeholder="Give your review a title."
                  className={classes.title}
                  name="title"
                  value={title}
                  onChange={handleChange}
                  alt="Give your review a title."
                />
                  
                <input
                  type="text"
                  placeholder="Tell people who you are."
                  className={classes.userName}
                  name="userName"
                  value={userName}
                  onChange={handleChange}
                  alt="Tell people who you are."
                />
               
              </div>
              <p>
                <textarea
                  placeholder="Tell people about your experience."
                  rows={rows}
                  cols={cols}
                  className={classes.description}
                  name="description"
                  value={description}
                  onChange={handleChange}
                />
                
      
              </p>
            </label>
            <div className={classes.buttons}>
              <button
                onClick={(e) => {
                  e.preventDefault()
                  console.log("onSubmit ReviewForm.jsx 123")
                  createReview(formData, id)
                }}
                alt="submit-button"
                className={classes.button}
              >
                Submit
              </button>
              <button
                
                alt="submit-button"
                className={classes.button}
              >
                Edit
              </button>
              <button
                
                alt="submit-button"
                className={classes.button}
              >
                Delete
              </button>
              {/* <button alt="edit-button" className={classes.button}>
                Edit
              </button>
              <button alt="delete-button" type={button} name='Delete' className={classes.button}>
              Delete
              </button> */}
            </div>
          </form>
        </div>
      </div>
    </>
  )
}