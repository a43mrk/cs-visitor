// Generated from ./lib/grammars/dart/Dart2.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `Dart2Parser`.
 */
export interface Dart2Listener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `Dart2Parser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	enterCompilationUnit?: (ctx: CompilationUnitContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	exitCompilationUnit?: (ctx: CompilationUnitContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.declaredIdentifier`.
	 * @param ctx the parse tree
	 */
	enterDeclaredIdentifier?: (ctx: DeclaredIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.declaredIdentifier`.
	 * @param ctx the parse tree
	 */
	exitDeclaredIdentifier?: (ctx: DeclaredIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.finalConstVarOrType`.
	 * @param ctx the parse tree
	 */
	enterFinalConstVarOrType?: (ctx: FinalConstVarOrTypeContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.finalConstVarOrType`.
	 * @param ctx the parse tree
	 */
	exitFinalConstVarOrType?: (ctx: FinalConstVarOrTypeContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.varOrType`.
	 * @param ctx the parse tree
	 */
	enterVarOrType?: (ctx: VarOrTypeContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.varOrType`.
	 * @param ctx the parse tree
	 */
	exitVarOrType?: (ctx: VarOrTypeContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.initializedVariableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterInitializedVariableDeclaration?: (ctx: InitializedVariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.initializedVariableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitInitializedVariableDeclaration?: (ctx: InitializedVariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.initializedIdentifier`.
	 * @param ctx the parse tree
	 */
	enterInitializedIdentifier?: (ctx: InitializedIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.initializedIdentifier`.
	 * @param ctx the parse tree
	 */
	exitInitializedIdentifier?: (ctx: InitializedIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.initializedIdentifierList`.
	 * @param ctx the parse tree
	 */
	enterInitializedIdentifierList?: (ctx: InitializedIdentifierListContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.initializedIdentifierList`.
	 * @param ctx the parse tree
	 */
	exitInitializedIdentifierList?: (ctx: InitializedIdentifierListContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.functionSignature`.
	 * @param ctx the parse tree
	 */
	enterFunctionSignature?: (ctx: FunctionSignatureContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.functionSignature`.
	 * @param ctx the parse tree
	 */
	exitFunctionSignature?: (ctx: FunctionSignatureContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.formalParameterPart`.
	 * @param ctx the parse tree
	 */
	enterFormalParameterPart?: (ctx: FormalParameterPartContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.formalParameterPart`.
	 * @param ctx the parse tree
	 */
	exitFormalParameterPart?: (ctx: FormalParameterPartContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.returnType`.
	 * @param ctx the parse tree
	 */
	enterReturnType?: (ctx: ReturnTypeContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.returnType`.
	 * @param ctx the parse tree
	 */
	exitReturnType?: (ctx: ReturnTypeContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.functionBody`.
	 * @param ctx the parse tree
	 */
	enterFunctionBody?: (ctx: FunctionBodyContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.functionBody`.
	 * @param ctx the parse tree
	 */
	exitFunctionBody?: (ctx: FunctionBodyContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.formalParameterList`.
	 * @param ctx the parse tree
	 */
	enterFormalParameterList?: (ctx: FormalParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.formalParameterList`.
	 * @param ctx the parse tree
	 */
	exitFormalParameterList?: (ctx: FormalParameterListContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.normalFormalParameters`.
	 * @param ctx the parse tree
	 */
	enterNormalFormalParameters?: (ctx: NormalFormalParametersContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.normalFormalParameters`.
	 * @param ctx the parse tree
	 */
	exitNormalFormalParameters?: (ctx: NormalFormalParametersContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.optionalFormalParameters`.
	 * @param ctx the parse tree
	 */
	enterOptionalFormalParameters?: (ctx: OptionalFormalParametersContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.optionalFormalParameters`.
	 * @param ctx the parse tree
	 */
	exitOptionalFormalParameters?: (ctx: OptionalFormalParametersContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.optionalPositionalFormalParameters`.
	 * @param ctx the parse tree
	 */
	enterOptionalPositionalFormalParameters?: (ctx: OptionalPositionalFormalParametersContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.optionalPositionalFormalParameters`.
	 * @param ctx the parse tree
	 */
	exitOptionalPositionalFormalParameters?: (ctx: OptionalPositionalFormalParametersContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.namedFormalParameters`.
	 * @param ctx the parse tree
	 */
	enterNamedFormalParameters?: (ctx: NamedFormalParametersContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.namedFormalParameters`.
	 * @param ctx the parse tree
	 */
	exitNamedFormalParameters?: (ctx: NamedFormalParametersContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.normalFormalParameter`.
	 * @param ctx the parse tree
	 */
	enterNormalFormalParameter?: (ctx: NormalFormalParameterContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.normalFormalParameter`.
	 * @param ctx the parse tree
	 */
	exitNormalFormalParameter?: (ctx: NormalFormalParameterContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.functionFormalParameter`.
	 * @param ctx the parse tree
	 */
	enterFunctionFormalParameter?: (ctx: FunctionFormalParameterContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.functionFormalParameter`.
	 * @param ctx the parse tree
	 */
	exitFunctionFormalParameter?: (ctx: FunctionFormalParameterContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.simpleFormalParameter`.
	 * @param ctx the parse tree
	 */
	enterSimpleFormalParameter?: (ctx: SimpleFormalParameterContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.simpleFormalParameter`.
	 * @param ctx the parse tree
	 */
	exitSimpleFormalParameter?: (ctx: SimpleFormalParameterContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.fieldFormalParameter`.
	 * @param ctx the parse tree
	 */
	enterFieldFormalParameter?: (ctx: FieldFormalParameterContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.fieldFormalParameter`.
	 * @param ctx the parse tree
	 */
	exitFieldFormalParameter?: (ctx: FieldFormalParameterContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.defaultFormalParameter`.
	 * @param ctx the parse tree
	 */
	enterDefaultFormalParameter?: (ctx: DefaultFormalParameterContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.defaultFormalParameter`.
	 * @param ctx the parse tree
	 */
	exitDefaultFormalParameter?: (ctx: DefaultFormalParameterContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.defaultNamedParameter`.
	 * @param ctx the parse tree
	 */
	enterDefaultNamedParameter?: (ctx: DefaultNamedParameterContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.defaultNamedParameter`.
	 * @param ctx the parse tree
	 */
	exitDefaultNamedParameter?: (ctx: DefaultNamedParameterContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.classDefinition`.
	 * @param ctx the parse tree
	 */
	enterClassDefinition?: (ctx: ClassDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.classDefinition`.
	 * @param ctx the parse tree
	 */
	exitClassDefinition?: (ctx: ClassDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.mixins`.
	 * @param ctx the parse tree
	 */
	enterMixins?: (ctx: MixinsContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.mixins`.
	 * @param ctx the parse tree
	 */
	exitMixins?: (ctx: MixinsContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.classMemberDefinition`.
	 * @param ctx the parse tree
	 */
	enterClassMemberDefinition?: (ctx: ClassMemberDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.classMemberDefinition`.
	 * @param ctx the parse tree
	 */
	exitClassMemberDefinition?: (ctx: ClassMemberDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.methodSignature`.
	 * @param ctx the parse tree
	 */
	enterMethodSignature?: (ctx: MethodSignatureContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.methodSignature`.
	 * @param ctx the parse tree
	 */
	exitMethodSignature?: (ctx: MethodSignatureContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.staticFinalDeclarationList`.
	 * @param ctx the parse tree
	 */
	enterStaticFinalDeclarationList?: (ctx: StaticFinalDeclarationListContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.staticFinalDeclarationList`.
	 * @param ctx the parse tree
	 */
	exitStaticFinalDeclarationList?: (ctx: StaticFinalDeclarationListContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.staticFinalDeclaration`.
	 * @param ctx the parse tree
	 */
	enterStaticFinalDeclaration?: (ctx: StaticFinalDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.staticFinalDeclaration`.
	 * @param ctx the parse tree
	 */
	exitStaticFinalDeclaration?: (ctx: StaticFinalDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.operatorSignature`.
	 * @param ctx the parse tree
	 */
	enterOperatorSignature?: (ctx: OperatorSignatureContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.operatorSignature`.
	 * @param ctx the parse tree
	 */
	exitOperatorSignature?: (ctx: OperatorSignatureContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.operator_`.
	 * @param ctx the parse tree
	 */
	enterOperator_?: (ctx: Operator_Context) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.operator_`.
	 * @param ctx the parse tree
	 */
	exitOperator_?: (ctx: Operator_Context) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.binaryOperator`.
	 * @param ctx the parse tree
	 */
	enterBinaryOperator?: (ctx: BinaryOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.binaryOperator`.
	 * @param ctx the parse tree
	 */
	exitBinaryOperator?: (ctx: BinaryOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.getterSignature`.
	 * @param ctx the parse tree
	 */
	enterGetterSignature?: (ctx: GetterSignatureContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.getterSignature`.
	 * @param ctx the parse tree
	 */
	exitGetterSignature?: (ctx: GetterSignatureContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.setterSignature`.
	 * @param ctx the parse tree
	 */
	enterSetterSignature?: (ctx: SetterSignatureContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.setterSignature`.
	 * @param ctx the parse tree
	 */
	exitSetterSignature?: (ctx: SetterSignatureContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.constructorSignature`.
	 * @param ctx the parse tree
	 */
	enterConstructorSignature?: (ctx: ConstructorSignatureContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.constructorSignature`.
	 * @param ctx the parse tree
	 */
	exitConstructorSignature?: (ctx: ConstructorSignatureContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.redirection`.
	 * @param ctx the parse tree
	 */
	enterRedirection?: (ctx: RedirectionContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.redirection`.
	 * @param ctx the parse tree
	 */
	exitRedirection?: (ctx: RedirectionContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.initializers`.
	 * @param ctx the parse tree
	 */
	enterInitializers?: (ctx: InitializersContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.initializers`.
	 * @param ctx the parse tree
	 */
	exitInitializers?: (ctx: InitializersContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.initializerListEntry`.
	 * @param ctx the parse tree
	 */
	enterInitializerListEntry?: (ctx: InitializerListEntryContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.initializerListEntry`.
	 * @param ctx the parse tree
	 */
	exitInitializerListEntry?: (ctx: InitializerListEntryContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.fieldInitializer`.
	 * @param ctx the parse tree
	 */
	enterFieldInitializer?: (ctx: FieldInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.fieldInitializer`.
	 * @param ctx the parse tree
	 */
	exitFieldInitializer?: (ctx: FieldInitializerContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.factoryConstructorSignature`.
	 * @param ctx the parse tree
	 */
	enterFactoryConstructorSignature?: (ctx: FactoryConstructorSignatureContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.factoryConstructorSignature`.
	 * @param ctx the parse tree
	 */
	exitFactoryConstructorSignature?: (ctx: FactoryConstructorSignatureContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.redirectingFactoryConstructorSignature`.
	 * @param ctx the parse tree
	 */
	enterRedirectingFactoryConstructorSignature?: (ctx: RedirectingFactoryConstructorSignatureContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.redirectingFactoryConstructorSignature`.
	 * @param ctx the parse tree
	 */
	exitRedirectingFactoryConstructorSignature?: (ctx: RedirectingFactoryConstructorSignatureContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.constantConstructorSignature`.
	 * @param ctx the parse tree
	 */
	enterConstantConstructorSignature?: (ctx: ConstantConstructorSignatureContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.constantConstructorSignature`.
	 * @param ctx the parse tree
	 */
	exitConstantConstructorSignature?: (ctx: ConstantConstructorSignatureContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.superclass`.
	 * @param ctx the parse tree
	 */
	enterSuperclass?: (ctx: SuperclassContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.superclass`.
	 * @param ctx the parse tree
	 */
	exitSuperclass?: (ctx: SuperclassContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.interfaces`.
	 * @param ctx the parse tree
	 */
	enterInterfaces?: (ctx: InterfacesContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.interfaces`.
	 * @param ctx the parse tree
	 */
	exitInterfaces?: (ctx: InterfacesContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.mixinApplicationClass`.
	 * @param ctx the parse tree
	 */
	enterMixinApplicationClass?: (ctx: MixinApplicationClassContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.mixinApplicationClass`.
	 * @param ctx the parse tree
	 */
	exitMixinApplicationClass?: (ctx: MixinApplicationClassContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.mixinApplication`.
	 * @param ctx the parse tree
	 */
	enterMixinApplication?: (ctx: MixinApplicationContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.mixinApplication`.
	 * @param ctx the parse tree
	 */
	exitMixinApplication?: (ctx: MixinApplicationContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.enumType`.
	 * @param ctx the parse tree
	 */
	enterEnumType?: (ctx: EnumTypeContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.enumType`.
	 * @param ctx the parse tree
	 */
	exitEnumType?: (ctx: EnumTypeContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.enumEntry`.
	 * @param ctx the parse tree
	 */
	enterEnumEntry?: (ctx: EnumEntryContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.enumEntry`.
	 * @param ctx the parse tree
	 */
	exitEnumEntry?: (ctx: EnumEntryContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.typeParameter`.
	 * @param ctx the parse tree
	 */
	enterTypeParameter?: (ctx: TypeParameterContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.typeParameter`.
	 * @param ctx the parse tree
	 */
	exitTypeParameter?: (ctx: TypeParameterContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.typeParameters`.
	 * @param ctx the parse tree
	 */
	enterTypeParameters?: (ctx: TypeParametersContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.typeParameters`.
	 * @param ctx the parse tree
	 */
	exitTypeParameters?: (ctx: TypeParametersContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.metadata`.
	 * @param ctx the parse tree
	 */
	enterMetadata?: (ctx: MetadataContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.metadata`.
	 * @param ctx the parse tree
	 */
	exitMetadata?: (ctx: MetadataContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.expressionWithoutCascade`.
	 * @param ctx the parse tree
	 */
	enterExpressionWithoutCascade?: (ctx: ExpressionWithoutCascadeContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.expressionWithoutCascade`.
	 * @param ctx the parse tree
	 */
	exitExpressionWithoutCascade?: (ctx: ExpressionWithoutCascadeContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.expressionList`.
	 * @param ctx the parse tree
	 */
	enterExpressionList?: (ctx: ExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.expressionList`.
	 * @param ctx the parse tree
	 */
	exitExpressionList?: (ctx: ExpressionListContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.primary`.
	 * @param ctx the parse tree
	 */
	enterPrimary?: (ctx: PrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.primary`.
	 * @param ctx the parse tree
	 */
	exitPrimary?: (ctx: PrimaryContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.nullLiteral`.
	 * @param ctx the parse tree
	 */
	enterNullLiteral?: (ctx: NullLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.nullLiteral`.
	 * @param ctx the parse tree
	 */
	exitNullLiteral?: (ctx: NullLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.numericLiteral`.
	 * @param ctx the parse tree
	 */
	enterNumericLiteral?: (ctx: NumericLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.numericLiteral`.
	 * @param ctx the parse tree
	 */
	exitNumericLiteral?: (ctx: NumericLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.booleanLiteral`.
	 * @param ctx the parse tree
	 */
	enterBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.booleanLiteral`.
	 * @param ctx the parse tree
	 */
	exitBooleanLiteral?: (ctx: BooleanLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.stringLiteral`.
	 * @param ctx the parse tree
	 */
	enterStringLiteral?: (ctx: StringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.stringLiteral`.
	 * @param ctx the parse tree
	 */
	exitStringLiteral?: (ctx: StringLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.stringInterpolation`.
	 * @param ctx the parse tree
	 */
	enterStringInterpolation?: (ctx: StringInterpolationContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.stringInterpolation`.
	 * @param ctx the parse tree
	 */
	exitStringInterpolation?: (ctx: StringInterpolationContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.symbolLiteral`.
	 * @param ctx the parse tree
	 */
	enterSymbolLiteral?: (ctx: SymbolLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.symbolLiteral`.
	 * @param ctx the parse tree
	 */
	exitSymbolLiteral?: (ctx: SymbolLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.listLiteral`.
	 * @param ctx the parse tree
	 */
	enterListLiteral?: (ctx: ListLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.listLiteral`.
	 * @param ctx the parse tree
	 */
	exitListLiteral?: (ctx: ListLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.mapLiteral`.
	 * @param ctx the parse tree
	 */
	enterMapLiteral?: (ctx: MapLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.mapLiteral`.
	 * @param ctx the parse tree
	 */
	exitMapLiteral?: (ctx: MapLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.mapLiteralEntry`.
	 * @param ctx the parse tree
	 */
	enterMapLiteralEntry?: (ctx: MapLiteralEntryContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.mapLiteralEntry`.
	 * @param ctx the parse tree
	 */
	exitMapLiteralEntry?: (ctx: MapLiteralEntryContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.throwExpression`.
	 * @param ctx the parse tree
	 */
	enterThrowExpression?: (ctx: ThrowExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.throwExpression`.
	 * @param ctx the parse tree
	 */
	exitThrowExpression?: (ctx: ThrowExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.throwExpressionWithoutCascade`.
	 * @param ctx the parse tree
	 */
	enterThrowExpressionWithoutCascade?: (ctx: ThrowExpressionWithoutCascadeContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.throwExpressionWithoutCascade`.
	 * @param ctx the parse tree
	 */
	exitThrowExpressionWithoutCascade?: (ctx: ThrowExpressionWithoutCascadeContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.functionExpression`.
	 * @param ctx the parse tree
	 */
	enterFunctionExpression?: (ctx: FunctionExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.functionExpression`.
	 * @param ctx the parse tree
	 */
	exitFunctionExpression?: (ctx: FunctionExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.thisExpression`.
	 * @param ctx the parse tree
	 */
	enterThisExpression?: (ctx: ThisExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.thisExpression`.
	 * @param ctx the parse tree
	 */
	exitThisExpression?: (ctx: ThisExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.nayaExpression`.
	 * @param ctx the parse tree
	 */
	enterNayaExpression?: (ctx: NayaExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.nayaExpression`.
	 * @param ctx the parse tree
	 */
	exitNayaExpression?: (ctx: NayaExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.constObjectExpression`.
	 * @param ctx the parse tree
	 */
	enterConstObjectExpression?: (ctx: ConstObjectExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.constObjectExpression`.
	 * @param ctx the parse tree
	 */
	exitConstObjectExpression?: (ctx: ConstObjectExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.arguments`.
	 * @param ctx the parse tree
	 */
	enterArguments?: (ctx: ArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.arguments`.
	 * @param ctx the parse tree
	 */
	exitArguments?: (ctx: ArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.argumentList`.
	 * @param ctx the parse tree
	 */
	enterArgumentList?: (ctx: ArgumentListContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.argumentList`.
	 * @param ctx the parse tree
	 */
	exitArgumentList?: (ctx: ArgumentListContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.namedArgument`.
	 * @param ctx the parse tree
	 */
	enterNamedArgument?: (ctx: NamedArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.namedArgument`.
	 * @param ctx the parse tree
	 */
	exitNamedArgument?: (ctx: NamedArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.cascadeSection`.
	 * @param ctx the parse tree
	 */
	enterCascadeSection?: (ctx: CascadeSectionContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.cascadeSection`.
	 * @param ctx the parse tree
	 */
	exitCascadeSection?: (ctx: CascadeSectionContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.cascadeSelector`.
	 * @param ctx the parse tree
	 */
	enterCascadeSelector?: (ctx: CascadeSelectorContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.cascadeSelector`.
	 * @param ctx the parse tree
	 */
	exitCascadeSelector?: (ctx: CascadeSelectorContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.argumentPart`.
	 * @param ctx the parse tree
	 */
	enterArgumentPart?: (ctx: ArgumentPartContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.argumentPart`.
	 * @param ctx the parse tree
	 */
	exitArgumentPart?: (ctx: ArgumentPartContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	enterAssignmentOperator?: (ctx: AssignmentOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	exitAssignmentOperator?: (ctx: AssignmentOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.compoundAssignmentOperator`.
	 * @param ctx the parse tree
	 */
	enterCompoundAssignmentOperator?: (ctx: CompoundAssignmentOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.compoundAssignmentOperator`.
	 * @param ctx the parse tree
	 */
	exitCompoundAssignmentOperator?: (ctx: CompoundAssignmentOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.conditionalExpression`.
	 * @param ctx the parse tree
	 */
	enterConditionalExpression?: (ctx: ConditionalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.conditionalExpression`.
	 * @param ctx the parse tree
	 */
	exitConditionalExpression?: (ctx: ConditionalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.ifNullExpression`.
	 * @param ctx the parse tree
	 */
	enterIfNullExpression?: (ctx: IfNullExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.ifNullExpression`.
	 * @param ctx the parse tree
	 */
	exitIfNullExpression?: (ctx: IfNullExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.logicalOrExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.logicalOrExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.logicalAndExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.logicalAndExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.equalityExpression`.
	 * @param ctx the parse tree
	 */
	enterEqualityExpression?: (ctx: EqualityExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.equalityExpression`.
	 * @param ctx the parse tree
	 */
	exitEqualityExpression?: (ctx: EqualityExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.equalityOperator`.
	 * @param ctx the parse tree
	 */
	enterEqualityOperator?: (ctx: EqualityOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.equalityOperator`.
	 * @param ctx the parse tree
	 */
	exitEqualityOperator?: (ctx: EqualityOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.relationalExpression`.
	 * @param ctx the parse tree
	 */
	enterRelationalExpression?: (ctx: RelationalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.relationalExpression`.
	 * @param ctx the parse tree
	 */
	exitRelationalExpression?: (ctx: RelationalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.relationalOperator`.
	 * @param ctx the parse tree
	 */
	enterRelationalOperator?: (ctx: RelationalOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.relationalOperator`.
	 * @param ctx the parse tree
	 */
	exitRelationalOperator?: (ctx: RelationalOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.bitwiseOrExpression`.
	 * @param ctx the parse tree
	 */
	enterBitwiseOrExpression?: (ctx: BitwiseOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.bitwiseOrExpression`.
	 * @param ctx the parse tree
	 */
	exitBitwiseOrExpression?: (ctx: BitwiseOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.bitwiseXorExpression`.
	 * @param ctx the parse tree
	 */
	enterBitwiseXorExpression?: (ctx: BitwiseXorExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.bitwiseXorExpression`.
	 * @param ctx the parse tree
	 */
	exitBitwiseXorExpression?: (ctx: BitwiseXorExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.bitwiseAndExpression`.
	 * @param ctx the parse tree
	 */
	enterBitwiseAndExpression?: (ctx: BitwiseAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.bitwiseAndExpression`.
	 * @param ctx the parse tree
	 */
	exitBitwiseAndExpression?: (ctx: BitwiseAndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.bitwiseOperator`.
	 * @param ctx the parse tree
	 */
	enterBitwiseOperator?: (ctx: BitwiseOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.bitwiseOperator`.
	 * @param ctx the parse tree
	 */
	exitBitwiseOperator?: (ctx: BitwiseOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.shiftExpression`.
	 * @param ctx the parse tree
	 */
	enterShiftExpression?: (ctx: ShiftExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.shiftExpression`.
	 * @param ctx the parse tree
	 */
	exitShiftExpression?: (ctx: ShiftExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.shiftOperator`.
	 * @param ctx the parse tree
	 */
	enterShiftOperator?: (ctx: ShiftOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.shiftOperator`.
	 * @param ctx the parse tree
	 */
	exitShiftOperator?: (ctx: ShiftOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.additiveExpression`.
	 * @param ctx the parse tree
	 */
	enterAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.additiveExpression`.
	 * @param ctx the parse tree
	 */
	exitAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.additiveOperator`.
	 * @param ctx the parse tree
	 */
	enterAdditiveOperator?: (ctx: AdditiveOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.additiveOperator`.
	 * @param ctx the parse tree
	 */
	exitAdditiveOperator?: (ctx: AdditiveOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.multiplicativeOperator`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeOperator?: (ctx: MultiplicativeOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.multiplicativeOperator`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeOperator?: (ctx: MultiplicativeOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.unaryExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryExpression?: (ctx: UnaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.unaryExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryExpression?: (ctx: UnaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.prefixOperator`.
	 * @param ctx the parse tree
	 */
	enterPrefixOperator?: (ctx: PrefixOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.prefixOperator`.
	 * @param ctx the parse tree
	 */
	exitPrefixOperator?: (ctx: PrefixOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.minusOperator`.
	 * @param ctx the parse tree
	 */
	enterMinusOperator?: (ctx: MinusOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.minusOperator`.
	 * @param ctx the parse tree
	 */
	exitMinusOperator?: (ctx: MinusOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.negationOperator`.
	 * @param ctx the parse tree
	 */
	enterNegationOperator?: (ctx: NegationOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.negationOperator`.
	 * @param ctx the parse tree
	 */
	exitNegationOperator?: (ctx: NegationOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.tildeOperator`.
	 * @param ctx the parse tree
	 */
	enterTildeOperator?: (ctx: TildeOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.tildeOperator`.
	 * @param ctx the parse tree
	 */
	exitTildeOperator?: (ctx: TildeOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.awaitExpression`.
	 * @param ctx the parse tree
	 */
	enterAwaitExpression?: (ctx: AwaitExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.awaitExpression`.
	 * @param ctx the parse tree
	 */
	exitAwaitExpression?: (ctx: AwaitExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.postfixExpression`.
	 * @param ctx the parse tree
	 */
	enterPostfixExpression?: (ctx: PostfixExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.postfixExpression`.
	 * @param ctx the parse tree
	 */
	exitPostfixExpression?: (ctx: PostfixExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.postfixOperator`.
	 * @param ctx the parse tree
	 */
	enterPostfixOperator?: (ctx: PostfixOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.postfixOperator`.
	 * @param ctx the parse tree
	 */
	exitPostfixOperator?: (ctx: PostfixOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.selector`.
	 * @param ctx the parse tree
	 */
	enterSelector?: (ctx: SelectorContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.selector`.
	 * @param ctx the parse tree
	 */
	exitSelector?: (ctx: SelectorContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.incrementOperator`.
	 * @param ctx the parse tree
	 */
	enterIncrementOperator?: (ctx: IncrementOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.incrementOperator`.
	 * @param ctx the parse tree
	 */
	exitIncrementOperator?: (ctx: IncrementOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.assignableExpression`.
	 * @param ctx the parse tree
	 */
	enterAssignableExpression?: (ctx: AssignableExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.assignableExpression`.
	 * @param ctx the parse tree
	 */
	exitAssignableExpression?: (ctx: AssignableExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.unconditionalAssignableSelector`.
	 * @param ctx the parse tree
	 */
	enterUnconditionalAssignableSelector?: (ctx: UnconditionalAssignableSelectorContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.unconditionalAssignableSelector`.
	 * @param ctx the parse tree
	 */
	exitUnconditionalAssignableSelector?: (ctx: UnconditionalAssignableSelectorContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.assignableSelector`.
	 * @param ctx the parse tree
	 */
	enterAssignableSelector?: (ctx: AssignableSelectorContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.assignableSelector`.
	 * @param ctx the parse tree
	 */
	exitAssignableSelector?: (ctx: AssignableSelectorContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.qualified`.
	 * @param ctx the parse tree
	 */
	enterQualified?: (ctx: QualifiedContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.qualified`.
	 * @param ctx the parse tree
	 */
	exitQualified?: (ctx: QualifiedContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.typeTest`.
	 * @param ctx the parse tree
	 */
	enterTypeTest?: (ctx: TypeTestContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.typeTest`.
	 * @param ctx the parse tree
	 */
	exitTypeTest?: (ctx: TypeTestContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.isOperator`.
	 * @param ctx the parse tree
	 */
	enterIsOperator?: (ctx: IsOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.isOperator`.
	 * @param ctx the parse tree
	 */
	exitIsOperator?: (ctx: IsOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.typeCast`.
	 * @param ctx the parse tree
	 */
	enterTypeCast?: (ctx: TypeCastContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.typeCast`.
	 * @param ctx the parse tree
	 */
	exitTypeCast?: (ctx: TypeCastContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.asOperator`.
	 * @param ctx the parse tree
	 */
	enterAsOperator?: (ctx: AsOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.asOperator`.
	 * @param ctx the parse tree
	 */
	exitAsOperator?: (ctx: AsOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.statements`.
	 * @param ctx the parse tree
	 */
	enterStatements?: (ctx: StatementsContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.statements`.
	 * @param ctx the parse tree
	 */
	exitStatements?: (ctx: StatementsContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.nonLabledStatment`.
	 * @param ctx the parse tree
	 */
	enterNonLabledStatment?: (ctx: NonLabledStatmentContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.nonLabledStatment`.
	 * @param ctx the parse tree
	 */
	exitNonLabledStatment?: (ctx: NonLabledStatmentContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	enterExpressionStatement?: (ctx: ExpressionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	exitExpressionStatement?: (ctx: ExpressionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.localVariableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.localVariableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.localFunctionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterLocalFunctionDeclaration?: (ctx: LocalFunctionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.localFunctionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitLocalFunctionDeclaration?: (ctx: LocalFunctionDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.ifStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.ifStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.forStatement`.
	 * @param ctx the parse tree
	 */
	enterForStatement?: (ctx: ForStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.forStatement`.
	 * @param ctx the parse tree
	 */
	exitForStatement?: (ctx: ForStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.forLoopParts`.
	 * @param ctx the parse tree
	 */
	enterForLoopParts?: (ctx: ForLoopPartsContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.forLoopParts`.
	 * @param ctx the parse tree
	 */
	exitForLoopParts?: (ctx: ForLoopPartsContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.forInitializerStatement`.
	 * @param ctx the parse tree
	 */
	enterForInitializerStatement?: (ctx: ForInitializerStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.forInitializerStatement`.
	 * @param ctx the parse tree
	 */
	exitForInitializerStatement?: (ctx: ForInitializerStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.whileStatement`.
	 * @param ctx the parse tree
	 */
	enterWhileStatement?: (ctx: WhileStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.whileStatement`.
	 * @param ctx the parse tree
	 */
	exitWhileStatement?: (ctx: WhileStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.doStatement`.
	 * @param ctx the parse tree
	 */
	enterDoStatement?: (ctx: DoStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.doStatement`.
	 * @param ctx the parse tree
	 */
	exitDoStatement?: (ctx: DoStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.switchStatement`.
	 * @param ctx the parse tree
	 */
	enterSwitchStatement?: (ctx: SwitchStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.switchStatement`.
	 * @param ctx the parse tree
	 */
	exitSwitchStatement?: (ctx: SwitchStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.switchCase`.
	 * @param ctx the parse tree
	 */
	enterSwitchCase?: (ctx: SwitchCaseContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.switchCase`.
	 * @param ctx the parse tree
	 */
	exitSwitchCase?: (ctx: SwitchCaseContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.defaultCase`.
	 * @param ctx the parse tree
	 */
	enterDefaultCase?: (ctx: DefaultCaseContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.defaultCase`.
	 * @param ctx the parse tree
	 */
	exitDefaultCase?: (ctx: DefaultCaseContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.rethrowStatment`.
	 * @param ctx the parse tree
	 */
	enterRethrowStatment?: (ctx: RethrowStatmentContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.rethrowStatment`.
	 * @param ctx the parse tree
	 */
	exitRethrowStatment?: (ctx: RethrowStatmentContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.tryStatement`.
	 * @param ctx the parse tree
	 */
	enterTryStatement?: (ctx: TryStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.tryStatement`.
	 * @param ctx the parse tree
	 */
	exitTryStatement?: (ctx: TryStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.onPart`.
	 * @param ctx the parse tree
	 */
	enterOnPart?: (ctx: OnPartContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.onPart`.
	 * @param ctx the parse tree
	 */
	exitOnPart?: (ctx: OnPartContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.catchPart`.
	 * @param ctx the parse tree
	 */
	enterCatchPart?: (ctx: CatchPartContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.catchPart`.
	 * @param ctx the parse tree
	 */
	exitCatchPart?: (ctx: CatchPartContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.finallyPart`.
	 * @param ctx the parse tree
	 */
	enterFinallyPart?: (ctx: FinallyPartContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.finallyPart`.
	 * @param ctx the parse tree
	 */
	exitFinallyPart?: (ctx: FinallyPartContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.returnStatement`.
	 * @param ctx the parse tree
	 */
	enterReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.returnStatement`.
	 * @param ctx the parse tree
	 */
	exitReturnStatement?: (ctx: ReturnStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.label`.
	 * @param ctx the parse tree
	 */
	enterLabel?: (ctx: LabelContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.label`.
	 * @param ctx the parse tree
	 */
	exitLabel?: (ctx: LabelContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.breakStatement`.
	 * @param ctx the parse tree
	 */
	enterBreakStatement?: (ctx: BreakStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.breakStatement`.
	 * @param ctx the parse tree
	 */
	exitBreakStatement?: (ctx: BreakStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.continueStatement`.
	 * @param ctx the parse tree
	 */
	enterContinueStatement?: (ctx: ContinueStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.continueStatement`.
	 * @param ctx the parse tree
	 */
	exitContinueStatement?: (ctx: ContinueStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.yieldStatement`.
	 * @param ctx the parse tree
	 */
	enterYieldStatement?: (ctx: YieldStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.yieldStatement`.
	 * @param ctx the parse tree
	 */
	exitYieldStatement?: (ctx: YieldStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.yieldEachStatement`.
	 * @param ctx the parse tree
	 */
	enterYieldEachStatement?: (ctx: YieldEachStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.yieldEachStatement`.
	 * @param ctx the parse tree
	 */
	exitYieldEachStatement?: (ctx: YieldEachStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.assertStatement`.
	 * @param ctx the parse tree
	 */
	enterAssertStatement?: (ctx: AssertStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.assertStatement`.
	 * @param ctx the parse tree
	 */
	exitAssertStatement?: (ctx: AssertStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.assertion`.
	 * @param ctx the parse tree
	 */
	enterAssertion?: (ctx: AssertionContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.assertion`.
	 * @param ctx the parse tree
	 */
	exitAssertion?: (ctx: AssertionContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.topLevelDefinition`.
	 * @param ctx the parse tree
	 */
	enterTopLevelDefinition?: (ctx: TopLevelDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.topLevelDefinition`.
	 * @param ctx the parse tree
	 */
	exitTopLevelDefinition?: (ctx: TopLevelDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.getOrSet`.
	 * @param ctx the parse tree
	 */
	enterGetOrSet?: (ctx: GetOrSetContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.getOrSet`.
	 * @param ctx the parse tree
	 */
	exitGetOrSet?: (ctx: GetOrSetContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.libraryDefinition`.
	 * @param ctx the parse tree
	 */
	enterLibraryDefinition?: (ctx: LibraryDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.libraryDefinition`.
	 * @param ctx the parse tree
	 */
	exitLibraryDefinition?: (ctx: LibraryDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.scriptTag`.
	 * @param ctx the parse tree
	 */
	enterScriptTag?: (ctx: ScriptTagContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.scriptTag`.
	 * @param ctx the parse tree
	 */
	exitScriptTag?: (ctx: ScriptTagContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.libraryName`.
	 * @param ctx the parse tree
	 */
	enterLibraryName?: (ctx: LibraryNameContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.libraryName`.
	 * @param ctx the parse tree
	 */
	exitLibraryName?: (ctx: LibraryNameContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.importOrExport`.
	 * @param ctx the parse tree
	 */
	enterImportOrExport?: (ctx: ImportOrExportContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.importOrExport`.
	 * @param ctx the parse tree
	 */
	exitImportOrExport?: (ctx: ImportOrExportContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.dottedIdentifierList`.
	 * @param ctx the parse tree
	 */
	enterDottedIdentifierList?: (ctx: DottedIdentifierListContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.dottedIdentifierList`.
	 * @param ctx the parse tree
	 */
	exitDottedIdentifierList?: (ctx: DottedIdentifierListContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.libraryimport`.
	 * @param ctx the parse tree
	 */
	enterLibraryimport?: (ctx: LibraryimportContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.libraryimport`.
	 * @param ctx the parse tree
	 */
	exitLibraryimport?: (ctx: LibraryimportContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.importSpecification`.
	 * @param ctx the parse tree
	 */
	enterImportSpecification?: (ctx: ImportSpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.importSpecification`.
	 * @param ctx the parse tree
	 */
	exitImportSpecification?: (ctx: ImportSpecificationContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.combinator`.
	 * @param ctx the parse tree
	 */
	enterCombinator?: (ctx: CombinatorContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.combinator`.
	 * @param ctx the parse tree
	 */
	exitCombinator?: (ctx: CombinatorContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.identifierList`.
	 * @param ctx the parse tree
	 */
	enterIdentifierList?: (ctx: IdentifierListContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.identifierList`.
	 * @param ctx the parse tree
	 */
	exitIdentifierList?: (ctx: IdentifierListContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.libraryExport`.
	 * @param ctx the parse tree
	 */
	enterLibraryExport?: (ctx: LibraryExportContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.libraryExport`.
	 * @param ctx the parse tree
	 */
	exitLibraryExport?: (ctx: LibraryExportContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.partDirective`.
	 * @param ctx the parse tree
	 */
	enterPartDirective?: (ctx: PartDirectiveContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.partDirective`.
	 * @param ctx the parse tree
	 */
	exitPartDirective?: (ctx: PartDirectiveContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.partHeader`.
	 * @param ctx the parse tree
	 */
	enterPartHeader?: (ctx: PartHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.partHeader`.
	 * @param ctx the parse tree
	 */
	exitPartHeader?: (ctx: PartHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.partDeclaration`.
	 * @param ctx the parse tree
	 */
	enterPartDeclaration?: (ctx: PartDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.partDeclaration`.
	 * @param ctx the parse tree
	 */
	exitPartDeclaration?: (ctx: PartDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.uri`.
	 * @param ctx the parse tree
	 */
	enterUri?: (ctx: UriContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.uri`.
	 * @param ctx the parse tree
	 */
	exitUri?: (ctx: UriContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.configurableUri`.
	 * @param ctx the parse tree
	 */
	enterConfigurableUri?: (ctx: ConfigurableUriContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.configurableUri`.
	 * @param ctx the parse tree
	 */
	exitConfigurableUri?: (ctx: ConfigurableUriContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.configurationUri`.
	 * @param ctx the parse tree
	 */
	enterConfigurationUri?: (ctx: ConfigurationUriContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.configurationUri`.
	 * @param ctx the parse tree
	 */
	exitConfigurationUri?: (ctx: ConfigurationUriContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.uriTest`.
	 * @param ctx the parse tree
	 */
	enterUriTest?: (ctx: UriTestContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.uriTest`.
	 * @param ctx the parse tree
	 */
	exitUriTest?: (ctx: UriTestContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.dtype`.
	 * @param ctx the parse tree
	 */
	enterDtype?: (ctx: DtypeContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.dtype`.
	 * @param ctx the parse tree
	 */
	exitDtype?: (ctx: DtypeContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.typeName`.
	 * @param ctx the parse tree
	 */
	enterTypeName?: (ctx: TypeNameContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.typeName`.
	 * @param ctx the parse tree
	 */
	exitTypeName?: (ctx: TypeNameContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.typeArguments`.
	 * @param ctx the parse tree
	 */
	enterTypeArguments?: (ctx: TypeArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.typeArguments`.
	 * @param ctx the parse tree
	 */
	exitTypeArguments?: (ctx: TypeArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.typeList`.
	 * @param ctx the parse tree
	 */
	enterTypeList?: (ctx: TypeListContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.typeList`.
	 * @param ctx the parse tree
	 */
	exitTypeList?: (ctx: TypeListContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.typeAlias`.
	 * @param ctx the parse tree
	 */
	enterTypeAlias?: (ctx: TypeAliasContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.typeAlias`.
	 * @param ctx the parse tree
	 */
	exitTypeAlias?: (ctx: TypeAliasContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.typeAliasBody`.
	 * @param ctx the parse tree
	 */
	enterTypeAliasBody?: (ctx: TypeAliasBodyContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.typeAliasBody`.
	 * @param ctx the parse tree
	 */
	exitTypeAliasBody?: (ctx: TypeAliasBodyContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.functionTypeAlias`.
	 * @param ctx the parse tree
	 */
	enterFunctionTypeAlias?: (ctx: FunctionTypeAliasContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.functionTypeAlias`.
	 * @param ctx the parse tree
	 */
	exitFunctionTypeAlias?: (ctx: FunctionTypeAliasContext) => void;

	/**
	 * Enter a parse tree produced by `Dart2Parser.functionPrefix`.
	 * @param ctx the parse tree
	 */
	enterFunctionPrefix?: (ctx: FunctionPrefixContext) => void;
	/**
	 * Exit a parse tree produced by `Dart2Parser.functionPrefix`.
	 * @param ctx the parse tree
	 */
	exitFunctionPrefix?: (ctx: FunctionPrefixContext) => void;
}

