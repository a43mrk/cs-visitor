// Generated from ./lib/grammars/dart/Dart2.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { CompilationUnitContext } from "./Dart2Parser";
import { VariableDeclarationContext } from "./Dart2Parser";
import { DeclaredIdentifierContext } from "./Dart2Parser";
import { FinalConstVarOrTypeContext } from "./Dart2Parser";
import { VarOrTypeContext } from "./Dart2Parser";
import { InitializedVariableDeclarationContext } from "./Dart2Parser";
import { InitializedIdentifierContext } from "./Dart2Parser";
import { InitializedIdentifierListContext } from "./Dart2Parser";
import { FunctionSignatureContext } from "./Dart2Parser";
import { FormalParameterPartContext } from "./Dart2Parser";
import { ReturnTypeContext } from "./Dart2Parser";
import { FunctionBodyContext } from "./Dart2Parser";
import { BlockContext } from "./Dart2Parser";
import { FormalParameterListContext } from "./Dart2Parser";
import { NormalFormalParametersContext } from "./Dart2Parser";
import { OptionalFormalParametersContext } from "./Dart2Parser";
import { OptionalPositionalFormalParametersContext } from "./Dart2Parser";
import { NamedFormalParametersContext } from "./Dart2Parser";
import { NormalFormalParameterContext } from "./Dart2Parser";
import { FunctionFormalParameterContext } from "./Dart2Parser";
import { SimpleFormalParameterContext } from "./Dart2Parser";
import { FieldFormalParameterContext } from "./Dart2Parser";
import { DefaultFormalParameterContext } from "./Dart2Parser";
import { DefaultNamedParameterContext } from "./Dart2Parser";
import { ClassDefinitionContext } from "./Dart2Parser";
import { MixinsContext } from "./Dart2Parser";
import { ClassMemberDefinitionContext } from "./Dart2Parser";
import { MethodSignatureContext } from "./Dart2Parser";
import { DeclarationContext } from "./Dart2Parser";
import { StaticFinalDeclarationListContext } from "./Dart2Parser";
import { StaticFinalDeclarationContext } from "./Dart2Parser";
import { OperatorSignatureContext } from "./Dart2Parser";
import { Operator_Context } from "./Dart2Parser";
import { BinaryOperatorContext } from "./Dart2Parser";
import { GetterSignatureContext } from "./Dart2Parser";
import { SetterSignatureContext } from "./Dart2Parser";
import { ConstructorSignatureContext } from "./Dart2Parser";
import { RedirectionContext } from "./Dart2Parser";
import { InitializersContext } from "./Dart2Parser";
import { InitializerListEntryContext } from "./Dart2Parser";
import { FieldInitializerContext } from "./Dart2Parser";
import { FactoryConstructorSignatureContext } from "./Dart2Parser";
import { RedirectingFactoryConstructorSignatureContext } from "./Dart2Parser";
import { ConstantConstructorSignatureContext } from "./Dart2Parser";
import { SuperclassContext } from "./Dart2Parser";
import { InterfacesContext } from "./Dart2Parser";
import { MixinApplicationClassContext } from "./Dart2Parser";
import { MixinApplicationContext } from "./Dart2Parser";
import { EnumTypeContext } from "./Dart2Parser";
import { EnumEntryContext } from "./Dart2Parser";
import { TypeParameterContext } from "./Dart2Parser";
import { TypeParametersContext } from "./Dart2Parser";
import { MetadataContext } from "./Dart2Parser";
import { ExpressionContext } from "./Dart2Parser";
import { ExpressionWithoutCascadeContext } from "./Dart2Parser";
import { ExpressionListContext } from "./Dart2Parser";
import { PrimaryContext } from "./Dart2Parser";
import { LiteralContext } from "./Dart2Parser";
import { NullLiteralContext } from "./Dart2Parser";
import { NumericLiteralContext } from "./Dart2Parser";
import { BooleanLiteralContext } from "./Dart2Parser";
import { StringLiteralContext } from "./Dart2Parser";
import { StringInterpolationContext } from "./Dart2Parser";
import { SymbolLiteralContext } from "./Dart2Parser";
import { ListLiteralContext } from "./Dart2Parser";
import { MapLiteralContext } from "./Dart2Parser";
import { MapLiteralEntryContext } from "./Dart2Parser";
import { ThrowExpressionContext } from "./Dart2Parser";
import { ThrowExpressionWithoutCascadeContext } from "./Dart2Parser";
import { FunctionExpressionContext } from "./Dart2Parser";
import { ThisExpressionContext } from "./Dart2Parser";
import { NayaExpressionContext } from "./Dart2Parser";
import { ConstObjectExpressionContext } from "./Dart2Parser";
import { ArgumentsContext } from "./Dart2Parser";
import { ArgumentListContext } from "./Dart2Parser";
import { NamedArgumentContext } from "./Dart2Parser";
import { CascadeSectionContext } from "./Dart2Parser";
import { CascadeSelectorContext } from "./Dart2Parser";
import { ArgumentPartContext } from "./Dart2Parser";
import { AssignmentOperatorContext } from "./Dart2Parser";
import { CompoundAssignmentOperatorContext } from "./Dart2Parser";
import { ConditionalExpressionContext } from "./Dart2Parser";
import { IfNullExpressionContext } from "./Dart2Parser";
import { LogicalOrExpressionContext } from "./Dart2Parser";
import { LogicalAndExpressionContext } from "./Dart2Parser";
import { EqualityExpressionContext } from "./Dart2Parser";
import { EqualityOperatorContext } from "./Dart2Parser";
import { RelationalExpressionContext } from "./Dart2Parser";
import { RelationalOperatorContext } from "./Dart2Parser";
import { BitwiseOrExpressionContext } from "./Dart2Parser";
import { BitwiseXorExpressionContext } from "./Dart2Parser";
import { BitwiseAndExpressionContext } from "./Dart2Parser";
import { BitwiseOperatorContext } from "./Dart2Parser";
import { ShiftExpressionContext } from "./Dart2Parser";
import { ShiftOperatorContext } from "./Dart2Parser";
import { AdditiveExpressionContext } from "./Dart2Parser";
import { AdditiveOperatorContext } from "./Dart2Parser";
import { MultiplicativeExpressionContext } from "./Dart2Parser";
import { MultiplicativeOperatorContext } from "./Dart2Parser";
import { UnaryExpressionContext } from "./Dart2Parser";
import { PrefixOperatorContext } from "./Dart2Parser";
import { MinusOperatorContext } from "./Dart2Parser";
import { NegationOperatorContext } from "./Dart2Parser";
import { TildeOperatorContext } from "./Dart2Parser";
import { AwaitExpressionContext } from "./Dart2Parser";
import { PostfixExpressionContext } from "./Dart2Parser";
import { PostfixOperatorContext } from "./Dart2Parser";
import { SelectorContext } from "./Dart2Parser";
import { IncrementOperatorContext } from "./Dart2Parser";
import { AssignableExpressionContext } from "./Dart2Parser";
import { UnconditionalAssignableSelectorContext } from "./Dart2Parser";
import { AssignableSelectorContext } from "./Dart2Parser";
import { IdentifierContext } from "./Dart2Parser";
import { QualifiedContext } from "./Dart2Parser";
import { TypeTestContext } from "./Dart2Parser";
import { IsOperatorContext } from "./Dart2Parser";
import { TypeCastContext } from "./Dart2Parser";
import { AsOperatorContext } from "./Dart2Parser";
import { StatementsContext } from "./Dart2Parser";
import { StatementContext } from "./Dart2Parser";
import { NonLabledStatmentContext } from "./Dart2Parser";
import { ExpressionStatementContext } from "./Dart2Parser";
import { LocalVariableDeclarationContext } from "./Dart2Parser";
import { LocalFunctionDeclarationContext } from "./Dart2Parser";
import { IfStatementContext } from "./Dart2Parser";
import { ForStatementContext } from "./Dart2Parser";
import { ForLoopPartsContext } from "./Dart2Parser";
import { ForInitializerStatementContext } from "./Dart2Parser";
import { WhileStatementContext } from "./Dart2Parser";
import { DoStatementContext } from "./Dart2Parser";
import { SwitchStatementContext } from "./Dart2Parser";
import { SwitchCaseContext } from "./Dart2Parser";
import { DefaultCaseContext } from "./Dart2Parser";
import { RethrowStatmentContext } from "./Dart2Parser";
import { TryStatementContext } from "./Dart2Parser";
import { OnPartContext } from "./Dart2Parser";
import { CatchPartContext } from "./Dart2Parser";
import { FinallyPartContext } from "./Dart2Parser";
import { ReturnStatementContext } from "./Dart2Parser";
import { LabelContext } from "./Dart2Parser";
import { BreakStatementContext } from "./Dart2Parser";
import { ContinueStatementContext } from "./Dart2Parser";
import { YieldStatementContext } from "./Dart2Parser";
import { YieldEachStatementContext } from "./Dart2Parser";
import { AssertStatementContext } from "./Dart2Parser";
import { AssertionContext } from "./Dart2Parser";
import { TopLevelDefinitionContext } from "./Dart2Parser";
import { GetOrSetContext } from "./Dart2Parser";
import { LibraryDefinitionContext } from "./Dart2Parser";
import { ScriptTagContext } from "./Dart2Parser";
import { LibraryNameContext } from "./Dart2Parser";
import { ImportOrExportContext } from "./Dart2Parser";
import { DottedIdentifierListContext } from "./Dart2Parser";
import { LibraryimportContext } from "./Dart2Parser";
import { ImportSpecificationContext } from "./Dart2Parser";
import { CombinatorContext } from "./Dart2Parser";
import { IdentifierListContext } from "./Dart2Parser";
import { LibraryExportContext } from "./Dart2Parser";
import { PartDirectiveContext } from "./Dart2Parser";
import { PartHeaderContext } from "./Dart2Parser";
import { PartDeclarationContext } from "./Dart2Parser";
import { UriContext } from "./Dart2Parser";
import { ConfigurableUriContext } from "./Dart2Parser";
import { ConfigurationUriContext } from "./Dart2Parser";
import { UriTestContext } from "./Dart2Parser";
import { DtypeContext } from "./Dart2Parser";
import { TypeNameContext } from "./Dart2Parser";
import { TypeArgumentsContext } from "./Dart2Parser";
import { TypeListContext } from "./Dart2Parser";
import { TypeAliasContext } from "./Dart2Parser";
import { TypeAliasBodyContext } from "./Dart2Parser";
import { FunctionTypeAliasContext } from "./Dart2Parser";
import { FunctionPrefixContext } from "./Dart2Parser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `Dart2Parser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface Dart2Visitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `Dart2Parser.compilationUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompilationUnit?: (ctx: CompilationUnitContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.variableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.declaredIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaredIdentifier?: (ctx: DeclaredIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.finalConstVarOrType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFinalConstVarOrType?: (ctx: FinalConstVarOrTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.varOrType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarOrType?: (ctx: VarOrTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.initializedVariableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitializedVariableDeclaration?: (ctx: InitializedVariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.initializedIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitializedIdentifier?: (ctx: InitializedIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.initializedIdentifierList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitializedIdentifierList?: (ctx: InitializedIdentifierListContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.functionSignature`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionSignature?: (ctx: FunctionSignatureContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.formalParameterPart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameterPart?: (ctx: FormalParameterPartContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.returnType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnType?: (ctx: ReturnTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.functionBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionBody?: (ctx: FunctionBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.formalParameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameterList?: (ctx: FormalParameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.normalFormalParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNormalFormalParameters?: (ctx: NormalFormalParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.optionalFormalParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionalFormalParameters?: (ctx: OptionalFormalParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.optionalPositionalFormalParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionalPositionalFormalParameters?: (ctx: OptionalPositionalFormalParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.namedFormalParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedFormalParameters?: (ctx: NamedFormalParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.normalFormalParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNormalFormalParameter?: (ctx: NormalFormalParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.functionFormalParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionFormalParameter?: (ctx: FunctionFormalParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.simpleFormalParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleFormalParameter?: (ctx: SimpleFormalParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.fieldFormalParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldFormalParameter?: (ctx: FieldFormalParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.defaultFormalParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultFormalParameter?: (ctx: DefaultFormalParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.defaultNamedParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultNamedParameter?: (ctx: DefaultNamedParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.classDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassDefinition?: (ctx: ClassDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.mixins`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMixins?: (ctx: MixinsContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.classMemberDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassMemberDefinition?: (ctx: ClassMemberDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.methodSignature`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodSignature?: (ctx: MethodSignatureContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.staticFinalDeclarationList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStaticFinalDeclarationList?: (ctx: StaticFinalDeclarationListContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.staticFinalDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStaticFinalDeclaration?: (ctx: StaticFinalDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.operatorSignature`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperatorSignature?: (ctx: OperatorSignatureContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.operator_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperator_?: (ctx: Operator_Context) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.binaryOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryOperator?: (ctx: BinaryOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.getterSignature`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGetterSignature?: (ctx: GetterSignatureContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.setterSignature`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetterSignature?: (ctx: SetterSignatureContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.constructorSignature`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructorSignature?: (ctx: ConstructorSignatureContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.redirection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRedirection?: (ctx: RedirectionContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.initializers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitializers?: (ctx: InitializersContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.initializerListEntry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitializerListEntry?: (ctx: InitializerListEntryContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.fieldInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldInitializer?: (ctx: FieldInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.factoryConstructorSignature`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFactoryConstructorSignature?: (ctx: FactoryConstructorSignatureContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.redirectingFactoryConstructorSignature`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRedirectingFactoryConstructorSignature?: (ctx: RedirectingFactoryConstructorSignatureContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.constantConstructorSignature`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantConstructorSignature?: (ctx: ConstantConstructorSignatureContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.superclass`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSuperclass?: (ctx: SuperclassContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.interfaces`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaces?: (ctx: InterfacesContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.mixinApplicationClass`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMixinApplicationClass?: (ctx: MixinApplicationClassContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.mixinApplication`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMixinApplication?: (ctx: MixinApplicationContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.enumType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumType?: (ctx: EnumTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.enumEntry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumEntry?: (ctx: EnumEntryContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.typeParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameter?: (ctx: TypeParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.typeParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameters?: (ctx: TypeParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.metadata`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMetadata?: (ctx: MetadataContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.expressionWithoutCascade`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionWithoutCascade?: (ctx: ExpressionWithoutCascadeContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.expressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionList?: (ctx: ExpressionListContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary?: (ctx: PrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.nullLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullLiteral?: (ctx: NullLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.numericLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericLiteral?: (ctx: NumericLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.booleanLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanLiteral?: (ctx: BooleanLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.stringLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteral?: (ctx: StringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.stringInterpolation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringInterpolation?: (ctx: StringInterpolationContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.symbolLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSymbolLiteral?: (ctx: SymbolLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.listLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListLiteral?: (ctx: ListLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.mapLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapLiteral?: (ctx: MapLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.mapLiteralEntry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapLiteralEntry?: (ctx: MapLiteralEntryContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.throwExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThrowExpression?: (ctx: ThrowExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.throwExpressionWithoutCascade`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThrowExpressionWithoutCascade?: (ctx: ThrowExpressionWithoutCascadeContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.functionExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionExpression?: (ctx: FunctionExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.thisExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThisExpression?: (ctx: ThisExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.nayaExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNayaExpression?: (ctx: NayaExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.constObjectExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstObjectExpression?: (ctx: ConstObjectExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArguments?: (ctx: ArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.argumentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentList?: (ctx: ArgumentListContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.namedArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedArgument?: (ctx: NamedArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.cascadeSection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCascadeSection?: (ctx: CascadeSectionContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.cascadeSelector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCascadeSelector?: (ctx: CascadeSelectorContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.argumentPart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentPart?: (ctx: ArgumentPartContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.assignmentOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentOperator?: (ctx: AssignmentOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.compoundAssignmentOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompoundAssignmentOperator?: (ctx: CompoundAssignmentOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.conditionalExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalExpression?: (ctx: ConditionalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.ifNullExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfNullExpression?: (ctx: IfNullExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.logicalOrExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.logicalAndExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.equalityExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqualityExpression?: (ctx: EqualityExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.equalityOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqualityOperator?: (ctx: EqualityOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.relationalExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationalExpression?: (ctx: RelationalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.relationalOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationalOperator?: (ctx: RelationalOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.bitwiseOrExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwiseOrExpression?: (ctx: BitwiseOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.bitwiseXorExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwiseXorExpression?: (ctx: BitwiseXorExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.bitwiseAndExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwiseAndExpression?: (ctx: BitwiseAndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.bitwiseOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwiseOperator?: (ctx: BitwiseOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.shiftExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShiftExpression?: (ctx: ShiftExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.shiftOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShiftOperator?: (ctx: ShiftOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.additiveExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveExpression?: (ctx: AdditiveExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.additiveOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveOperator?: (ctx: AdditiveOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.multiplicativeOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeOperator?: (ctx: MultiplicativeOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.unaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryExpression?: (ctx: UnaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.prefixOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrefixOperator?: (ctx: PrefixOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.minusOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMinusOperator?: (ctx: MinusOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.negationOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNegationOperator?: (ctx: NegationOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.tildeOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTildeOperator?: (ctx: TildeOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.awaitExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAwaitExpression?: (ctx: AwaitExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.postfixExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfixExpression?: (ctx: PostfixExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.postfixOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfixOperator?: (ctx: PostfixOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.selector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelector?: (ctx: SelectorContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.incrementOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIncrementOperator?: (ctx: IncrementOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.assignableExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignableExpression?: (ctx: AssignableExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.unconditionalAssignableSelector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnconditionalAssignableSelector?: (ctx: UnconditionalAssignableSelectorContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.assignableSelector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignableSelector?: (ctx: AssignableSelectorContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.qualified`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualified?: (ctx: QualifiedContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.typeTest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeTest?: (ctx: TypeTestContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.isOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIsOperator?: (ctx: IsOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.typeCast`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeCast?: (ctx: TypeCastContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.asOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAsOperator?: (ctx: AsOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.statements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatements?: (ctx: StatementsContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.nonLabledStatment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonLabledStatment?: (ctx: NonLabledStatmentContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.expressionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.localVariableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.localFunctionDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalFunctionDeclaration?: (ctx: LocalFunctionDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.forStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStatement?: (ctx: ForStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.forLoopParts`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForLoopParts?: (ctx: ForLoopPartsContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.forInitializerStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForInitializerStatement?: (ctx: ForInitializerStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.whileStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStatement?: (ctx: WhileStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.doStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoStatement?: (ctx: DoStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.switchStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchStatement?: (ctx: SwitchStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.switchCase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchCase?: (ctx: SwitchCaseContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.defaultCase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultCase?: (ctx: DefaultCaseContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.rethrowStatment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRethrowStatment?: (ctx: RethrowStatmentContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.tryStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTryStatement?: (ctx: TryStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.onPart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOnPart?: (ctx: OnPartContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.catchPart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatchPart?: (ctx: CatchPartContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.finallyPart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFinallyPart?: (ctx: FinallyPartContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.returnStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStatement?: (ctx: ReturnStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.label`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabel?: (ctx: LabelContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.breakStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreakStatement?: (ctx: BreakStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.continueStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinueStatement?: (ctx: ContinueStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.yieldStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYieldStatement?: (ctx: YieldStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.yieldEachStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYieldEachStatement?: (ctx: YieldEachStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.assertStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssertStatement?: (ctx: AssertStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.assertion`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssertion?: (ctx: AssertionContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.topLevelDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTopLevelDefinition?: (ctx: TopLevelDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.getOrSet`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGetOrSet?: (ctx: GetOrSetContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.libraryDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLibraryDefinition?: (ctx: LibraryDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.scriptTag`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScriptTag?: (ctx: ScriptTagContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.libraryName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLibraryName?: (ctx: LibraryNameContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.importOrExport`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportOrExport?: (ctx: ImportOrExportContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.dottedIdentifierList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDottedIdentifierList?: (ctx: DottedIdentifierListContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.libraryimport`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLibraryimport?: (ctx: LibraryimportContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.importSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportSpecification?: (ctx: ImportSpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.combinator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCombinator?: (ctx: CombinatorContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.identifierList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierList?: (ctx: IdentifierListContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.libraryExport`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLibraryExport?: (ctx: LibraryExportContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.partDirective`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartDirective?: (ctx: PartDirectiveContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.partHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartHeader?: (ctx: PartHeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.partDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartDeclaration?: (ctx: PartDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.uri`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUri?: (ctx: UriContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.configurableUri`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConfigurableUri?: (ctx: ConfigurableUriContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.configurationUri`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConfigurationUri?: (ctx: ConfigurationUriContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.uriTest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUriTest?: (ctx: UriTestContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.dtype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDtype?: (ctx: DtypeContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.typeName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeName?: (ctx: TypeNameContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.typeArguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArguments?: (ctx: TypeArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.typeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeList?: (ctx: TypeListContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.typeAlias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeAlias?: (ctx: TypeAliasContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.typeAliasBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeAliasBody?: (ctx: TypeAliasBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.functionTypeAlias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionTypeAlias?: (ctx: FunctionTypeAliasContext) => Result;

	/**
	 * Visit a parse tree produced by `Dart2Parser.functionPrefix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionPrefix?: (ctx: FunctionPrefixContext) => Result;
}

