import React from 'react'
import styled from 'styled-components'



const StatusCard = (props) => {
    const Card = styled.div`
        width: 300px;
        height: 150px;
        color: white;
        margin: auto;
        text-align: center;
        background-color: ${props.status === "success" ? "green" : "red"};
  `;
  return (
    <div>
      {props.status==="success" && <Card>Success</Card>}
      {props.status==="error" && <Card>Error</Card>}
    </div>
  )
}

export default StatusCard
