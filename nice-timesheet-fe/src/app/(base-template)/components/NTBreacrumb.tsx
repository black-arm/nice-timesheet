import React from 'react';
import { SidebarTrigger } from '@/shared/components/ui/sidebar';
import {TitlePageProps} from "@/app/(base-template)/models/TitlePageProps";
import {Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator} from "@/shared/components/ui/breadcrumb";

export const NTTitlePage = (
    { title}: TitlePageProps
) => {
  return (
    <div className="flex items-center space-x-2 lg:p-2 p-2">
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
      {/* Add breadcrumb items here */}
    </div>
  );
};