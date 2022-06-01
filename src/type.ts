export type tBaseType = any;
// export type tBaseType = string | number |;

export interface iBaseObject {
	[key: string]: tBaseType;
}

export type iRow = any;

export interface iParam {
	[key: string]: tBaseType;
}
export type tTable = iBaseObject[];