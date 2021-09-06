import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import React, { useState, useEffect } from "react";
import design from "./detection.module.css";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./home.scss";
import mainurl from "./site-url";

const defaultProps = {
     bgcolor: "background.paper",
     borderColor: "#dadce0",
     m: 1,
     border: 1,
     style: {},
};





const Detection = () => {

     
     // useEffect(() => {
     //      const faviconUpdate = async () => {
            
     //          console.log(favicon);
     //      };

     //      faviconUpdate()
     // })

     const favicon = document.getElementById("favicon");
              favicon.href = "favicon.ico";

     document.title = "IIITA - Pretexting Project";

     const [visibility1, setVisibility1] = useState(false);
     const [visibility2, setVisibility2] = useState(false);
     const [visibility3, setVisibility3] = useState(false);
     const [visibility4, setVisibility4] = useState(false);
     const [visibility5, setVisibility5] = useState(false);
     const [visibility6, setVisibility6] = useState(false);
     const [visibility7, setVisibility7] = useState(false);
     const [expanded, setExpanded] = useState(false);


     function expand(){
          setVisibility1(true);
          setVisibility2(true);
          setVisibility3(true);
          setVisibility4(true);
          setVisibility5(true);
          setVisibility6(true);
          setVisibility7(true);
     }

     function collapse(){
          setVisibility1(false);
          setVisibility2(false);
          setVisibility3(false);
          setVisibility4(false);
          setVisibility5(false);
          setVisibility6(false);
          setVisibility7(false);
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
                         <div className={design.header2}>Detection</div>

                         <Box boxShadow={3} className={design.infofield1}>
                                             
                                   {`\tPretexting is a form of social engineering attack where attackers focus on creating a good pretext, or a fabricated scenario, that they use to try and steal their victims’ personal information.\n\n\tIn these types of attacks, the scammer usually says they need certain bits of information from their target to confirm their identity. In actuality, they steal that data and use it to commit identity theft or stage secondary attacks.`}
                                  
                              </Box>

                         <Button style={{marginBottom: "-30px",marginTop: "40px"}} color={expanded?"secondary":"primary"} endIcon={expanded?<ExpandLessIcon/>:<ExpandMoreIcon/>} onClick={()=>{setExpanded(!expanded);if(!expanded)expand(); else collapse()}}>{expanded?"Collapse all":"Expand all"}</Button>
                         

                         <div className={design.header3}>Ways to detect pretexting by calls or direct interaction</div>
                              
                         <Button
                              className={design.infobutton}
                              variant="outlined" color="primary"
                              style={{marginTop:"10px",}}
                              onClick={()=>setVisibility1(!visibility1)}
                              endIcon={
                                   visibility1 ? (
                                        <ExpandLessIcon />
                                   ) : (
                                        <ExpandMoreIcon />
                                   )
                              }
                         >
                              Requesting personal information
                         </Button>

                         
                         
                             {visibility1&&<Box boxShadow={3} className={design.infofield}>
                                             
                                   {`\tIf anyone who has initiated contact with you begins asking for personal information, it's very likely to be a pretexting attack.\n\n\tFor example, if a person claiming to represent your bank calls you to request your bank information. Remember, your bank already knows everything it needs to know about you — they shouldn't need you to tell them your account number.`}
                                  
                              </Box>}

                              <Button
                              className={design.infobutton}
                              variant="outlined" color="primary"
                              style={{marginTop:"15px",}}
                              onClick={()=>setVisibility2(!visibility2)}
                              endIcon={
                                   visibility2 ? (
                                        <ExpandLessIcon />
                                   ) : (
                                        <ExpandMoreIcon />
                                   )
                              }
                         >
                              Unverified number
                         </Button>

                         
                         
                             {visibility2&&<Box boxShadow={3} className={design.infofield}>
                                             
                                   {`\tIf anyone who has initiated contact with you claims to represent a comapany but is calling from an unverifed phone number, it's very likely to be a pretexting attack.\n\n\tIn this case you should always verify the identity of the caller on the other side. The best way verify is to tell them that you will call them on the publically available number of the company.`}
                                  
                              </Box>}


                              <div className={design.header3}>Ways to detect pretexting by emails or websites</div>


                              <Button
                              className={design.infobutton}
                              variant="outlined" color="primary"
                              style={{marginTop:"15px",}}
                              onClick={()=>setVisibility3(!visibility3)}
                              endIcon={
                                   visibility3 ? (
                                        <ExpandLessIcon />
                                   ) : (
                                        <ExpandMoreIcon />
                                   )
                              }
                         >
                              A mismatched email address
                         </Button>

                         
                         
                             {visibility3&&<Box boxShadow={3} className={design.infofield}>
                                             
                                   {`\tIf the hyperlinked address in an email is different from the address that is displayed, the email is probably fraudulent or malicious.`}
                                  
                              </Box>}

                              <Button
                              className={design.infobutton}
                              variant="outlined" color="primary"
                              style={{marginTop:"15px",}}
                              onClick={()=>setVisibility4(!visibility4)}
                              endIcon={
                                   visibility4 ? (
                                        <ExpandLessIcon />
                                   ) : (
                                        <ExpandMoreIcon />
                                   )
                              }
                         >
                              Email address with a misleading domain name
                         </Button>

                         
                         
                             {visibility4&&<Box boxShadow={3} className={design.infofield}>
                                             
                                   {`\tIf the domain name in an email is different from the one of the company they claim to be with, the email is fraudulent or malicious. For example, email address with a domain name like microsoft.maliciousdomainname.com is fraudulent.`}
                                  
                              </Box>}


                              <Button
                              className={design.infobutton}
                              variant="outlined" color="primary"
                              style={{marginTop:"15px",}}
                              onClick={()=>setVisibility5(!visibility5)}
                              endIcon={
                                   visibility5 ? (
                                        <ExpandLessIcon />
                                   ) : (
                                        <ExpandMoreIcon />
                                   )
                              }
                         >
                              Poor spellings and grammar error
                         </Button>

                         
                         
                             {visibility5&&<Box boxShadow={3} className={design.infofield}>
                                             
                                   {`\tLegitimate companies have trained staff and whenever they send out large or small messages/emails, they require double checking and then only they send emails. Thus, if a message has poor spelling and grammar error, it’s always a better option to cross-check first.`}
                                  
                              </Box>}
                              

                              <Button
                              className={design.infobutton}
                              variant="outlined" color="primary"
                              style={{marginTop:"15px",}}
                              onClick={()=>setVisibility6(!visibility6)}
                              endIcon={
                                   visibility6 ? (
                                        <ExpandLessIcon />
                                   ) : (
                                        <ExpandMoreIcon />
                                   )
                              }
                         >
                              Surprise lottery! (or similar emails)
                         </Button>

                         
                         
                             {visibility6&&<Box boxShadow={3} className={design.infofield}>
                                             
                                   {`\tIf an email seems too good to be true, they claim to send you rewards but the only catch is that you will have to send some deposit first, then the email is fraudulent. This is a very common form of pretexting by email.`}
                                  
                              </Box>}


                              <Button
                              className={design.infobutton}
                              variant="outlined" color="primary"
                              style={{marginTop:"15px",}}
                              onClick={()=>setVisibility7(!visibility7)}
                              endIcon={
                                   visibility7 ? (
                                        <ExpandLessIcon />
                                   ) : (
                                        <ExpandMoreIcon />
                                   )
                              }
                         >
                              Corporate email with a generic greeting
                         </Button>

                         
                         
                             {visibility7&&<Box boxShadow={3} className={design.infofield}>
                                             
                                   {`\tThe email has a generic greeting like “Hi Dear”. Legitimate Businesses probably wouldn’t use a generic greeting like this. Hence, it’s always a better option to cross-check first.`}
                                  
                              </Box>}


                              
                    </Box>

                    <div className={design.buttonsdivlower}>
                         {" "}
                         GOTO :
                         <a
                              href={mainurl}
                              style={{ textDecoration: "none" }}
                         >
                              <Button color="primary">Insertion</Button>
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

export default Detection;
