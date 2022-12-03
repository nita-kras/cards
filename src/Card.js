import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

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
    </Box>
  );
}
































import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  
  export default function BasicCard() {
    return (
      <Card sx={{ minWidth: 275 }}>
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
    );
  }