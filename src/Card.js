
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
      component="span"
      s2={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
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
    export default function BasicCard2() {
      return (
        <Card s1={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Is the colour used for aesthetics or data visualisation?
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
          value="n\a"
          control={<Checkbox />}
          label="n\a"
          labelPlacement="start"
        />
      </FormGroup>
    </FormControl>
        </CardActions>
      </Card>
      );
  }