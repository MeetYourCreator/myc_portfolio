import React, { useState, useEffect } from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  body: {
    backgroundColor: "#FFD1DC",
  },

  form: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    height: 1080,
  },

  formHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    width: 600,
    margin: "auto",
  },

  newTitle: {
    outline: "none",
    fontFamily: "Rubik",
    fontWeight: 800,
    width: 300,
    height: 30,
    backgroundColor: "#F2DBAE",
    borderRadius: 5,
    padding: 10,
    border: "3px solid #BAD0D9",
    marginBottom: 10,
  },

  newUserName: {
    outline: "none",
    width: 300,
    height: 30,
    fontFamily: "Rubik",
    fontWeight: 800,
    backgroundColor: "#F2DBAE",
    padding: 10,
    borderRadius: 5,
    border: "3px solid #BAD0D9",
  },

  newScore: {
    outline: "none",
    width: 50,
    height: 30,
    backgroundColor: "#F2DBAE",
    borderRadius: 5,
    border: "3px solid #BAD0D9",
    marginTop: 20,
    marginBottom: 10,
  },

  newDescription: {
    outline: "none",
    fontFamily: "Rubik",
    fontWeight: 800,
    width: 600,
    height: 600,
    backgroundColor: "#F2DBAE",
    padding: 10,
    margin: "auto",
    borderRadius: 15,
    border: "10px solid #BAD0D9",
  },

  button: {
    outline: "none",
    fontFamily: "Bungee",
    color: "#000000",
    width: 140,
    height: 50,
    border: "1px solid #000000",
    borderRadius: 10,
    backgroundColor: "#F2DABD",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-around",
  },
})
  
export default function ReviewForm({
  rows,
  cols,
  userName,
  title,
  description,
  createReview
}) {
  const [formData, setFormData] = useState({
    newTitle: "",
    newUserName: "",
    newDescription: "",
    scoreValue: "",
  })

  const { newTitle, newUserName, newDescription, newScore} = formData

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
            onSubmit={(e) => {
              e.preventDefault()
              console.log("submitting-review")
              createReview(formData)
            }}
            alt="review-form"
          >
            <label>
              <div className={classes.formHeader}>
                <input
                  type="number"
                  min="0"
                  max="5"
                  className={classes.newScore}
                  name="newScore"
                  value={newScore}
                  onChange={handleChange}
                ></input>
                <input
                  type="text"
                  placeholder="Give your review a title."
                  className={classes.newTitle}
                  name="newTitle"
                  value={newTitle}
                  onChange={handleChange}
                  alt="Give your review a title."
                >
                  {title}
                </input>
                <input
                  type="text"
                  placeholder="Tell people who you are."
                  className={classes.newUserName}
                  name="newUserName"
                  value={newUserName}
                  onChange={handleChange}
                  alt="Tell people who you are."
                >
                  {userName}
                </input>
              </div>
              <p>
                <textarea
                  placeholder="Tell people about your experience."
                  rows={rows}
                  cols={cols}
                  className={classes.newDescription}
                  name="newDescription"
                  value={newDescription}
                  onChange={handleChange}
                >
                  {description}
                </textarea>
              </p>
            </label>
            <div className={classes.buttons}>
              <button
                onClick={handleChange}
                alt="submit-button"
                className={classes.button}
              >
                Submit
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