<template>
	<div>
		<section id="content" class="content-section bg-white">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="container">
							<div class="row">
								<div class="col-md-4 col-md-offset-4 mx-auto">
									<div class="register-panel">
										<h1 class="header text-center">Register</h1>
										<div class="register-content">
											<div class="row">
												<div class="col-md-12">
													<div
														id="RegisterUserValidationSummary"
														class="alert alert-danger"
														style="display: none"
													></div>
												</div>
											</div>

											<input
												name="ctl00$MainContentPlaceHolder$ctl00$NumberCountryCodeHidden"
												type="hidden"
												id="ctl00_MainContentPlaceHolder_ctl00_NumberCountryCodeHidden"
											/><input
												name="ctl00$MainContentPlaceHolder$ctl00$NumberHidden"
												type="hidden"
												id="ctl00_MainContentPlaceHolder_ctl00_NumberHidden"
											/>
											<div
												id="ctl00_MainContentPlaceHolder_ctl00_RegistrationPanel"
											>
												<div id="registerUsernameRow" class="row row-space-10">
													<div class="col-md-12">
														<label
															for="ctl00_MainContentPlaceHolder_ctl00_Username"
															id="ctl00_MainContentPlaceHolder_ctl00_UserNameLabel"
															class="control-label"
															>Username:&nbsp;<span class="text-danger"
																>*</span
															></label
														>
													</div>
													<div class="col-md-12 m-b-15">
														<input
															name="ctl00$MainContentPlaceHolder$ctl00$Username"
															type="text"
															id="ctl00_MainContentPlaceHolder_ctl00_Username"
															class="form-control"
															title="Choose your desired username. It must be 4-20 characters long and can only contain letters and numbers. It must start with a letter"
															placeholder="Username"
														/>
														<span
															id="ctl00_MainContentPlaceHolder_ctl00_RegularExpressionValidator1"
															class="text-danger"
															style="display: none"
															>Username must be between 3-20 and can only
															consist of alphanumeric characters</span
														>
														<span
															id="ctl00_MainContentPlaceHolder_ctl00_UserNameRequired"
															class="text-danger"
															style="display: none"
															>Username field can't be left blank</span
														>
													</div>
												</div>

												<div>
													<div id="registerEmailRow" class="row m-b-15">
														<div class="col-md-12">
															<label
																for="ctl00_MainContentPlaceHolder_ctl00_Email"
																id="ctl00_MainContentPlaceHolder_ctl00_EmailLabel"
																class="control-label"
																>Email:&nbsp;<span class="text-danger"
																	>*</span
																></label
															>
														</div>
														<div class="col-md-12">
															<input
																name="ctl00$MainContentPlaceHolder$ctl00$Email"
																type="text"
																id="ctl00_MainContentPlaceHolder_ctl00_Email"
																class="form-control"
																title="It must be valid and active email address. It will be only used to send you important news (including support ticket answers), recover your password or confirm payments"
																placeholder="Email"
															/><span
																id="ctl00_MainContentPlaceHolder_ctl00_EmailRequired"
																class="text-danger"
																style="display: none"
																>Email field can't be left blank</span
															><span
																id="ctl00_MainContentPlaceHolder_ctl00_CorrectEmailRequired"
																class="text-danger"
																style="display: none"
																>Enter valid email address</span
															>
														</div>
													</div>
												</div>

												<div>
													<div id="registerPasswordRow" class="row m-b-15">
														<div class="col-md-12">
															<label
																for="ctl00_MainContentPlaceHolder_ctl00_Password"
																id="ctl00_MainContentPlaceHolder_ctl00_PasswordLabel"
																class="control-label"
																>Password:&nbsp;<span class="text-danger"
																	>*</span
																></label
															>
														</div>
														<div class="col-md-12">
															<input
																name="ctl00$MainContentPlaceHolder$ctl00$Password"
																type="password"
																id="ctl00_MainContentPlaceHolder_ctl00_Password"
																class="form-control"
																title="Choose your password. It must be 4-80 characters long and can only contain letters, numbers and !@#$%^&amp;*()-=+.,"
																placeholder="Password"
															/><span
																id="ctl00_MainContentPlaceHolder_ctl00_RegularExpressionValidator2"
																class="text-danger"
																style="color: #b70d00; display: none"
																>Wrong Password format</span
															><span
																id="ctl00_MainContentPlaceHolder_ctl00_PasswordRequired"
																class="text-danger"
																style="display: none"
																>Password field can't be left blank</span
															>
														</div>
													</div>
												</div>

												<div>
													<div id="registerConfirmRow" class="row m-b-15">
														<div class="col-md-12">
															<label
																for="ctl00_MainContentPlaceHolder_ctl00_ConfirmPassword"
																id="ctl00_MainContentPlaceHolder_ctl00_ConfirmPasswordLabel"
																class="control-label"
																>Confirm Password:&nbsp;<span
																	class="text-danger"
																	>*</span
																></label
															>
														</div>
														<div class="col-md-12">
															<input
																name="ctl00$MainContentPlaceHolder$ctl00$ConfirmPassword"
																type="password"
																id="ctl00_MainContentPlaceHolder_ctl00_ConfirmPassword"
																class="form-control"
																placeholder="Confirm Password"
															/><span
																id="ctl00_MainContentPlaceHolder_ctl00_ConfirmPasswordRequired"
																class="text-danger"
																style="display: none"
																>Confirm Password field can't be left
																blank</span
															><span
																id="ctl00_MainContentPlaceHolder_ctl00_PasswordCompare"
																class="text-danger"
																style="display: none"
																>Password and it's confirmation doesn't
																match</span
															>
														</div>
													</div>
												</div>

												<div class="row">
													<div class="col-md-6">
														<div id="registerPinRow" class="row m-b-15">
															<div class="col-md-12">
																<label
																	for="ctl00_MainContentPlaceHolder_ctl00_PIN"
																	id="ctl00_MainContentPlaceHolder_ctl00_Label1"
																	class="control-label"
																	>Desired PIN:&nbsp;<span class="text-danger"
																		>*</span
																	></label
																>
															</div>
															<div class="col-md-12">
																<input
																	name="ctl00$MainContentPlaceHolder$ctl00$PIN"
																	type="text"
																	maxlength="4"
																	id="ctl00_MainContentPlaceHolder_ctl00_PIN"
																	class="form-control"
																	autocomplete="off"
																	title="This is your additional security. We will request it before your cashout or password reset. It can only contain 4 numbers (0-9)"
																	placeholder="Desired PIN"
																/><span
																	id="ctl00_MainContentPlaceHolder_ctl00_RegularExpressionValidator3"
																	class="text-danger"
																	style="display: none"
																	>Invalid PIN format</span
																><span
																	id="ctl00_MainContentPlaceHolder_ctl00_RequiredFieldValidator2"
																	class="text-danger"
																	style="display: none"
																	>PIN field can't be left blank</span
																>
															</div>
														</div>
													</div>

													<div class="col-md-6">
														<div id="registerBirthYearRow" class="row m-b-15">
															<div class="col-md-12">
																<label
																	for="ctl00_MainContentPlaceHolder_ctl00_BirthYear"
																	id="ctl00_MainContentPlaceHolder_ctl00_BirthYearLabel"
																	class="control-label"
																	>Birth Year:&nbsp;<span class="text-danger"
																		>*</span
																	></label
																>
															</div>
															<div class="col-md-12">
																<input
																	name="ctl00$MainContentPlaceHolder$ctl00$BirthYear"
																	type="text"
																	maxlength="4"
																	id="ctl00_MainContentPlaceHolder_ctl00_BirthYear"
																	class="form-control"
																	autocomplete="off"
																	placeholder="Birth Year"
																/><span
																	id="ctl00_MainContentPlaceHolder_ctl00_RegularExpressionValidator4"
																	class="text-danger"
																	style="display: none"
																	>Invalid Birth Year format</span
																><span
																	id="ctl00_MainContentPlaceHolder_ctl00_RequiredFieldValidator1"
																	class="text-danger"
																	style="display: none"
																	>Birth Year field can't be left blank</span
																>
															</div>
														</div>
													</div>
												</div>

												<div
													id="ctl00_MainContentPlaceHolder_ctl00_CustomFields"
												>
													<div></div>
												</div>

												<div id="registerRefererRow" class="row m-b-15">
													<div class="col-md-12">
														<span
															id="ctl00_MainContentPlaceHolder_ctl00_RefererLabel"
															class="control-label"
															>Referrer:</span
														>
													</div>
													<div class="col-md-12">
														<input
															name="ctl00$MainContentPlaceHolder$ctl00$Referer"
															type="text"
															id="ctl00_MainContentPlaceHolder_ctl00_Referer"
															disabled="disabled"
															class="aspNetDisabled form-control"
															title="The username of our member who set you here. Can be left blank"
														/>
													</div>
												</div>

												<div>
													<div id="registerCaptchaRow" class="row m-b-15">
														<div class="col-md-12">
															<label class="control-label"
																>Verification:&nbsp;<span class="text-danger"
																	>*</span
																></label
															>
														</div>
														<div class="col-md-12">
															<input
																type="hidden"
																name="captcha-value"
																id="captcha-value"
															/>

															<div
																id="captcha-status-message"
																style="display: none"
															>
																<div id="captcha-status" class="captcha-status">
																	<div id="captcha-status-icon"></div>
																	<p id="captcha-status-text"></p>
																</div>
															</div>

															<div id="sample-captcha"></div>

															<span
																id="CaptchaCheckedCustomValidator"
																style="display: none"
															></span>
														</div>
													</div>
												</div>

												<div
													id="registerDetectedCountry"
													class="detectedCountry"
												>
													<div
														id="registerDetectedCountryRow"
														class="row m-b-15"
													>
														<div class="col-md-12">
															<label class="control-label"
																>Detected country:</label
															>
														</div>
														<div class="col-md-12">
															<img
																id="ctl00_MainContentPlaceHolder_ctl00_Flag"
																src="static/picture/cn.png"
															/><span
																id="ctl00_MainContentPlaceHolder_ctl00_CountryName"
																style="font-size: Small"
																>China</span
															>
														</div>
													</div>
												</div>

												<div id="registerTermsCheckbox" class="checkbox">
													<label>
														<input
															id="TermsCheckBox"
															type="checkbox"
															name="ctl00$MainContentPlaceHolder$ctl00$TermsCheckBox"
														/>&nbsp;I have read and accepted
														<a href="tos.html" target="_blank"
															>Terms of Service</a
														>&nbsp;<span class="text-danger">*</span><br />

														<span
															id="ctl00_MainContentPlaceHolder_ctl00_TermsCheckBoxValidator"
															class="text-danger"
															style="display: none"
															>You must read and accept Terms of Service</span
														>
													</label>
												</div>

												<div id="registerPrivacyCheckbox" class="checkbox">
													<label>
														<input
															id="PrivacyCheckBox"
															type="checkbox"
															name="ctl00$MainContentPlaceHolder$ctl00$PrivacyCheckBox"
														/>&nbsp;I have read and accepted
														<a href="privacy.html" target="_blank"
															>Privacy Notice</a
														>&nbsp;<span class="text-danger">*</span><br />
														<span
															id="ctl00_MainContentPlaceHolder_ctl00_PrivacyCheckBoxValidator"
															class="text-danger"
															style="display: none"
															>You must read and accept Privacy Notice</span
														>
													</label>
												</div>

												<div id="registerMarketingCheckbox" class="checkbox">
													<label>
														<input
															id="ctl00_MainContentPlaceHolder_ctl00_MarketingEmailsCheckBox"
															type="checkbox"
															name="ctl00$MainContentPlaceHolder$ctl00$MarketingEmailsCheckBox"
														/>&nbsp;<i class="fa fa-envelope-o"></i>&nbsp;I want
														to receive marketing communication
													</label>
												</div>

												<div class="row">
													<div class="col-md-12">
														<div class="register-buttons m-t-30">
															<input
																type="submit"
																name="ctl00$MainContentPlaceHolder$ctl00$CreateUserButton"
																value="Register"
																onclick='return CheckDouble();WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions("ctl00$MainContentPlaceHolder$ctl00$CreateUserButton", "", true, "RegisterUserValidationGroup", "", false, false))'
																id="ctl00_MainContentPlaceHolder_ctl00_CreateUserButton"
																class="btn btn-primary btn-block btn-lg"
															/>
															<div class="m-b-10"></div>
															<div class="m-b-10"></div>
															<div class="m-b-10"></div>
															<div class="m-b-10"></div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
export default {
	name: 'Register',
	data() {
		return {}
	},
}
</script>
<style scoped>
.captcha-status {
	-webkit-border-radius: 7px;
	-moz-border-radius: 7px;
	-ms-border-radius: 7px;
	-o-border-radius: 7px;
	border-radius: 7px;
	background-color: #fbb6a9;
	padding: 10px;
	text-align: center;
	font-family: 'Oxygen', sans-serif;
	font-size: 18px;
	color: #b41c1c;
	font-weight: 100;
	margin: 20px 0 24px;
}

@media only screen and (max-width: 360px) {
	.captcha-status {
		font-size: 16px;
	}
}

.captcha-status p {
	margin: 0;
}
.bg-white{
	padding-top: 12px;
}
</style>

