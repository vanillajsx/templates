import Component from '../../pages/sub/index.mdx';import('../../pages/_app').then(({default: Page})=>document.querySelector('#app').appendChild(Page({Component,pageProps:{}})))