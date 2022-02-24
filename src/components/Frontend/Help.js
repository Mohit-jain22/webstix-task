import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Button from '../layout/Button';
import Services from '../layout/Services';
import classes from './Help.module.css'
const services = [
    {
      id: 's1',
      title: 'Website Development',
      imagelink: 'https://www.ccb-holdings.com/wp-content/uploads/2021/10/EMAIL-MARKETING-1.png',
    },
    {
        id: 's2',
        title: 'SEO',
        imagelink: 'https://www.ccb-holdings.com/wp-content/uploads/2021/10/MARKET-RESEARCH-1.png',
    },
    {
        id: 's3',
        title: 'Support',
        imagelink: 'https://www.ccb-holdings.com/wp-content/uploads/2021/10/SEO-CONTEST-1.png',
    },
    {
        id: 's4',
        title: 'PPC',
        imagelink: 'https://www.ccb-holdings.com/wp-content/uploads/2021/10/SOCIAL-MEDIA-MARKETING-1.png',
    },
    {
        id: 's5',
        title: 'eCommerce Development',
        imagelink: 'https://www.ccb-holdings.com/wp-content/uploads/2021/10/VIDEO-MARKETING-1.png',
    },
    {
        id: 's6',
        title: 'Website Marketing',
        imagelink: 'https://www.ccb-holdings.com/wp-content/uploads/2021/10/CONTENT-MARKETING-1.png',
    },
    {
        id: 's7',
        title: 'Responsive Web Design',
        imagelink: 'https://www.ccb-holdings.com/wp-content/uploads/2021/10/CREATIVE-CAMPAIGNS-1.png',
    },
    {
        id: 's8',
        title: 'UX/UI Design',
        imagelink: 'https://www.ccb-holdings.com/wp-content/uploads/2021/10/CUSTOM-CODING-1.png',
    },
      
  ];
export default function Help() {
    const serviceslist = services.map((service) => 
        <Services key={service.id} id={service.id} title={service.title} imagelink={service.imagelink} ></Services>
    );
  return (
    <div className={classes.help}>
        <Container>
            <h2>How We Can Best Help You</h2>
            <p>Our web development services will help you build a stronger company structure</p>
            <Row>
                {serviceslist}
            </Row>
            <Button title="View All Services" link="#" />
        </Container>
    </div>
  )
}
