export const page = document.querySelector('.page');
const content = page.querySelector('.content');

const ads = content.querySelector('.ads');
export const adsBlocks = ads.querySelectorAll('.ads__block');
export const adsBlockImage = ads.querySelectorAll('.ads__block_image');
export const adsBlockTitle = ads.querySelectorAll('.ads__block_title');
export const adsBlockText = ads.querySelectorAll('.ads__block_text');

const groups = content.querySelector('.groups');
export const groupsBlocks = groups.querySelectorAll('.groups__block');
export const groupsBlockImage = groups.querySelectorAll('.groups__block_image');
export const groupsBlockTitle = groups.querySelectorAll('.groups__block_title');
export const groupsBlockText = groups.querySelectorAll('.groups__block_text');

const methodology = content.querySelector('.methodology');
export const methodologyBlocks = methodology.querySelectorAll('.methodology__block');
export const methodologyBlockImage = methodology.querySelectorAll('.methodology__block_image');
export const methodologyBlockTitle = methodology.querySelectorAll('.methodology__block_title');
export const methodologyBlockText = methodology.querySelectorAll('.methodology__block_text');


const aboutProject = content.querySelector('.about-project');
export const aboutProjectTitle = aboutProject.querySelector('.about-project__title');
export const aboutProjectBlock = aboutProject.querySelector('.about-project__block');
export const aboutProjectImage = aboutProjectBlock.querySelector('.about-project__block_image');
export const aboutProjectText = aboutProjectBlock.querySelector('.about-project__block_text-block');

// const about = content.querySelector('.about');
// export const aboutTitle = about.querySelector('.about__title');
// export const aboutBlock = about.querySelector('.about__block');
// export const aboutBlockImage = aboutBlock.querySelector('.about__block_image');
// export const aboutBlockText = aboutBlock.querySelector('.about__block_text-block');

export const popupTemplate = page.querySelector('#popup');
export const PopupSostavSlovoTemplate = page.querySelector('#popup-test-sostavSlovo');

