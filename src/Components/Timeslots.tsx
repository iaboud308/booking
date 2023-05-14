


import { GlobalContext } from '../Context/GlobalContext';
import TimeSlot from './Timeslot';

const TimeSlots = (props: any) => {
    return (
        <GlobalContext.Consumer>{(context) => {
            return (
                <div className = 'container'>
                    <h4>Available Slots</h4>
                    <div className = 'row'>
                    {context.globalState.availability.map((timeSlot: any) => {
                        return <TimeSlot key = {timeSlot.timeSlot} timeSlot = {timeSlot} bookAppointment = {context.bookAppointment}/>
                    })}
                </div>
                </div>
            )
        }}</GlobalContext.Consumer>      
    )
}

export default TimeSlots;