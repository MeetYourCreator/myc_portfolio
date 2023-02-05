import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  layout: {
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgb(0,0,0)',
    overflowX: 'hidden',
    overflowY: 'auto',
  },

  header: {
    display: 'flex',
    flexDirection: 'column',
  },

  layoutChildren: {

  },

  // '@media (max-width: 415px)': {
  //   layout: {
  //     display: 'flex',
  //     width: '100%',
  //     padding: 0,
  //     marginTop: 0,
  //   }
  // }

})

export default useStyles;