import TableMobileCell from "./TableMobileCell";
import TableMobileHeader from "./TableMobileHeader";
import PropTypes from "prop-types";

function PersonalStaffMobileTable(props) {
  return (
    <div className="py-3 align-middle inline-block min-w-full px-5">
      <div className="shadow overflow-hidden border-b border-gray-200 rounded-lg">
        <table className="min-w-full">
          <tbody className="bg-white ">
            <tr className="even:bg-gray-100">
              <TableMobileHeader value="Name" />
              <TableMobileCell value={props.name} />
            </tr>

            <tr className="even:bg-gray-100">
              <TableMobileHeader value="Occupation" />
              <TableMobileCell value={props.occupation} />
            </tr>
            <tr className="even:bg-gray-100">
              <TableMobileHeader value="Photo" />              
              <td className="px-3 py-3 md:py-4 whitespace-normal">
                <img src={props.image} alt="Person Image" />    
              </td> 
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

PersonalStaffMobileTable.propTypes = {
  Name: PropTypes.string.isRequired,
  Occupation: PropTypes.string.isRequired,
};
export default PersonalStaffMobileTable;