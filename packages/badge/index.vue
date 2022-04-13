<script setup>
import { onMounted, reactive } from 'vue';
const styleObj = reactive({
    backgroundColor: '',
    fontColor: 'white',
})

const props = defineProps({
    value: String | Number,
    hidden: {
        type: Boolean,
        default: false
    },
    isDot: {
        type: Boolean,
        default: false
    },
    type: {
        type: String,
        default: 'danger'
    },
    max: {
        type: Number,
        default: 99
    }
})

const typeWhich = () => {
    switch (props.type) {
        case 'primary':
            styleObj.backgroundColor = '#0e80eb'
            break;
        case 'success':
            styleObj.backgroundColor = '#3ac564'
            break;
        case 'warning':
            styleObj.backgroundColor = '#f79554'
            break;
        case 'danger':
            styleObj.backgroundColor = '#f05d5f'
            break;
        default:
            styleObj.backgroundColor = '#ffffff'
            styleObj.fontColor = 'black'
            break;
    }
}
console.log(typeof props.value);
onMounted(() => typeWhich())
</script>
<script>
export default {
    name: "mBadge",
};
</script>

<template>
    <div class="mzl-badge">
        <slot></slot>
        <div v-show="!hidden">
            <sup v-if="!isDot" :style='styleObj' class="badge">
                <span v-if="typeof value === 'number'">{{ value <= max ? value : `${max}+` }}</span>
                        <span v-else>{{ value }}</span>
            </sup>
            <sup v-else class="isdot"></sup>
        </div>
    </div>
</template>

<style scoped>
.mzl-badge {
    position: relative;
}

.badge,
.isdot {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateX(50%) translateY(-50%);
}

.badge {
    padding: 2px 10px;
    box-sizing: border-box;
    border-radius: 10px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}

.isdot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 1px solid white;
    background-color: #f05d5f;
}
</style>