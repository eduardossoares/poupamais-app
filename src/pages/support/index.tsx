import { PiSpeakerHigh, PiChatsLight } from "react-icons/pi";
import { BiSupport } from "react-icons/bi";
import { GiBookshelf, GiTrophy } from "react-icons/gi";
import { IoMdSearch } from "react-icons/io";
import { TfiHandOpen } from "react-icons/tfi";
import { FaCreditCard } from "react-icons/fa";
import { IoFolderOpenOutline } from "react-icons/io5";

export function Support() {
    return (
        <div>
            <header className="bg-purblePrimary h-20 px-4 py-4 flex flex-col items-center justify-center">
                <strong className="text-white text-2xl">Suporte</strong>
            </header>

            <main className="px-4 py-4 space-y-4 pb-28">
                <section className="p-6 border border-purpleSecondary flex
                rounded-xl gap-x-4 relative flex-col gap-y-6">
                    <div className="flex items-center gap-x-4">
                        <PiSpeakerHigh color="gray" size={32} />
                        <strong className="text-base font-semibold">
                            De qual forma podemos te ajudar?
                        </strong>
                    </div>
                    <div className="flex flex-col gap-y-2 items-center justify-center">
                        <div className="flex flex-row items-center gap-2 border border-purpleSecondary w-[80%]
                        rounded-full h-10 justify-center">
                            <IoMdSearch color="gray" size={26} />
                            <span>Qual é a sua dúvida?</span>
                        </div>

                        <div className="flex flex-row items-center gap-2 border border-purpleSecondary w-[80%]
                        rounded-full h-10 justify-center">
                            <GiBookshelf color="gray" size={26} />
                            <span>Dúvidas frequentes</span>
                        </div>
                    </div>
                </section>

                <section className="p-6 border border-purpleSecondary flex
                rounded-xl gap-x-4 relative flex-col gap-y-6">
                    <div className="flex items-center gap-x-4">
                        <BiSupport color="gray" size={32} />
                        <strong className="text-base font-semibold">
                            Como prefere ser atendido?
                        </strong>
                    </div>
                    <div className="flex flex-col gap-y-2 items-center w-full">
                        <div className="flex items-center gap-x-2 w-full">
                            <PiChatsLight color="white" className="bg-purpleSecondary
                            p-1.5 rounded-full" size={44} />
                            <span className="border py-2 border-purpleSecondary rounded-xl flex-1
                            px-4">
                                Conversa pelo Chat
                            </span>
                        </div>
                        <div className="flex items-center gap-x-2 w-full">
                            <span className="border py-2 border-purpleSecondary rounded-xl flex-1
                            px-4">
                                Atendimento em Libras
                            </span>
                            <TfiHandOpen color="white" className="bg-purpleSecondary
                            p-1.5 rounded-full" size={44} />
                        </div>
                    </div>
                </section>

                <section className="px-6 py-1 border border-purpleSecondary flex
                rounded-xl gap-x-4 relative flex-row items-center gap-y-6">
                    <FaCreditCard color="7548ec" size={54} />
                    <span className="text-sm">Quais bancos estão disponíveis para conexão automática?</span>
                </section>

                <section className="px-6 py-1 border border-purpleSecondary flex
                rounded-xl gap-x-4 relative flex-row items-center gap-y-6">
                    <IoFolderOpenOutline color="7548ec" size={40} />
                    <span className="text-sm">Como arquivar ou deletar uma conta?</span>
                </section>

                <section className="px-6 py-2 border border-purpleSecondary flex
                rounded-xl gap-x-4 relative flex-row items-center gap-y-6">
                    <GiTrophy color="7548ec" size={40} />
                    <span className="text-sm">Como criar um objetivo?</span>
                </section>
            </main>
        </div>
    )
}