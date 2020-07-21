import momentTZ from "moment-timezone";
import moment from "moment";
const formatTime = (time) => {
  const convertedTime = momentTZ(time).tz("Asia/Taipei").format();

  return moment(convertedTime ).fromNow(); 
};

export default formatTime;