

import GlobalContextProvider from '../Context/GlobalContext';
import Form from './Form';
import TimeSlots from './Timeslots';

const Main = (props: any) => {
    return (
        <GlobalContextProvider>
            <Form />
            <TimeSlots />
        </GlobalContextProvider>
    )
}

export default Main;