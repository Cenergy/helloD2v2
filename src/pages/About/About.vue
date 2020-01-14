<template>
  <div>
    <el-button type="primary" @click="hello">主要按钮</el-button>
  </div>
</template>
<script>
// import axios  from "axios";
// import FileSaver  from "file-saver";
// import JSZip  from "jszip";
// const getFile = url => {
//   return new Promise((resolve, reject) => {
//     axios({
//       method: "get",
//       url,
//       responseType: "arraybuffer"
//     })
//       .then(data => {
//         resolve(data.data);
//       })
//       .catch(error => {
//         reject(error.toString());
//       });
//   });
// };
// function handleBatchDownload() {
//   const data = [
//     "http://10.8.9.85:3038/77750013_123456_2019-12-26_19-20-22_2019-12-26_19-20-36.mp3",
//     "http://10.8.9.85:3038/77750011_123456_2019-12-26_19-18-20_2019-12-26_19-18-27.mp3"
//   ]; // 需要下载打包的路径, 可以是本地相对路径, 也可以是跨域的全路径

//   const zip = new JSZip();

//   const cache = {};

//   const promises = [];

//   data.forEach(item => {
//     const promise = getFile(item).then(data => {
//       // 下载文件, 并存成ArrayBuffer对象
//       const arr_name = item.split("/");
//       const file_name = arr_name[arr_name.length - 1]; // 获取文件名
//       zip.file(file_name, data, { binary: true }); // 逐个添加文件
//       cache[file_name] = data;
//     });
//     promises.push(promise);
//   });

//   Promise.all(promises).then(() => {
//     zip.generateAsync({ type: "blob" }).then(content => {
//     console.log(`Rd: handleBatchDownload -> content`, content)
//       // 生成二进制流
//       FileSaver.saveAs(content, "打包下载.zip"); // 利用file-saver保存文件
//     });
//   });
// }
export default {
  methods:{
    hello(){
// handleBatchDownload()
    }
  }
};
</script>
<style>
</style>