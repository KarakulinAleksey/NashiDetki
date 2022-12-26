const baseUrl = 'http://localhost:3000';
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",

}

function SignIn(){
  const buttonSingIn = document.querySelector('.header__menu-button-sugnin');
  buttonSingIn.addEventListener('click',()=>{
    console.log('Начало запроса');
    _regSignIn();
  })
}

const SignUp = () => {
  const buttonSignUp = document.querySelector('.header__menu-button-sugnup');
  buttonSignUp.addEventListener('click',()=>{
    console.log('click singUp');
    _regSignUp();
  })
}



function _checkResponse(res){
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
}

function regSignUp( name, email, password ){
  fetch(`${baseUrl}/signup`,{
    method: "POST",
    headers: headers,
    credentials: 'include',
    body: JSON.stringify({
      name: name,
      email: email,
      password: password
    })
  })
  .then(_checkResponse)
  .then((par)=>{
    console.log(par);
  })
}

function regSignIn(email, password){
  fetch(`${baseUrl}/signin`,{
    method: "POST",
    headers: headers,
    credentials: 'include',
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
    .then(_checkResponse)
    .then((post)=>{
      console.log(post);
    })
    .finally(()=>{
      console.log('Конец запроса')
    })
}



export { regSignIn, regSignUp};
