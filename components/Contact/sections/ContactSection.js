import makeStyles from "@mui/styles/makeStyles";
import contactsStyle from "../../../styles/jss/nextjs-material-kit-pro/pages/sectionsSections/contactsStyle";
import GridItem from "../../KitComponents/NextKit/Grid/GridItem";
import GridContainer from "../../KitComponents/NextKit/Grid/GridContainer";

import CardBody from "../../KitComponents/NextKit/Card/CardBody";
import CustomInput from "../../KitComponents/NextKit/CustomInput/CustomInput";
import CardFooter from "../../KitComponents/NextKit/Card/CardFooter";


import {Checkbox, FormControlLabel} from "@mui/material";
import Card from "../../KitComponents/NextKit/Card/Card";
import CardHeader from "../../KitComponents/NextKit/Card/CardHeader";
import Button from "../../KitComponents/NextKit/CustomButtons/Button";
import InfoArea from "../../Shared/InfoArea/InfoArea";

import {Phone, PinDrop, Check} from "@mui/icons-material";

const useStyles = makeStyles(contactsStyle);

export const ContactSection = () => {
	const classes = useStyles();
	return (
		<div
			className={classes.contacts + " " + classes.section}
			style={{backgroundImage: "url('https://ik.imagekit.io/mastela/tr:w-1800/Villa_Encore/64-Photo_64.jpg')"}}
		>
			<div className={classes.container}>
				<GridContainer>
					<GridItem xs={12} sm={5} md={5}>
						<h2 className={classes.title}>Get in Touch</h2>
						<h5 className={classes.description}>
							Have a question or concern? Feel free to contact us and we'll get back to you as soon as we can.
						</h5>
						<InfoArea
							className={classes.infoArea}
							title="Shoot us an email"
							description={
								<span>
                    <a href="mailto:info@mastelavacations.com">
	                    info@mastelavacations.com
                    </a>
                  </span>
							}
							icon={PinDrop}
						/>
						<InfoArea
							className={classes.infoArea}
							title="Give us a ring"
							description={
								<span>
                    Mastela Vacations
                    <br/> <a href="tel:+1(813)9957240">+1 (813) 995 7240</a>
                    <br/> Mon - Fri, 8:00 am - 8:00 pm
                  </span>
							}
							icon={Phone}
						/>
					</GridItem>
					<GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
						<Card className={classes.card1}>
							<form>
								<CardHeader
									contact
									color="primary"
									className={classes.textCenter}
								>
									<h4 className={classes.cardTitle}>Contact Us</h4>
								</CardHeader>
								<CardBody>
									<GridContainer>
										<GridItem xs={12} sm={6} md={6}>
											<CustomInput
												labelText="First Name"
												id="first"
												formControlProps={{
													fullWidth: true
												}}
											/>
										</GridItem>
										<GridItem xs={12} sm={6} md={6}>
											<CustomInput
												labelText="Last Name"
												id="last"
												formControlProps={{
													fullWidth: true
												}}
											/>
										</GridItem>
									</GridContainer>
									<CustomInput
										labelText="Email Address"
										id="email-address"
										formControlProps={{
											fullWidth: true
										}}
									/>
									<CustomInput
										labelText="Your Message"
										id="message"
										formControlProps={{
											fullWidth: true
										}}
										inputProps={{
											multiline: true,
											rows: 5
										}}
									/>
								</CardBody>
								<CardFooter className={classes.justifyContentBetween}>
									<FormControlLabel
										control={
											<Checkbox
												tabIndex={-1}
												onClick={() => handleToggle(1)}
												checkedIcon={
													<Check className={classes.checkedIcon}/>
												}
												icon={<Check className={classes.uncheckedIcon}/>}
												classes={{
													checked: classes.checked,
													root: classes.checkRoot
												}}
											/>
										}
										classes={{label: classes.label}}
										label="I'm not a robot"
									/>
									<Button color="primary" className={classes.pullRight}>
										Send Message
									</Button>
								</CardFooter>
							</form>
						</Card>
					</GridItem>
				</GridContainer>
			</div>
		</div>
	)
}