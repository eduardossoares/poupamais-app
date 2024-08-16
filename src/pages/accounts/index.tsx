import pinkdoll from "../../assets/boneco-rosa.png";
import { FcMoneyTransfer } from "react-icons/fc";
import { PiCoatHangerBold } from "react-icons/pi";
import { SiNubank } from "react-icons/si";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";

export function Accounts() {
    return (
        <div>
            <header className="bg-purblePrimary h-20 px-4 py-4 flex flex-col items-center justify-center">
                <strong className="text-white text-2xl">Contas</strong>
            </header>
            <main className="px-4 py-4 space-y-4 pb-28">
                <section className="p-6 border border-purpleSecondary flex
                rounded-xl gap-x-4 relative flex-col gap-y-6">
                    <strong className="text-lg">Carteira</strong>
                    <div className="flex flex-col">
                        <span className="text-xs">Saldo Atual</span>
                        <strong className="text-xl">R$ 2,504,00</strong>
                        <img className="absolute right-8 bottom-0 w-20" src={pinkdoll} alt="Boneco Rosa" />
                    </div>
                </section>

                <section className="p-6 border border-purpleSecondary flex
                rounded-xl gap-x-4 relative flex-col gap-y-6">
                    <div className="flex items-center justify-between">
                        <strong className="text-lg">Extrato</strong>
                        <SlArrowRight size={14} />
                    </div>
                    <div className="space-y-4">
                        <div className="flex flex-row items-center justify-between">
                            <div className="flex flex-row items-center gap-2">
                                <FcMoneyTransfer size={24} />
                                <span className="text-base font-bold">Salário</span>
                            </div>
                            <span className="text-base font-bold text-emerald-500 flex items-center
                            gap-x-1"><FaPlus size={10} />R$ 2,600,00</span>
                        </div>
                        <div className="flex flex-row items-center justify-between">
                            <div className="flex flex-row items-center gap-2">
                                <PiCoatHangerBold size={24} color="orange" />
                                <span className="text-base font-bold">Roupas</span>
                            </div>
                            <span className="text-base font-bold text-rose-700 flex items-center gap-x-1"><FaMinus size={8} />R$ 96,00</span>
                        </div>
                    </div>
                </section>

                <section className="p-6 border border-purpleSecondary flex
                rounded-xl gap-x-4 relative flex-col gap-y-6">
                    <div className="flex items-center">
                        <SiNubank color="993399" size={42} />
                        <strong className="text-base font-semibold
                        m-auto">Cartão de Crédito Nubank</strong>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col ">
                            <span className="text-xs">Saldo Atual</span>
                            <strong className="text-lg">R$ 2,504,00</strong>
                        </div>
                        <SlArrowRight size={24} />
                    </div>
                </section>

                <section className="bg-purblePrimary flex items-center justify-center
                text-white font-bold text-xl gap-x-1 py-2 rounded-2xl">
                    <FaPlus size={12} />
                    <span>Adicionar Conta</span>
                </section>
            </main>
        </div>
    )
}