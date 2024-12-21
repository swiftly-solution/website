import React from "react";

export interface Route {
    name: string;
    route: string;
    exact: boolean;
    node: React.ReactNode;
}