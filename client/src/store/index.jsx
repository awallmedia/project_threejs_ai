import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#04AD7B',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './xsang_logo.png',
    fullDecal: './spiderweb.png',
});

export default state;