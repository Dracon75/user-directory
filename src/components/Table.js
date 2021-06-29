import React, { Component } from "react";
import UserData from "./UserData";
import "../UserDirectory.css";



function Table({ categories, users, SortArray }) {
    return (
        <div className="datatable mt-5">
            <table
                id="table"
                className="table table-striped table-hover table-condensed"
            >
                <thead>
                    <tr>
                        {categories.map(({ name, width }) => {
                            return (
                                <th
                                    className="col"
                                    key={name}
                                    style={{ width }}
                                    onClick={() => {
                                        SortArray(name.toLowerCase());
                                    }}
                                >
                                    {name}
                                </th>
                            );
                        })}
                    </tr>
                </thead>

                <UserData users={users} />
            </table>
        </div>
    );
}

export default Table;
