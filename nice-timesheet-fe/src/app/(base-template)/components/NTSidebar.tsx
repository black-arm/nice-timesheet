'use client';

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup, SidebarGroupContent,
    SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar
} from "@/shared/components/ui/sidebar";
import Link from "next/link";
import {NTSidebarProps} from "@/app/(base-template)/models/NTSidebarProps";
import {NTSidebarLink} from "@/app/(base-template)/models";
import {usePathname} from "next/navigation";
import {Avatar, AvatarImage, AvatarFallback} from "@/shared/components/ui/avatar";
import {BadgeCheck, Bell, ChevronsUpDown, CreditCard, LogOut, Sparkles} from "lucide-react";
import Image from "next/image";
import {
    DropdownMenu, DropdownMenuGroup, DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger, DropdownMenuContent
} from "@/shared/components/ui/dropdown-menu";

export const NTSidebar = ({ links } : NTSidebarProps) => {

    const currentPath = usePathname();

    const { open, isMobile } = useSidebar();

    return (
        <Sidebar collapsible="icon">
            <SidebarHeader>
                <Link href="/">
                    <div className='flex justify-center'>
                        <Image src={open ? '/new-logo.png' : '/new-small-logo.png'} alt='logo' width={128} height={64} />
                    </div>
                </Link>
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
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton
                                    size="lg"
                                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                                >
                                    <Avatar className="h-8 w-8 rounded-lg">
                                        <AvatarImage src='https://ui.shadcn.com/avatars/shadcn.jpg' alt='Morty Smith' />
                                        <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                                    </Avatar>
                                    <div className="grid flex-1 text-left text-sm leading-tight">
                                        <span className="truncate font-semibold">Morty Smith</span>
                                        <span className="truncate text-xs">m.smith@innen.eu</span>
                                    </div>
                                    <ChevronsUpDown className="ml-auto size-4" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                                side={isMobile ? "bottom" : "right"}
                                align="end"
                                sideOffset={4}
                            >
                                <DropdownMenuLabel className="p-0 font-normal">
                                    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                        <Avatar className="h-8 w-8 rounded-lg">
                                            <AvatarImage src='https://ui.shadcn.com/avatars/shadcn.jpg' alt='Morty Smith' />
                                            <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                                        </Avatar>
                                        <div className="grid flex-1 text-left text-sm leading-tight">
                                            <span className="truncate font-semibold">Morty Smith</span>
                                            <span className="truncate text-xs">m.smith@innen.it</span>
                                        </div>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <Sparkles />
                                        Upgrade to Pro
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <BadgeCheck />
                                        Account
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <CreditCard />
                                        Billing
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Bell />
                                        Notifications
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <LogOut />
                                    Log out
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
};