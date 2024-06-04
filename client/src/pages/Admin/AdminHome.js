import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
      <p>
    As an administrator, you have the crucial responsibility of overseeing the blood bank operations to ensure efficient and effective management of blood donations, inventory, and distribution. This system is designed to streamline your tasks and provide you with the tools necessary to manage the blood bank seamlessly.
</p>

<h2>Dashboard</h2>
<p>Your dashboard provides a comprehensive overview of the current status and activities within the blood bank. Here, you can quickly access important metrics, including:</p>

<h2>Donor Management</h2>
<ul>
    <li>View and update the donor list</li>
    <li>Track donor history and eligibility status</li>
    <li>Contact donors for upcoming blood drives and urgent needs</li>
</ul>

<h2>Hospital Management</h2>
<p>Ensure seamless coordination with hospitals requiring blood supplies. You can:</p>
<ul>
    <li>View and manage the list of affiliated hospitals</li>
    <li>Approve and process blood requests from hospitals</li>
    <li>Track blood shipments and deliveries</li>
</ul>

<h2>Organization Management</h2>
<p>Collaborate with various organizations to support blood donation campaigns and events. You can:</p>
<ul>
    <li>View and manage the list of partner organizations</li>
    <li>Coordinate with organizations for blood donation drives</li>
    <li>Maintain records of partnerships and collaborations</li>
</ul>

        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
