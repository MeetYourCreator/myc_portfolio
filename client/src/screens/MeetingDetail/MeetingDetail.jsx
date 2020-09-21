import React from 'react'
import { createUseStyles } from 'react-jss'

import Meeting from '../../Components/Meeting/Meeting.jsx'

const useStyles = createUseStyles({
  meetingCard: {
    display: "flex",
    flexDirection: "column",
    margin: '0px 100px 0px 100px'
  }
})
export default function MeetingDetail(props) {
  const { allMeetings, filterFn } = props
  
  const classes = useStyles()

  return (
    <>
      <div className={classes.meetingCard}>
        {allMeetings.filter(filterFn).map((meeting) => (
          <Meeting
            key={meeting.id}
            name={meeting.name}
            address1={meeting.address1}
            address2={meeting.address2}
            city={meeting.city}
            state={meeting.state}
            dayOfWeek={meeting.dayOfWeek}
            timeOfDay={meeting.timeOfDay}
            organization={meeting.category.name}
          />
        ))}
      </div>
    </>
  )
}