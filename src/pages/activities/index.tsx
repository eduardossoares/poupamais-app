import { PiSquaresFour } from "react-icons/pi";
import { FaPlus } from "react-icons/fa";
import yellowDoll from "../../assets/yellow-doll.png";
import img from "../../assets/icons.png";
import ranking from "../../assets/ranking.png";
import rate from "../../assets/rate.png";

export function Activities() {
    return (
        <div>
            <header className="bg-purblePrimary h-20 px-4 py-4 flex flex-col items-center justify-center">
                <strong className="text-white text-2xl">Atividades</strong>
            </header>
            <main className="px-4 py-4 space-y-4 pb-28">
                <section className="border border-purpleSecondary flex
                rounded-xl flex-col justify-between py-4 px-6 relative gap-y-6">
                    <div className="w-full flex justify-between items-center">
                        <p className="text-lg font-semibold">Quantidade de Dias Seguidos</p>
                        <PiSquaresFour size={24} className="" color="7548ec" />
                    </div>
                    <div className="flex items-center flex-col">
                        <img src={ranking} className="w-28" alt="Ranking" />
                        <p className="border-2 p-1 font-semibold text-xs border-purpleSecondary
                            rounded-full px-2">Módulo 1</p>
                    </div>
                    <img src={yellowDoll} alt="Boneco Amarelo" className="absolute right-4 -bottom-7
                    w-20 z-50" />
                </section>

                <section className="border border-purpleSecondary flex
                rounded-xl flex-col justify-between py-4 px-4 relative gap-y-4">
                    <p className="text-lg font-semibold">Módulo 1</p>
                    <div className="flex flex-row gap-x-4 justify-center">
                        <img src={img} className="w-32 p-4 border-purpleSecondary border rounded-2xl" alt="Ranking" />
                        <div className="max-w-32">
                            <p className="font-semibold text-lg">Introdução à Educação Financeira</p>
                            <span className="text-sm text-purblePrimary">03:00 Minutos</span>
                        </div>
                    </div>
                    <p className="text-center text-purblePrimary font-bold
                    border-2 px-6 py-1 border-purpleSecondary rounded-full w-max m-auto">Iniciar a Aula</p>
                </section>

                <section className="border border-purpleSecondary flex
                rounded-xl flex-col justify-between py-4 px-4 relative gap-y-4">
                    <p className="text-lg font-semibold">Avaliação do Aprendizado</p>
                    <div className="">
                        <img src={rate} className="w-32 h-14 m-auto" alt="Ranking" />
                        <p className="text-center text-purblePrimary font-bold text-sm
                    border-2 px-3 py-1 border-purpleSecondary rounded-full w-max m-auto">Iniciar</p>
                    </div>
                    <span className="absolute right-4 bottom-4 font-bold text-sm text-zinc-500">0/10</span>
                </section>
                <div className="bg-purblePrimary text-purpleSecondary
                w-12 h-12 flex items-center justify-center text-2xl rounded-lg fixed right-8 bottom-24
                z-50">
                    <FaPlus size={24} />
                </div>
            </main>
        </div>
    )
}