<script setup>
import { useCategoryStore } from '../../../store'
import { ref, reactive, computed } from 'vue'
import { getBrand } from '../../../api/brand'
import SkeletonBlock from '../../../components/library/SkeletonBlock.vue';

const brand = reactive({
    id: 'brand',
    name: '品牌',
    children: [
        {
            id: 'brand-child',
            name: '品牌推荐'
        }
    ],
    brands: []
})
const category = useCategoryStore()
const menulist = computed(() => {
    const list = category.list.map(item => {
        return {
            id: item.id,
            name: item.name,
            children: item.children && item.children.slice(0, 2),
            goods: item.goods
        }
    })
    list.push(brand)
    return list
})

const categoryId = ref(null)
const currCategory = computed(() => {
    return menulist.value.find(item => item.id === categoryId.value)
})

getBrand().then(data => {
    brand.brands = data.result.slice(0, 9)
})

</script>

<template>
<div class="home-category" @mouseleave="categoryId = null">
    <ul class="menu">
        <li v-for="item in menulist" :key="item.id" @mouseenter="categoryId=item.id" :class="{active:categoryId===item.id}">
            <RouterLink :to="`/category/${item.id}`">{{ item.name }}</RouterLink>
            <template v-if="item.children">
                <RouterLink v-for="sub in item.children" :key="sub.id" :to="`/category/sub/${sub.id}`">{{ sub.name }}</RouterLink>
            </template>
            <!-- <span v-else>
              <skeleton-block width="60px" height="18px" style="margin-right: 5px" bg="rgba(255, 255, 255, 0.2)"/>
              <skeleton-block width="50px" height="18px" bg="rgba(255, 255, 255, 0.2)"/>
            </span> -->
        </li>
    </ul>
    <div class="layer">
        <h4 v-if="currCategory">{{ currCategory.id === 'brand' ? '品牌' : '分类'}}推荐<small>根据您的购买或浏览记录数据</small></h4>
        <ul v-if="currCategory && currCategory.goods && currCategory.goods.length">
            <li v-for="good in currCategory.goods" :key="good.id">
                <RouterLink to="/">
                    <img :src="good.picture" alt="">
                    <div class="info">
                        <p>{{ good.name }}</p>
                        <p>{{ good.desc }}</p>
                        <p><i>¥</i>{{ good.price }}</p>
                    </div>
                </RouterLink>
            </li>
        </ul>
        <ul v-if="currCategory && currCategory.brands && currCategory.brands.length">
            <li class="brand" v-for="brand in currCategory.brands" :key="brand.id">
                <RouterLink to="/">
                    <img :src="brand.picture" alt="">
                    <div class="info">
                        <p class="place">{{ brand.place }}</p>
                        <p>{{ brand.name }}</p>
                        <p>{{ brand.desc }}</p>
                    </div>
                </RouterLink>
            </li>
        </ul>
    </div>
</div>
</template>

<style lang="less">
@import '../../../assets/styles/variables.less';

.home-category {
  width: 250px;
  height: 500px;
  background: rgba(0,0,0,0.8);
  position: relative;
  z-index: 99;
  .menu {
    li {
      padding-left: 40px;
      height: 50px;
      line-height: 50px;
      &:hover, &.active {
        background: @mainColor;
      }
      a {
        margin-right: 4px;
        color: #fff;
        &:first-child {
          font-size: 16px;
        }
      }
    }
  }
}
 .layer {
    width: 990px;
    height: 500px;
    background: rgba(255,255,255,0.8);
    position: absolute;
    left: 250px;
    top: 0;
    display: none;
    padding: 0 15px;
    h4 {
      font-size: 20px;
      font-weight: normal;
      line-height: 80px;
      small {
        font-size: 16px;
        color: #666;
      }
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 310px;
        height: 120px;
        margin-right: 15px;
        margin-bottom: 15px;
        border: 1px solid #eee;
        border-radius: 4px;
        background: #fff;
        &:nth-child(3n) {
          margin-right: 0;
        }
        a {
          display: flex;
          width: 100%;
          height: 100%;
          align-items: center;
          padding: 10px;
          &:hover {
            background: #e3f9f4;
          }
          img {
              width: 95px;
              height: 95px;
          }
          .info {
            padding-left: 10px;
            line-height: 24px;
		    width: 190px;
            .name {
              font-size: 16px;
              color: #666;
            }
            .desc {
              color: #999;
            }
            .price {
              font-size: 22px;
              color: @priceColor;
              i {
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }
  &:hover {
    .layer {
      display: block;
    }
  }
li.brand {
    height: 180px;
    a {
        align-items: flex-start;
        img {
            width: 120px;
            height: 160px;
        }
        .info {
            p {
                margin-top: 8px;
            }
            .place {
                color: #999;
            }
        }
    }
}
</style>