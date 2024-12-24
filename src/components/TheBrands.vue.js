const brands = [
    'src/assets/media/nba-logo.9219f4e8.svg',
    'src/assets/media/continental-logo.910bf7a2.svg',
    'src/assets/media/vixen-logo.f7a6c087.svg',
    'src/assets/media/yeezy-logo.57b88750.svg',
    'src/assets/media/cannes-logo.673ba9cc.svg',
]; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
        ...{ class: ("container mx-auto px-6 py-16 border-t") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("flex justify-center ") },
    });
    const __VLS_0 = {}.H2;
    /** @type { [typeof __VLS_components.H2, typeof __VLS_components.H2, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        ...{ class: ("font-faktum font-bold ") },
        ...{ style: ({}) },
    }));
    const __VLS_2 = __VLS_1({
        ...{ class: ("font-faktum font-bold ") },
        ...{ style: ({}) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_5.slots.default;
    var __VLS_5;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex justify-center items-center space-x-12 ") },
    });
    for (const [brand, index] of __VLS_getVForSourceType((__VLS_ctx.brands))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
            key: ((index)),
            src: ((brand)),
            alt: ((`Brand logo ${index + 1}`)),
        });
    }
    ['container', 'mx-auto', 'px-6', 'py-16', 'border-t', 'flex', 'justify-center', 'font-faktum', 'font-bold', 'flex', 'justify-center', 'items-center', 'space-x-12',];
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
            brands: brands,
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
