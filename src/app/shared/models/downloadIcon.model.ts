import { DownloadType } from "app/shared/enums/downloadType.enum";

export class DownloadIcon {
    id: string;
    type: DownloadType = DownloadType.Svg;
    path: string[] = [];
    width: number = 24;
    height: number = 24;
    padding: number = 0;
    paddingTop: number = 0;
    paddingRight: number = 0;
    paddingBottom: number = 0;
    paddingLeft: number = 0;
    foreground: string = "FFFFFF";
    foregroundOpacity: number = 1;
    background: string = "000000";
    backgroundOpacity: number = 1;
    radius: number = 0;
    borderWidth: number = 1;
    borderColor: string = "990000";
    borderOpacity: number = 1;
    borderCap: string = "round";
    borderArray: number[] = [];
    margin: number = 0;
    marginTop: number = 0;
    marginRight: number = 0;
    marginBottom: number = 0;
    marginLeft: number = 0;
    gridColor: string = "F0F0F0";
    gridOpacity: number = 1;
    matteColor: string = "FFFFFF";
    matteOpacity: number = 1;
}