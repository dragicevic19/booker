import "./calendar.scss";
import React from 'react';

import {Scheduler, View, Resource} from 'devextreme-react/scheduler';
import { data, resourcesData } from './data.js';

const Calendar = () => {

  const currentDate = Date.now();
  const views = [{
    type: 'week',
    name: 'Week',
  }, {
    type: 'month',
    name: 'Month',
    maxAppointmentsPerCell: 1,
  }];

  // dovuci podatke sa beka:
  //  - rezervacije
  //  - brze rezervacije
  //  - rezervisane brze rezervacije
  //  - period nedostupnosti

  const onAppointmentFormOpening = (e) => {
    e.cancel = true
  }

  return (
    <Scheduler id="scheduler"
        dataSource={data}
        views={views}
        defaultCurrentView='Month'
        defaultCurrentDate={currentDate}
        firstDayOfWeek={1}
        onAppointmentFormOpening={onAppointmentFormOpening}
        >
        <Resource
          dataSource={resourcesData}
          fieldExpr="typeId"
          label="Type"
        />  

    </Scheduler>  
  )
}

export default Calendar
