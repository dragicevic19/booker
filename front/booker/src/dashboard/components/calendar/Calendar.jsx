// import React from 'react'
// // import { DateRangePicker } from 'react-date-range';

// // const Calendar = () => {

// //   const min = '2022-05-26T00:00';
// //   const max = '2022-11-26T00:00';
// //   const [singleLabels, setSingleLabels] = React.useState([]);
// //   const [singleInvalid, setSingleInvalid] = React.useState([]);
      
// //   // const onPageLoadingSingle = React.useCallback((event) => {
// //   //     getPrices(event.firstDay, (bookings) => {
// //   //         setSingleLabels(bookings.labels);
// //   //         setSingleInvalid(bookings.invalid);
            
// //   //     });
// //   // }, []);
      
// //   const getPrices = (d, callback) => {
// //       const invalid = [];
// //       const labels = [];
  
// //       // getJson('//trial.mobiscroll.com/getprices/?year=' + d.getFullYear() + '&month=' + d.getMonth(), (bookings) => {
// //       //     for (const booking of bookings) {
// //       //         const d = new Date(booking.d);
  
// //       //         if (booking.price > 0) {
// //       //             labels.push({
// //       //                 start: d,
// //       //                 title: '$' + booking.price,
// //       //                 textColor: '#e1528f'
// //       //             });
// //       //         } else {
// //       //             invalid.push(d);
// //       //         }
// //       //     }
// //       //     callback({ labels, invalid });
// //       // }, 'jsonp');
// //   }
           
// //   return (
// //     <DateRangePicker 
// //         controls={['calendar']}
// //         min={min}
// //         max={max}
// //         labels={singleLabels}
// //         invalid={singleInvalid}
// //         // onPageLoading={onPageLoadingSingle}
// //     />
// //   )
// // }

// // export default Calendar



// import { Eventcalendar, getJson, toast } from '@mobiscroll/react';

// function Calendar() {

//     const [myEvents, setEvents] = React.useState([]);

//     React.useEffect(() => {
//         getJson('https://trial.mobiscroll.com/events/?vers=5', (events) => {
//             setEvents(events);
//         }, 'jsonp');
//     }, []);
    
//     const onEventClick = React.useCallback((event) => {
//         toast({
//             message: event.event.title
//         });
//     }, []);
    
//     const view = React.useMemo(() => {
//         return {
//             calendar: { labels: true }
//         };
//     }, []);

//     return (
//         <Eventcalendar
//             theme="ios" 
//             themeVariant="light"
//             clickToCreate={false}
//             dragToCreate={false}
//             dragToMove={false}
//             dragToResize={false}
//             data={myEvents}
//             view={view}
//             onEventClick={onEventClick}
//        />
//     ); 
// }

// export default Calendar
