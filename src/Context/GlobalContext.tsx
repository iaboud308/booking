

import React, { PropsWithChildren, createContext } from 'react';


const endpoint = `http://localhost:3002`;



const GlobalContext = createContext<any>(null);

class GlobalContextProvider extends React.Component<PropsWithChildren> {
    state = {
        user: null,
        selectedDate: null,
        selectedTime: null,
        availability: [
            {id: 0, timeSlot: 9, available: true},
            {id: 1, timeSlot: 10, available: true},
            {id: 2, timeSlot: 11, available: true},
            {id: 3, timeSlot: 12, available: true},
            {id: 4, timeSlot: 13, available: true},
            {id: 5, timeSlot: 14, available: true},
            {id: 6, timeSlot: 15, available: true},
            {id: 7, timeSlot: 16, available: true}
        ],
        refresh: false
    }

    formSubmit = (event: any) => {
        event.preventDefault();
        let newUser = {
            fullname: event.target.fullName.value,
            email: event.target.email.value
        }
        let chosenDate = event.target.date.value;
        this.setState({ user: newUser, selectedDate: chosenDate }, this.fetchAvailableTimes);
    }


    fetchAvailableTimes() {
        console.log(this.state);
        fetch(`${endpoint}/date/${this.state.selectedDate}`)
         .then( (response) => {
             return response.json();
         })
          .then( (result) => {
              console.log(result);
              this.setAvailability(result);

          })
           .catch( (error) => {
               console.log(error);
           })
    }

   
    checkAvailabilityInArray = (item: any, array: any) => {
        for (let i = 0; i < array.length; i++) {
          if (item === array[i].slot) {
            return true;
          } 
        }
        return false;
      };


    setAvailability = (result: any) => {
        const availableTimes = [...this.state.availability];
        const mappedArray = availableTimes.map( (slot) => {
            if (this.checkAvailabilityInArray(slot.timeSlot, result)) {
              slot.available = false;
              return slot;
            } else {
              slot.available = true;
              return slot;
            }
          });
        
        this.setState({ availability: mappedArray });
    }

    sendRequestToServer = () => {
        let requestBody = {
            user: this.state.user,
            selectedDate: this.state.selectedDate,
            selectedTime: this.state.selectedTime
        }
        console.log(requestBody);
        fetch(`${endpoint}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestBody)
        })
         .then( (response) => {
           return response.json()
         })
          .then( (result) => {
            console.log(result);
            this.setState({ refresh: false });
          })
           .catch( (error) => {
             console.log(error)
           })
      }

    bookAppointment = (time: any) => {
        console.log(time);
        this.setState({ selectedTime: time.timeSlot }, this.sendRequestToServer );
    }

    render() {
        return (
            <GlobalContext.Provider value = {{globalState: this.state, formSubmit: this.formSubmit, bookAppointment: this.bookAppointment}}>
                {this.props.children}
            </GlobalContext.Provider>
        )
    }
}


export default GlobalContextProvider;
export { GlobalContext };