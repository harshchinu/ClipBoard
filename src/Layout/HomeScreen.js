import React,{Component} from 'react';
import AppbarCo from './AppBar/Appbar';
import App from '../Containers/App';
import GoogleLogin from 'react-google-login';

class Layout extends Component{


    state=({
        userSignedIn:false
    })

    signup(res){
        let postdata;
        if(res){
        postdata ={
            name: res.profileObj.name,
            email:res.profileObj.email
                    
        }
    }


if(postdata){
    sessionStorage.setItem("userdata",JSON.stringify(postdata));
    this.setState({userSignedIn:true});
    
}

}





    
render(){
    
    const responseGoogle = (response) => {
        console.log("google console");
        console.log(response);
        this.signup(response);
        //this.signup(response, 'google');
    }

    let Appjs= null;
    
   if(this.state.userSignedIn || sessionStorage.getItem("userdata")){
     Appjs=<App/>
    }
    
    return(
        <div>
        <AppbarCo title="ClipBoard" username="Chinu"/>
        {Appjs}

        <GoogleLogin
clientId="502757580834-9evok99ilo57je9mo6hciqpprf35thqa.apps.googleusercontent.com"
buttonText="Login with Google"
onSuccess={responseGoogle}
onFailure={responseGoogle}/>
        </div>
    );
}
}

export default Layout;