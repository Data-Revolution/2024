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
import Image from 'next/image';
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
            <header className="flex h-16 items-center justify-between border-b px-4 py-8 bg-lime-700">
                <div className="flex items-center space-x-4">
                    <a href="/" className="inline-flex text-2xl font-display text-white">
                        <Image
                            src="/images/croc-spot-circle.png"
                            width={32}
                            height={32}
                            alt="Crocodile Logo"
                        />
                        Croc-Spot
                    </a>
                    <nav className="hidden md:flex space-x-4">
                        <a href="/map">
                            <Button variant="ghost" size="sm" className="text-muted-foreground text-white font-display">
                                <HomeIcon className="mr-2 h-4 w-4 " />
                                Home
                            </Button>
                        </a>
                        <a href="/map">
                            <Button variant="ghost" size="sm" className="text-muted-foreground text-white font-display">
                                <CompassIcon className="mr-2 h-4 w-4" />
                                Explore
                            </Button>
                        </a>
                    </nav>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <div className="text-sm font-medium text-white font-display">
                            Points: <span className="text-primary text-white">1250</span>
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
