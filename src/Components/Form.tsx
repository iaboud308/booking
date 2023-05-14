


import { useContext, useEffect } from 'react';
import { GlobalContext } from '../Context/GlobalContext';
import M from 'materialize-css'
// const M: any = window.M;




const Form = () => {


    const context: any = useContext(GlobalContext);

    useEffect(() => {
        let elems = document.querySelectorAll('.datepicker');
        let instances = M.Datepicker.init(elems, { disableWeekends: true, format: 'ddd mmm dd yyyy' });
        console.log(instances[0]);
    })



    return (
        <div>
             <div className = 'container'>
                 <form onSubmit = {context.formSubmit}>
                     <div className = 'input-field'>
                         <label>Full Name:</label>
                         <input type = 'text' name = 'fullName'></input>
                     </div>

                     <div className = 'input-field'>
                         <label>Email: </label>
                         <input type = 'text' name = 'email'></input>
                     </div>

                     <div className = 'input-field'>
                         <label>Select Date:</label>
                         <input type = 'text' className = 'datepicker' name = 'date'></input>
                     </div>

                     <input type = 'submit' value = 'Check Availability' className = 'btn' ></input>

                 </form>
             </div>
        </div>
    )
}

export default Form







// class Form extends Component<Component> {
//     static contextType: any = GlobalContext;
//     declare context: React.ContextType<typeof GlobalContext>

//     // componentDidMount() {
//     //     let elems = document.querySelectorAll('.datepicker');
//     //     let instances = M.Datepicker.init(elems, { disableWeekends: true, format: 'ddd mmm dd yyyy' });
//     //     console.log(instances[0]);
//     // }

//     render() {
//         return (
//             <div className = 'container'>
//                 <form onSubmit = {this.context.formSubmit}>
//                     <div className = 'input-field'>
//                         <label>Full Name:</label>
//                         <input type = 'text' name = 'fullName'></input>
//                     </div>

//                     <div className = 'input-field'>
//                         <label>Email: </label>
//                         <input type = 'text' name = 'email'></input>
//                     </div>

//                     <div className = 'input-field'>
//                         <label>Select Date:</label>
//                         <input type = 'text' className = 'datepicker' name = 'date'></input>
//                     </div>

//                     <input type = 'submit' value = 'Check Availability' className = 'btn' ></input>

//                 </form>
//             </div>
//         )
//     }
// }

// export default Form;