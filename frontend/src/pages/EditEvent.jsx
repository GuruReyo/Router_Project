import React from 'react';
import EventForm from '../components/EventForm.js';
import { useLoaderData, useRouteLoaderData } from 'react-router-dom';
export default function EditEvent() {
  const data=useRouteLoaderData('event-detail');
  // const event=data.event;
  return (
    <EventForm method='PATCH' event={data.event}/>
  )
}
