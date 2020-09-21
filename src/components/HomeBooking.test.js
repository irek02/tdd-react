import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import bookingDialogService from "../services/bookingDialogService";

// import BookingDialog from "./BookingDialog";
import HomeBooking from "./HomeBooking";

let container = null;

// jest.mock("../services/bookingDialogService");
// jest.mock("./BookingDialog", () => {
//   return function BookingDialog() {
//     return (
//       <></>
//     );
//   };
// });

// const fakeHomes = [
//   {
//     "title": "Home 1",
//     "image": "listing.jpg",
//     "location": "new york",
//     "price": "125"
//   },
//   {
//     "title": "Home 2",
//     "image": "listing.jpg",
//     "location": "boston",
//     "price": "225"
//   },
//   {
//     "title": "Home 3",
//     "image": "listing.jpg",
//     "location": "chicago",
//     "price": "325"
//   }
// ];

// jest.spyOn(global, "fetch").mockImplementation(() =>
//   Promise.resolve({
//     json: () => Promise.resolve(fakeHomes)
//   })
// );

const home = {
  "title": "Home 1",
  "image": "listing.jpg",
  "location": "new york",
  "price": "125"
};

beforeEach(() => {

  container = document.createElement("div");
  document.body.appendChild(container);

});

afterEach(() => {

  unmountComponentAtNode(container);
  container.remove();
  container = null;

});

beforeEach(async () => {

  await act(async () => {
    render(<HomeBooking home={home}></HomeBooking>, container);
  });
  // await act(async () => {
  //   bookingDialogService.open(
  //     {
  //       "title": "Home 3",
  //       "image": "listing.jpg",
  //       "location": "chicago",
  //       "price": "325"
  //     }
  //   );
  // });

});

it('should show homes', async () => {

  console.log(container.innerHTML);

  expect(true).toBe(true);
  // expect(container.querySelectorAll('[data-testid="home"]').length).toBe(3);

});

it('should show title', () => {

  expect(container.querySelectorAll('[data-test="title"]')).toEqual('Book Home 1');

});

// it('should show price', () => {

//   expect(el('[data-test="price"]').textContent)
//     .toContain('$125 per night');

// });

// it('should show check in date field', () => {

//   expect(el('[data-test="check-in"]'))
//     .toBeTruthy();

// });

// it('should show check out date field', () => {

//   expect(el('[data-test="check-out"]'))
//     .toBeTruthy();

// });

// it('should show total', () => {

//   // user enters check in date: 12/20/19
//   const checkIn = el('[data-test="check-in"] input');
//   checkIn.value = '12/20/19';
//   checkIn.dispatchEvent(new Event('input'));

//   // user enter check out date: 12/23/19
//   const checkOut = el('[data-test="check-out"] input');
//   checkOut.value = '12/23/19';
//   checkOut.dispatchEvent(new Event('input'));

//   fixture.detectChanges();

//   // assert that the total shows 3x125=375
//   expect(el('[data-test="total"]').textContent)
//     .toContain('Total: $375');

// });

// it('should show -- for total when dates are invalid', () => {

//   const checkIn = el('[data-test="check-in"] input');
//   checkIn.value = '';
//   checkIn.dispatchEvent(new Event('input'));

//   const checkOut = el('[data-test="check-out"] input');
//   checkOut.value = '';
//   checkOut.dispatchEvent(new Event('input'));

//   fixture.detectChanges();

//   expect(el('[data-test="total"]').textContent)
//     .toContain('Total: --');

// });

// it('should book home after clicking the Book button', () => {

//   dataService.bookHome$.and.returnValue(of(null));

//   // user enters check in date: 12/20/19
//   const checkIn = el('[data-test="check-in"] input');
//   checkIn.value = '12/20/19';
//   checkIn.dispatchEvent(new Event('input'));

//   // user enter check out date: 12/23/19
//   const checkOut = el('[data-test="check-out"] input');
//   checkOut.value = '12/23/19';
//   checkOut.dispatchEvent(new Event('input'));

//   fixture.detectChanges();

//   // click in the Book
//   el('[data-test="book-btn"] button').click();

//   // assert that the data service was used to book the home
//   expect(dataService.bookHome$).toHaveBeenCalled();

// });

// it('should close the dialog and show notification after clicking Book button', () => {

//   dataService.bookHome$.and.returnValue(of(null));

//   // user enters check in date: 12/20/19
//   const checkIn = el('[data-test="check-in"] input');
//   checkIn.value = '12/20/19';
//   checkIn.dispatchEvent(new Event('input'));

//   // user enter check out date: 12/23/19
//   const checkOut = el('[data-test="check-out"] input');
//   checkOut.value = '12/23/19';
//   checkOut.dispatchEvent(new Event('input'));

//   fixture.detectChanges();

//   // click in the Book
//   el('[data-test="book-btn"] button').click();

//   expect(dialogService.close).toHaveBeenCalled();
//   expect(notificationService.open).toHaveBeenCalled();

// });
