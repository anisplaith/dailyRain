import React from "react";
import CloudImg from "../../assets/Cloud.svg";

import { Cloud, CloudDiv, CloudMobile, CloudMobileDiv, ContainerCloud, Rain, RainDrops } from "./style";

// Ajuda o map a carregar as gotas na tela e determina o delay da animação
var delayCount = ['1.9s', '2.9s', '0.7s', '1.3s', '1.9s', '1.1s', '0.2s', '0.6s', '3s', '0.9s', '1.5s', '0.5s'];

export function CloudImageLogin() {
    return (
        <ContainerCloud>
            <CloudDiv>
                <Cloud src={CloudImg} />
                <Rain>
                    {
                        delayCount.map((item) => (
                            <RainDrops order={item}></RainDrops>
                        ))
                    }
                </Rain>
            </CloudDiv>

            <CloudDiv>
                <Cloud src={CloudImg} />
                <Rain>
                    {
                        delayCount.map((item) => (
                            <RainDrops order={item}></RainDrops>
                        ))
                    }
                </Rain>
            </CloudDiv>

            {/* Versão mobile */}
            <CloudMobileDiv>
                <CloudMobile src={CloudImg} />
                <Rain>
                    {
                        delayCount.map((item) => (
                            <RainDrops order={item}></RainDrops>
                        ))
                    }
                </Rain>
            </CloudMobileDiv>


        </ContainerCloud>
    )

}