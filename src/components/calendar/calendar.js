import React from "react";
import Calendar from "react-calendar";
import Styles from "./styles";

export default function _Calendar(props) {
  const style = Styles[props.style];
  const [date, setDate] = React.useState(new Date());
  return (
    <div className={`calendar ${props.palette ? props.palette : props.style}`}>
      <Calendar
        calendarType={"US"}
        value={date}
        onChange={newDate => setDate(newDate)}
        onClickDay={date => {
          console.log(date);
        }}
        tileClassName={"tile"}
        tileContent={e => <div className={"content"}></div>}
        className={"body"}
        activeStartDate={new Date()}
      />
    </div>
  );
}
