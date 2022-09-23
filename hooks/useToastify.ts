import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const useToastify = ()=>{
    const notifyEdit = () => toast.success("Update",{ autoClose: 1000 });
    const notifyAdd = () => toast.success("Se ha agregado!",{ autoClose: 1000 });
    const notifyElimi= () => toast.success("Se ha eliminado",{ autoClose: 1000 });


    return {
        notifyEdit,
        notifyAdd,
        notifyElimi
    }
}