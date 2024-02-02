import React from 'react'
import { useState } from 'react'

export const TableEmergency = () => {
  const [row, setRow] = useState("");
  return(
    <table>
      <tr>
        <th>#</th>
        <th>Emergencia</th>
        <th>Acciones</th>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
  );
};

