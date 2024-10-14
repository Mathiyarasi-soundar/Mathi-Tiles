import { HiHome } from "react-icons/hi2";
import { IoIosInformationCircle } from "react-icons/io";
import { MdHomeRepairService } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
const Menuitems = [
    {
        name: 'Home',
        url: '/',
        icon: <HiHome />,
        cName: 'nav-links'
    },
    {
        name: 'About',
        url: '/about',
        icon: <IoIosInformationCircle />,
        cName: 'nav-links'
    },
    {
        name: 'Services',
        url: '/services',
        icon: <MdHomeRepairService />,
        cName: 'nav-links'
    },
    {
        name: 'Contact Us',
        url: '/contactus',
        icon: <IoMdContact />,
        cName: 'nav-links'
    },
]

export default Menuitems;