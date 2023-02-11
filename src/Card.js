import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import CardActions from '@mui/material/CardActions';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import  Radio  from '@mui/material/Radio';
import Button from '@mui/material/Button';



export default function BasicCard() {
  return (
    <Box
      component="ul"
      sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
    >
      <Card variant="outlined" component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
      <CardContent>
          <Typography variant="h5" component="div">
            What is the image type?
          </Typography>
        </CardContent>
        <CardActions>
        <FormControl component="fieldset">
      <FormLabel component="legend">choose 1</FormLabel>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="colour"
          control={<Radio />}
          label="colour"
          labelPlacement="start"
          
        />
        <FormControlLabel
          value="greyscale"
          control={<Radio />}
          label="greyscale"
          labelPlacement="start"
        />
        <FormControlLabel
          value="black and white"
          control={<Radio />}
          label="black and white"
          labelPlacement="start"
        />
      </FormGroup>
    </FormControl>
        </CardActions>
      </Card>

      <Card variant="outlined" component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
      <CardContent>
          <Typography variant="h5" component="div">
            What is the colour used for?
          </Typography>
        </CardContent>
        <CardActions>
        <FormControl component="fieldset">
      <FormLabel component="legend">choose 1</FormLabel>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="Aesthetics"
          control={<Radio />}
          label="Aesthetics"
          labelPlacement="start"
        />
        <FormControlLabel
          value="Data Visualisation"
          control={<Radio />}
          label="Data Visualisation"
          labelPlacement="start"
        />
        <FormControlLabel
          value="n/a- colour not used"
          control={<Radio />}
          label="n/a- colour not used"
          labelPlacement="start"
        />
      </FormGroup>
    </FormControl>
        </CardActions>
      </Card>

      <Card variant="outlined" component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
      <CardContent>
          <Typography variant="h5" component="div">
            Is a colour mapping legend shown?
          </Typography>
        </CardContent>
        <CardActions>
        <FormControl component="fieldset">
      <FormLabel component="legend">choose 1</FormLabel>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="Yes"
          control={<Radio/>}
          label="Yes"
          labelPlacement="start"
        />
        <FormControlLabel
          value="No"
          control={<Radio />}
          label="No"
          labelPlacement="start"
        />
        <FormControlLabel
          value="not sure"
          control={<Radio/>}
          label="not sure"
          labelPlacement="start"
        />
      </FormGroup>
    </FormControl>
        </CardActions>
      </Card>

      <Card variant="outlined" component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
      <CardContent>
          <Typography variant="h5" component="div">
            How many colour are used in the image?
          </Typography>
        </CardContent>
        <CardActions>
        <FormControl component="fieldset">
      <FormLabel component="legend">choose 1</FormLabel>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="Under 10"
          control={<Radio />}
          label="Under 10"
          labelPlacement="start"
        />
        <TextField id="filled-basic" label="How Many?" variant="filled" />
        <FormControlLabel
          value="10+"
          control={<Radio />}
          label="10+"
          labelPlacement="start"
        />
        <FormControlLabel
          value="not sure"
          control={<Radio/>}
          label="not sure"
          labelPlacement="start"
        />
      </FormGroup>
    </FormControl>
        </CardActions>
      </Card>

      <Card variant="outlined" component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
      <CardContent>
          <Typography variant="h5" component="div">
            What kind of colour mapping is used?
          </Typography>
        </CardContent>
        <CardActions>
        <FormControl component="fieldset">
      <FormLabel component="legend">choose 1</FormLabel>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="Categorical"
          control={<Radio />}
          label="Categorical"
          labelPlacement="start"
        />
        <FormControlLabel
          value="Continuous"
          control={<Radio />}
          label="Continuous"
          labelPlacement="start"
        />
        <FormControlLabel
          value="not sure"
          control={<Radio/>}
          label="not sure"
          labelPlacement="start"
        />
      </FormGroup>
    </FormControl>
        </CardActions>
      </Card>

      <Card variant="outlined" component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
      <CardContent>
          <Typography variant="h5" component="div">
            On a scale of 1-5 (1 being easy and 5 being difficult), how difficult do you find answering the questions about the image? 
          </Typography>
        </CardContent>
        <CardActions>
        <FormControl component="fieldset">
      <FormLabel component="legend">choose 1</FormLabel>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="1"
          control={<Radio/>}
          label="1"
          labelPlacement="start"
        />
        <FormControlLabel
          value="2"
          control={<Radio/>}
          label="2"
          labelPlacement="start"
        />
        <FormControlLabel
          value="3"
          control={<Radio/>}
          label="3"
          labelPlacement="start"
        />
                <FormControlLabel
          value="4"
          control={<Radio/>}
          label="4"
          labelPlacement="start"
        />
                <FormControlLabel
          value="5"
          control={<Radio/>}
          label="5"
          labelPlacement="start"
        />
                <FormControlLabel
          value="not sure"
          control={<Radio />}
          label="not sure"
          labelPlacement="start"
        />
      
      </FormGroup>
      <Button variant="raised" color = "blue" >Submit</Button>
    </FormControl>
        </CardActions>
      </Card>

    </Box>
  );
}

