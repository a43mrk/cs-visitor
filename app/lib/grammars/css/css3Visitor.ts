// Generated from ./lib/grammars/css/css3.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { KnownFontFaceDeclarationContext } from "./css3Parser";
import { UnknownFontFaceDeclarationContext } from "./css3Parser";
import { GoodOperatorContext } from "./css3Parser";
import { BadOperatorContext } from "./css3Parser";
import { GoodImportContext } from "./css3Parser";
import { BadImportContext } from "./css3Parser";
import { GoodNamespaceContext } from "./css3Parser";
import { BadNamespaceContext } from "./css3Parser";
import { KnownRulesetContext } from "./css3Parser";
import { UnknownRulesetContext } from "./css3Parser";
import { UnknownAtRuleContext } from "./css3Parser";
import { GoodCharsetContext } from "./css3Parser";
import { BadCharsetContext } from "./css3Parser";
import { GoodPropertyContext } from "./css3Parser";
import { BadPropertyContext } from "./css3Parser";
import { KnownTermContext } from "./css3Parser";
import { UnknownTermContext } from "./css3Parser";
import { BadTermContext } from "./css3Parser";
import { KnownDeclarationContext } from "./css3Parser";
import { UnknownDeclarationContext } from "./css3Parser";
import { StylesheetContext } from "./css3Parser";
import { CharsetContext } from "./css3Parser";
import { ImportsContext } from "./css3Parser";
import { Namespace_Context } from "./css3Parser";
import { NamespacePrefixContext } from "./css3Parser";
import { MediaContext } from "./css3Parser";
import { MediaQueryListContext } from "./css3Parser";
import { MediaQueryContext } from "./css3Parser";
import { MediaTypeContext } from "./css3Parser";
import { MediaExpressionContext } from "./css3Parser";
import { MediaFeatureContext } from "./css3Parser";
import { PageContext } from "./css3Parser";
import { PseudoPageContext } from "./css3Parser";
import { SelectorGroupContext } from "./css3Parser";
import { SelectorContext } from "./css3Parser";
import { CombinatorContext } from "./css3Parser";
import { SimpleSelectorSequenceContext } from "./css3Parser";
import { TypeSelectorContext } from "./css3Parser";
import { TypeNamespacePrefixContext } from "./css3Parser";
import { ElementNameContext } from "./css3Parser";
import { UniversalContext } from "./css3Parser";
import { ClassNameContext } from "./css3Parser";
import { AttribContext } from "./css3Parser";
import { PseudoContext } from "./css3Parser";
import { FunctionalPseudoContext } from "./css3Parser";
import { ExpressionContext } from "./css3Parser";
import { NegationContext } from "./css3Parser";
import { NegationArgContext } from "./css3Parser";
import { Operator_Context } from "./css3Parser";
import { Property_Context } from "./css3Parser";
import { RulesetContext } from "./css3Parser";
import { DeclarationListContext } from "./css3Parser";
import { DeclarationContext } from "./css3Parser";
import { PrioContext } from "./css3Parser";
import { ValueContext } from "./css3Parser";
import { ExprContext } from "./css3Parser";
import { TermContext } from "./css3Parser";
import { Function_Context } from "./css3Parser";
import { DxImageTransformContext } from "./css3Parser";
import { HexcolorContext } from "./css3Parser";
import { NumberContext } from "./css3Parser";
import { PercentageContext } from "./css3Parser";
import { DimensionContext } from "./css3Parser";
import { UnknownDimensionContext } from "./css3Parser";
import { Any_Context } from "./css3Parser";
import { AtRuleContext } from "./css3Parser";
import { AtKeywordContext } from "./css3Parser";
import { UnusedContext } from "./css3Parser";
import { BlockContext } from "./css3Parser";
import { NestedStatementContext } from "./css3Parser";
import { GroupRuleBodyContext } from "./css3Parser";
import { SupportsRuleContext } from "./css3Parser";
import { SupportsConditionContext } from "./css3Parser";
import { SupportsConditionInParensContext } from "./css3Parser";
import { SupportsNegationContext } from "./css3Parser";
import { SupportsConjunctionContext } from "./css3Parser";
import { SupportsDisjunctionContext } from "./css3Parser";
import { SupportsDeclarationConditionContext } from "./css3Parser";
import { GeneralEnclosedContext } from "./css3Parser";
import { Var_Context } from "./css3Parser";
import { CalcContext } from "./css3Parser";
import { CalcSumContext } from "./css3Parser";
import { CalcProductContext } from "./css3Parser";
import { CalcValueContext } from "./css3Parser";
import { FontFaceRuleContext } from "./css3Parser";
import { FontFaceDeclarationContext } from "./css3Parser";
import { KeyframesRuleContext } from "./css3Parser";
import { KeyframesBlocksContext } from "./css3Parser";
import { KeyframeSelectorContext } from "./css3Parser";
import { ViewportContext } from "./css3Parser";
import { CounterStyleContext } from "./css3Parser";
import { FontFeatureValuesRuleContext } from "./css3Parser";
import { FontFamilyNameListContext } from "./css3Parser";
import { FontFamilyNameContext } from "./css3Parser";
import { FeatureValueBlockContext } from "./css3Parser";
import { FeatureTypeContext } from "./css3Parser";
import { FeatureValueDefinitionContext } from "./css3Parser";
import { IdentContext } from "./css3Parser";
import { WsContext } from "./css3Parser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `css3Parser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface css3Visitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `knownFontFaceDeclaration`
	 * labeled alternative in `css3Parser.fontFaceDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKnownFontFaceDeclaration?: (ctx: KnownFontFaceDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by the `unknownFontFaceDeclaration`
	 * labeled alternative in `css3Parser.fontFaceDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnknownFontFaceDeclaration?: (ctx: UnknownFontFaceDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by the `goodOperator`
	 * labeled alternative in `css3Parser.operator_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGoodOperator?: (ctx: GoodOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by the `badOperator`
	 * labeled alternative in `css3Parser.operator_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBadOperator?: (ctx: BadOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by the `goodImport`
	 * labeled alternative in `css3Parser.imports`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGoodImport?: (ctx: GoodImportContext) => Result;

	/**
	 * Visit a parse tree produced by the `badImport`
	 * labeled alternative in `css3Parser.imports`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBadImport?: (ctx: BadImportContext) => Result;

	/**
	 * Visit a parse tree produced by the `goodNamespace`
	 * labeled alternative in `css3Parser.namespace_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGoodNamespace?: (ctx: GoodNamespaceContext) => Result;

	/**
	 * Visit a parse tree produced by the `badNamespace`
	 * labeled alternative in `css3Parser.namespace_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBadNamespace?: (ctx: BadNamespaceContext) => Result;

	/**
	 * Visit a parse tree produced by the `knownRuleset`
	 * labeled alternative in `css3Parser.ruleset`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKnownRuleset?: (ctx: KnownRulesetContext) => Result;

	/**
	 * Visit a parse tree produced by the `unknownRuleset`
	 * labeled alternative in `css3Parser.ruleset`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnknownRuleset?: (ctx: UnknownRulesetContext) => Result;

	/**
	 * Visit a parse tree produced by the `unknownAtRule`
	 * labeled alternative in `css3Parser.atRule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnknownAtRule?: (ctx: UnknownAtRuleContext) => Result;

	/**
	 * Visit a parse tree produced by the `goodCharset`
	 * labeled alternative in `css3Parser.charset`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGoodCharset?: (ctx: GoodCharsetContext) => Result;

	/**
	 * Visit a parse tree produced by the `badCharset`
	 * labeled alternative in `css3Parser.charset`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBadCharset?: (ctx: BadCharsetContext) => Result;

	/**
	 * Visit a parse tree produced by the `goodProperty`
	 * labeled alternative in `css3Parser.property_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGoodProperty?: (ctx: GoodPropertyContext) => Result;

	/**
	 * Visit a parse tree produced by the `badProperty`
	 * labeled alternative in `css3Parser.property_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBadProperty?: (ctx: BadPropertyContext) => Result;

	/**
	 * Visit a parse tree produced by the `knownTerm`
	 * labeled alternative in `css3Parser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKnownTerm?: (ctx: KnownTermContext) => Result;

	/**
	 * Visit a parse tree produced by the `unknownTerm`
	 * labeled alternative in `css3Parser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnknownTerm?: (ctx: UnknownTermContext) => Result;

	/**
	 * Visit a parse tree produced by the `badTerm`
	 * labeled alternative in `css3Parser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBadTerm?: (ctx: BadTermContext) => Result;

	/**
	 * Visit a parse tree produced by the `knownDeclaration`
	 * labeled alternative in `css3Parser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKnownDeclaration?: (ctx: KnownDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by the `unknownDeclaration`
	 * labeled alternative in `css3Parser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnknownDeclaration?: (ctx: UnknownDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.stylesheet`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStylesheet?: (ctx: StylesheetContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.charset`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCharset?: (ctx: CharsetContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.imports`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImports?: (ctx: ImportsContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.namespace_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamespace_?: (ctx: Namespace_Context) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.namespacePrefix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamespacePrefix?: (ctx: NamespacePrefixContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.media`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMedia?: (ctx: MediaContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.mediaQueryList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMediaQueryList?: (ctx: MediaQueryListContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.mediaQuery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMediaQuery?: (ctx: MediaQueryContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.mediaType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMediaType?: (ctx: MediaTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.mediaExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMediaExpression?: (ctx: MediaExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.mediaFeature`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMediaFeature?: (ctx: MediaFeatureContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.page`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPage?: (ctx: PageContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.pseudoPage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPseudoPage?: (ctx: PseudoPageContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.selectorGroup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectorGroup?: (ctx: SelectorGroupContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.selector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelector?: (ctx: SelectorContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.combinator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCombinator?: (ctx: CombinatorContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.simpleSelectorSequence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleSelectorSequence?: (ctx: SimpleSelectorSequenceContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.typeSelector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeSelector?: (ctx: TypeSelectorContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.typeNamespacePrefix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeNamespacePrefix?: (ctx: TypeNamespacePrefixContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.elementName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementName?: (ctx: ElementNameContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.universal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUniversal?: (ctx: UniversalContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.className`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassName?: (ctx: ClassNameContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.attrib`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttrib?: (ctx: AttribContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.pseudo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPseudo?: (ctx: PseudoContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.functionalPseudo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionalPseudo?: (ctx: FunctionalPseudoContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.negation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNegation?: (ctx: NegationContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.negationArg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNegationArg?: (ctx: NegationArgContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.operator_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperator_?: (ctx: Operator_Context) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.property_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProperty_?: (ctx: Property_Context) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.ruleset`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleset?: (ctx: RulesetContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.declarationList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclarationList?: (ctx: DeclarationListContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.prio`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrio?: (ctx: PrioContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerm?: (ctx: TermContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.function_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_?: (ctx: Function_Context) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.dxImageTransform`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDxImageTransform?: (ctx: DxImageTransformContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.hexcolor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHexcolor?: (ctx: HexcolorContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.percentage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPercentage?: (ctx: PercentageContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.dimension`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDimension?: (ctx: DimensionContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.unknownDimension`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnknownDimension?: (ctx: UnknownDimensionContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.any_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAny_?: (ctx: Any_Context) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.atRule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtRule?: (ctx: AtRuleContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.atKeyword`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtKeyword?: (ctx: AtKeywordContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.unused`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnused?: (ctx: UnusedContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.nestedStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNestedStatement?: (ctx: NestedStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.groupRuleBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupRuleBody?: (ctx: GroupRuleBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.supportsRule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSupportsRule?: (ctx: SupportsRuleContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.supportsCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSupportsCondition?: (ctx: SupportsConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.supportsConditionInParens`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSupportsConditionInParens?: (ctx: SupportsConditionInParensContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.supportsNegation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSupportsNegation?: (ctx: SupportsNegationContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.supportsConjunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSupportsConjunction?: (ctx: SupportsConjunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.supportsDisjunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSupportsDisjunction?: (ctx: SupportsDisjunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.supportsDeclarationCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSupportsDeclarationCondition?: (ctx: SupportsDeclarationConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.generalEnclosed`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGeneralEnclosed?: (ctx: GeneralEnclosedContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.var_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVar_?: (ctx: Var_Context) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.calc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalc?: (ctx: CalcContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.calcSum`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalcSum?: (ctx: CalcSumContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.calcProduct`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalcProduct?: (ctx: CalcProductContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.calcValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalcValue?: (ctx: CalcValueContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.fontFaceRule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFontFaceRule?: (ctx: FontFaceRuleContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.fontFaceDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFontFaceDeclaration?: (ctx: FontFaceDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.keyframesRule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyframesRule?: (ctx: KeyframesRuleContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.keyframesBlocks`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyframesBlocks?: (ctx: KeyframesBlocksContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.keyframeSelector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyframeSelector?: (ctx: KeyframeSelectorContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.viewport`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewport?: (ctx: ViewportContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.counterStyle`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCounterStyle?: (ctx: CounterStyleContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.fontFeatureValuesRule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFontFeatureValuesRule?: (ctx: FontFeatureValuesRuleContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.fontFamilyNameList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFontFamilyNameList?: (ctx: FontFamilyNameListContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.fontFamilyName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFontFamilyName?: (ctx: FontFamilyNameContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.featureValueBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFeatureValueBlock?: (ctx: FeatureValueBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.featureType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFeatureType?: (ctx: FeatureTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.featureValueDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFeatureValueDefinition?: (ctx: FeatureValueDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.ident`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdent?: (ctx: IdentContext) => Result;

	/**
	 * Visit a parse tree produced by `css3Parser.ws`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWs?: (ctx: WsContext) => Result;
}

