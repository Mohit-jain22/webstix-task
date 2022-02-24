import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Button from '../layout/Button';
import Services from '../layout/Services';
import classes from './Specialize.module.css'
const specializes = [
    {
      id: 'sp1',
      title: 'Associations',
      imagelink: 'https://www.ccb-holdings.com/wp-content/uploads/2021/10/EMAIL-MARKETING-1.png',
    },
    {
        id: 'sp2',
        title: 'B2C',
        imagelink: 'https://www.ccb-holdings.com/wp-content/uploads/2021/10/MARKET-RESEARCH-1.png',
    },
    {
        id: 'sp3',
        title: 'Industrial/B2B',
        imagelink: 'https://www.ccb-holdings.com/wp-content/uploads/2021/10/SEO-CONTEST-1.png',
    },
    {
        id: 'sp4',
        title: 'Manufacturers',
        imagelink: 'https://www.ccb-holdings.com/wp-content/uploads/2021/10/SOCIAL-MEDIA-MARKETING-1.png',
    },
  
  ];
export default function Specialize() {
    const specializeslist = specializes.map((specialize) => 
        <Services key={specialize.id} id={specialize.id} title={specialize.title} imagelink={specialize.imagelink} ></Services>
    );
  return (
    <div className={classes.specialize}>
        <Container>
            <h2>Industies We Specialize In</h2>
            <p>Our team is specialized in a wide range of industry verticals</p>
            <Row>
                {specializeslist}
            </Row>
            <Button title="View All" link="#" />
        </Container>
    </div>
  )
}
