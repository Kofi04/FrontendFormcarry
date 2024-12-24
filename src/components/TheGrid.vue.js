import { ref } from 'vue';
import FeatureCard from './FeatureCard.vue';
import { InboxIcon, ShieldIcon, CodeIcon, BarChartIcon } from 'lucide-vue-next';
const features = ref([
    {
        icon: InboxIcon,
        title: 'Email Notifications',
        description: 'Get instant email notifications for new form submissions.'
    },
    {
        icon: ShieldIcon,
        title: 'Spam Protection',
        description: 'Built-in spam filtering to keep your inbox clean.'
    },
    {
        icon: CodeIcon,
        title: 'Simple Integration',
        description: 'Just add our URL to your form\'s action attribute.'
    },
    {
        icon: BarChartIcon,
        title: 'Analytics',
        description: 'Track form submissions and conversion rates.'
    }
]); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
        ...{ class: ("text-white py-24 mt-8 rounded-3xl") },
        ...{ style: ({}) },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("container mx-auto px-6") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: (" mx-auto") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("text-yellow-500 text-lg font-semibold mb-4") },
        ...{ style: ({}) },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
        ...{ class: ("text-3xl font-bold mb-12") },
        ...{ style: ({}) },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ style: ({}) },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("grid grid-cols-1 md:grid-cols-2 gap-8") },
    });
    for (const [feature] of __VLS_getVForSourceType((__VLS_ctx.features))) {
        // @ts-ignore
        /** @type { [typeof FeatureCard, ] } */ ;
        // @ts-ignore
        const __VLS_0 = __VLS_asFunctionalComponent(FeatureCard, new FeatureCard({
            key: ((feature.title)),
            feature: ((feature)),
        }));
        const __VLS_1 = __VLS_0({
            key: ((feature.title)),
            feature: ((feature)),
        }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    }
    ['text-white', 'py-24', 'mt-8', 'rounded-3xl', 'container', 'mx-auto', 'px-6', 'mx-auto', 'text-yellow-500', 'text-lg', 'font-semibold', 'mb-4', 'text-3xl', 'font-bold', 'mb-12', 'grid', 'grid-cols-1', 'md:grid-cols-2', 'gap-8',];
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
            FeatureCard: FeatureCard,
            features: features,
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
