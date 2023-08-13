const indexList = ref(<any>[])
const urls = [
  "https://cdn.uviewui.com/uview/album/1.jpg",
  "https://cdn.uviewui.com/uview/album/2.jpg",
  "https://cdn.uviewui.com/uview/album/3.jpg",
  "https://cdn.uviewui.com/uview/album/4.jpg",
  "https://cdn.uviewui.com/uview/album/5.jpg",
  "https://cdn.uviewui.com/uview/album/6.jpg",
  "https://cdn.uviewui.com/uview/album/7.jpg",
  "https://cdn.uviewui.com/uview/album/8.jpg",
  "https://cdn.uviewui.com/uview/album/9.jpg",
  "https://cdn.uviewui.com/uview/album/10.jpg"
]

const loadmore = () => {
  for (let i = 0; i < 30; i++) {
    indexList.value.push({
      url: urls[uni.$u.random(0, urls.length - 1)]
    })
  }
}
const goDetil = (id: any) => {
  if (id % 2 == 0) {
    // 关于我
    uni.redirectTo({
      url: "/subPages/subUser/about/index"
    })
  } else {
    // vip
    uni.redirectTo({
      url: "/subPages/subUser/vip/index"
    })
  }
}

export default () => {
  return { indexList, loadmore, goDetil }
}
