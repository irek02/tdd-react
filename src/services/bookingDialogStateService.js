import { BehaviorSubject } from 'rxjs'

const state$ = new BehaviorSubject({ open: false, home: null });

const bookingDialogStateService = {
  open: (home) => state$.next({ open: true, home }),
  close: () => state$.next({ open: false, home: null }),
  state$: state$.asObservable(),
};

export default bookingDialogStateService;
