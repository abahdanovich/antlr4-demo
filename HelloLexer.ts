// Generated from Hello.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class HelloLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly ID = 2;
	public static readonly WS = 3;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "ID", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'hello'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, "ID", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(HelloLexer._LITERAL_NAMES, HelloLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return HelloLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(HelloLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "Hello.g4"; }

	// @Override
	public get ruleNames(): string[] { return HelloLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return HelloLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return HelloLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return HelloLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x05\x1B\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x03\x06\x03\x11\n\x03\r\x03\x0E\x03\x12\x03\x04" +
		"\x06\x04\x16\n\x04\r\x04\x0E\x04\x17\x03\x04\x03\x04\x02\x02\x02\x05\x03" +
		"\x02\x03\x05\x02\x04\x07\x02\x05\x03\x02\x04\x03\x02c|\x05\x02\v\f\x0F" +
		"\x0F\"\"\x02\x1C\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07" +
		"\x03\x02\x02\x02\x03\t\x03\x02\x02\x02\x05\x10\x03\x02\x02\x02\x07\x15" +
		"\x03\x02\x02\x02\t\n\x07j\x02\x02\n\v\x07g\x02\x02\v\f\x07n\x02\x02\f" +
		"\r\x07n\x02\x02\r\x0E\x07q\x02\x02\x0E\x04\x03\x02\x02\x02\x0F\x11\t\x02" +
		"\x02\x02\x10\x0F\x03\x02\x02\x02\x11\x12\x03\x02\x02\x02\x12\x10\x03\x02" +
		"\x02\x02\x12\x13\x03\x02\x02\x02\x13\x06\x03\x02\x02\x02\x14\x16\t\x03" +
		"\x02\x02\x15\x14\x03\x02\x02\x02\x16\x17\x03\x02\x02\x02\x17\x15\x03\x02" +
		"\x02\x02\x17\x18\x03\x02\x02\x02\x18\x19\x03\x02\x02\x02\x19\x1A\b\x04" +
		"\x02\x02\x1A\b\x03\x02\x02\x02\x05\x02\x12\x17\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!HelloLexer.__ATN) {
			HelloLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(HelloLexer._serializedATN));
		}

		return HelloLexer.__ATN;
	}

}

