import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchAll } from "../redux/actions/userData";

const FetchNorma = () => {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  const store = useSelector(
    (store) => store?.data?.userData?.data?.other_mandi
  );
  const admin = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    dispatch(fetchAll());
  }, []);

  return (
    <div>
      <h1>{admin ? "Private Data" : "Public Data"}</h1>
      {store?.map((data) => (
        <div key={data?.id}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <p>{data?.hindi_name}</p>
            <p>{data?.district}</p>
            <p>{data?.market}</p>
            <p>{data?.url_str}</p>
          </div>
          <img
            style={{ height: "100px", width: "100px", textAlign: "center" }}
            src={data?.image}
            alt="madni"
          />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default FetchNorma;
