import { IoMdChatboxes } from "react-icons/io";
import { MdAccountBalanceWallet } from "react-icons/md";
import { BsListColumns } from "react-icons/bs";
import { PiHouseThin } from "react-icons/pi";
import { HiDotsCircleHorizontal } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";

export function Footer() {
    const [isSupportOpen, setIsSupportOpen] = useState(false);
    const [isWalletOpen, setIsWalletOpen] = useState(false);
    const [isActivityOpen, setIsActivityOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleSupport = () => {
        setIsSupportOpen(true);
        setIsMenuOpen(false);
        setIsWalletOpen(false);
        setIsActivityOpen(false);
    }

    const handleWallet = () => {
        setIsWalletOpen(true);
        setIsMenuOpen(false);
        setIsActivityOpen(false);
        setIsSupportOpen(false);
    }

    const handleActivity = () => {
        setIsActivityOpen(true);
        setIsMenuOpen(false);
        setIsSupportOpen(false);
        setIsWalletOpen(false);
    }

    const handleMenu = () => {
        setIsMenuOpen(true);
        setIsActivityOpen(false);
        setIsSupportOpen(false);
        setIsWalletOpen(false);
    }

    return (
        <footer className="w-full fixed bottom-0 h-20 border-t border-purblePrimary
        flex items-center px-4 text-zinc-500 justify-between bg-white">

            {isSupportOpen ? (
                <Link className="flex flex-col items-center h-full justify-center gap-2" to={"/suporte"}>
                    <IoMdChatboxes size={32} color="#7548ec" />
                    <span className="text-[10px] text-purblePrimary">Suporte</span>
                </Link>
            ) : (
                <Link className="flex flex-col items-center h-full justify-center gap-2" to={"/suporte"}
                    onClick={handleSupport}>
                    <IoMdChatboxes size={32} color="#71717a" />
                    <span className="text-[10px]">Suporte</span>
                </Link>
            )}

            {isWalletOpen ? (
                <Link className="flex flex-col items-center h-full justify-center gap-2" to={"/contas"}>
                    <MdAccountBalanceWallet size={32} color="#7548ec" />
                    <span className="text-[10px] text-purblePrimary">Contas</span>
                </Link>
            ) : (
                <Link onClick={handleWallet}
                    className="flex flex-col items-center h-full justify-center gap-2" to={"/contas"}>
                    <MdAccountBalanceWallet size={32} color="#71717a" />
                    <span className="text-[10px]">Contas</span>
                </Link>
            )}

            {isMenuOpen ? (
                <Link className="flex flex-col items-center mb-8 gap-2" to={"/"} onClick={handleMenu}>
                    <PiHouseThin color="white" className="bg-purblePrimary h-16 w-16 p-3
                rounded-full" />
                    <span className="text-[10px] text-purblePrimary">Início</span>
                </Link>
            ) : (
                <Link className="flex flex-col items-center mb-8 gap-2" to={"/"} onClick={handleMenu}>
                    <PiHouseThin color="white" className="bg-purblePrimary h-16 w-16 p-3
                rounded-full" />
                    <span className="text-[10px]">Início</span>
                </Link>
            )}

            {isActivityOpen ? (
                <Link className="flex flex-col items-center h-full justify-center gap-2" to={"/atividades"}>
                    <BsListColumns size={32} color="#7548ec" />
                    <span className="text-[10px] text-center text-purblePrimary">
                        Atividades
                    </span>
                </Link>
            ) : (
                <Link className="flex flex-col items-center h-full justify-center gap-2" to={"/atividades"}
                    onClick={handleActivity}>
                    <BsListColumns size={32} color="#71717a" />
                    <span className="text-[10px] text-center">
                        Atividades
                    </span>
                </Link>
            )}

            <div className="flex flex-col items-center h-full justify-center gap-2">
                <HiDotsCircleHorizontal color="#71717a" size={32} />
                <span className="text-[10px]">
                    Mais
                </span>
            </div>
        </footer>
    )
}