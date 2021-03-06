import rectangle from "./_rectangle";
import sphere from "./_sphere";
import curve from "./_curve";

export default (Canvas) => ({
  rectangle: rectangle(Canvas),
  sphere: sphere(Canvas),
  curve: curve(Canvas),
});
