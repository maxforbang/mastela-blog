import React from "react";
import makeStyles from '@mui/styles/makeStyles';
// @mui/icons-material
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Card from "/components/Card/Card.js";
import CardHeader from "/components/Card/CardHeader.js";
import CardBody from "/components/Card/CardBody.js";
import CardFooter from "/components/Card/CardFooter.js";
import Muted from "/components/Typography/Muted.js";
import Button from "/components/CustomButtons/Button.js";

import sectionImageStyle from "/styles/jss/nextjs-material-kit-pro/pages/blogPostsSections/sectionImageStyle.js";

const useStyles = makeStyles(sectionImageStyle);

export default function SectionImage() {
	const classes = useStyles();
	return (
		<div
			className={classes.section}
			style={{backgroundImage: "url('https://ik.imagekit.io/mastela/Blog/tropical_sunset.jpg/tr:w-2000')"}}
		>
			<div className={classes.container}>
				<GridContainer>
					<GridItem xs={12} sm={6} md={6}>
						<Card profile plain className={classes.textLeft}>
							<GridContainer>
								<GridItem xs={12} sm={5} md={5}>
									<CardHeader image plain>
										{/*<a href="">*/}
										<img
											objectFit='cover'
											src="/img/blog/thomas_photo.jpeg"
											alt="..."
										/>
										{/*</a>*/}
									</CardHeader>
								</GridItem>
								<GridItem xs={12} sm={7} md={7}>
									<CardBody plain>
										<h4 className={classes.cardTitle}>Thomas Forbang</h4>
										<Muted>
											<h6>CO-FOUNDER / REAL ESTATE AGENT</h6>
										</Muted>
										<p className={classes.description}>
											After being duped by multiple vacation rental management companies in the
											past, Thomas made it his driving mission to create a management company that
											focused on trust and full transparency each property owner.
										</p>
									</CardBody>
									<CardFooter profile plain>
										<Button justIcon simple color="white" href="">
											<i className="fab fa-twitter"/>
										</Button>
										<Button justIcon simple color="white" href="">
											<i className="fab fa-facebook-square"/>
										</Button>
										<Button justIcon simple color="white" href="">
											<i className="fab fa-google"/>
										</Button>
									</CardFooter>
								</GridItem>
							</GridContainer>
						</Card>
					</GridItem>
					<GridItem xs={12} sm={6} md={6}>
						<Card profile plain className={classes.textLeft}>
							<GridContainer>
								<GridItem xs={12} sm={5} md={5}>
									<CardHeader image plain>
										{/*<a href="">*/}
										<img
											src="/img/blog/anna_photo.jpeg"
											alt="..."
										/>
										{/*</a>*/}
									</CardHeader>
								</GridItem>
								<GridItem xs={12} sm={7} md={7}>
									<CardBody plain>
										<h4 className={classes.cardTitle}>Anna Chernyavskaya</h4>
										<Muted>
											<h6>Co-Founder / CFO</h6>
										</Muted>
										<p className={classes.description}>
											Being the owner of a business and dedicated mom of 2 daughters, Anna's
											committed to making sure every guest is taken care of from the moment they
											inquire about a booking to the moment they leave.
										</p>
									</CardBody>
									<CardFooter profile plain>
										<Button justIcon simple color="white" href="">
											<i className="fab fa-linkedin-in"/>
										</Button>
										<Button justIcon simple color="white" href="">
											<i className="fab fa-facebook-square"/>
										</Button>
										<Button justIcon simple color="white" href="">
											<i className="fab fa-dribbble"/>
										</Button>
										<Button justIcon simple color="white" href="">
											<i className="fab fa-google"/>
										</Button>
									</CardFooter>
								</GridItem>
							</GridContainer>
						</Card>
					</GridItem>
				</GridContainer>
			</div>
		</div>
	);
}
