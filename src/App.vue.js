import TheNavigation from './components/TheNavigation.vue';
import TheHero from './components/TheHero.vue';
import TheBrands from './components/TheBrands.vue';
import TheFeatures from './components/TheFeatures.vue';
import TheGrid from './components/TheGrid.vue';
import Footer from './components/Footer.vue';
import LastCard from './components/LastCard.vue'; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("min-h-screen bg-white") },
    });
    // @ts-ignore
    /** @type { [typeof TheNavigation, ] } */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(TheNavigation, new TheNavigation({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    // @ts-ignore
    /** @type { [typeof TheHero, ] } */ ;
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(TheHero, new TheHero({}));
    const __VLS_6 = __VLS_5({}, ...__VLS_functionalComponentArgsRest(__VLS_5));
    // @ts-ignore
    /** @type { [typeof TheBrands, ] } */ ;
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(TheBrands, new TheBrands({}));
    const __VLS_11 = __VLS_10({}, ...__VLS_functionalComponentArgsRest(__VLS_10));
    // @ts-ignore
    /** @type { [typeof TheFeatures, ] } */ ;
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(TheFeatures, new TheFeatures({}));
    const __VLS_16 = __VLS_15({}, ...__VLS_functionalComponentArgsRest(__VLS_15));
    // @ts-ignore
    /** @type { [typeof TheGrid, ] } */ ;
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent(TheGrid, new TheGrid({}));
    const __VLS_21 = __VLS_20({}, ...__VLS_functionalComponentArgsRest(__VLS_20));
    __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
    // @ts-ignore
    /** @type { [typeof LastCard, ] } */ ;
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(LastCard, new LastCard({}));
    const __VLS_26 = __VLS_25({}, ...__VLS_functionalComponentArgsRest(__VLS_25));
    // @ts-ignore
    /** @type { [typeof Footer, ] } */ ;
    // @ts-ignore
    const __VLS_30 = __VLS_asFunctionalComponent(Footer, new Footer({}));
    const __VLS_31 = __VLS_30({}, ...__VLS_functionalComponentArgsRest(__VLS_30));
    ['min-h-screen', 'bg-white',];
    var __VLS_slots;
    var $slots;
    let __VLS_inheritedAttrs;
    var $attrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            TheNavigation: TheNavigation,
            TheHero: TheHero,
            TheBrands: TheBrands,
            TheFeatures: TheFeatures,
            TheGrid: TheGrid,
            Footer: Footer,
            LastCard: LastCard,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
