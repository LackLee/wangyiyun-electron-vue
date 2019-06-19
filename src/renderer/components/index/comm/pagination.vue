<template>
    <div class="pagination center">
        <div class="btn center" :class="{disabled: step <= 1}" @click="p">
            <v-icon name="angle-left" :color="step <= 1 ? '#ccc' : '#666666'"/>
        </div>

        <span class="page-menu" :class="{active: step == 1}" @click="choice(1)">1</span>

        <span class="page-menu p" v-if="step > 5">···</span>

        <span class="page-menu" v-for="item in l" :class="{active: step == item}" @click="choice(item)">{{ item }}</span>

        <span class="page-menu p" v-if="total - step > 4">···</span>


        <span class="page-menu" :class="{active: step == total}" @click="choice(total)">{{ total }}</span>


        <div class="btn center" :class="{disabled: step >= total}" @click="n">
            <v-icon name="angle-right" :color="step >= total ? '#ccc' : '#666666'"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "pagination",
        props: {
            total: {
                type: Number,
                required: true,
                default: 1
            }
        },
        data() {
            return {
                step: 1
            }
        },
        computed: {
            l() {
                let arr = [];
                if (this.step <= 5) {
                    for (let i = 2; i < 9; i++) {
                        arr.push(i);
                    }
                    return arr;
                } else {

                    if (this.total - this.step > 4) {
                        for (let i = this.step - 3; i < (this.step + 4); i++) {
                            arr.push(i);
                        }

                        return arr;
                    } else {
                        for (let i = this.total - 7; i < this.total; i++) {
                            arr.push(i);
                        }
                        return arr;
                    }

                }
            }
        },
        methods: {
            choice(step) {
                if(this.step === step) return;
                this.step = step;
                this.$emit('choice', this.step);
            },

            p() {
                if (this.step > 1) {
                    this.step--;
                    this.$emit('choice', this.step);
                }
            },

            n() {
                if (this.step < this.total){
                    this.step++;
                    this.$emit('choice', this.step);
                }

            }
        }
    }
</script>

<style scoped>
    .pagination {
        width: 350px;
        height: 25px;
        justify-content: space-between;
    }

    .pagination > .btn {
        width: 25px;
        height: 25px;
        border: 1px solid #E1E1E2;
        box-sizing: border-box;
        cursor: pointer;
    }

    .page-menu {
        font-size: 12px;
        color: #666;
        min-width: 25px;
        padding: 0px 2px;
        height: 25px;
        box-sizing: border-box;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border: 1px solid transparent;
        background-color: transparent;
        cursor: pointer;
    }

    .page-menu:hover {
        background-color: #ECEDF1;
        border-color: #BEBFC2;

    }

    .disabled {
        cursor: not-allowed !important;
    }

    .active {
        color: #C62F2F !important;
        text-decoration: underline;
        pointer-events: none !important;
    }

    .p {
        pointer-events: none !important;
    }
</style>