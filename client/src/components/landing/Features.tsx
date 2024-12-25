import { Card, CardContent, CardHeader, CardTitle } from "@/elements/Card";
import { AnchorIcon, BrainCogIcon, ClockIcon, Code2Icon, CodeIcon, CodeSquareIcon, CogIcon, ComputerIcon, DatabaseIcon, FileIcon, FilesIcon, GlobeIcon, LaptopIcon, ListIcon, MemoryStickIcon, MenuIcon, MessageSquareIcon, PuzzleIcon, UserIcon, UsersIcon } from "lucide-react";

interface FeatureProps {
    icon: JSX.Element;
    title: string;
    description: string;
}

const features: FeatureProps[] = [
    {
        icon: <ListIcon />,
        title: "Logging System",
        description: "A simple and useful logging system."
    },
    {
        icon: <GlobeIcon />,
        title: "Translation",
        description: "A simple and powerful tool for adding multi-language to your plugin."
    },
    {
        icon: <CogIcon />,
        title: "Configuration",
        description: "Easy configuration implemented using JSON files."
    },
    {
        icon: <FilesIcon />,
        title: "Files",
        description: "A file management API allowing you to do any modification, including compression."
    },
    {
        icon: <LaptopIcon />,
        title: "Commands",
        description: "Creation of custom commands via Plugins."
    },
    {
        icon: <UsersIcon />,
        title: "Player Manager",
        description: "A complex API for players, letting you have total control"
    },
    {
        icon: <CodeIcon />,
        title: "Events",
        description: "A system to manage game and custom events."
    },
    {
        icon: <ComputerIcon />,
        title: "HTTP",
        description: "A HTTP wrapper for executing HTTP requests."
    },
    {
        icon: <DatabaseIcon />,
        title: "Database",
        description: "An easy-to-use Database API."
    },
    {
        icon: <MenuIcon />,
        title: "Menus",
        description: "A simple menu system for users to interact with."
    },
    {
        icon: <PuzzleIcon />,
        title: "Convars",
        description: "A useful API to manipulate console variables."
    },
    {
        icon: <ClockIcon />,
        title: "Timers",
        description: "Handy schedule-based functions called at a set interval of time."
    },
    {
        icon: <UserIcon />,
        title: "Entities",
        description: "A simple entity API, letting you manage them however you'd like."
    },
    {
        icon: <MemoryStickIcon />,
        title: "Memory",
        description: "An advanced API, letting you read and write memory pointers."
    },
    {
        icon: <AnchorIcon />,
        title: "Hooks",
        description: "An advanced API letting you hook CS2 function via signatures."
    },
    {
        icon: <MessageSquareIcon />,
        title: "User Messages",
        description: "An advanced API letting you send messages to users via Protocol Buffers."
    },
    {
        icon: <CodeSquareIcon />,
        title: "Scripting Languages",
        description: "Using Lua for plugin development."
    },
    {
        icon: <Code2Icon />,
        title: "Extended SDK",
        description: "Supporting all of the game SDK classes."
    },
    {
        icon: <BrainCogIcon />,
        title: "Extensions",
        description: "Access to add API in plugins and to create everything without limitations."
    },
    {
        icon: <FileIcon />,
        title: "License",
        description: "This project is licensed under MIT License."
    }
];

export default function Features() {
    return (
        <section
            className="w-full bg-white dark:bg-background py-16 sm:py-24"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-center">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                    Features
                </span>
            </h2>
            <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground text-center">
                A list of scripting features which are supported by Swiftly API.
            </p>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map(({ icon, title, description }: FeatureProps) => (
                    <Card
                        key={title}
                        className="bg-muted/50 hover:bg-muted/80 transition-colors"
                    >
                        <CardHeader>
                            <CardTitle className="flex flex-row gap-4">
                                {icon}
                                {title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>{description}</CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}