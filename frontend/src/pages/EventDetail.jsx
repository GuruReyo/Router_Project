import React from 'react';
import { Await, defer, redirect, useRouteLoaderData } from 'react-router-dom';
import { Link, json, useLoaderData, useParams } from 'react-router-dom';
import EventItem from '../components/EventItem.js';
import EventsList from '../components/EventsList.js';
import { Suspense } from 'react';
export default function EventDetail() {
  const {event,events}=useRouteLoaderData('event-detail');
  // console.log(data);
  // const params=useParams();
  return (
    <>
    <Suspense fallback={<p style={{textAlign:'center'}}>Loading...</p>}>
    <Await resolve={event}>
      {(loadedEvent)=> <EventItem event={loadedEvent}/>}
    </Await>
    </Suspense>
    <Suspense>
    <Await resolve={events}>
      {(loadedEvents)=><EventsList events={loadedEvents}/>}
    </Await>
    </Suspense>
    {/* <h1>Events Detail Page</h1>
    <p>Event Id:{params.eventId}</p>
    <Link to='..'>Back</Link> */}

    
    
    </>
  )
}
async function loadEvent(id){
  const response=await fetch('http://localhost:8080/events/'+id);

  if(!response.ok){
    throw json({
      message:'An error occured in events fetching',
    },
  {
    status:500,
  })
  }else{
    const resData=await response.json();
    return resData.events;
  }

}
async function loadEvents(){
  const response = await fetch('http://localhost:8080/events');

  if(!response.ok){
    //..
    // return {isError : true,message:'Could not fetch the events...'};
    // throw {message:"an error occured"}
    // throw new Response(JSON.stringify({message:"Could not fetch events.",status:500}));
    throw json({message:'Could not fetch events.'},
      {
        status:500
      }
    );
  }else{
    // const resData=await response.json();
    // return resData.events;
    // return response.json();
    const resData=await response.json();
    return resData.events;
  }
}
export async function loader({request,params}){
  const id=params.eventId;
  return defer({
    event:await loadEvent(id),
    events:loadEvents(),
  });
}

export async function action({params,request}){
  const eventId=params.eventId;
  const response=await fetch('http://localhost:8080/events/'+eventId ,{
    // method:'DELETE'
    method:request.method,  
  });

  if(!response.ok){
    throw json(
      {message:'Could not delete event'},
      {
        status:500,
      }
    );
  };
  console.log("Error occured at this EventDetail")
  return redirect('/events');
}