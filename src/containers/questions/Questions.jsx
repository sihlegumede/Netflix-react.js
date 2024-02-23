import React, {useEffect} from 'react';
import './Questions.css';
import {Header} from '../../containers';

import {Accordion, AccordionSummary, AccordionDetails, Typography} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Questions = () => {
  return (    
    <div className="questions_heading">
      <Header header={"Frequently Asked Questions"}/>

      <div className='offcanvas_accordion'>
      <Accordion className='accordion_accordion'>
        <AccordionSummary  id='panel1-header' aria-controls='panel1-content' expandIcon={<ExpandMoreIcon />}>
          <Typography className='accordion_header'>What is Netflix?</Typography>
        </AccordionSummary>
        <AccordionDetails className='accordion_details'>
          <Typography className='accordion_body'>
          Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
          <br/>
          <br/>
          You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='accordion_accordion'>
      <AccordionSummary id='panel2-header' aria-controls='panel2-content' expandIcon={<ExpandMoreIcon />}>
        <Typography className='accordion_header'>How much does Netflix cost?</Typography>
      </AccordionSummary>
      <AccordionDetails className='accordion_details'>
        <Typography className='accordion_body'>
        Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from R 49 to R 199 a month. No extra costs, no contracts.
        </Typography>
      </AccordionDetails>
      </Accordion>
      <Accordion className='accordion_accordion'>
      <AccordionSummary id='panel3-header' aria-controls='panel3-content' expandIcon={<ExpandMoreIcon />}>
        <Typography className='accordion_header'>Where can I watch?</Typography>
      </AccordionSummary>
      <AccordionDetails className='accordion_details'>
        <Typography className='accordion_body'>
        Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
        <br/>
        <br/>
        You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
        </Typography>
      </AccordionDetails>
      </Accordion>
      <Accordion className='accordion_accordion'>
      <AccordionSummary id='panel4-header' aria-controls='panel4-content' expandIcon={<ExpandMoreIcon />}>
        <Typography className='accordion_header'>How do I cancel?</Typography>
      </AccordionSummary>
      <AccordionDetails className='accordion_details'>
        <Typography className='accordion_body'>
        Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
        </Typography>
      </AccordionDetails>
      </Accordion>
      <Accordion className='accordion_accordion'>
      <AccordionSummary id='panel5-header' aria-controls='panel5-content' expandIcon={<ExpandMoreIcon />}>
        <Typography className='accordion_header'>What can I watch on Netflix?</Typography>
      </AccordionSummary>
      <AccordionDetails className='accordion_details'>
        <Typography className='accordion_body'>
        Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
        </Typography>
      </AccordionDetails>
      </Accordion>
      <Accordion className='accordion_accordion'>
      <AccordionSummary id='panel6-header' aria-controls='panel6-content' expandIcon={<ExpandMoreIcon />}>
        <Typography className='accordion_header'>Is Netflix good for kids?</Typography>
      </AccordionSummary>
      <AccordionDetails className='accordion_details'>
        <Typography className='accordion_body'>
        The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
        <br/>
        <br/>
        Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
        </Typography>
      </AccordionDetails>
      </Accordion>
      </div>
    <p>Ready to watch? Enter your email to create or restart your membership.</p>
      <div className="search_email">
        <input className='search_email-input' placeholder='Email address'/>
        <button type="button" className='search_email-button'>Get Started </button>
      </div>
    </div>
  );
}

export default Questions