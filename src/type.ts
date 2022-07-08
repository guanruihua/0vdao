export type tBaseType = any;

export interface iBaseObject {
	[key: string]: tBaseType;
}

export type iRow = any;

export interface iParam {
	[key: string]: tBaseType;
}
export type tTable = iBaseObject[];