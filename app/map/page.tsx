'use client';
import "./spinner.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    HomeIcon,
    CompassIcon,
    UserIcon,
    LogOutIcon,
} from "lucide-react";
import React, { useMemo } from "react";
import dynamic from "next/dynamic";


export default function MapLayout() {
    const Map = useMemo(() => dynamic(
        () => import('./Map'),
        {
            loading: () => <div className="h-screen bg-[#99cc00]"><div className="lds-circle"><div></div></div></div>,
            ssr: false
        }
    ), [])

    return (
        <div className="flex h-screen flex-col">
            <header className="flex h-16 items-center justify-between border-b px-4 py-8 bg-lime-700 z-50">
                <div className="flex items-center space-x-4">
                    <Link href="/" className="text-2xl font-bold">
                        Croc-watch
                    </Link>
                    <nav className="hidden md:flex space-x-4">
                        <Button variant="ghost" size="sm" className="text-muted-foreground">
                            <HomeIcon className="mr-2 h-4 w-4" />
                            Home
                        </Button>
                        <Button variant="ghost" size="sm" className="text-muted-foreground">
                            <CompassIcon className="mr-2 h-4 w-4" />
                            Explore
                        </Button>
                    </nav>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <div className="text-sm font-medium">
                            Points: <span className="text-primary">1250</span>
                        </div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    className="relative h-8 w-8 rounded-full"
                                >
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage
                                            src="/placeholder.svg?height=32&width=32"
                                            alt="@user"
                                        />
                                        <AvatarFallback>U</AvatarFallback>
                                    </Avatar>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56" align="end" forceMount>
                                <DropdownMenuLabel className="font-normal">
                                    <div className="flex flex-col space-y-1">
                                        <p className="text-sm font-medium leading-none">
                                            user@example.com
                                        </p>
                                        <p className="text-xs leading-none text-muted-foreground">
                                            User Account
                                        </p>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <Link href="/account">
                                    <DropdownMenuItem>
                                        <UserIcon className="mr-2 h-4 w-4" />
                                        <span>Profile</span>
                                    </DropdownMenuItem>
                                </Link>
                                <DropdownMenuItem>
                                    <LogOutIcon className="mr-2 h-4 w-4" />
                                    <span>Log out</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </header>
            <div className="z-0">
                <Map position={[-12.816248802483768, 131.7415618693958]} zoom={8} />
            </div>
        </div>
    );
}
