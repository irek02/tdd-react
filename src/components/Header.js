import React from 'react';

export default function Header() {
  return (
    <div>
      <nav className="py-3 border-bottom navbar navbar-expand navbar-light">
        <a data-testid="logo" href="/#" className="navbar-brand">
          <img src="logo192.png" width="40" alt="" />
        </a>
        <form data-testid="search" className="mr-auto w-50 form-inline">
          <input placeholder="Search homes" type="text" className="w-50 form-control" />
        </form>
        <div data-testid="menu" className="ml-auto text-uppercase navbar-nav">
          <a href="#home" className="nav-link">Become a host</a>
          <a href="#link" className="nav-link">Help</a>
          <a href="#link" className="nav-link">Sign up</a>
          <a href="#link" className="nav-link">Login</a>
        </div>
      </nav>
      <div className="m-0 px-4 py-2 container-fluid mw-100 border-bottom container">
        <button data-testid="home-type" type="button" className="text-nowrap mr-4 py-1 btn btn-outline-secondary">
          Home type
        </button>
        <button data-testid="dates" type="button" className="text-nowrap mr-4 py-1 btn btn-outline-secondary">
          Dates
        </button>
        <button data-testid="guests" type="button" className="text-nowrap mr-4 py-1 btn btn-outline-secondary">
          Guests
        </button>
        <button data-testid="price" type="button" className="text-nowrap mr-4 py-1 btn btn-outline-secondary">
          Price
        </button>
        <button data-testid="rooms" type="button" className="text-nowrap mr-4 py-1 btn btn-outline-secondary">
          Rooms
        </button>
        <button data-testid="amenities" type="button" className="text-nowrap mr-4 py-1 btn btn-outline-secondary">
          Amenities
        </button>
      </div>
    </div>
  );
}
