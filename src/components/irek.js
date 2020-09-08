import { BehaviorSubject } from 'rxjs'

const irek$ = new BehaviorSubject({ open: false, home: null });

export const homesDialogService = {
  open: (home) => irek$.next({ open: true, home }),
  close: () => irek$.next({ open: false, home: null }),
  state$: irek$.asObservable(),
};
