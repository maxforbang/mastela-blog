/*
=========================================================
* Material Kit 2 PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Kit 2 PRO React components

// Material Kit 2 PRO React components

// Images
import product3 from "/public/temp/products/product-3-min.jpg";

import MKBox from "../../../KitComponents/MK2/MKBox";
import MKPagination from "../../../KitComponents/MK2/MKPagination";
import SimpleBookingCard from "../../../KitComponents/MK2/SimpleBookingCard";
import {useMediaQuery} from "@mui/material";
import {defaultMapProps, MapComponent} from "../../MapComponent";


function Places() {
  const actionProps = {
    type: "internal",
    route: "/pages/landing-pages/rental",
    color: "info",
    label: "from / night",
  };

  const isMobile = useMediaQuery('(max-width:1200px)');


  const bookingCards = [1,2,3,4].map(() =>
    <Grid item xs={12} md={6} lg={6}>
      <MKBox mt={3}>
        <SimpleBookingCard
            image={product3}
            title="Independent house bedroom kitchen"
            description="Music is something that every person has his or her own specific opinion about. Different people have different taste, and various types of music."
            categories={["Entire Apartment", "4 Guests", "2 Beds"]}
            action={actionProps}
        />
      </MKBox>
    </Grid>
  )

  return (
    <MKBox component="section" sx={{display: 'flex'}}>
      <Container sx={{flex: "3 1 0"}}>
        <Grid container spacing={3} >
          {bookingCards}
        </Grid>
        <MKBox mt={5}>
          <MKPagination>
            <MKPagination item>
              <Icon>keyboard_arrow_left</Icon>
            </MKPagination>
            <MKPagination item active>
              1
            </MKPagination>
            <MKPagination item>2</MKPagination>
            <MKPagination item>3</MKPagination>
            <MKPagination item>4</MKPagination>
            <MKPagination item>5</MKPagination>
            <MKPagination item>
              <Icon>keyboard_arrow_right</Icon>
            </MKPagination>
          </MKPagination>
        </MKBox>
      </Container>
      { !isMobile ?
      <Container sx={{flex: "2 1 0"}}>
        <MapComponent
            {...defaultMapProps}
        />
      </Container>
      : null }
    </MKBox>
  );
}

export default Places;
