<script setup>
import { computed } from 'vue'
import { useUserStore } from '../store'

const { info } = useUserStore()
const userInfo = computed(() => info)
</script>

<template>
    <nav class="top-nav">
        <div class="container">
            <ul>
                <template v-if="userInfo.token">
                    <li><a href="javascript:;"><i class="iconfont icon-user"></i>{{ userInfo.account }}</a></li>
                    <li><a href="javascript:;">退出登录</a></li>
                </template>
                <template v-else>
                    <li><a href="javascript:;">请先登录</a></li>
                    <li><a href="javascript:;">退出登录</a></li>
                </template>
                <li><a href="javascript:;">我的订单</a></li>
                <li><a href="javascript:;">会员中心</a></li>
                <li><a href="javascript:;">帮助中心</a></li>
                <li><a href="javascript:;">关于我们</a></li>
                <li><a href="javascript:;"><i class="iconfont icon-shouji"></i>手机版</a></li>
            </ul>
        </div>
    </nav>
</template>

<style scoped lang="less">
@import '../assets/styles/mixins.less';
@import '../assets/styles/variables.less';

.top-nav {
    background: #333;

    ul {
        display: flex;
        height: 53px;
        justify-content: flex-end;
        align-items: center;

        li {
            a {
                padding: 0 15px;
                color: #cdcdcd;
                line-height: 1;
                display: inline-block;

                i {
                    font-size: 14px;
                    margin-right: 2px;
                }

                &:hover {
                    color: @mainColor;
                    .hoverShadow();
                }
            }

            ~ li {
                a {
                    border-left: 2px solid #666;
                }
            }
        }
    }
}
</style>
