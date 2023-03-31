import React from "react";
import { signInwithGooglePopup,  createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../Utils/firebase/firebase";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
const defaultFormFields = {
    email: '',
    password: '',
  };
const Login = ( ) =>{
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    const {setCurrentUser}=useContext(UserContext);
  
    const resetFormFields = () => {
      setFormFields(defaultFormFields);
    };
  
    const signInWithGoogle = async () => {
      const { user } = await signInwithGooglePopup();
      await createUserDocumentFromAuth(user);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const user = await signInAuthUserWithEmailAndPassword(
          email,
          password

        );
        setCurrentUser(user)
        resetFormFields();
      } catch (error) {
        switch (error.code) {
          case 'auth/wrong-password':
            alert('incorrect password for email');
            break;
          case 'auth/user-not-found':
            alert('no user associated with this email');
            break;
          default:
            console.log(error);
        }
      }
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormFields({ ...formFields, [name]: value });
    };
    return(
        <body className="page-template belle">
    <div className="pageWrapper">
	
    <div id="page-content">
    
    	<div className="page section-header text-center">
			<div className="page-title">
 
                  
                        <div className="wrapper"><h1 className="page-width">Login</h1></div>

        		
      		</div>
		</div>

        <div className="container">
        	<div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 main-col offset-md-3">
                	<div className="mb-4">
                       <form  onSubmit={handleSubmit} id="CustomerLoginForm" accept-charset="UTF-8" className="contact-form">	
                          <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="form-group">
                                    <label for="CustomerEmail">Email</label>
                                    <input type="email"   onChange={handleChange}  name='email'  value={email} id="CustomerEmail" className="" autocorrect="off" autocapitalize="off" autofocus=""/>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="form-group">
                                    <label for="CustomerPassword">Password</label>
                                    <input type="password" onChange={handleChange} name='password'   value={password} placeholder="" id="CustomerPassword" className=""/>                        	
                                </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="text-center col-12 col-sm-12 col-md-12 col-lg-12">
                                <input className="btn mb-3" type='submit'   value="Sign-in" style={{width:"25%"}}/>
                                <input className="btn mb-3" type="button" onClick={signInWithGoogle}  value="Sign In With Google" style={{backgroundColor:"#0000CD",marginLeft:"5px"}}/>
                                
                                <p className="mb-4">
									<a href="#" id="RecoverPassword">Forgot your password?</a> &nbsp; | &nbsp;
								    <a href="register.html" id="customer_register_link">Create account</a>
                                    
                                </p>

                                
                            </div>
                         </div>
                     </form>
                    </div>
               	</div>
            </div>
        </div>
        
    </div>
    </div>
    </body>
    );
}
export default Login;