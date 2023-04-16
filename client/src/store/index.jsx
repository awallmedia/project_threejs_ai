import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#49A078',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './xsang_logo.png',
    fullDecal: './threejs.png',
});

export default state;