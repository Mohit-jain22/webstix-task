import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Button from '../layout/Button';
import Webstix from '../layout/Webstix';
import classes from './Include.module.css'

const includes = [
    {
      id: 'i1',
      title: 'Fast Loading Time',
      imagelink: 'https://www.ccb-holdings.com/wp-content/uploads/2021/10/EMAIL-MARKETING-1.png',
    },
    {
        id: 'i2',
        title: 'Search Engine Optimization',
        imagelink: 'https://www.ccb-holdings.com/wp-content/uploads/2021/10/MARKET-RESEARCH-1.png',
    },
    {
        id: 'i3',
        title: 'Full Support',
        imagelink: 'https://www.ccb-holdings.com/wp-content/uploads/2021/10/SEO-CONTEST-1.png',
    },
    {
        id: 'i4',
        title: 'Website Upgrades',
        imagelink: 'https://www.ccb-holdings.com/wp-content/uploads/2021/10/SOCIAL-MEDIA-MARKETING-1.png',
    },
    {
        id: 'i5',
        title: 'Website Security',
        imagelink: 'https://www.ccb-holdings.com/wp-content/uploads/2021/10/CONTENT-MARKETING-1.png',
    },
  
  ];
export default function Include() {
    const includeslist = includes.map((include) => 
        <Webstix key={include.id} id={include.id} title={include.title} imagelink={include.imagelink} ></Webstix>
    );
  return (
    <div className={classes.includes}>
    <Container>
        <h2>Every Webstix Website Includes:</h2>
        <Row>
            {includeslist}
        </Row>
        <Button title="Get Started" link="#" />
    </Container>
</div>
  )
}
