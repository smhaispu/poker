import {Button,StyledSignInPage} from './LandingPage.style'
import { signInWithGoogle } from "../utils/firebase.utils";


const SignInPage = () =>{
return  <StyledSignInPage>
<h1>Please Sign In Using Google</h1>
<Button onClick={signInWithGoogle}>Sign In with Google</Button>
</StyledSignInPage>
}
export default SignInPage;