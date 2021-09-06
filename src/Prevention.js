import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React, { useState } from "react";
import "./home.scss";
import design from "./prevention.module.css";
import mainurl from "./site-url";

const defaultProps = {
     bgcolor: "background.paper",
     borderColor: "#dadce0",
     m: 1,
     border: 1,
     style: {},
};

const Prevention = () => {
     var favicon = document.getElementById("favicon");
     favicon.href = "/favicon.ico";
     document.title = "Pretexting - Prevention";
     const [visibility1, setVisibility1] = useState(false);
     const [visibility2, setVisibility2] = useState(false);
     const [visibility3, setVisibility3] = useState(false);
     const [visibility4, setVisibility4] = useState(false);
     const [visibility5, setVisibility5] = useState(false);
     const [visibility6, setVisibility6] = useState(false);
     const [expanded, setExpanded] = useState(false);

     function expand() {
          setVisibility1(true);
          setVisibility2(true);
          setVisibility3(true);
          setVisibility4(true);
          setVisibility5(true);
          setVisibility6(true);
     }

     function collapse() {
          setVisibility1(false);
          setVisibility2(false);
          setVisibility3(false);
          setVisibility4(false);
          setVisibility5(false);
          setVisibility6(false);
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
                         <div className={design.header2}>Prevention</div>

                         <Box boxShadow={3} className={design.infofield1}>
                              {`\tPretexting is a form of social engineering attack where attackers focus on creating a good pretext, or a fabricated scenario, that they use to try and steal their victims’ personal information.\n\n\tIn these types of attacks, the scammer usually says they need certain bits of information from their target to confirm their identity. In actuality, they steal that data and use it to commit identity theft or stage secondary attacks.`}
                         </Box>

                         <Button
                              style={{
                                   marginBottom: "-30px",
                                   marginTop: "40px",
                              }}
                              color={expanded ? "secondary" : "primary"}
                              endIcon={
                                   expanded ? (
                                        <ExpandLessIcon />
                                   ) : (
                                        <ExpandMoreIcon />
                                   )
                              }
                              onClick={() => {
                                   setExpanded(!expanded);
                                   if (!expanded) expand();
                                   else collapse();
                              }}
                         >
                              {expanded ? "Collapse all" : "Expand all"}
                         </Button>

                         <div className={design.header3}>
                              Pretexting prevention for corporate entities
                         </div>

                         <Button
                              className={design.infobutton}
                              variant="outlined"
                              color="primary"
                              style={{ marginTop: "10px" }}
                              endIcon={
                                   visibility1 ? (
                                        <ExpandLessIcon />
                                   ) : (
                                        <ExpandMoreIcon />
                                   )
                              }
                              onClick={() => setVisibility1(!visibility1)}
                         >
                              Educating employees
                         </Button>

                         {visibility1 && (
                              <Box boxShadow={3} className={design.infofield}>
                                   {`\tExtensive Security Awareness Training to ensure the user understands what type of information they are allowed to reveal. If employees learn how to protect their data and the company’s confidential data, they’ll be able to spot a social engineering attempt and mitigate its consequences. Additionally, they can become more vigilant and become a much-needed security layer themselves.\n\n\tAlso, different technologies in places such as NAC solutions that limit the access to data that cannot be shared without authorization.`}
                              </Box>
                         )}

                         <Button
                              className={design.infobutton}
                              variant="outlined"
                              color="primary"
                              style={{ marginTop: "15px" }}
                              endIcon={
                                   visibility2 ? (
                                        <ExpandLessIcon />
                                   ) : (
                                        <ExpandMoreIcon />
                                   )
                              }
                              onClick={() => setVisibility2(!visibility2)}
                         >
                              Periodic security assessments
                         </Button>

                         {visibility2 && (
                              <Box boxShadow={3} className={design.infofield}>
                                   {`\t\tEmployees should be tested by having an outside party conduct a social engineering tests. These kinds of tests help keep the employee on their toes and more likely to avoid the attacks.\n\n\tHelp the employees understand why their security discretion is vital to corporate health. Create a targeted training program that addresses the most risky employees and/or prevalent behaviors first.`}
                              </Box>
                         )}

                         <div className={design.header3}>
                              Pretexting prevention on a personal level
                         </div>

                         <Button
                              className={design.infobutton}
                              variant="outlined"
                              color="primary"
                              style={{ marginTop: "15px" }}
                              endIcon={
                                   visibility3 ? (
                                        <ExpandLessIcon />
                                   ) : (
                                        <ExpandMoreIcon />
                                   )
                              }
                              onClick={() => setVisibility3(!visibility3)}
                         >
                              Unsolicited communications
                         </Button>

                         {visibility3 && (
                              <Box boxShadow={3} className={design.infofield}>
                                   {`\tNEVER respond to unsolicited communications (email/phone) without verifying the identity of the person on the other side. The simple way to verify is to tell the person you will call them back on a verified phone.`}
                              </Box>
                         )}

                         <Button
                              className={design.infobutton}
                              variant="outlined"
                              color="primary"
                              style={{ marginTop: "15px" }}
                              endIcon={
                                   visibility4 ? (
                                        <ExpandLessIcon />
                                   ) : (
                                        <ExpandMoreIcon />
                                   )
                              }
                              onClick={() => setVisibility4(!visibility4)}
                         >
                              Sense of URGENCY!
                         </Button>

                         {visibility4 && (
                              <Box boxShadow={3} className={design.infofield}>
                                   {`\tPretexting attacks use scare tactics such as urgency and authority to trick victims into taking immediate action. Emails that ask to share personal information or to make cash transactions are… ‘phishy’. `}
                              </Box>
                         )}

                         <Button
                              className={design.infobutton}
                              variant="outlined"
                              color="primary"
                              style={{ marginTop: "15px" }}
                              endIcon={
                                   visibility5 ? (
                                        <ExpandLessIcon />
                                   ) : (
                                        <ExpandMoreIcon />
                                   )
                              }
                              onClick={() => setVisibility5(!visibility5)}
                         >
                              Too good to be true
                         </Button>

                         {visibility5 && (
                              <Box boxShadow={3} className={design.infofield}>
                                   {`\tIf it sounds too good to be true, chances are it is! Pretexting attacks use fake rewards to tempt victims to take action. You wouldn’t win a lottery if you never participated.`}
                              </Box>
                         )}

                         <Button
                              className={design.infobutton}
                              endIcon={
                                   visibility6 ? (
                                        <ExpandLessIcon />
                                   ) : (
                                        <ExpandMoreIcon />
                                   )
                              }
                              variant="outlined"
                              color="primary"
                              style={{ marginTop: "15px" }}
                              onClick={() => setVisibility6(!visibility6)}
                         >
                              Modern mailing solutions
                         </Button>

                         {visibility6 && (
                              <Box boxShadow={3} className={design.infofield}>
                                   {`\tMost well known emailing solutions such as Gmail use various machine learning algorithms that will warn you about the nature of incoming mail. It can even automatically dump it into the spam section. Hence, it is better to use sophisticated emailing solutions.`}
                              </Box>
                         )}
                    </Box>

                    <div className={design.buttonsdivlower}>
                         {" "}
                         GOTO :
                         <a href={mainurl} style={{ textDecoration: "none" }}>
                              <Button color="primary">Insertion</Button>
                         </a>
                         <a
                              href={mainurl + "detection/"}
                              style={{ textDecoration: "none" }}
                         >
                              <Button color="primary">Detection</Button>
                         </a>
                    </div>
               </div>
          </>
     );
};

export default Prevention;
