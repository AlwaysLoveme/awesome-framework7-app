import { f7, Actions } from "framework7-vue";
import { actionCreate } from "./f7api";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";

class GetFile {
  constructor() {
    this.createAction = this.createAction.bind(this);
  }

  /**
   * @param fileType: all --- pictures and video  pic --- only pictures  video --- only for video
   * @param aspectRatio
   * @param events
   * **/
  async createAction(
    fileType = "all",
    aspectRatio: number | string,
    events: string
  ) {
    let buttons: Actions.Button[] = [];
    const cameraPic = {
      text: "相机",
      onClick: () => {
        this.picturesChoose(CameraSource.Camera, aspectRatio, events);
      },
    };
    const galleryPic = {
      text: "相册",
      onClick: () => {
        this.picturesChoose(CameraSource.Photos, aspectRatio, events);
      },
    };
    const localVideo = {
      text: "本地视频",
      onClick: async () => {
        const filePath = await this.videoChooseFromGallery();
        await this.uploadVideo(filePath as string);
      },
    };
    const recordingVideo = {
      text: "拍摄视频",
      onClick: async () => {
        const filePath = await this.recordingVideo();
        await this.uploadVideo(filePath as string);
      },
    };
    if (fileType === "all") {
      buttons = [cameraPic, galleryPic, localVideo, recordingVideo];
    } else if (fileType === "pic") {
      buttons = [cameraPic, galleryPic];
    } else if (fileType === "video") {
      buttons = [localVideo, recordingVideo];
    }
    await actionCreate({ buttons });
  }

  /**
   * @param source
   * @param aspectRatio: 裁剪的宽高比 1：1:1裁切 2：2:1裁切
   * @param events: 如果同一页面内有多处上传图片并裁剪的，需要提供事件名称以获取上传结果
   * **/
  async picturesChoose(
    source: CameraSource,
    aspectRatio: number | string,
    events: string
  ) {
    const image = await Camera.getPhoto({
      source,
      quality: 100,
      correctOrientation: true,
      resultType: CameraResultType.Uri,
    });
    setTimeout(async () => {
      f7.views.main.router.navigate(
        `/image-cropper?events=${events}&aspectRatio=${aspectRatio}&path=${image.webPath}`
      );
    }, 0);
  }

  // 从相册选择视频
  videoChooseFromGallery() {
    return new Promise((resolve, reject) => {
      const options = {
        quality: 70,
        mediaType: 1,
        destinationType: 1,
        sourceType: 0,
      };
      document.addEventListener(
        "deviceready",
        () => {
          (navigator as any).camera.getPicture(
            (res: any) => resolve(res),
            (err: any) => reject(err),
            options
          );
        },
        false
      );
    });
  }

  // 拍摄视频
  recordingVideo() {
    const options = {
      limit: 1,
      quality: 1,
      duration: 180,
    };
    return new Promise((resolve, reject) => {
      (navigator as any).device.capture.captureVideo(
        (res: any) => {
          resolve(res[0].fullPath);
        },
        (err: any) => reject(err),
        options
      );
    });
  }

  // 上传视频
  uploadVideo(filePath: string) {
    const options = {
      fileKey: "file",
      fileName: "name.jpg",
    };
    return new Promise((resolve, reject) => {
      document.addEventListener(
        "deviceready",
        function () {
          const fileTransfer = (window as any).FileTransfer.create();
          fileTransfer.upload(
            filePath,
            "",
            (res: any) => resolve(res),
            (err: any) => reject(err),
            options
          );
        },
        false
      );
    });
  }
}

export default new GetFile();
