'use client'
import React from 'react';
import {NTSidebar, NTTitlePage} from "@/app/(base-template)/components";
import {NTSidebarLinks} from "@/app/(base-template)/models";
import { User, Calendar } from "lucide-react";
import {usePathname} from "next/navigation";

const links: NTSidebarLinks = [
    {
        href: "/timesheet",
        icon: Calendar,
        label: "Timesheet",
    },
    {
        href: "/add-users",
        icon: User,
        label: "Users",
    }
]

const pathToTitleMap: { [key: string]: string } = {
    "/add-users": "Add Users",
    "/timesheet": "Timesheet",
    // Add more paths and titles as needed
};


const BaseTemplateLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const currentPath = usePathname();
    const title = pathToTitleMap[currentPath] || "Default Title"; // Default title if path not found

    return (
        <div className="flex">
            <NTSidebar links={links}></NTSidebar>
            <main>
                <NTTitlePage title={title} />
                {children}
            </main>
        </div>
    );
};

export default BaseTemplateLayout;