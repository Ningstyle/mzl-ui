<script setup>
defineProps({
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
            <sup v-if="!isDot" :class='type' class="badge">
                <span v-if="typeof value === 'number'">{{ value <= max ? value : `${max}+` }}</span>
                        <span v-else>{{ value }}</span>
            </sup>
            <sup v-else class="isdot"></sup>
        </div>
    </div>
</template>

<style scoped lang="scss">
.mzl-badge {
    position: relative;
    white-space: nowrap;
}

.badge,
.isdot {
    position: absolute;
    top: 0;
    right: 0;
    border: 1px solid white;
}

.badge {
    transform: translateX(80%) translateY(-50%);
    padding: 2px 10px;
    box-sizing: border-box;
    border-radius: 10px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}

.isdot {
    transform: translateX(50%) translateY(-50%);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: $danger;
}

.primary {
    background-color: $primary;
}

.info {
    background-color: $info;
}

.success {
    background-color: $success;
}

.warning {
    background-color: $warn;
}

.danger {
    background-color: $danger;
}
</style>