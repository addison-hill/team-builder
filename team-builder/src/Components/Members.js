import React from "react";

const Members = props => {
    console.log("members", props);
    return(
        <div className="member-list">
            {props.membersList.map((member, index) => {
                return (
                    <div className="member" key={index}>
                        <button className="edit">Edit Member</button>
                        <h2>{member.name}</h2>
                        <p>{member.email}</p>
                        <p>{member.role}</p>
                    </div>
                );
            })}
        </div>
    );
};
export default Members