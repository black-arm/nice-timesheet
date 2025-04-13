import React from 'react';
import { SidebarTrigger } from '@/shared/components/ui/sidebar';
import {TitlePageProps} from "@/app/(base-template)/models/TitlePageProps";
import {Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator} from "@/shared/components/ui/breadcrumb";
import {Sun} from "lucide-react";
import {Button} from "@/shared/components/ui/button";
import {useTheme} from "next-themes";

export const NTTitlePage = (
    { title}: TitlePageProps
) => {

    const { theme, setTheme } = useTheme()

  return (
    <div className="flex flex-row items-center lg:p-2 p-2 justify-between border-b">
        <div className="flex flex-row gap-4">
            <SidebarTrigger />
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                      <h1 className="text-lg font-bold">
                          NICE TIMESHEET
                      </h1>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <h1 className="text-lg font-bold uppercase">
                            {title}
                        </h1>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </div>
        <div>
            <Button size="icon" variant="outline" onClick={() => theme === 'dark' ?
                setTheme('light') :
                setTheme('dark')}
            >
                <Sun></Sun>
            </Button>
        </div>
    </div>

  );
};