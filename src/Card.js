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



export default function BasicCard() {
  return (
    <Box
      component="ul"
      sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
    >
      <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
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
          control={<Checkbox />}
          label="colour"
          labelPlacement="start"
        />
        <FormControlLabel
          value="greyscale"
          control={<Checkbox />}
          label="greyscale"
          labelPlacement="start"
        />
        <FormControlLabel
          value="black and white"
          control={<Checkbox />}
          label="black and white"
          labelPlacement="start"
        />
      </FormGroup>
    </FormControl>
        </CardActions>
      </Card>

      <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
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
          control={<Checkbox />}
          label="Aesthetics"
          labelPlacement="start"
        />
        <FormControlLabel
          value="Data Visualisation"
          control={<Checkbox />}
          label="Data Visualisation"
          labelPlacement="start"
        />
        <FormControlLabel
          value="n/a- colour not used"
          control={<Checkbox />}
          label="n/a- colour not used"
          labelPlacement="start"
        />
      </FormGroup>
    </FormControl>
        </CardActions>
      </Card>

      <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
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
          control={<Checkbox />}
          label="Yes"
          labelPlacement="start"
        />
        <FormControlLabel
          value="No"
          control={<Checkbox />}
          label="No"
          labelPlacement="start"
        />
        <FormControlLabel
          value="not sure"
          control={<Checkbox />}
          label="not sure"
          labelPlacement="start"
        />
      </FormGroup>
    </FormControl>
        </CardActions>
      </Card>

      <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
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
          value="Under 100"
          control={<Checkbox />}
          label="Under 100"
          labelPlacement="start"
        />
        <TextField id="filled-basic" label="How Many?" variant="filled" />
        <FormControlLabel
          value="10+"
          control={<Checkbox />}
          label="10+"
          labelPlacement="start"
        />
        <FormControlLabel
          value="not sure"
          control={<Checkbox />}
          label="not sure"
          labelPlacement="start"
        />
      </FormGroup>
    </FormControl>
        </CardActions>
      </Card>

      <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
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
          control={<Checkbox />}
          label="Categorical"
          labelPlacement="start"
        />
        <FormControlLabel
          value="Continuous"
          control={<Checkbox />}
          label="Continuous"
          labelPlacement="start"
        />
        <FormControlLabel
          value="not sure"
          control={<Checkbox />}
          label="not sure"
          labelPlacement="start"
        />
      </FormGroup>
    </FormControl>
        </CardActions>
      </Card>

      <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
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
          control={<Checkbox />}
          label="1"
          labelPlacement="start"
        />
        <FormControlLabel
          value="2"
          control={<Checkbox />}
          label="2"
          labelPlacement="start"
        />
        <FormControlLabel
          value="3"
          control={<Checkbox />}
          label="3"
          labelPlacement="start"
        />
                <FormControlLabel
          value="4"
          control={<Checkbox />}
          label="4"
          labelPlacement="start"
        />
                <FormControlLabel
          value="5"
          control={<Checkbox />}
          label="5"
          labelPlacement="start"
        />
                <FormControlLabel
          value="not sure"
          control={<Checkbox />}
          label="not sure"
          labelPlacement="start"
        />
      </FormGroup>
    </FormControl>
        </CardActions>
      </Card>

    </Box>
  );
}

