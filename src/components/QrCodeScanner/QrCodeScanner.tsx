import { Scanner, type IDetectedBarcode } from "@yudiel/react-qr-scanner";
import { useCallback, useState } from "react";
import "./QrCodeScanner.css";
// eslint-disable-next-line react-refresh/only-export-components
export const SCANNER_SETTINGS = {
  finder: false,
};

// eslint-disable-next-line react-refresh/only-export-components
export const SCANNER_STYLES = {
  container: {
    width: 350,
    margin: "0px auto",
  },
};

export const QrCodeScanner = () => {
  const [scannerResult, setScannerResult] = useState("");

  const scannerHandler = useCallback((result: IDetectedBarcode[]) => {
    console.log("result -> ", result);
    setScannerResult(result[0].rawValue);
  }, []);

  return (
    <>
      <Scanner
        onScan={scannerHandler}
        allowMultiple
        components={SCANNER_SETTINGS}
        styles={SCANNER_STYLES}
      />
      <div className="scannerResultContainer">
        <p> Scanner Result</p>
        <p>{scannerResult}</p>
      </div>
    </>
  );
};
