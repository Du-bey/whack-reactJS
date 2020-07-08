import React, { useState, useContext, Component } from "react";
import GlobalState from "../contexts/GlobalState";

export default function Totalbill() {
    const { billamount } = useContext(GlobalState);
    return (
        <h3>Total Bill: ${billamount}</h3>
    )
}
