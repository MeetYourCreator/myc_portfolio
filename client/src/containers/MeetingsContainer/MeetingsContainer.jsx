import React, { useState, useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import {
  getAllMeetings
} from "../../services/meetings.js"
import {
  getAllReviews,
  postReview,
  updateReview,
  destroyReview
} from "../../services/reviews.js"
import Meetings from "../../screens/Meetings/Meetings.jsx"
import MeetingDetail from "../../screens/MeetingDetail/MeetingDetail.jsx"

export default function MeetingsContainer() {
  const [page, setPage] = useState(0)
  const [reviews, setReviews] = useState([])
  const [allMeetings, setAllMeetings] = useState([])
  // const [oneMeeting, setOneMeeting] = useState('')

  useEffect(() => {
    fetchMeetings()
  }, [])

  const history = useHistory()

  const fetchMeetings = async () => {
    const meetings = await getAllMeetings()
    setAllMeetings(meetings)
  }

  const fetchReviews = async (id) => {
    const review = await getAllReviews(id)
    setReviews(review)
  }

  const createReview = async (formData, id) => {
    const review = await postReview(formData, id)
    setReviews(prevState => [...prevState, review])
    // history.push(`/meeting-detail/:id`)
   }

  //Delete and Edit Buttons still need functionality 9-26-2020
  //Delete Review
  const deleteReview = async (meeting_id) => {
    const review = await destroyReview(meeting_id)
    setReviews(review)
  }

  //Update Review
  const editReview = async (id, formData) => {
    const review = await updateReview(id, formData)
    setReviews(prevState => [...prevState, review])
  }

  return (
    <>
      <Switch>
        <Route path="/meetings-cma">
          <Meetings
            allMeetings={allMeetings}
            filterFn={(meeting) =>
              meeting.category.name === "CMA - Crystal Meth Anonymous"
            }
          />
        </Route>

        <Route path="/meetings-na">
          <Meetings
            allMeetings={allMeetings}
            filterFn={(meeting) =>
              meeting.category.name === "NA - Narcotics Anonymous"
            }
          />
        </Route>
        <Route path="/meetings-aa">
          <Meetings
            allMeetings={allMeetings}
            filterFn={(meeting) =>
              meeting.category.name === "AA - Alcoholics Anonymous"
            }
          />
        </Route>
        <Route path="/meetings-al">
          <Meetings
            allMeetings={allMeetings}
            filterFn={(meeting) => meeting.category.name === "AL - Al-Anon"}
          />
        </Route>

        <Route path='/meeting-detail/:id'>
          <MeetingDetail
            fetchReviews={fetchReviews}
            reviews={reviews}
            createReview={createReview}
            deleteReview={deleteReview}
            editReview={editReview}
            allMeetings={allMeetings}
          />
        </Route>
        <Route path="/">
          <Meetings allMeetings={allMeetings} filterFn={(meeting) => meeting} />
        </Route>
      </Switch>
    </>
  )
}
