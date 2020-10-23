import React from 'react';

export default function Header() {
  return (
    <div>
      <nav class="py-3 border-bottom navbar navbar-expand navbar-light">
        <a href="#/" data-testid="logo" class="navbar-brand">
          <img src="logo192.png" width="40" alt="" />
        </a>
        <form data-testid="search" class="mr-auto w-50 form-inline">
          <input placeholder="Search homes" type="text" class="w-50 form-control" />
        </form>
        <div class="ml-auto text-uppercase navbar-nav" data-testid="menu">
          <a href="#home" data-rb-event-key="#home" class="nav-link">Become a host</a>
          <a href="#link" data-rb-event-key="#link" class="nav-link">Help</a>
          <a href="#link" data-rb-event-key="#link" class="nav-link">Sign up</a>
          <a href="#link" data-rb-event-key="#link" class="nav-link">Login</a>
        </div>
      </nav>
      <div class="m-0 px-4 py-2 container-fluid mw-100 border-bottom container">
        <button data-testid="home-type" type="button" class="text-nowrap mr-4 py-1 btn btn-outline-secondary">
          Home type
        </button>
        <button data-testid="dates" type="button" class="text-nowrap mr-4 py-1 btn btn-outline-secondary">
          Dates
        </button>
        <button data-testid="guests" type="button" class="text-nowrap mr-4 py-1 btn btn-outline-secondary">
          Guests
        </button>
        <button data-testid="price" type="button" class="text-nowrap mr-4 py-1 btn btn-outline-secondary">
          Price
        </button>
        <button data-testid="rooms" type="button" class="text-nowrap mr-4 py-1 btn btn-outline-secondary">
          Rooms and beds
        </button>
        <button data-testid="amenities" type="button" class="text-nowrap mr-4 py-1 btn btn-outline-secondary">
          Amenities
        </button>
      </div>
    </div>
  );
}
