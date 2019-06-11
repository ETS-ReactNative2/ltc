import * as React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`
  }
})

function Footer ({ classes }) {
  return (
    <AppBar position='fixed' color='primary' className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton color='inherit' aria-label='Open drawer'>
          <MenuIcon />
        </IconButton>
        <Fab color='secondary' aria-label='Add' className={classes.fabButton}>
          <AddIcon />
        </Fab>
        <div>
          <IconButton color='inherit'>
            <SearchIcon />
          </IconButton>
          <IconButton color='inherit'>
            <MoreIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(styles)(Footer)
