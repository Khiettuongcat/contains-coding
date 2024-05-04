import { FolderKanban, Home, UserRound } from "lucide-react";

const SidebarLink = [
    {
        url:"/",
        icons:<Home className='ml-4'/> ,
        title:"Dashboard"
    },
    {
        url:"/project",
        icons:<FolderKanban className='ml-4'/> ,
        title:"Project"
    }, 
    {
        url:"/profile",
        icons:<UserRound className='ml-4'/> ,
        title:"Profile"
    },

]

export {SidebarLink}