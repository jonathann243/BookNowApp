import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai"; // Importation optimisée

export function Footer() {
    return (
        // Utilisation de w-full pour garantir que le div occupe toute la largeur
        <div className="flex items-center justify-between w-full p-10 mt-20 text-white bg-primary">
            <div>
                <p className="text-xl font-extrabold">
                    BookNow@2024. All Rights Reserved.
                </p>
            </div>
            <div>
                <p className="font-extrabold">
                    Website developed by Winner Pindi
                </p>
                <div className="flex">
                    <a href="https://www.linkedin.com/in/jonathan-muamba-1412701a0/">
                        <AiFillLinkedin size="30" />
                    </a>
                </div>
            </div>
        </div>
    );
}
