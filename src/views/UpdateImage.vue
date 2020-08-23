<template>
    <div>
        <input type="file" @change="fileChange" name="" id="">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                imgs:[],
                imgData:"image/gif,image/jpeg,image/png,image/jpg"
            }
        },
        methods:{
            fileChange(){
                let reader = new FileReader();
                let img =event.target.files[0];
                let type = img.type; //获取文件类型
                let size = img.size; //获取文件大小
                if(this.imgData.indexOf(type) == -1){
                    layer.alert("请选择支持的图片格式");
                    return;
                }
                if(size>2048*1000){
                     layer.alert("请选择2M以内的图片");
                    return;
                }
                //原生js创建FormData对象
                let form = new FormData();
                form.append("img",img,img.name);
                //接口传输
                this.$http.post("http://localhost:5000/login/GetFile",form,{
                    headers:{
                        "Content-Type":"multipart/form-data"
                    }
                })
                .then(res=>{
                    console.log(res);
                })
                .catch(err=>{
                    console.log(err);
                });
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>