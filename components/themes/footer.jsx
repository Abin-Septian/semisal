import React from "react";

const footer = () => {
    return (
        <div className="absolute bottom-0 border-t h-14 w-screen">
            <div className="flex justify-between items-center w-full h-full px-8">
                <div>
                    2022@
                    <span className="text-blue-400">Semisal.id</span>
                </div>
                <div className="flex gap-4">
                    <div>About</div>
                    <div>Support</div>
                    <div>Puchase</div>
                </div>
            </div>
        </div>
    );
};

export default footer;
