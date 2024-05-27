import { useEffect } from "react";
import classes from "./NewsletterSignup.module.css";

import { useFetcher } from "react-router-dom";
// import { Form } from "react-router-dom";
function NewsletterSignup() {
  const fetcher = useFetcher();
  const {data,state}=fetcher;
  console.log(fetcher)
  useEffect(()=>{
    if(state==='idle' && data && data.message){
      window.alert('SignUp Successful!');
    }
  },[data,state])
  return (
    <fetcher.Form 
      method="post" 
      action="/newsletter"
      className={classes.newsletter}
    >
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
