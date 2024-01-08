import React from "react";

function Card1() {
  return (
    <>
      <div className="card">
        <p className="card-text">FREE</p>
        <h1 className="card-title">$0/month</h1>
        <hr />
        <ul>
          <li>Single User</li>
          <li>50GB Storagre</li>
          <li>Unlimited Public Project</li>
          <li>Community Access</li>
          <li className="card-dis">Unlimited Private Project</li>
          <li className="card-dis">Dedicated Phone Support</li>
          <li className="card-dis">Free Subdomain</li>
          <li className="card-dis">Monthly Status Report</li>
        </ul>
        <button className="card-btn-dis">Button</button>
      </div>
    </>
  );
}

export default Card1;
