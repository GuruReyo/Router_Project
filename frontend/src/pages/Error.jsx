import React from 'react';
import { useRouteError } from 'react-router-dom';
import PageContent from '../components/PageContent.js';
import MainNavigation from '../components/MainNavigation.js';
export default function ErrorPage() {
    const error=useRouteError();
    // error.status
    let title="An error Occured";
    let message="Something went wrong";
    if(error.status===500){
      message=error.data.message;
    }

    if(error.status===404){
      title='Not Found';
      message='Could Not find resource or page.';
    }
    if(error.status===600){
      message=error.data.message;
    }

    
  return <>
    <MainNavigation />
  <PageContent title={title}>
    <p>{message}</p>
  </PageContent>
  </>
    
  
}
