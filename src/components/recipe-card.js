import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { pink } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 545,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: pink[500],
  },
}));

const RecipeCard = (props) => {
  const classes = useStyles();

  return props.source ? (
    <>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <Button variant="contained" color="secondary"> Edit </Button>
          }
          title={props.title}
          subheader={props.source}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Ingredients
            {props.ingredients.map((ing) => (
              <>
                <Typography variant="body2" color="textSecondary" component="p">
                  {ing.ingredient}, {ing.quantity}
                </Typography>
              </>
            ))}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Directions
            {props.instructions.map((inst) => (
              <>
                <Typography variant="h5" component="h2">
                  {inst.step} 
                </Typography>
                <Typography variant="body1" component="h3">
                  {inst.time}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {inst.directions}
                </Typography>
              </>
            ))}
          </Typography>
        </CardContent>
      </Card>
    </>
  ):(
    <>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.title}
      />
      <CardMedia
        className={classes.media}
        image=""
        title="Paella dish"
      />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          aria-label="show more"
        >
        </IconButton>
      </CardActions>
    </Card>
  </>
  )
}

export default RecipeCard;