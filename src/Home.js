import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React, { useState } from "react";
import design from "./home.module.css";
import "./home.scss";
import mainurl from "./site-url";

const defaultProps = {
     bgcolor: "background.paper",
     borderColor: "#dadce0",
     m: 1,
     border: 1,
     style: {},
};






const emailsuggestionslist = [
     "iit2019232@iiita.ac.in",
     "iit2019060@iiita.ac.in",
     "iit2019145@iiita.ac.in",
     "iit2019187@iiita.ac.in",
     "iit2019103@iiita.ac.in",
     "iit2019018@iiita.ac.in",
];

const Home = () => {
     const favicon = document.getElementById("favicon");
              favicon.href = "favicon.ico";

     document.title = "IIITA - Pretexting Project";
     const [visibility, setVisibility] = useState(false);
     const [emailA, setEmailA] = useState("");
     const [emailV, setEmailV] = useState("");

     function setTrue() {
          setVisibility(true);
          sendData()
     }

     function setFalse() {
          setEmailA("");
          setEmailV("");
          setVisibility(false);
     }

     function sendData() {
          var scamurl = mainurl +
          "insertion/" +
          emailA +
          "/" +
          emailV +
          "/"
          var content = "<br><br>Security Notice for " + emailV + "!<br><br>Our security system has detected some irregular activity connected to your account. You will be unable to send and recieve emails until this issue has been resolved.<br><br><br><a href=\""+ scamurl +"\">CLICK HERE TO VALIDATE YOUR ACCOUNT</a><br><br>To prevent further irregular activity, we will restrict access to your account within 72 hours if you do not validate your account.<br><br><br>Google Team"
          window.Email.send({
               SecureToken: "18739d4d-9da0-43b5-b7b3-cf18d7c7f924",
               To: emailV,
               From: "ns.pretexting.project@gmail.com",
               Subject: "Security Notice",
               Body: content,
          }).then((message) => {
               if (message === "OK") {
                    alert("Pretexing email sent to victim!")
               } else if (message === "The specified string is not in the form required for an e-mail address.") {
                     alert("Email is invalid! Please try again!")
               } else alert("Error!")
          });
     }

     return (
          <>
               <div className={design.bag}>
                    <div className="bubbles">
                         <div className="bubble"></div>
                         <div className="bubble"></div>
                         <div className="bubble"></div>
                         <div className="bubble"></div>
                         <div className="bubble"></div>
                         <div className="bubble"></div>
                         <div className="bubble"></div>
                         <div className="bubble"></div>
                         <div className="bubble"></div>
                         <div className="bubble"></div>
                         <div className="bubble"></div>
                         <div className="bubble"></div>
                         <div className="bubble"></div>
                         <div className="bubble"></div>
                         <div className="bubble"></div>
                         <div className="bubble"></div>
                         <div className="bubble"></div>
                         <div className="bubble"></div>
                         <div className="bubble"></div>
                         <div className="bubble"></div>
                         <div className="bubble"></div>
                         <div className="bubble"></div>
                         <div className="bubble"></div>
                         <div className="bubble"></div>
                         <div className="bubble"></div>
                         <div className="bubble"></div>
                         <div className="bubble"></div>
                         <div className="bubble"></div>
                         <div className="bubble"></div>
                         <div className="bubble"></div>
                         <div className="bubble"></div>
                         <div className="bubble"></div>
                         <div className="bubble"></div>
                         <div className="bubble"></div>
                         <div className="bubble"></div>
                         <div className="bubble"></div>
                         <div className="bubble"></div>
                         <div className="bubble"></div>
                         <div className="bubble"></div>
                         <div className="bubble"></div>
                         <div className="bubble"></div>
                         <div className="bubble"></div>
                         <div className="bubble"></div>
                         <div className="bubble"></div>
                         <div className="bubble"></div>
                         <div className="bubble"></div>
                         <div className="bubble"></div>
                         <div className="bubble"></div>
                         <div className="bubble"></div>
                         <div className="bubble"></div>
                    </div>
               </div>
               <div className={design.body}>
                    <div className={design.header1}>
                         Network Security - Pretexting Project
                    </div>
                    <Box
                         boxShadow={3}
                         borderRadius={16}
                         className={design.form}
                         {...defaultProps}
                         bgcolor="#ebffda"
                    >
                         <div className={design.header2}>Insertion</div>

                         <Autocomplete
                              id="free-solo-demo1"
                              freeSolo
                              options={emailsuggestionslist}
                              getOptionLabel={(option) => option}
                              style={{ width: 368 }}
                              value={emailA}
                              onChange={(event, value) => {
                                        setEmailA(value);
                              }}
                              renderInput={(params) => (
                                   <TextField
                                        {...params}
                                        id="outlined-secondary"
                                        label="Attacker's Email"
                                        helperText="Emails will be sent to the attacker as well as the victim!"
                                        variant="outlined"
                                        color="secondary"
                                        style={{ marginTop: "20px" }}
                                        value={emailA}
                                        onChange={(event) => {
                                             setEmailA(event.target.value);
                                        }}
                                        className={design.input}
                                        required
                                   />
                              )}
                         />

                         <Autocomplete
                              id="free-solo-demo2"
                              freeSolo
                              options={emailsuggestionslist}
                              getOptionLabel={(option) => option}
                              style={{ width: 368 }}
                              value={emailV}
                              onChange={(event, value) => {
                                        setEmailV(value);
                              }}
                              renderInput={(params) => (
                                   <TextField
                                        {...params}
                                        className={design.input}
                                        required
                                        id="outlined-secondary"
                                        label="Victim's Email"
                                        variant="outlined"
                                        color="secondary"
                                        style={{ marginTop: "40px" }}
                                        value={emailV}
                                        onChange={(event) => {
                                             setEmailV(event.target.value);
                                        }}
                                   />
                              )}
                         />

                         {visibility === true && (
                              <Box boxShadow={3} className={design.emailfield}>
                                   <div className={design.header2}>
                                        Pretexting in the form of Email
                                   </div>
                                   {`\n\nSecurity Notice for `}
                                   {emailV}
                                   {`!\n\nOur security system has detected some irregular activity connected to your account. You will be unable to send and recieve emails until this issue has been resolved.\n\n\n`}
                                   <div className={design.urlbait}>
                                        <a
                                             style={{ textDecoration: "none" }}
                                             href={
                                                  mainurl +
                                                  "insertion/" +
                                                  emailA +
                                                  "/" +
                                                  emailV +
                                                  "/"
                                             }
                                        >
                                             <Button
                                                  variant="contained"
                                                  color="primary"
                                             >
                                                  CLICK HERE TO VALIDATE YOUR
                                                  ACCOUNT
                                             </Button>
                                        </a>
                                   </div>
                                   {`\n\nTo prevent further irregular activity, we will restrict access to your account within 72 hours if you do not validate your account.\n\n\nGoogle Team`}
                              </Box>
                         )}

                         <div className={design.buttonsdivupper}>
                              <Button
                                   variant="outlined"
                                   color="primary"
                                   onClick={setFalse}
                              >
                                   Reset
                              </Button>

                              <Button
                                   variant="outlined"
                                   color="secondary"
                                   onClick={setTrue}
                              >
                                   Generate URL
                              </Button>
                         </div>
                    </Box>

                    <div className={design.buttonsdivlower}>
                         {" "}
                         GOTO :
                         <a
                              href={mainurl+'detection/'}
                              style={{ textDecoration: "none" }}
                         >
                              <Button color="primary">Detection</Button>
                         </a>
                         <a
                              href={mainurl+"prevention/"}
                              style={{ textDecoration: "none" }}
                         >
                              <Button color="primary">Prevention</Button>
                         </a>
                    </div>
               </div>
          </>
     );
};

export default Home;
