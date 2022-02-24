import React from 'react'
import Footer_links from './Footer_links'
import classes from './Footer_widgets.module.css'
const footers1 = [
    {
      id: 'fl1',
      title: 'Associations',
      link: '#',
    },
    {
        id: 'fl2',
        title: 'B2C',
        link: '#',
    },
    {
        id: 'fl3',
        title: 'Industrial/B2B',
        link: '#',
    },
    {
        id: 'fl4',
        title: 'Manufacturers',
        link: '#',
    },
    {
        id: 'fl5',
        title: 'Testimonials',
        link: '#',
    },
    {
        id: 'fl6',
        title: 'Giving Back',
        link: '#',
    },
    {
        id: 'fl7',
        title: 'Resources Links',
        link: '#',
    },
    {
        id: 'fl8',
        title: 'Map to Webstix',
        link: '#',
    },
  
  ];

  const footers2 = [
    {
      id: 'fl1',
      title: 'Associations2',
      link: '#',
    },
    {
        id: 'fl2',
        title: 'B2C2',
        link: '#',
    },
    {
        id: 'fl3',
        title: 'Industrial/B2B2',
        link: '#',
    },
    {
        id: 'fl4',
        title: 'Manufacturers2',
        link: '#',
    },
    {
        id: 'fl5',
        title: 'Testimonials2',
        link: '#',
    },
    {
        id: 'fl6',
        title: 'Giving Back2',
        link: '#',
    },
    {
        id: 'fl7',
        title: 'Resources Links2',
        link: '#',
    },
    {
        id: 'fl8',
        title: 'Map to Webstix2',
        link: '#',
    },
  
  ];

  const footers3 = [
    {
      id: 'fl1',
      title: 'Associations3',
      link: '#',
    },
    {
        id: 'fl2',
        title: 'B2C3',
        link: '#',
    },
    {
        id: 'fl3',
        title: 'Industrial/B2B3',
        link: '#',
    },
    {
        id: 'fl4',
        title: 'Manufacturers3',
        link: '#',
    },
    {
        id: 'fl5',
        title: 'Testimonials3',
        link: '#',
    },
    {
        id: 'fl6',
        title: 'Giving Back3',
        link: '#',
    },
    {
        id: 'fl7',
        title: 'Resources Links3',
        link: '#',
    },
    {
        id: 'fl8',
        title: 'Map to Webstix3',
        link: '#',
    },
  
  ];
  const footers4 = [
    {
      id: 'fl1',
      title: 'Associations4',
      link: '#',
    },
    {
        id: 'fl2',
        title: 'B2C4',
        link: '#',
    },
    {
        id: 'fl3',
        title: 'Industrial/B2B4',
        link: '#',
    },
    {
        id: 'fl4',
        title: 'Manufacturers4',
        link: '#',
    },
    {
        id: 'fl5',
        title: 'Testimonials4',
        link: '#',
    },
    {
        id: 'fl6',
        title: 'Giving Back4',
        link: '#',
    },
    {
        id: 'fl7',
        title: 'Resources Links4',
        link: '#',
    },
    {
        id: 'fl8',
        title: 'Map to Webstix4',
        link: '#',
    },
  
  ];
  const footers5 = [
    {
      id: 'fl1',
      title: 'Associations5',
      link: '#',
    },
    {
        id: 'fl2',
        title: 'B2C5',
        link: '#',
    },
    {
        id: 'fl3',
        title: 'Industrial/B2B5',
        link: '#',
    },
    {
        id: 'fl4',
        title: 'Manufacturers5',
        link: '#',
    },
    {
        id: 'fl5',
        title: 'Testimonials5',
        link: '#',
    },
    {
        id: 'fl6',
        title: 'Giving Back5',
        link: '#',
    },
    {
        id: 'fl7',
        title: 'Resources Links5',
        link: '#',
    },
    {
        id: 'fl8',
        title: 'Map to Webstix5',
        link: '#',
    },
  
  ];
export default function Footer_widgets() {
    const footerlist1 = footers1.map((footer) => 
        <Footer_links key={footer.id}  title={footer.title} link={footer.link} ></Footer_links>
    );
    const footerlist2 = footers2.map((footer) => 
        <Footer_links key={footer.id}  title={footer.title} link={footer.link} ></Footer_links>
    );
    const footerlist3 = footers3.map((footer) => 
    <Footer_links key={footer.id}  title={footer.title} link={footer.link} ></Footer_links>
    );
    const footerlist4 = footers4.map((footer) => 
    <Footer_links key={footer.id}  title={footer.title} link={footer.link} ></Footer_links>
    );
    const footerlist5 = footers5.map((footer) => 
    <Footer_links key={footer.id}  title={footer.title} link={footer.link} ></Footer_links>
    );
  return (
        <>
            <div className={classes.five}>
                <h6>About Us</h6>
                <ul className={classes.footer_widgets}>
                    {footerlist1}
                </ul>
            </div>
            <div className={classes.five}>
            <h6>Marketing / SEO</h6>
            <ul className={classes.footer_widgets}>
            {footerlist2}
            </ul>
            </div>
            <div className={classes.five}>
            <h6>Services</h6>
            {footerlist3}
            </div>
            <div className={classes.five}>
            <h6>Web Design</h6>
            {footerlist4}
            </div>
            <div className={classes.five}>
            <h6>Support</h6>
            {footerlist5}
        </div>

        </>
  )
}
