/**
=========================================================
* Material Kit 2 PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "/components/KitComponents/MK2/MKBox";
import MKTypography from "/components/KitComponents/MK2/MKTypography";
import FaqCollapse from "../components/FaqCollapse";

// HelpCenter page components

function Faq() {
  const [collapse, setCollapse] = useState(false);

  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={6} my={6}>
            <MKTypography variant="h2" align="center" fontWeight="bold" gutterBottom>
              Frequently Asked Questions
            </MKTypography>
            <MKBox mb={2}>
              {/*<MKTypography variant="body2" align="center" color="text">*/}
              {/* Subtext */}
              {/*</MKTypography>*/}
            </MKBox>
          </Grid>
          <Grid item xs={12} md={10}>
            <FaqCollapse
              title="What is the cancellation policy?"
              open={collapse === 1}
              onClick={() => (collapse === 1 ? setCollapse(false) : setCollapse(1))}
            >
              Cancellation policies can vary depending on the season and the specific property, but in general we offer very flexible cancellation
              options with full refunds if the cancellation is made within a certain timeframe prior to the scheduled stay. This is usually between 1-4 weeks before the stay.
              Be sure to read your particular contract's cancellation policy carefully when booking to understand the terms and conditions.
            </FaqCollapse>
            <FaqCollapse
              title="What times are check-in / check-out?"
              open={collapse === 3}
              onClick={() => (collapse === 3 ? setCollapse(false) : setCollapse(3))}
            >
              Check-in time is after 4 pm and check-out time is by 10 am. We do our best to make the
              check-in and check-out process as smooth and convenient as possible for our guests, and we appreciate your cooperation in adhering
              to these times. If you need to make alternative arrangements for check-in or check-out, please let us know in advance and we will do our best to accommodate your needs.
            </FaqCollapse>
            <FaqCollapse
              title="What amenities are included in a luxury villa?"
              open={collapse === 4}
              onClick={() => (collapse === 4 ? setCollapse(false) : setCollapse(4))}
            >
              We offer a variety of amenities to make your stay as comfortable and enjoyable as possible. Some of the amenities that you can expect to find at our rental properties include:
              <br /><br />
              <strong>Air conditioning</strong>: Stay cool and comfortable during those hot summer days.<br /><br />
              <strong>Hot tub</strong>: Relax and unwind in a luxurious hot tub after a long day of exploring.<br /><br />
              <strong>Kitchen</strong>: Prepare your own meals in a fully-equipped kitchen with appliances like a refrigerator, stove, oven, and coffee maker.<br /><br />
              <strong>Pool</strong>: Take a refreshing dip in a pool on a warm day and soak up some sun.<br /><br />
              <strong>TV</strong>: Enjoy your favorite shows and movies on a TV with cable or streaming services like Netflix.<br /><br />
              <strong>Washer/Dryer</strong>: Keep your clothes clean and fresh during your stay with an in-unit washer and dryer.<br /><br />
              <strong>Wifi</strong>: Stay connected with free high-speed wifi internet access.<br /><br />
              <strong>Smoke alarm</strong>: Feel safe and secure with a smoke alarm installed in the rental property.<br /><br />
              <strong>Coffee maker</strong>: Wake up and start your day with a fresh cup of coffee.<br /><br />
              <strong>Refrigerator</strong>: Store your groceries and keep your drinks cold in a refrigerator.<br /><br />
              <strong>BBQ grill</strong>: Host a fun and delicious cookout with a BBQ grill.<br /><br />
              <strong>Outdoor dining area</strong>: Enjoy your meals outside in a beautiful and serene outdoor dining area.<br /><br />
              <strong>Free parking on premises</strong>: Park your car for free on the premises of the rental property.<br /><br />
              We strive to provide a wide range of amenities to meet the needs and preferences of all of our guests.<br /><br />
            </FaqCollapse>
            <FaqCollapse
                title="Can I bring pets to the villa?"
                open={collapse === 2}
                onClick={() => (collapse === 2 ? setCollapse(false) : setCollapse(2))}
            >
              Absolutely! At Mastela, we absolutely love pets and are happy to welcome furry friends as long as they are dogs under 50 lbs.
              We understand that pets are part of the family, and we want you to be able to enjoy your vacation with your furry companion by your side.
              Just make sure to let us know in advance if you plan on bringing your dog with you so we can make any necessary arrangements.
              We can't wait to meet your four-legged friend!
            </FaqCollapse>
            <FaqCollapse
              title="What's the best way to plan fun activities for my vacation?"
              open={collapse === 5}
              onClick={() => (collapse === 5 ? setCollapse(false) : setCollapse(5))}
            >
              We recommend that you start by creating an itinerary for your trip, which can help you stay organized and ensure that you don't miss
              out on any must-see attractions or activities.<br /><br />

              Mastela offers a <a href='/cape-coral-local-area-guide'> local area guide </a>that includes many fun activities and attractions in the area. Our guide can help you discover new and exciting things
              to do during your stay, whether you're looking for outdoor adventures, cultural experiences, or family-friendly activities.<br /><br />

              We encourage our guests to take advantage of our local area guide and plan ahead to make the most out of their vacation. Whether you're interested in hiking,
              sightseeing, or trying out new restaurants and bars, we have plenty of recommendations to help you have an unforgettable trip.
            </FaqCollapse>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Faq;
