import React from 'react';

export default function HomeBooking(props) {

  return (
    <>
      { props.home ? props.home.title : null }
    </>
  );

}
