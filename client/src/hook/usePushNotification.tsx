// import { useRef } from 'react';

// const usePushNotification = () => {
//   const notificationRef = useRef(null);

//   if (!Notification) {
//     return;
//   }

//   const requestPermission = async () => {
//     if (window.Notification.permission !== 'granted') {
//       try {
//         await Notification.requestPermission();
//         const permission = window.Notification.permission;
//         if (permission !== 'granted') return;
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   };

//   requestPermission();

//   const setNotificationClickEvent = () => {
//     notificationRef.current.onclick = (event) => {
//       event.preventDefault();
//       window.focus();
//       notificationRef.current.close();
//     };
//   };

//   const fireNotification = (title, options) => {
//     const newOption = {
//       badge: '',
//       icon: '',
//       ...options,
//     };

//     notificationRef.current = new Notification(title, newOption);

//     setNotificationClickEvent();
//   };

//   return { fireNotification };
// };

// export default usePushNotification;
