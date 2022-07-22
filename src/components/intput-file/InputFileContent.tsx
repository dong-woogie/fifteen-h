import React, { ChangeEvent } from "react";
import { useState } from "react";
import { useRef } from "react";
import IconNavCamera from "../../assets/icon-nav-camera.png";

function InputFileContent() {
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (!file) return;

    setPreviewUrl(URL.createObjectURL(file));
  };

  const onClickInputFile = () => {
    inputRef.current?.click();
  };
  return (
    <div className="px-5">
      <h4 className="content-title">Input File</h4>
      <p className="text-sm text-custom-gray-1">오프라인 매장 서비스 메뉴</p>
      <div className="my-1" />

      {previewUrl ? (
        <div onClick={onClickInputFile}>
          <img
            src={previewUrl}
            alt="preview"
            className="h-40 w-full border border-solid border-custom-gray-2 rounded cursor-pointer object-cover"
          />
        </div>
      ) : (
        <div
          className="h-40 w-full border border-solid border-custom-gray-2 rounded flex items-center justify-center flex-col cursor-pointer"
          onClick={onClickInputFile}
        >
          <img src={IconNavCamera} alt="camera icon" />
          <p className="input-file-text">
            오프라인 매장 서비스 메뉴 사진 (가격정보 포함)
          </p>
        </div>
      )}

      <input
        type="file"
        ref={inputRef}
        className="hidden"
        onChange={onChange}
      />

      <div className="mt-3.5">
        <p className="input-file-description">
          - 매장 내 서비스 메뉴판으로 실제 매장내 비치 된 사진을 촬영해주 세요.
        </p>
        <p className="input-file-description">
          - 가격 정보가 잘 나타날 수 있도록 촬영해주세요.
        </p>
        <p className="input-file-description">
          - 메뉴 정보 혹은 가격 정보가 보이지 않으면 가입 승인 미달될 수 있
          습니다. (미달 시 가격 정보와 애프터 뷰 정보는 소비자에게 노출되 지
          않습니다.)
        </p>
      </div>
    </div>
  );
}

export default InputFileContent;
