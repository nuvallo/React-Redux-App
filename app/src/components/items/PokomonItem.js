import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PersonItem = ({ pokomon }) => {
  return (
    <PokomonCard>
      {pokomon.map(pokomon => {
        return (
          <div className="card">
            <h1>{pokomon.name}</h1>
            <Link to={`/pokomon/${pokomon.name}`} className="link">
              Click for more
            </Link>
          </div>
        );
      })}
    </PokomonCard>
  );
};

const PokomonCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .card {
    max-width: 400px;
    text-align: center;
    background: orange;
    color: #fff;
    margin: 1%;
    padding: 5%;

    .link {
      color: #fff;
      text-decoration: none;
      font-size: 18px;
    }
  }
`;

export default PersonItem;
