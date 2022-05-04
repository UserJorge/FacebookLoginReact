import './App.css';
import FacebookLogin from 'react-facebook-login';

function App() {
  const responseFacebook = (response) => {
 console.log(response);
  }

  return (
    <FacebookLogin
    appId="1344306619381647"
    autoLoad={true}
    fields="name,email,picture"
    textButton='Iniciar sesión con facebook'
    callback={responseFacebook} 
    icon="fa-facebook"
    />
  );
}




export default App;
