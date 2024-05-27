import React from 'react'
// import { json } from 'react-router-dom';
// import { Link, json, redirect } from 'react-router-dom';
import EventForm from '../components/EventForm.js';
export default function NewEvent() {
  return (
    <>
    <EventForm method='post'/>
    </>
  )
}



// export async function action1({params}){
//   const eventId = params.eventId;
//   const response= await fetch('http:')
// }