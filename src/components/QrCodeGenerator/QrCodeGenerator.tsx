import { QRCodeSVG } from "qrcode.react";
import { useCallback, useState } from "react";

import "./QrCodeGenerator.css";

export const QrCodeGenerator = () => {
  const [qrValue, setQrValue] = useState("");
  const [isShowQrCode, setIsShowQrCode] = useState(false);

  const onClickHandler = useCallback(() => {
    setIsShowQrCode(true);
    setQrValue("");
  }, []);

  const onChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setQrValue(event.currentTarget.value);
      setIsShowQrCode(false);
    },
    []
  );

  return (
    <>
      <div className="qrWrapper">
        <input
          className="qrInput"
          type="text"
          value={qrValue}
          onChange={onChangeHandler}
          placeholder="Enter Value"
        />
        <button className="qrButton" onClick={onClickHandler}>
          Generate QR
        </button>
      </div>
      {isShowQrCode && <QRCodeSVG value={qrValue} size={256} />}
    </>
  );
};
