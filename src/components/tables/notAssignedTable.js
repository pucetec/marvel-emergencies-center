import React from "react";
import { useEmergencyContext } from "../../context/EmergencyContext";

const notAssignedTable = () => {
  const { emergencyList } = useEmergencyContext();
  return (
    <table>
      <tr>
        <th>#</th>
        <th>Emergencia</th>
        <th>Acciones</th>
      </tr>
      {emergencyList.map()}
    </table>
  );
};

export default notAssignedTable;
