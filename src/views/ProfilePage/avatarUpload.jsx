import React from "react";
import uploadDefaultPhoto from "../../assets/img/faces/christian.jpg";
import Cropper from 'react-cropper'
import {connect} from 'dva'
import profilePageStyle from "../../assets/jss/material-kit-react/views/profilePage";
import withStyles from "@material-ui/core/styles/withStyles";
import 'cropperjs/dist/cropper.css'
import avatarUploadStyle from './avatarUploadStyle.jsx'

import  {Avatar_Action_Type} from '../../actions'

class avatarUpload extends React.Component{


  constructor(props){
    super(props);
    this.state={
      filePhoto:null,
      fileName: "newFile.jpeg",
      avatarImg:''
    };
  this.onChange=this.onChange.bind(this);
  this.uploadImg=this.uploadImg.bind(this);

  }

  upload(file, token) {
    return fetch("url地址", {
      body: file,
      credentials: 'include',
      headers: {
        'token': token
      },
      method: 'POST'
    })
      .then(response => response.json())
  }

  onChange(e){
    const  FILE_TYPES = ["image/jpg", "image/png", "image/jpeg", "image/bmp"];
    e.preventDefault();
    let files;
    if(e.dataTransfer){
      files=e.dataTransfer.files;

    }else if(e.target){
      files =e.target.files;

    }
    if(files.length > 0){
      // 验证 files[0] 信息的文件大小
      const fileMaxSize = 1024;
      let fileSize = files[0].size/1024;
      if(fileSize > fileMaxSize){
        alert("文件不能大于1M！");
        return false;
      } else if(fileSize <= 0) {
        alert("文件不能为0");
        return false;
      }
      console.log(files);
      // 验证 files 信息的文件类型
      const fileType = files[0].type;
      console.log("fileType"+fileType);
      if(!FILE_TYPES.includes(fileType)) {
        alert("不接受此文件类型");
        return false;
      }

      const reader = new FileReader();
      reader.onload = () => {
        this.setState({
          filePhoto: reader.result
        })
      }

      reader.readAsDataURL(files[0]);

    } else {
      if(this.state.filePhoto === null) {
        alert("请选择文件");
      }
      return false;
    }
  }

  uploadImg() {
    if(this.state.filePhoto === null) {
      alert("请选择图片");
      return false;
    }

    const croppedCanvas = this.cropper.getCroppedCanvas({
      minWidth: 200,
      minHeight: 200,
      width: 200,
      height: 200,
      maxWidth: 200,
      maxHeight: 200
    });
    console.log(croppedCanvas);
    let croppedImg=croppedCanvas.toDataURL();
    console.log(croppedImg);
    let {avatarImg}=this.state;
    this.props.dispatch({type:Avatar_Action_Type,payload:{avatarImg}});


    if(typeof croppedCanvas === "undefined") {
      return;
    }
    croppedCanvas.toBlob(async blob => {
      // 图片name添加到blob对象里
      blob.name = this.state.fileName;
      // 创建提交表单数据对象
      const filedata = new FormData();
      // 添加要上传的文件
      filedata.append('file', blob, blob.name);
      let token="";
      try {
        // 接口
        let res = await this.upload(filedata, token);
        if(res.errCode === 0) {
          // 上传成功
        } else {
          // 上传失败
        }
      } catch(err) {
        console.log(err);

      }
    }, "image/jpeg")
  }



  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <div id="container" className={classes.container}>
          <div id="cropper" >
            <Cropper
              style={{ width: "300", height: "200" }}
              className={classes.cropperHidden}
              aspectRatio={1}
              preview=".uploadCrop"
              guides={false}
              src={this.state.filePhoto}
              ref={cropper => {this.cropper = cropper}}
            />
          </div>
          <div id="uploadCrop">
            <div className={classes.uploadCrop} />
          </div>
        </div>
        <div>
          <input type="file" title="" accept="image/*" onChange={this.onChange} />
          <input type="button" value="上传" onClick={() => this.uploadImg()} />
        </div>
      </div>

    )
  }
}

export default withStyles(avatarUploadStyle)(connect(
  state=>{
    return {

    }
  }
)(avatarUpload));
