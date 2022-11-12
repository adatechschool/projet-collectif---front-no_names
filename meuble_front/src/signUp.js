import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const SignUpForm = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate =useNavigate()

 


  const collectData = async (e) => {
    console.warn({username,email,password})
      let result = await fetch("http://localhost:8000/api/auth/register", {
        method: 'post',
        body: JSON.stringify({ username, email, password }),
        headers: {
          'Content-Type': 'application/json',

        }
      })
      result=result.json()
      console.warn(result)
      localStorage.setItem("user",JSON.stringify(result))
      navigate('/')

    }
     
  return (


    <>
      <Navbar />
      <MDBContainer fluid>
        <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol
                md="10"
                lg="6"
                className="order-2 order-lg-1 d-flex flex-column align-items-center"
              >
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Sign up
                </p>

                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="user me-3" size="lg" />
                  <MDBInput
                    label="Votre Nom"
                    id="form1"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-100"
                  />
                </div>





                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size="lg" />
                  <MDBInput
                    label="Email"
                    id="form2"
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}

                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size="lg" />
                  <MDBInput
                    label="Mot de passe"
                    id="form3"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}

                  />
                </div>




                <div className="mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    value=""
                    id="flexCheckDefault"
                    label="Subscribe to our newsletter"
                  />
                </div>

                <MDBBtn className="mb-4" size="lg" type="submit" onClick={collectData}>
                  Register
                </MDBBtn>
              </MDBCol>

              <MDBCol
                md="10"
                lg="6"
                className="order-1 order-lg-2 d-flex align-items-center"
              >
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  fluid
                />
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
      <Footer />
    </>
  );
};

export default SignUpForm;
