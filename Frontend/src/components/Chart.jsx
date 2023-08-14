import "../assets/styles/chart.scss"
import AddCard from "./AddCard";
import  {AiOutlineDeliveredProcedure} from "react-icons/ai"
function Chart() {
  return (
    <>
      {/* <!-- Characteristics --> */}
      <div className="characteristics">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <AddCard title="Fast Delivery" subtitle="within 30 min" icon={<AiOutlineDeliveredProcedure/>}/>
            <AddCard title="Fast Delivery" subtitle="within 30 min" icon={<AiOutlineDeliveredProcedure/>}/>
            <AddCard title="Fast Delivery" subtitle="within 30 min" icon={<AiOutlineDeliveredProcedure/>}/>
          </div>
        </div>
      </div>
      {/* <!-- Char. Item --> */}
    </>
  );
}

export default Chart;
