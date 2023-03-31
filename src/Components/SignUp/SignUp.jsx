import React from "react";
import { useState,useContext } from "react";
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from "../../Utils/firebase/firebase";
import { UserContext } from "../../context/user.context";
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
const SignUp = ( ) =>{
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    const setCurrentUser =useContext(UserContext);
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
      };
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (password !== confirmPassword) {
          alert('passwords do not match');
          return;
        }
    
        try {
          const { user } = await createAuthUserWithEmailAndPassword(
            email,
            password
          );

          setCurrentUser(user);
    
          await createUserDocumentFromAuth(user, { displayName });
          resetFormFields();
        } catch (error) {
          if (error.code === 'auth/email-already-in-use') {
            alert('Cannot create user, email already in use');
          } else {
            console.log('user creation encountered an error', error);
          }
        }
      };
    
    
    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormFields({ ...formFields, [name]: value });
      };
  
    return(
        <div id="page-content">
 
    	<div className="page section-header text-center">
			<div className="page-title">
        		<div className="wrapper"><h1 className="page-width">Create an Account</h1></div>
      		</div>
		</div>

        
        <div className="container">
        	<div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 main-col offset-md-3">
                	<div className="mb-4">
                       <form  onSubmit={handleSubmit} className="contact-form">	
                          <div className="row">
	                          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="form-group">
                                    <label for="FirstName">Name</label>
                                    <input type="text"   name='displayName' required onChange={handleChange}  value={displayName}   autofocus=""/>
                                </div>
                               </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="form-group">
                                    <label for="CustomerEmail">Email</label>
                                    <input type="email"  required onChange={handleChange}  name='email' value={email} id="CustomerEmail" className="" autocorrect="off" autocapitalize="off" autofocus=""/>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="form-group">
                                    <label for="CustomerPassword">Password</label>
                                    <input type="password"  required onChange={handleChange} name='password' value={password} placeholder=""  className=""/>                        	
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="form-group">
                                    <label for="CustomerPassword">Confirm Password</label>
                                    <input type="password"  required onChange={handleChange} name='confirmPassword' value={confirmPassword} placeholder="" id="CustomerPassword" className=""/>                        	
                                </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="text-center col-12 col-sm-12 col-md-12 col-lg-12">
                                <input type="submit" className="btn mb-3" value="Create"/>
                            </div>
                         </div>
                     </form>
                    </div>
               	</div>
            </div>
        </div>
        
    </div>
    );
}
export default SignUp;