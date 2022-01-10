import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'
import 'animate.css';

export default function Success() {

store.addNotification({
    title: "Sucess!",
    message: "Your email  has been send",
    type: "success",
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 5000,
      onScreen: true
    },
    width:400
  });
}