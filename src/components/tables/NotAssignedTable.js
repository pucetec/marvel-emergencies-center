import React from "react";
import { useEmergencyContext } from "../../context/EmergencyContext";
import DeleteButton from "../../common/Icons/DeleteButton";
import AssignButton from "../../common/Icons/AssignButton";

const NotAssignedTable = () => {
  const { emergencyList } = useEmergencyContext();
  return (
    <table>
      <tr>
        <th>#</th>
        <th>Emergencia</th>
        <th>Acciones</th>
      </tr>
      {emergencyList.map((item, i) => (
        <tr>
          <td>{i + 1}</td>
          <td>{item.emergency}</td>
          <td>
            <AssignButton />
            <DeleteButton />
          </td>
        </tr>
      ))}
    </table>
  );
};

export default NotAssignedTable;
