'use client';

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup, SidebarGroupContent,
    SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem
} from "@/shared/components/ui/sidebar";
import Link from "next/link";
import {NTSidebarProps} from "@/app/(base-template)/models/NTSidebarProps";
import {NTSidebarLink} from "@/app/(base-template)/models";
import {usePathname} from "next/navigation";
import {Avatar, AvatarImage, AvatarFallback} from "@/shared/components/ui/avatar";
import {ChevronsUpDown} from "lucide-react";

export const NTSidebar = ({ links } : NTSidebarProps) => {

    const currentPath = usePathname();

    return (
        <Sidebar collapsible="icon">
            <SidebarHeader>
                <Link href="/">Logo</Link>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {links.map((link: NTSidebarLink, index: number) => (
                                <SidebarMenuItem key={index} className='cursor-copy'>
                                    <SidebarMenuButton asChild isActive={currentPath === link.href}>
                                        <Link className='flex gap-1' href={link.href}>
                                            <link.icon size={16} strokeWidth={2}/>
                                            {link.label}
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild className='p-4 !cursor-pointer'>
                            <div className="flex py-6 justify-between">
                                <div className='flex gap-2'>
                                    <Avatar className='rounded-md'>
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium">John Doe</span>
                                        <span className="text-xs text-muted-foreground">Admin</span>
                                    </div>
                                </div>
                                <ChevronsUpDown size={16} strokeWidth={1.5} />
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
};