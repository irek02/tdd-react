import { Snackbar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import notificationService from '../services/notificationService';

export default function Notification() {

  const [notificationState, setNotificationState] = useState({ open: false });

  useEffect(() => {

    const subscription = notificationService.events$
      .subscribe(notification => setNotificationState(notification));

    return () => subscription.unsubscribe();

  });

  return (
    <Snackbar
      open={ notificationState.open }
      onClose={ () => notificationService.close() }
      message={ notificationState.message }
      autoHideDuration={ 3000 }
    />
  );
}
