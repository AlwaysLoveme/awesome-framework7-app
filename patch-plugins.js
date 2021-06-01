const fs = require("fs");
const f =
  "node_modules/@capacitor/camera/android/src/main/java/com/capacitorjs/plugins/camera/CameraPlugin.java";

// fixed can not get Pic on XIAOMI android device
fs.readFile(f, "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }
  let result = data.replace(
    "String filename = contentUri.getLastPathSegment()",
    'String filename = "file"'
  );

  fs.writeFile(f, result, "utf8", function (err) {
    if (err) return console.log(err);
  });
});

// 修复Cordova-plugin-qrscanner 不能扫描条形码
const qrscanner_android =
  "node_modules/cordova-plugin-qrscanner/src/android/QRScanner.java";
fs.readFile(qrscanner_android, "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }

  let result;
  if (data.indexOf("formatList.add(BarcodeFormat.UPC_A);") === -1) {
    result = data.replace(
      "formatList.add(BarcodeFormat.QR_CODE);",
      `
            formatList.add(BarcodeFormat.QR_CODE);
            formatList.add(BarcodeFormat.UPC_A);
            formatList.add(BarcodeFormat.UPC_E);
            formatList.add(BarcodeFormat.EAN_13);
            formatList.add(BarcodeFormat.EAN_8);
            formatList.add(BarcodeFormat.CODE_39);
            formatList.add(BarcodeFormat.CODE_93);
            formatList.add(BarcodeFormat.CODE_128);
            formatList.add(BarcodeFormat.ITF);
            formatList.add(BarcodeFormat.DATA_MATRIX);
      `
    );
  }

  fs.writeFile(qrscanner_android, result ?? data, "utf8", function (err) {
    if (err) return console.log(err);
  });
});

const qrscanner_ios =
  "node_modules/cordova-plugin-qrscanner/src/ios/QRScanner.swift";
fs.readFile(qrscanner_ios, "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }

  let result1, result2;
  if (data.indexOf("AVMetadataObject.ObjectType.code39") === "-1") {
    result1 = data.replace(
      "metaOutput!.metadataObjectTypes = [AVMetadataObject.ObjectType.qr]",
      "metaOutput!.metadataObjectTypes = [AVMetadataObject.ObjectType.qr, AVMetadataObject.ObjectType.code39, AVMetadataObject.ObjectType.code93, AVMetadataObject.ObjectType.code128, AVMetadataObject.ObjectType.dataMatrix,AVMetadataObject.ObjectType.ean8, AVMetadataObject.ObjectType.ean13]"
    );
    result2 = result1.replace(
      "found.type == AVMetadataObject.ObjectType.qr",
      "(found.type == AVMetadataObject.ObjectType.qr || found.type == AVMetadataObject.ObjectType.code39 || found.type == AVMetadataObject.ObjectType.code93 || found.type == AVMetadataObject.ObjectType.code128 || found.type == AVMetadataObject.ObjectType.dataMatrix || found.type == AVMetadataObject.ObjectType.ean8 || found.type == AVMetadataObject.ObjectType.ean13)"
    );
  }

  fs.writeFile(qrscanner_ios, result2 ?? data, "utf8", function (err) {
    if (err) return console.log(err);
  });
});
