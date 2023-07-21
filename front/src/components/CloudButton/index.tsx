import CloudImage from '../../assets/CloudButton.svg'
import Image from '../../assets/Raining.svg'
import { Rain, RainDrops } from '../CloudImageLogin/style';
import { CloudButtonDiv, CloudButtonDivMobile, CloudImg, Illustration, RainDiv } from './style'

interface InfoButton {
    onClick?: any
    style?: any
}

// Ajuda o map a carregar as gotas na tela e determina o delay da animação
var delayCount = ['1.9s', '0.7s', '1.3s', '1.9s', '1.0s', '0.2s', '0.6s', '2.8s', '0.9s'];

export function CloudButton({ onClick, style }: InfoButton) {
    return (
        <>
            <CloudButtonDiv onClick={onClick} style={style}>
                <CloudImg src={CloudImage} />
                <Rain style={{ top: '75px' }}>
                    {
                        delayCount.map((item) => (
                            <RainDrops order={item} borderLR='3px' borderB='10px'></RainDrops>
                        ))
                    }
                </Rain>
                <Illustration src={Image} />
            </CloudButtonDiv>

            {/* Versão Mobole */}
            <CloudButtonDivMobile onClick={onClick} style={style}>
                <CloudImg src={CloudImage} />
            </CloudButtonDivMobile>
        </>
    )
}