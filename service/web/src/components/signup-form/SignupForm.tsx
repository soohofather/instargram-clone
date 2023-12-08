import { useForm, RegisterOptions } from 'react-hook-form';

// External modeuls
import axios from 'axios';


const SignupForm = () => {
  const emailOpts: RegisterOptions = {
    required: true,
    // email regex 정규표현식 검색
    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  }
  const usernameOpts: RegisterOptions = {
    required: true,
    minLength: 6
  }
  const passwordOpts: RegisterOptions = {
    required: true,
    minLength: 8
  }

  const { register, handleSubmit, formState: {  isValid } } = useForm({ mode: 'onChange'});

  const submit = (data: any) => {
    console.log(data);
    axios.post('http://localhost:9998/users/signup/', data)
      // 200번대 진행
      .then((resp)=>{
        console.log(resp);
      })
      // 그 외 진행
      .catch((error)=>{
        console.log(error);
      })
    console.log("Hello");
    
  }

  return (
    <form className="signup-form" onSubmit={handleSubmit(submit)}>
      <img className="form-logo" src="logo.png" alt="logo.png"/>
      <input className="form-input" type="text" {...register("email", emailOpts)} placeholder="이메일"/>
      <input className="form-input" type="text" {...register("username", usernameOpts)} placeholder="사용자이름"/>
      <input className="form-input" type="password" {...register("password", passwordOpts)} placeholder="비밀번호"/>
      <button className="form-btn form-btn-blue" type="submit" disabled={!isValid}>가입</button>
    </form>
  )

}

export default SignupForm;