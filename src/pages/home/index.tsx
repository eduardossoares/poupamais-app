import { FaUser, FaCalendarAlt, FaMedal } from "react-icons/fa";
import { IoMdSearch, IoIosArrowDown } from "react-icons/io";
import { HiOutlineLightBulb } from "react-icons/hi";
import { PiSquaresFour, PiDotsThreeCircleLight } from "react-icons/pi";
import { IoEyeOutline } from "react-icons/io5";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { LiaEdit } from "react-icons/lia";
import { BsEnvelopePaper } from "react-icons/bs";
import { FaRegEyeSlash } from "react-icons/fa";

import pinkDoll from "../../assets/boneco-rosa.png"
import blueDoll from "../../assets/boneco-azul.png"
import graphic from "../../assets/grafico.png"
import { useState } from "react";

export function Home() {
    const [isVisible, setIsVisible] = useState(true);

    const handleAccountsInfoVisibilityFalse = () => {
        setIsVisible(false);
    }

    const handleAccountsInfoVisibilityTrue = () => {
        setIsVisible(true);
    }

    return (
        <div className="h-dvh">
            <header className="bg-purblePrimary h-28 px-4 py-4 flex flex-col justify-between">
                <div className="flex justify-between">
                    <FaUser size={32} color="white" className="bg-zinc-400
                p-1 rounded-full" />
                    <div className="flex flex-row gap-x-2">
                        <IoMdSearch color="white" size={32} />
                        <HiOutlineLightBulb color="yellow" size={32} />
                        <PiSquaresFour color="white" size={32} />
                    </div>
                </div>
                <strong className="text-white font-semibold">Olá, Jorge Antônio</strong>
            </header>

            <main className="px-4 py-4 space-y-4 pb-28">
                <section className="p-6 border border-purpleSecondary
                rounded-xl space-y-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-x-2">
                            <FaCalendarAlt color="7548ec" size={18} />
                            <span className="text-purblePrimary font-bold">Agosto</span>
                            <IoIosArrowDown color="7548ec" size={20} />
                        </div>
                        {isVisible
                            ? <IoEyeOutline onClick={handleAccountsInfoVisibilityFalse} color="7548ec" size={22} />
                            : <FaRegEyeSlash onClick={handleAccountsInfoVisibilityTrue} color="7548ec" size={22} />
                        }
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="flex flex-col items-center">
                            <span className="font-bold text-xs">Saldo Atual</span>
                            {isVisible
                                ? <span className="font-bold text-xl">R$0,00</span>
                                : <span className="font-bold text-xl">******</span>
                            }

                        </div>
                    </div>

                    <div className="flex justify-around">
                        <div className="flex">
                            <TiArrowSortedUp color="green" size={42} />
                            <div className="flex flex-col text-center">
                                <span className="font-bold text-xs">Ganhos</span>
                                {isVisible
                                    ? <span className="font-bold text-xl">R$0,00</span>
                                    : <span className="font-bold text-xl">******</span>
                                }
                            </div>
                        </div>
                        <div className="flex">
                            <TiArrowSortedDown color="red" size={42} />
                            <div className="flex flex-col text-center">
                                <span className="font-bold text-xs">Ganhos</span>
                                {isVisible
                                    ? <span className="font-bold text-xl">R$0,00</span>
                                    : <span className="font-bold text-xl">******</span>
                                }
                            </div>
                        </div>
                    </div>
                </section>

                <section className="p-6 border border-purpleSecondary
                rounded-xl space-y-6">
                    <div className="flex items-center justify-between">
                        <span className="text-purblePrimary font-bold">Gráfico</span>
                        <div className="flex gap-x-2">
                            <LiaEdit color="71717a" size={22} />
                            <PiDotsThreeCircleLight color="71717a" size={22} />
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-center items-center gap-4">
                            <span className="text-xs font-bold text-center">Gastos <br /> 50%</span>
                            <img className="w-32" src={graphic} alt="Gráfico" />
                            <span className="text-xs font-bold text-center">Ganhos <br /> 50%</span>
                        </div>
                        <div className="flex justify-between">
                            <img className="w-12" src={pinkDoll} alt="Boneco Rosa" />
                            <img className="w-16" src={blueDoll} alt="Boneco Azul" />
                        </div>
                    </div>
                </section>

                <section className="p-6 border border-purpleSecondary flex items-center
                rounded-xl gap-x-4">
                    <FaMedal size={32} color="#7548ec" />
                    <div className="flex flex-col">
                        <strong className="text-sm">Conquiste suas metas</strong>
                        <span className="text-xs">
                            Crie, organize e gerencie seus objetivos financeiros.
                        </span>
                    </div>
                </section>

                <section className="p-6 border border-purpleSecondary flex items-center
                rounded-xl gap-x-4">
                    <BsEnvelopePaper size={32} color="#7548ec" />
                    <div className="flex flex-col">
                        <strong className="text-sm">Convide seus amigos</strong>
                        <span className="text-xs">
                            Ajude aqueles que você ama a controlarem
                            suas finanças.
                        </span>
                    </div>
                </section>
            </main>
        </div>
    )
}