
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

  export default function ShowcaseCardDemo(){
    const styles = useStyles();
    const gap = { xs: 1, sm: 1.5, lg: 2 }
    return (
      <Grid container spacing={4} justify={'center'}>
        <Grid item xs={12} sm={4} md={3}>
          <Column className={styles.card} p={{ xs: 0.5, sm: 0.75, lg: 1 }} gap={gap}>
            <CardHeader />
            <Item>
              <Box minHeight={200} bgcolor={'#F4F7FA'} borderRadius={8} />
            </Item>
            <BasicProfile />
          </Column>
        </Grid>
        <Grid item xs={12} sm={8} lg={7}>
          <Row className={styles.card} p={{ xs: 0.5, sm: 0.75, lg: 1 }} gap={gap}>
            <Item grow>
              <Box minHeight={200} bgcolor={'#F4F7FA'} borderRadius={8} />
            </Item>
            <Column>
              <CardHeader />
              <BasicProfile position={'bottom'} />
            </Column>
          </Row>
        </Grid>
      </Grid>
    );
  }
  
  const BasicCard = Box => {
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
   