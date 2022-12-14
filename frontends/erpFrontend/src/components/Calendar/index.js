import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { useState } from "react";
class Index extends Component {

    const [events, setEvents] = useState([]);

    const handleSelect = (info) => {
        const { start, end } = info;
        const eventNamePrompt = prompt("Enter, event name");
        if (eventNamePrompt) {
            setEvents([
                ...events,
                {
                    start,
                    end,
                    title: eventNamePrompt,
                    id: uuid(),
                },
            ]);
        }
    };
    render() {
        return (
            <div className="App">
                <FullCalendar
                    editable
                    selectable
                    headerToolbar={{
                        start: "today prev next",
                        end: "dayGridMonth dayGridWeek dayGridDay",
                    }}
                    defaultView="dayGridMonth"
                    plugins={[ dayGridPlugin ]}
                    events={[
                        {id:1, title:'event1', date:'2022-12-13',color:'red'},
                        {id:2, title:'event2', date:'2022-12-14'},
                    ]}

                />
            </div>
        );
    }
}
export default Index;
