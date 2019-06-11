import * as React from 'react'

import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import MenuButton from '@material-ui/core/MenuButton'
import { withStyles } from '@material-ui/core/styles'
import ToolBar from '@material-ui/core/ToolBar'
import AddIcon from '@material-ui/icons/Add'
import MenuIcon from '@material-ui/icons/Menu'
import MoreIcon from '@material-ui/icons/MoreVert'
import SearchIcon from '@material-ui/icons/Search'

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
