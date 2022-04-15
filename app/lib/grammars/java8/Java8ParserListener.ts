// Generated from ./lib/grammars/java8/Java8Parser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { LiteralContext } from "./Java8Parser";
import { PrimitiveTypeContext } from "./Java8Parser";
import { NumericTypeContext } from "./Java8Parser";
import { IntegralTypeContext } from "./Java8Parser";
import { FloatingPointTypeContext } from "./Java8Parser";
import { ReferenceTypeContext } from "./Java8Parser";
import { ClassOrInterfaceTypeContext } from "./Java8Parser";
import { ClassTypeContext } from "./Java8Parser";
import { ClassType_lf_classOrInterfaceTypeContext } from "./Java8Parser";
import { ClassType_lfno_classOrInterfaceTypeContext } from "./Java8Parser";
import { InterfaceTypeContext } from "./Java8Parser";
import { InterfaceType_lf_classOrInterfaceTypeContext } from "./Java8Parser";
import { InterfaceType_lfno_classOrInterfaceTypeContext } from "./Java8Parser";
import { TypeVariableContext } from "./Java8Parser";
import { ArrayTypeContext } from "./Java8Parser";
import { DimsContext } from "./Java8Parser";
import { TypeParameterContext } from "./Java8Parser";
import { TypeParameterModifierContext } from "./Java8Parser";
import { TypeBoundContext } from "./Java8Parser";
import { AdditionalBoundContext } from "./Java8Parser";
import { TypeArgumentsContext } from "./Java8Parser";
import { TypeArgumentListContext } from "./Java8Parser";
import { TypeArgumentContext } from "./Java8Parser";
import { WildcardContext } from "./Java8Parser";
import { WildcardBoundsContext } from "./Java8Parser";
import { PackageNameContext } from "./Java8Parser";
import { TypeNameContext } from "./Java8Parser";
import { PackageOrTypeNameContext } from "./Java8Parser";
import { ExpressionNameContext } from "./Java8Parser";
import { MethodNameContext } from "./Java8Parser";
import { AmbiguousNameContext } from "./Java8Parser";
import { CompilationUnitContext } from "./Java8Parser";
import { PackageDeclarationContext } from "./Java8Parser";
import { PackageModifierContext } from "./Java8Parser";
import { ImportDeclarationContext } from "./Java8Parser";
import { SingleTypeImportDeclarationContext } from "./Java8Parser";
import { TypeImportOnDemandDeclarationContext } from "./Java8Parser";
import { SingleStaticImportDeclarationContext } from "./Java8Parser";
import { StaticImportOnDemandDeclarationContext } from "./Java8Parser";
import { TypeDeclarationContext } from "./Java8Parser";
import { ClassDeclarationContext } from "./Java8Parser";
import { NormalClassDeclarationContext } from "./Java8Parser";
import { ClassModifierContext } from "./Java8Parser";
import { TypeParametersContext } from "./Java8Parser";
import { TypeParameterListContext } from "./Java8Parser";
import { SuperclassContext } from "./Java8Parser";
import { SuperinterfacesContext } from "./Java8Parser";
import { InterfaceTypeListContext } from "./Java8Parser";
import { ClassBodyContext } from "./Java8Parser";
import { ClassBodyDeclarationContext } from "./Java8Parser";
import { ClassMemberDeclarationContext } from "./Java8Parser";
import { FieldDeclarationContext } from "./Java8Parser";
import { FieldModifierContext } from "./Java8Parser";
import { VariableDeclaratorListContext } from "./Java8Parser";
import { VariableDeclaratorContext } from "./Java8Parser";
import { VariableDeclaratorIdContext } from "./Java8Parser";
import { VariableInitializerContext } from "./Java8Parser";
import { UnannTypeContext } from "./Java8Parser";
import { UnannPrimitiveTypeContext } from "./Java8Parser";
import { UnannReferenceTypeContext } from "./Java8Parser";
import { UnannClassOrInterfaceTypeContext } from "./Java8Parser";
import { UnannClassTypeContext } from "./Java8Parser";
import { UnannClassType_lf_unannClassOrInterfaceTypeContext } from "./Java8Parser";
import { UnannClassType_lfno_unannClassOrInterfaceTypeContext } from "./Java8Parser";
import { UnannInterfaceTypeContext } from "./Java8Parser";
import { UnannInterfaceType_lf_unannClassOrInterfaceTypeContext } from "./Java8Parser";
import { UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext } from "./Java8Parser";
import { UnannTypeVariableContext } from "./Java8Parser";
import { UnannArrayTypeContext } from "./Java8Parser";
import { MethodDeclarationContext } from "./Java8Parser";
import { MethodModifierContext } from "./Java8Parser";
import { MethodHeaderContext } from "./Java8Parser";
import { ResultContext } from "./Java8Parser";
import { MethodDeclaratorContext } from "./Java8Parser";
import { FormalParameterListContext } from "./Java8Parser";
import { FormalParametersContext } from "./Java8Parser";
import { FormalParameterContext } from "./Java8Parser";
import { VariableModifierContext } from "./Java8Parser";
import { LastFormalParameterContext } from "./Java8Parser";
import { ReceiverParameterContext } from "./Java8Parser";
import { Throws_Context } from "./Java8Parser";
import { ExceptionTypeListContext } from "./Java8Parser";
import { ExceptionTypeContext } from "./Java8Parser";
import { MethodBodyContext } from "./Java8Parser";
import { InstanceInitializerContext } from "./Java8Parser";
import { StaticInitializerContext } from "./Java8Parser";
import { ConstructorDeclarationContext } from "./Java8Parser";
import { ConstructorModifierContext } from "./Java8Parser";
import { ConstructorDeclaratorContext } from "./Java8Parser";
import { SimpleTypeNameContext } from "./Java8Parser";
import { ConstructorBodyContext } from "./Java8Parser";
import { ExplicitConstructorInvocationContext } from "./Java8Parser";
import { EnumDeclarationContext } from "./Java8Parser";
import { EnumBodyContext } from "./Java8Parser";
import { EnumConstantListContext } from "./Java8Parser";
import { EnumConstantContext } from "./Java8Parser";
import { EnumConstantModifierContext } from "./Java8Parser";
import { EnumBodyDeclarationsContext } from "./Java8Parser";
import { InterfaceDeclarationContext } from "./Java8Parser";
import { NormalInterfaceDeclarationContext } from "./Java8Parser";
import { InterfaceModifierContext } from "./Java8Parser";
import { ExtendsInterfacesContext } from "./Java8Parser";
import { InterfaceBodyContext } from "./Java8Parser";
import { InterfaceMemberDeclarationContext } from "./Java8Parser";
import { ConstantDeclarationContext } from "./Java8Parser";
import { ConstantModifierContext } from "./Java8Parser";
import { InterfaceMethodDeclarationContext } from "./Java8Parser";
import { InterfaceMethodModifierContext } from "./Java8Parser";
import { AnnotationTypeDeclarationContext } from "./Java8Parser";
import { AnnotationTypeBodyContext } from "./Java8Parser";
import { AnnotationTypeMemberDeclarationContext } from "./Java8Parser";
import { AnnotationTypeElementDeclarationContext } from "./Java8Parser";
import { AnnotationTypeElementModifierContext } from "./Java8Parser";
import { DefaultValueContext } from "./Java8Parser";
import { AnnotationContext } from "./Java8Parser";
import { NormalAnnotationContext } from "./Java8Parser";
import { ElementValuePairListContext } from "./Java8Parser";
import { ElementValuePairContext } from "./Java8Parser";
import { ElementValueContext } from "./Java8Parser";
import { ElementValueArrayInitializerContext } from "./Java8Parser";
import { ElementValueListContext } from "./Java8Parser";
import { MarkerAnnotationContext } from "./Java8Parser";
import { SingleElementAnnotationContext } from "./Java8Parser";
import { ArrayInitializerContext } from "./Java8Parser";
import { VariableInitializerListContext } from "./Java8Parser";
import { BlockContext } from "./Java8Parser";
import { BlockStatementsContext } from "./Java8Parser";
import { BlockStatementContext } from "./Java8Parser";
import { LocalVariableDeclarationStatementContext } from "./Java8Parser";
import { LocalVariableDeclarationContext } from "./Java8Parser";
import { StatementContext } from "./Java8Parser";
import { StatementNoShortIfContext } from "./Java8Parser";
import { StatementWithoutTrailingSubstatementContext } from "./Java8Parser";
import { EmptyStatement_Context } from "./Java8Parser";
import { LabeledStatementContext } from "./Java8Parser";
import { LabeledStatementNoShortIfContext } from "./Java8Parser";
import { ExpressionStatementContext } from "./Java8Parser";
import { StatementExpressionContext } from "./Java8Parser";
import { IfThenStatementContext } from "./Java8Parser";
import { IfThenElseStatementContext } from "./Java8Parser";
import { IfThenElseStatementNoShortIfContext } from "./Java8Parser";
import { AssertStatementContext } from "./Java8Parser";
import { SwitchStatementContext } from "./Java8Parser";
import { SwitchBlockContext } from "./Java8Parser";
import { SwitchBlockStatementGroupContext } from "./Java8Parser";
import { SwitchLabelsContext } from "./Java8Parser";
import { SwitchLabelContext } from "./Java8Parser";
import { EnumConstantNameContext } from "./Java8Parser";
import { WhileStatementContext } from "./Java8Parser";
import { WhileStatementNoShortIfContext } from "./Java8Parser";
import { DoStatementContext } from "./Java8Parser";
import { ForStatementContext } from "./Java8Parser";
import { ForStatementNoShortIfContext } from "./Java8Parser";
import { BasicForStatementContext } from "./Java8Parser";
import { BasicForStatementNoShortIfContext } from "./Java8Parser";
import { ForInitContext } from "./Java8Parser";
import { ForUpdateContext } from "./Java8Parser";
import { StatementExpressionListContext } from "./Java8Parser";
import { EnhancedForStatementContext } from "./Java8Parser";
import { EnhancedForStatementNoShortIfContext } from "./Java8Parser";
import { BreakStatementContext } from "./Java8Parser";
import { ContinueStatementContext } from "./Java8Parser";
import { ReturnStatementContext } from "./Java8Parser";
import { ThrowStatementContext } from "./Java8Parser";
import { SynchronizedStatementContext } from "./Java8Parser";
import { TryStatementContext } from "./Java8Parser";
import { CatchesContext } from "./Java8Parser";
import { CatchClauseContext } from "./Java8Parser";
import { CatchFormalParameterContext } from "./Java8Parser";
import { CatchTypeContext } from "./Java8Parser";
import { Finally_Context } from "./Java8Parser";
import { TryWithResourcesStatementContext } from "./Java8Parser";
import { ResourceSpecificationContext } from "./Java8Parser";
import { ResourceListContext } from "./Java8Parser";
import { ResourceContext } from "./Java8Parser";
import { PrimaryContext } from "./Java8Parser";
import { PrimaryNoNewArrayContext } from "./Java8Parser";
import { PrimaryNoNewArray_lf_arrayAccessContext } from "./Java8Parser";
import { PrimaryNoNewArray_lfno_arrayAccessContext } from "./Java8Parser";
import { PrimaryNoNewArray_lf_primaryContext } from "./Java8Parser";
import { PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext } from "./Java8Parser";
import { PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext } from "./Java8Parser";
import { PrimaryNoNewArray_lfno_primaryContext } from "./Java8Parser";
import { PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext } from "./Java8Parser";
import { PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext } from "./Java8Parser";
import { ClassInstanceCreationExpressionContext } from "./Java8Parser";
import { ClassInstanceCreationExpression_lf_primaryContext } from "./Java8Parser";
import { ClassInstanceCreationExpression_lfno_primaryContext } from "./Java8Parser";
import { TypeArgumentsOrDiamondContext } from "./Java8Parser";
import { FieldAccessContext } from "./Java8Parser";
import { FieldAccess_lf_primaryContext } from "./Java8Parser";
import { FieldAccess_lfno_primaryContext } from "./Java8Parser";
import { ArrayAccessContext } from "./Java8Parser";
import { ArrayAccess_lf_primaryContext } from "./Java8Parser";
import { ArrayAccess_lfno_primaryContext } from "./Java8Parser";
import { MethodInvocationContext } from "./Java8Parser";
import { MethodInvocation_lf_primaryContext } from "./Java8Parser";
import { MethodInvocation_lfno_primaryContext } from "./Java8Parser";
import { ArgumentListContext } from "./Java8Parser";
import { MethodReferenceContext } from "./Java8Parser";
import { MethodReference_lf_primaryContext } from "./Java8Parser";
import { MethodReference_lfno_primaryContext } from "./Java8Parser";
import { ArrayCreationExpressionContext } from "./Java8Parser";
import { DimExprsContext } from "./Java8Parser";
import { DimExprContext } from "./Java8Parser";
import { ConstantExpressionContext } from "./Java8Parser";
import { ExpressionContext } from "./Java8Parser";
import { LambdaExpressionContext } from "./Java8Parser";
import { LambdaParametersContext } from "./Java8Parser";
import { InferredFormalParameterListContext } from "./Java8Parser";
import { LambdaBodyContext } from "./Java8Parser";
import { AssignmentExpressionContext } from "./Java8Parser";
import { AssignmentContext } from "./Java8Parser";
import { LeftHandSideContext } from "./Java8Parser";
import { AssignmentOperatorContext } from "./Java8Parser";
import { ConditionalExpressionContext } from "./Java8Parser";
import { ConditionalOrExpressionContext } from "./Java8Parser";
import { ConditionalAndExpressionContext } from "./Java8Parser";
import { InclusiveOrExpressionContext } from "./Java8Parser";
import { ExclusiveOrExpressionContext } from "./Java8Parser";
import { AndExpressionContext } from "./Java8Parser";
import { EqualityExpressionContext } from "./Java8Parser";
import { RelationalExpressionContext } from "./Java8Parser";
import { ShiftExpressionContext } from "./Java8Parser";
import { AdditiveExpressionContext } from "./Java8Parser";
import { MultiplicativeExpressionContext } from "./Java8Parser";
import { UnaryExpressionContext } from "./Java8Parser";
import { PreIncrementExpressionContext } from "./Java8Parser";
import { PreDecrementExpressionContext } from "./Java8Parser";
import { UnaryExpressionNotPlusMinusContext } from "./Java8Parser";
import { PostfixExpressionContext } from "./Java8Parser";
import { PostIncrementExpressionContext } from "./Java8Parser";
import { PostIncrementExpression_lf_postfixExpressionContext } from "./Java8Parser";
import { PostDecrementExpressionContext } from "./Java8Parser";
import { PostDecrementExpression_lf_postfixExpressionContext } from "./Java8Parser";
import { CastExpressionContext } from "./Java8Parser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `Java8Parser`.
 */
export interface Java8ParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `Java8Parser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.primitiveType`.
	 * @param ctx the parse tree
	 */
	enterPrimitiveType?: (ctx: PrimitiveTypeContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.primitiveType`.
	 * @param ctx the parse tree
	 */
	exitPrimitiveType?: (ctx: PrimitiveTypeContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.numericType`.
	 * @param ctx the parse tree
	 */
	enterNumericType?: (ctx: NumericTypeContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.numericType`.
	 * @param ctx the parse tree
	 */
	exitNumericType?: (ctx: NumericTypeContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.integralType`.
	 * @param ctx the parse tree
	 */
	enterIntegralType?: (ctx: IntegralTypeContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.integralType`.
	 * @param ctx the parse tree
	 */
	exitIntegralType?: (ctx: IntegralTypeContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.floatingPointType`.
	 * @param ctx the parse tree
	 */
	enterFloatingPointType?: (ctx: FloatingPointTypeContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.floatingPointType`.
	 * @param ctx the parse tree
	 */
	exitFloatingPointType?: (ctx: FloatingPointTypeContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.referenceType`.
	 * @param ctx the parse tree
	 */
	enterReferenceType?: (ctx: ReferenceTypeContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.referenceType`.
	 * @param ctx the parse tree
	 */
	exitReferenceType?: (ctx: ReferenceTypeContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.classOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	enterClassOrInterfaceType?: (ctx: ClassOrInterfaceTypeContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.classOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	exitClassOrInterfaceType?: (ctx: ClassOrInterfaceTypeContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.classType`.
	 * @param ctx the parse tree
	 */
	enterClassType?: (ctx: ClassTypeContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.classType`.
	 * @param ctx the parse tree
	 */
	exitClassType?: (ctx: ClassTypeContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.classType_lf_classOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	enterClassType_lf_classOrInterfaceType?: (ctx: ClassType_lf_classOrInterfaceTypeContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.classType_lf_classOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	exitClassType_lf_classOrInterfaceType?: (ctx: ClassType_lf_classOrInterfaceTypeContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.classType_lfno_classOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	enterClassType_lfno_classOrInterfaceType?: (ctx: ClassType_lfno_classOrInterfaceTypeContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.classType_lfno_classOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	exitClassType_lfno_classOrInterfaceType?: (ctx: ClassType_lfno_classOrInterfaceTypeContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.interfaceType`.
	 * @param ctx the parse tree
	 */
	enterInterfaceType?: (ctx: InterfaceTypeContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.interfaceType`.
	 * @param ctx the parse tree
	 */
	exitInterfaceType?: (ctx: InterfaceTypeContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.interfaceType_lf_classOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	enterInterfaceType_lf_classOrInterfaceType?: (ctx: InterfaceType_lf_classOrInterfaceTypeContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.interfaceType_lf_classOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	exitInterfaceType_lf_classOrInterfaceType?: (ctx: InterfaceType_lf_classOrInterfaceTypeContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.interfaceType_lfno_classOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	enterInterfaceType_lfno_classOrInterfaceType?: (ctx: InterfaceType_lfno_classOrInterfaceTypeContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.interfaceType_lfno_classOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	exitInterfaceType_lfno_classOrInterfaceType?: (ctx: InterfaceType_lfno_classOrInterfaceTypeContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.typeVariable`.
	 * @param ctx the parse tree
	 */
	enterTypeVariable?: (ctx: TypeVariableContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.typeVariable`.
	 * @param ctx the parse tree
	 */
	exitTypeVariable?: (ctx: TypeVariableContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.arrayType`.
	 * @param ctx the parse tree
	 */
	enterArrayType?: (ctx: ArrayTypeContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.arrayType`.
	 * @param ctx the parse tree
	 */
	exitArrayType?: (ctx: ArrayTypeContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.dims`.
	 * @param ctx the parse tree
	 */
	enterDims?: (ctx: DimsContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.dims`.
	 * @param ctx the parse tree
	 */
	exitDims?: (ctx: DimsContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.typeParameter`.
	 * @param ctx the parse tree
	 */
	enterTypeParameter?: (ctx: TypeParameterContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.typeParameter`.
	 * @param ctx the parse tree
	 */
	exitTypeParameter?: (ctx: TypeParameterContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.typeParameterModifier`.
	 * @param ctx the parse tree
	 */
	enterTypeParameterModifier?: (ctx: TypeParameterModifierContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.typeParameterModifier`.
	 * @param ctx the parse tree
	 */
	exitTypeParameterModifier?: (ctx: TypeParameterModifierContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.typeBound`.
	 * @param ctx the parse tree
	 */
	enterTypeBound?: (ctx: TypeBoundContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.typeBound`.
	 * @param ctx the parse tree
	 */
	exitTypeBound?: (ctx: TypeBoundContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.additionalBound`.
	 * @param ctx the parse tree
	 */
	enterAdditionalBound?: (ctx: AdditionalBoundContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.additionalBound`.
	 * @param ctx the parse tree
	 */
	exitAdditionalBound?: (ctx: AdditionalBoundContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.typeArguments`.
	 * @param ctx the parse tree
	 */
	enterTypeArguments?: (ctx: TypeArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.typeArguments`.
	 * @param ctx the parse tree
	 */
	exitTypeArguments?: (ctx: TypeArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.typeArgumentList`.
	 * @param ctx the parse tree
	 */
	enterTypeArgumentList?: (ctx: TypeArgumentListContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.typeArgumentList`.
	 * @param ctx the parse tree
	 */
	exitTypeArgumentList?: (ctx: TypeArgumentListContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.typeArgument`.
	 * @param ctx the parse tree
	 */
	enterTypeArgument?: (ctx: TypeArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.typeArgument`.
	 * @param ctx the parse tree
	 */
	exitTypeArgument?: (ctx: TypeArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.wildcard`.
	 * @param ctx the parse tree
	 */
	enterWildcard?: (ctx: WildcardContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.wildcard`.
	 * @param ctx the parse tree
	 */
	exitWildcard?: (ctx: WildcardContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.wildcardBounds`.
	 * @param ctx the parse tree
	 */
	enterWildcardBounds?: (ctx: WildcardBoundsContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.wildcardBounds`.
	 * @param ctx the parse tree
	 */
	exitWildcardBounds?: (ctx: WildcardBoundsContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.packageName`.
	 * @param ctx the parse tree
	 */
	enterPackageName?: (ctx: PackageNameContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.packageName`.
	 * @param ctx the parse tree
	 */
	exitPackageName?: (ctx: PackageNameContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.typeName`.
	 * @param ctx the parse tree
	 */
	enterTypeName?: (ctx: TypeNameContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.typeName`.
	 * @param ctx the parse tree
	 */
	exitTypeName?: (ctx: TypeNameContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.packageOrTypeName`.
	 * @param ctx the parse tree
	 */
	enterPackageOrTypeName?: (ctx: PackageOrTypeNameContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.packageOrTypeName`.
	 * @param ctx the parse tree
	 */
	exitPackageOrTypeName?: (ctx: PackageOrTypeNameContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.expressionName`.
	 * @param ctx the parse tree
	 */
	enterExpressionName?: (ctx: ExpressionNameContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.expressionName`.
	 * @param ctx the parse tree
	 */
	exitExpressionName?: (ctx: ExpressionNameContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.methodName`.
	 * @param ctx the parse tree
	 */
	enterMethodName?: (ctx: MethodNameContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.methodName`.
	 * @param ctx the parse tree
	 */
	exitMethodName?: (ctx: MethodNameContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.ambiguousName`.
	 * @param ctx the parse tree
	 */
	enterAmbiguousName?: (ctx: AmbiguousNameContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.ambiguousName`.
	 * @param ctx the parse tree
	 */
	exitAmbiguousName?: (ctx: AmbiguousNameContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	enterCompilationUnit?: (ctx: CompilationUnitContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	exitCompilationUnit?: (ctx: CompilationUnitContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.packageDeclaration`.
	 * @param ctx the parse tree
	 */
	enterPackageDeclaration?: (ctx: PackageDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.packageDeclaration`.
	 * @param ctx the parse tree
	 */
	exitPackageDeclaration?: (ctx: PackageDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.packageModifier`.
	 * @param ctx the parse tree
	 */
	enterPackageModifier?: (ctx: PackageModifierContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.packageModifier`.
	 * @param ctx the parse tree
	 */
	exitPackageModifier?: (ctx: PackageModifierContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.importDeclaration`.
	 * @param ctx the parse tree
	 */
	enterImportDeclaration?: (ctx: ImportDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.importDeclaration`.
	 * @param ctx the parse tree
	 */
	exitImportDeclaration?: (ctx: ImportDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.singleTypeImportDeclaration`.
	 * @param ctx the parse tree
	 */
	enterSingleTypeImportDeclaration?: (ctx: SingleTypeImportDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.singleTypeImportDeclaration`.
	 * @param ctx the parse tree
	 */
	exitSingleTypeImportDeclaration?: (ctx: SingleTypeImportDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.typeImportOnDemandDeclaration`.
	 * @param ctx the parse tree
	 */
	enterTypeImportOnDemandDeclaration?: (ctx: TypeImportOnDemandDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.typeImportOnDemandDeclaration`.
	 * @param ctx the parse tree
	 */
	exitTypeImportOnDemandDeclaration?: (ctx: TypeImportOnDemandDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.singleStaticImportDeclaration`.
	 * @param ctx the parse tree
	 */
	enterSingleStaticImportDeclaration?: (ctx: SingleStaticImportDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.singleStaticImportDeclaration`.
	 * @param ctx the parse tree
	 */
	exitSingleStaticImportDeclaration?: (ctx: SingleStaticImportDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.staticImportOnDemandDeclaration`.
	 * @param ctx the parse tree
	 */
	enterStaticImportOnDemandDeclaration?: (ctx: StaticImportOnDemandDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.staticImportOnDemandDeclaration`.
	 * @param ctx the parse tree
	 */
	exitStaticImportOnDemandDeclaration?: (ctx: StaticImportOnDemandDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterTypeDeclaration?: (ctx: TypeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitTypeDeclaration?: (ctx: TypeDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	enterClassDeclaration?: (ctx: ClassDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	exitClassDeclaration?: (ctx: ClassDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.normalClassDeclaration`.
	 * @param ctx the parse tree
	 */
	enterNormalClassDeclaration?: (ctx: NormalClassDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.normalClassDeclaration`.
	 * @param ctx the parse tree
	 */
	exitNormalClassDeclaration?: (ctx: NormalClassDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.classModifier`.
	 * @param ctx the parse tree
	 */
	enterClassModifier?: (ctx: ClassModifierContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.classModifier`.
	 * @param ctx the parse tree
	 */
	exitClassModifier?: (ctx: ClassModifierContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.typeParameters`.
	 * @param ctx the parse tree
	 */
	enterTypeParameters?: (ctx: TypeParametersContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.typeParameters`.
	 * @param ctx the parse tree
	 */
	exitTypeParameters?: (ctx: TypeParametersContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.typeParameterList`.
	 * @param ctx the parse tree
	 */
	enterTypeParameterList?: (ctx: TypeParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.typeParameterList`.
	 * @param ctx the parse tree
	 */
	exitTypeParameterList?: (ctx: TypeParameterListContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.superclass`.
	 * @param ctx the parse tree
	 */
	enterSuperclass?: (ctx: SuperclassContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.superclass`.
	 * @param ctx the parse tree
	 */
	exitSuperclass?: (ctx: SuperclassContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.superinterfaces`.
	 * @param ctx the parse tree
	 */
	enterSuperinterfaces?: (ctx: SuperinterfacesContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.superinterfaces`.
	 * @param ctx the parse tree
	 */
	exitSuperinterfaces?: (ctx: SuperinterfacesContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.interfaceTypeList`.
	 * @param ctx the parse tree
	 */
	enterInterfaceTypeList?: (ctx: InterfaceTypeListContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.interfaceTypeList`.
	 * @param ctx the parse tree
	 */
	exitInterfaceTypeList?: (ctx: InterfaceTypeListContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.classBody`.
	 * @param ctx the parse tree
	 */
	enterClassBody?: (ctx: ClassBodyContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.classBody`.
	 * @param ctx the parse tree
	 */
	exitClassBody?: (ctx: ClassBodyContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.classBodyDeclaration`.
	 * @param ctx the parse tree
	 */
	enterClassBodyDeclaration?: (ctx: ClassBodyDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.classBodyDeclaration`.
	 * @param ctx the parse tree
	 */
	exitClassBodyDeclaration?: (ctx: ClassBodyDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.classMemberDeclaration`.
	 * @param ctx the parse tree
	 */
	enterClassMemberDeclaration?: (ctx: ClassMemberDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.classMemberDeclaration`.
	 * @param ctx the parse tree
	 */
	exitClassMemberDeclaration?: (ctx: ClassMemberDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.fieldDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFieldDeclaration?: (ctx: FieldDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.fieldDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFieldDeclaration?: (ctx: FieldDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.fieldModifier`.
	 * @param ctx the parse tree
	 */
	enterFieldModifier?: (ctx: FieldModifierContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.fieldModifier`.
	 * @param ctx the parse tree
	 */
	exitFieldModifier?: (ctx: FieldModifierContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.variableDeclaratorList`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaratorList?: (ctx: VariableDeclaratorListContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.variableDeclaratorList`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaratorList?: (ctx: VariableDeclaratorListContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.variableDeclarator`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclarator?: (ctx: VariableDeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.variableDeclarator`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclarator?: (ctx: VariableDeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.variableDeclaratorId`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaratorId?: (ctx: VariableDeclaratorIdContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.variableDeclaratorId`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaratorId?: (ctx: VariableDeclaratorIdContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.variableInitializer`.
	 * @param ctx the parse tree
	 */
	enterVariableInitializer?: (ctx: VariableInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.variableInitializer`.
	 * @param ctx the parse tree
	 */
	exitVariableInitializer?: (ctx: VariableInitializerContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.unannType`.
	 * @param ctx the parse tree
	 */
	enterUnannType?: (ctx: UnannTypeContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.unannType`.
	 * @param ctx the parse tree
	 */
	exitUnannType?: (ctx: UnannTypeContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.unannPrimitiveType`.
	 * @param ctx the parse tree
	 */
	enterUnannPrimitiveType?: (ctx: UnannPrimitiveTypeContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.unannPrimitiveType`.
	 * @param ctx the parse tree
	 */
	exitUnannPrimitiveType?: (ctx: UnannPrimitiveTypeContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.unannReferenceType`.
	 * @param ctx the parse tree
	 */
	enterUnannReferenceType?: (ctx: UnannReferenceTypeContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.unannReferenceType`.
	 * @param ctx the parse tree
	 */
	exitUnannReferenceType?: (ctx: UnannReferenceTypeContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.unannClassOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	enterUnannClassOrInterfaceType?: (ctx: UnannClassOrInterfaceTypeContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.unannClassOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	exitUnannClassOrInterfaceType?: (ctx: UnannClassOrInterfaceTypeContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.unannClassType`.
	 * @param ctx the parse tree
	 */
	enterUnannClassType?: (ctx: UnannClassTypeContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.unannClassType`.
	 * @param ctx the parse tree
	 */
	exitUnannClassType?: (ctx: UnannClassTypeContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.unannClassType_lf_unannClassOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	enterUnannClassType_lf_unannClassOrInterfaceType?: (ctx: UnannClassType_lf_unannClassOrInterfaceTypeContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.unannClassType_lf_unannClassOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	exitUnannClassType_lf_unannClassOrInterfaceType?: (ctx: UnannClassType_lf_unannClassOrInterfaceTypeContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.unannClassType_lfno_unannClassOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	enterUnannClassType_lfno_unannClassOrInterfaceType?: (ctx: UnannClassType_lfno_unannClassOrInterfaceTypeContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.unannClassType_lfno_unannClassOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	exitUnannClassType_lfno_unannClassOrInterfaceType?: (ctx: UnannClassType_lfno_unannClassOrInterfaceTypeContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.unannInterfaceType`.
	 * @param ctx the parse tree
	 */
	enterUnannInterfaceType?: (ctx: UnannInterfaceTypeContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.unannInterfaceType`.
	 * @param ctx the parse tree
	 */
	exitUnannInterfaceType?: (ctx: UnannInterfaceTypeContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.unannInterfaceType_lf_unannClassOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	enterUnannInterfaceType_lf_unannClassOrInterfaceType?: (ctx: UnannInterfaceType_lf_unannClassOrInterfaceTypeContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.unannInterfaceType_lf_unannClassOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	exitUnannInterfaceType_lf_unannClassOrInterfaceType?: (ctx: UnannInterfaceType_lf_unannClassOrInterfaceTypeContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.unannInterfaceType_lfno_unannClassOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	enterUnannInterfaceType_lfno_unannClassOrInterfaceType?: (ctx: UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.unannInterfaceType_lfno_unannClassOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	exitUnannInterfaceType_lfno_unannClassOrInterfaceType?: (ctx: UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.unannTypeVariable`.
	 * @param ctx the parse tree
	 */
	enterUnannTypeVariable?: (ctx: UnannTypeVariableContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.unannTypeVariable`.
	 * @param ctx the parse tree
	 */
	exitUnannTypeVariable?: (ctx: UnannTypeVariableContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.unannArrayType`.
	 * @param ctx the parse tree
	 */
	enterUnannArrayType?: (ctx: UnannArrayTypeContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.unannArrayType`.
	 * @param ctx the parse tree
	 */
	exitUnannArrayType?: (ctx: UnannArrayTypeContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.methodDeclaration`.
	 * @param ctx the parse tree
	 */
	enterMethodDeclaration?: (ctx: MethodDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.methodDeclaration`.
	 * @param ctx the parse tree
	 */
	exitMethodDeclaration?: (ctx: MethodDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.methodModifier`.
	 * @param ctx the parse tree
	 */
	enterMethodModifier?: (ctx: MethodModifierContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.methodModifier`.
	 * @param ctx the parse tree
	 */
	exitMethodModifier?: (ctx: MethodModifierContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.methodHeader`.
	 * @param ctx the parse tree
	 */
	enterMethodHeader?: (ctx: MethodHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.methodHeader`.
	 * @param ctx the parse tree
	 */
	exitMethodHeader?: (ctx: MethodHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.result`.
	 * @param ctx the parse tree
	 */
	enterResult?: (ctx: ResultContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.result`.
	 * @param ctx the parse tree
	 */
	exitResult?: (ctx: ResultContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.methodDeclarator`.
	 * @param ctx the parse tree
	 */
	enterMethodDeclarator?: (ctx: MethodDeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.methodDeclarator`.
	 * @param ctx the parse tree
	 */
	exitMethodDeclarator?: (ctx: MethodDeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.formalParameterList`.
	 * @param ctx the parse tree
	 */
	enterFormalParameterList?: (ctx: FormalParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.formalParameterList`.
	 * @param ctx the parse tree
	 */
	exitFormalParameterList?: (ctx: FormalParameterListContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.formalParameters`.
	 * @param ctx the parse tree
	 */
	enterFormalParameters?: (ctx: FormalParametersContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.formalParameters`.
	 * @param ctx the parse tree
	 */
	exitFormalParameters?: (ctx: FormalParametersContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.formalParameter`.
	 * @param ctx the parse tree
	 */
	enterFormalParameter?: (ctx: FormalParameterContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.formalParameter`.
	 * @param ctx the parse tree
	 */
	exitFormalParameter?: (ctx: FormalParameterContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.variableModifier`.
	 * @param ctx the parse tree
	 */
	enterVariableModifier?: (ctx: VariableModifierContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.variableModifier`.
	 * @param ctx the parse tree
	 */
	exitVariableModifier?: (ctx: VariableModifierContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.lastFormalParameter`.
	 * @param ctx the parse tree
	 */
	enterLastFormalParameter?: (ctx: LastFormalParameterContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.lastFormalParameter`.
	 * @param ctx the parse tree
	 */
	exitLastFormalParameter?: (ctx: LastFormalParameterContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.receiverParameter`.
	 * @param ctx the parse tree
	 */
	enterReceiverParameter?: (ctx: ReceiverParameterContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.receiverParameter`.
	 * @param ctx the parse tree
	 */
	exitReceiverParameter?: (ctx: ReceiverParameterContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.throws_`.
	 * @param ctx the parse tree
	 */
	enterThrows_?: (ctx: Throws_Context) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.throws_`.
	 * @param ctx the parse tree
	 */
	exitThrows_?: (ctx: Throws_Context) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.exceptionTypeList`.
	 * @param ctx the parse tree
	 */
	enterExceptionTypeList?: (ctx: ExceptionTypeListContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.exceptionTypeList`.
	 * @param ctx the parse tree
	 */
	exitExceptionTypeList?: (ctx: ExceptionTypeListContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.exceptionType`.
	 * @param ctx the parse tree
	 */
	enterExceptionType?: (ctx: ExceptionTypeContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.exceptionType`.
	 * @param ctx the parse tree
	 */
	exitExceptionType?: (ctx: ExceptionTypeContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.methodBody`.
	 * @param ctx the parse tree
	 */
	enterMethodBody?: (ctx: MethodBodyContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.methodBody`.
	 * @param ctx the parse tree
	 */
	exitMethodBody?: (ctx: MethodBodyContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.instanceInitializer`.
	 * @param ctx the parse tree
	 */
	enterInstanceInitializer?: (ctx: InstanceInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.instanceInitializer`.
	 * @param ctx the parse tree
	 */
	exitInstanceInitializer?: (ctx: InstanceInitializerContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.staticInitializer`.
	 * @param ctx the parse tree
	 */
	enterStaticInitializer?: (ctx: StaticInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.staticInitializer`.
	 * @param ctx the parse tree
	 */
	exitStaticInitializer?: (ctx: StaticInitializerContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.constructorDeclaration`.
	 * @param ctx the parse tree
	 */
	enterConstructorDeclaration?: (ctx: ConstructorDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.constructorDeclaration`.
	 * @param ctx the parse tree
	 */
	exitConstructorDeclaration?: (ctx: ConstructorDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.constructorModifier`.
	 * @param ctx the parse tree
	 */
	enterConstructorModifier?: (ctx: ConstructorModifierContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.constructorModifier`.
	 * @param ctx the parse tree
	 */
	exitConstructorModifier?: (ctx: ConstructorModifierContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.constructorDeclarator`.
	 * @param ctx the parse tree
	 */
	enterConstructorDeclarator?: (ctx: ConstructorDeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.constructorDeclarator`.
	 * @param ctx the parse tree
	 */
	exitConstructorDeclarator?: (ctx: ConstructorDeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.simpleTypeName`.
	 * @param ctx the parse tree
	 */
	enterSimpleTypeName?: (ctx: SimpleTypeNameContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.simpleTypeName`.
	 * @param ctx the parse tree
	 */
	exitSimpleTypeName?: (ctx: SimpleTypeNameContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.constructorBody`.
	 * @param ctx the parse tree
	 */
	enterConstructorBody?: (ctx: ConstructorBodyContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.constructorBody`.
	 * @param ctx the parse tree
	 */
	exitConstructorBody?: (ctx: ConstructorBodyContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.explicitConstructorInvocation`.
	 * @param ctx the parse tree
	 */
	enterExplicitConstructorInvocation?: (ctx: ExplicitConstructorInvocationContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.explicitConstructorInvocation`.
	 * @param ctx the parse tree
	 */
	exitExplicitConstructorInvocation?: (ctx: ExplicitConstructorInvocationContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.enumDeclaration`.
	 * @param ctx the parse tree
	 */
	enterEnumDeclaration?: (ctx: EnumDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.enumDeclaration`.
	 * @param ctx the parse tree
	 */
	exitEnumDeclaration?: (ctx: EnumDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.enumBody`.
	 * @param ctx the parse tree
	 */
	enterEnumBody?: (ctx: EnumBodyContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.enumBody`.
	 * @param ctx the parse tree
	 */
	exitEnumBody?: (ctx: EnumBodyContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.enumConstantList`.
	 * @param ctx the parse tree
	 */
	enterEnumConstantList?: (ctx: EnumConstantListContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.enumConstantList`.
	 * @param ctx the parse tree
	 */
	exitEnumConstantList?: (ctx: EnumConstantListContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.enumConstant`.
	 * @param ctx the parse tree
	 */
	enterEnumConstant?: (ctx: EnumConstantContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.enumConstant`.
	 * @param ctx the parse tree
	 */
	exitEnumConstant?: (ctx: EnumConstantContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.enumConstantModifier`.
	 * @param ctx the parse tree
	 */
	enterEnumConstantModifier?: (ctx: EnumConstantModifierContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.enumConstantModifier`.
	 * @param ctx the parse tree
	 */
	exitEnumConstantModifier?: (ctx: EnumConstantModifierContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.enumBodyDeclarations`.
	 * @param ctx the parse tree
	 */
	enterEnumBodyDeclarations?: (ctx: EnumBodyDeclarationsContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.enumBodyDeclarations`.
	 * @param ctx the parse tree
	 */
	exitEnumBodyDeclarations?: (ctx: EnumBodyDeclarationsContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.interfaceDeclaration`.
	 * @param ctx the parse tree
	 */
	enterInterfaceDeclaration?: (ctx: InterfaceDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.interfaceDeclaration`.
	 * @param ctx the parse tree
	 */
	exitInterfaceDeclaration?: (ctx: InterfaceDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.normalInterfaceDeclaration`.
	 * @param ctx the parse tree
	 */
	enterNormalInterfaceDeclaration?: (ctx: NormalInterfaceDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.normalInterfaceDeclaration`.
	 * @param ctx the parse tree
	 */
	exitNormalInterfaceDeclaration?: (ctx: NormalInterfaceDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.interfaceModifier`.
	 * @param ctx the parse tree
	 */
	enterInterfaceModifier?: (ctx: InterfaceModifierContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.interfaceModifier`.
	 * @param ctx the parse tree
	 */
	exitInterfaceModifier?: (ctx: InterfaceModifierContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.extendsInterfaces`.
	 * @param ctx the parse tree
	 */
	enterExtendsInterfaces?: (ctx: ExtendsInterfacesContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.extendsInterfaces`.
	 * @param ctx the parse tree
	 */
	exitExtendsInterfaces?: (ctx: ExtendsInterfacesContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.interfaceBody`.
	 * @param ctx the parse tree
	 */
	enterInterfaceBody?: (ctx: InterfaceBodyContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.interfaceBody`.
	 * @param ctx the parse tree
	 */
	exitInterfaceBody?: (ctx: InterfaceBodyContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.interfaceMemberDeclaration`.
	 * @param ctx the parse tree
	 */
	enterInterfaceMemberDeclaration?: (ctx: InterfaceMemberDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.interfaceMemberDeclaration`.
	 * @param ctx the parse tree
	 */
	exitInterfaceMemberDeclaration?: (ctx: InterfaceMemberDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.constantDeclaration`.
	 * @param ctx the parse tree
	 */
	enterConstantDeclaration?: (ctx: ConstantDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.constantDeclaration`.
	 * @param ctx the parse tree
	 */
	exitConstantDeclaration?: (ctx: ConstantDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.constantModifier`.
	 * @param ctx the parse tree
	 */
	enterConstantModifier?: (ctx: ConstantModifierContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.constantModifier`.
	 * @param ctx the parse tree
	 */
	exitConstantModifier?: (ctx: ConstantModifierContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.interfaceMethodDeclaration`.
	 * @param ctx the parse tree
	 */
	enterInterfaceMethodDeclaration?: (ctx: InterfaceMethodDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.interfaceMethodDeclaration`.
	 * @param ctx the parse tree
	 */
	exitInterfaceMethodDeclaration?: (ctx: InterfaceMethodDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.interfaceMethodModifier`.
	 * @param ctx the parse tree
	 */
	enterInterfaceMethodModifier?: (ctx: InterfaceMethodModifierContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.interfaceMethodModifier`.
	 * @param ctx the parse tree
	 */
	exitInterfaceMethodModifier?: (ctx: InterfaceMethodModifierContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.annotationTypeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterAnnotationTypeDeclaration?: (ctx: AnnotationTypeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.annotationTypeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitAnnotationTypeDeclaration?: (ctx: AnnotationTypeDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.annotationTypeBody`.
	 * @param ctx the parse tree
	 */
	enterAnnotationTypeBody?: (ctx: AnnotationTypeBodyContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.annotationTypeBody`.
	 * @param ctx the parse tree
	 */
	exitAnnotationTypeBody?: (ctx: AnnotationTypeBodyContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.annotationTypeMemberDeclaration`.
	 * @param ctx the parse tree
	 */
	enterAnnotationTypeMemberDeclaration?: (ctx: AnnotationTypeMemberDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.annotationTypeMemberDeclaration`.
	 * @param ctx the parse tree
	 */
	exitAnnotationTypeMemberDeclaration?: (ctx: AnnotationTypeMemberDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.annotationTypeElementDeclaration`.
	 * @param ctx the parse tree
	 */
	enterAnnotationTypeElementDeclaration?: (ctx: AnnotationTypeElementDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.annotationTypeElementDeclaration`.
	 * @param ctx the parse tree
	 */
	exitAnnotationTypeElementDeclaration?: (ctx: AnnotationTypeElementDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.annotationTypeElementModifier`.
	 * @param ctx the parse tree
	 */
	enterAnnotationTypeElementModifier?: (ctx: AnnotationTypeElementModifierContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.annotationTypeElementModifier`.
	 * @param ctx the parse tree
	 */
	exitAnnotationTypeElementModifier?: (ctx: AnnotationTypeElementModifierContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.defaultValue`.
	 * @param ctx the parse tree
	 */
	enterDefaultValue?: (ctx: DefaultValueContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.defaultValue`.
	 * @param ctx the parse tree
	 */
	exitDefaultValue?: (ctx: DefaultValueContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.annotation`.
	 * @param ctx the parse tree
	 */
	enterAnnotation?: (ctx: AnnotationContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.annotation`.
	 * @param ctx the parse tree
	 */
	exitAnnotation?: (ctx: AnnotationContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.normalAnnotation`.
	 * @param ctx the parse tree
	 */
	enterNormalAnnotation?: (ctx: NormalAnnotationContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.normalAnnotation`.
	 * @param ctx the parse tree
	 */
	exitNormalAnnotation?: (ctx: NormalAnnotationContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.elementValuePairList`.
	 * @param ctx the parse tree
	 */
	enterElementValuePairList?: (ctx: ElementValuePairListContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.elementValuePairList`.
	 * @param ctx the parse tree
	 */
	exitElementValuePairList?: (ctx: ElementValuePairListContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.elementValuePair`.
	 * @param ctx the parse tree
	 */
	enterElementValuePair?: (ctx: ElementValuePairContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.elementValuePair`.
	 * @param ctx the parse tree
	 */
	exitElementValuePair?: (ctx: ElementValuePairContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.elementValue`.
	 * @param ctx the parse tree
	 */
	enterElementValue?: (ctx: ElementValueContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.elementValue`.
	 * @param ctx the parse tree
	 */
	exitElementValue?: (ctx: ElementValueContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.elementValueArrayInitializer`.
	 * @param ctx the parse tree
	 */
	enterElementValueArrayInitializer?: (ctx: ElementValueArrayInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.elementValueArrayInitializer`.
	 * @param ctx the parse tree
	 */
	exitElementValueArrayInitializer?: (ctx: ElementValueArrayInitializerContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.elementValueList`.
	 * @param ctx the parse tree
	 */
	enterElementValueList?: (ctx: ElementValueListContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.elementValueList`.
	 * @param ctx the parse tree
	 */
	exitElementValueList?: (ctx: ElementValueListContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.markerAnnotation`.
	 * @param ctx the parse tree
	 */
	enterMarkerAnnotation?: (ctx: MarkerAnnotationContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.markerAnnotation`.
	 * @param ctx the parse tree
	 */
	exitMarkerAnnotation?: (ctx: MarkerAnnotationContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.singleElementAnnotation`.
	 * @param ctx the parse tree
	 */
	enterSingleElementAnnotation?: (ctx: SingleElementAnnotationContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.singleElementAnnotation`.
	 * @param ctx the parse tree
	 */
	exitSingleElementAnnotation?: (ctx: SingleElementAnnotationContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.arrayInitializer`.
	 * @param ctx the parse tree
	 */
	enterArrayInitializer?: (ctx: ArrayInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.arrayInitializer`.
	 * @param ctx the parse tree
	 */
	exitArrayInitializer?: (ctx: ArrayInitializerContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.variableInitializerList`.
	 * @param ctx the parse tree
	 */
	enterVariableInitializerList?: (ctx: VariableInitializerListContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.variableInitializerList`.
	 * @param ctx the parse tree
	 */
	exitVariableInitializerList?: (ctx: VariableInitializerListContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.blockStatements`.
	 * @param ctx the parse tree
	 */
	enterBlockStatements?: (ctx: BlockStatementsContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.blockStatements`.
	 * @param ctx the parse tree
	 */
	exitBlockStatements?: (ctx: BlockStatementsContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.blockStatement`.
	 * @param ctx the parse tree
	 */
	enterBlockStatement?: (ctx: BlockStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.blockStatement`.
	 * @param ctx the parse tree
	 */
	exitBlockStatement?: (ctx: BlockStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.localVariableDeclarationStatement`.
	 * @param ctx the parse tree
	 */
	enterLocalVariableDeclarationStatement?: (ctx: LocalVariableDeclarationStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.localVariableDeclarationStatement`.
	 * @param ctx the parse tree
	 */
	exitLocalVariableDeclarationStatement?: (ctx: LocalVariableDeclarationStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.localVariableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.localVariableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.statementNoShortIf`.
	 * @param ctx the parse tree
	 */
	enterStatementNoShortIf?: (ctx: StatementNoShortIfContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.statementNoShortIf`.
	 * @param ctx the parse tree
	 */
	exitStatementNoShortIf?: (ctx: StatementNoShortIfContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.statementWithoutTrailingSubstatement`.
	 * @param ctx the parse tree
	 */
	enterStatementWithoutTrailingSubstatement?: (ctx: StatementWithoutTrailingSubstatementContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.statementWithoutTrailingSubstatement`.
	 * @param ctx the parse tree
	 */
	exitStatementWithoutTrailingSubstatement?: (ctx: StatementWithoutTrailingSubstatementContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.emptyStatement_`.
	 * @param ctx the parse tree
	 */
	enterEmptyStatement_?: (ctx: EmptyStatement_Context) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.emptyStatement_`.
	 * @param ctx the parse tree
	 */
	exitEmptyStatement_?: (ctx: EmptyStatement_Context) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.labeledStatement`.
	 * @param ctx the parse tree
	 */
	enterLabeledStatement?: (ctx: LabeledStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.labeledStatement`.
	 * @param ctx the parse tree
	 */
	exitLabeledStatement?: (ctx: LabeledStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.labeledStatementNoShortIf`.
	 * @param ctx the parse tree
	 */
	enterLabeledStatementNoShortIf?: (ctx: LabeledStatementNoShortIfContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.labeledStatementNoShortIf`.
	 * @param ctx the parse tree
	 */
	exitLabeledStatementNoShortIf?: (ctx: LabeledStatementNoShortIfContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	enterExpressionStatement?: (ctx: ExpressionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	exitExpressionStatement?: (ctx: ExpressionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.statementExpression`.
	 * @param ctx the parse tree
	 */
	enterStatementExpression?: (ctx: StatementExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.statementExpression`.
	 * @param ctx the parse tree
	 */
	exitStatementExpression?: (ctx: StatementExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.ifThenStatement`.
	 * @param ctx the parse tree
	 */
	enterIfThenStatement?: (ctx: IfThenStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.ifThenStatement`.
	 * @param ctx the parse tree
	 */
	exitIfThenStatement?: (ctx: IfThenStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.ifThenElseStatement`.
	 * @param ctx the parse tree
	 */
	enterIfThenElseStatement?: (ctx: IfThenElseStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.ifThenElseStatement`.
	 * @param ctx the parse tree
	 */
	exitIfThenElseStatement?: (ctx: IfThenElseStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.ifThenElseStatementNoShortIf`.
	 * @param ctx the parse tree
	 */
	enterIfThenElseStatementNoShortIf?: (ctx: IfThenElseStatementNoShortIfContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.ifThenElseStatementNoShortIf`.
	 * @param ctx the parse tree
	 */
	exitIfThenElseStatementNoShortIf?: (ctx: IfThenElseStatementNoShortIfContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.assertStatement`.
	 * @param ctx the parse tree
	 */
	enterAssertStatement?: (ctx: AssertStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.assertStatement`.
	 * @param ctx the parse tree
	 */
	exitAssertStatement?: (ctx: AssertStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.switchStatement`.
	 * @param ctx the parse tree
	 */
	enterSwitchStatement?: (ctx: SwitchStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.switchStatement`.
	 * @param ctx the parse tree
	 */
	exitSwitchStatement?: (ctx: SwitchStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.switchBlock`.
	 * @param ctx the parse tree
	 */
	enterSwitchBlock?: (ctx: SwitchBlockContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.switchBlock`.
	 * @param ctx the parse tree
	 */
	exitSwitchBlock?: (ctx: SwitchBlockContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.switchBlockStatementGroup`.
	 * @param ctx the parse tree
	 */
	enterSwitchBlockStatementGroup?: (ctx: SwitchBlockStatementGroupContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.switchBlockStatementGroup`.
	 * @param ctx the parse tree
	 */
	exitSwitchBlockStatementGroup?: (ctx: SwitchBlockStatementGroupContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.switchLabels`.
	 * @param ctx the parse tree
	 */
	enterSwitchLabels?: (ctx: SwitchLabelsContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.switchLabels`.
	 * @param ctx the parse tree
	 */
	exitSwitchLabels?: (ctx: SwitchLabelsContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.switchLabel`.
	 * @param ctx the parse tree
	 */
	enterSwitchLabel?: (ctx: SwitchLabelContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.switchLabel`.
	 * @param ctx the parse tree
	 */
	exitSwitchLabel?: (ctx: SwitchLabelContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.enumConstantName`.
	 * @param ctx the parse tree
	 */
	enterEnumConstantName?: (ctx: EnumConstantNameContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.enumConstantName`.
	 * @param ctx the parse tree
	 */
	exitEnumConstantName?: (ctx: EnumConstantNameContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.whileStatement`.
	 * @param ctx the parse tree
	 */
	enterWhileStatement?: (ctx: WhileStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.whileStatement`.
	 * @param ctx the parse tree
	 */
	exitWhileStatement?: (ctx: WhileStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.whileStatementNoShortIf`.
	 * @param ctx the parse tree
	 */
	enterWhileStatementNoShortIf?: (ctx: WhileStatementNoShortIfContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.whileStatementNoShortIf`.
	 * @param ctx the parse tree
	 */
	exitWhileStatementNoShortIf?: (ctx: WhileStatementNoShortIfContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.doStatement`.
	 * @param ctx the parse tree
	 */
	enterDoStatement?: (ctx: DoStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.doStatement`.
	 * @param ctx the parse tree
	 */
	exitDoStatement?: (ctx: DoStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.forStatement`.
	 * @param ctx the parse tree
	 */
	enterForStatement?: (ctx: ForStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.forStatement`.
	 * @param ctx the parse tree
	 */
	exitForStatement?: (ctx: ForStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.forStatementNoShortIf`.
	 * @param ctx the parse tree
	 */
	enterForStatementNoShortIf?: (ctx: ForStatementNoShortIfContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.forStatementNoShortIf`.
	 * @param ctx the parse tree
	 */
	exitForStatementNoShortIf?: (ctx: ForStatementNoShortIfContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.basicForStatement`.
	 * @param ctx the parse tree
	 */
	enterBasicForStatement?: (ctx: BasicForStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.basicForStatement`.
	 * @param ctx the parse tree
	 */
	exitBasicForStatement?: (ctx: BasicForStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.basicForStatementNoShortIf`.
	 * @param ctx the parse tree
	 */
	enterBasicForStatementNoShortIf?: (ctx: BasicForStatementNoShortIfContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.basicForStatementNoShortIf`.
	 * @param ctx the parse tree
	 */
	exitBasicForStatementNoShortIf?: (ctx: BasicForStatementNoShortIfContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.forInit`.
	 * @param ctx the parse tree
	 */
	enterForInit?: (ctx: ForInitContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.forInit`.
	 * @param ctx the parse tree
	 */
	exitForInit?: (ctx: ForInitContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.forUpdate`.
	 * @param ctx the parse tree
	 */
	enterForUpdate?: (ctx: ForUpdateContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.forUpdate`.
	 * @param ctx the parse tree
	 */
	exitForUpdate?: (ctx: ForUpdateContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.statementExpressionList`.
	 * @param ctx the parse tree
	 */
	enterStatementExpressionList?: (ctx: StatementExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.statementExpressionList`.
	 * @param ctx the parse tree
	 */
	exitStatementExpressionList?: (ctx: StatementExpressionListContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.enhancedForStatement`.
	 * @param ctx the parse tree
	 */
	enterEnhancedForStatement?: (ctx: EnhancedForStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.enhancedForStatement`.
	 * @param ctx the parse tree
	 */
	exitEnhancedForStatement?: (ctx: EnhancedForStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.enhancedForStatementNoShortIf`.
	 * @param ctx the parse tree
	 */
	enterEnhancedForStatementNoShortIf?: (ctx: EnhancedForStatementNoShortIfContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.enhancedForStatementNoShortIf`.
	 * @param ctx the parse tree
	 */
	exitEnhancedForStatementNoShortIf?: (ctx: EnhancedForStatementNoShortIfContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.breakStatement`.
	 * @param ctx the parse tree
	 */
	enterBreakStatement?: (ctx: BreakStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.breakStatement`.
	 * @param ctx the parse tree
	 */
	exitBreakStatement?: (ctx: BreakStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.continueStatement`.
	 * @param ctx the parse tree
	 */
	enterContinueStatement?: (ctx: ContinueStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.continueStatement`.
	 * @param ctx the parse tree
	 */
	exitContinueStatement?: (ctx: ContinueStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.returnStatement`.
	 * @param ctx the parse tree
	 */
	enterReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.returnStatement`.
	 * @param ctx the parse tree
	 */
	exitReturnStatement?: (ctx: ReturnStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.throwStatement`.
	 * @param ctx the parse tree
	 */
	enterThrowStatement?: (ctx: ThrowStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.throwStatement`.
	 * @param ctx the parse tree
	 */
	exitThrowStatement?: (ctx: ThrowStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.synchronizedStatement`.
	 * @param ctx the parse tree
	 */
	enterSynchronizedStatement?: (ctx: SynchronizedStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.synchronizedStatement`.
	 * @param ctx the parse tree
	 */
	exitSynchronizedStatement?: (ctx: SynchronizedStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.tryStatement`.
	 * @param ctx the parse tree
	 */
	enterTryStatement?: (ctx: TryStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.tryStatement`.
	 * @param ctx the parse tree
	 */
	exitTryStatement?: (ctx: TryStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.catches`.
	 * @param ctx the parse tree
	 */
	enterCatches?: (ctx: CatchesContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.catches`.
	 * @param ctx the parse tree
	 */
	exitCatches?: (ctx: CatchesContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.catchClause`.
	 * @param ctx the parse tree
	 */
	enterCatchClause?: (ctx: CatchClauseContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.catchClause`.
	 * @param ctx the parse tree
	 */
	exitCatchClause?: (ctx: CatchClauseContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.catchFormalParameter`.
	 * @param ctx the parse tree
	 */
	enterCatchFormalParameter?: (ctx: CatchFormalParameterContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.catchFormalParameter`.
	 * @param ctx the parse tree
	 */
	exitCatchFormalParameter?: (ctx: CatchFormalParameterContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.catchType`.
	 * @param ctx the parse tree
	 */
	enterCatchType?: (ctx: CatchTypeContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.catchType`.
	 * @param ctx the parse tree
	 */
	exitCatchType?: (ctx: CatchTypeContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.finally_`.
	 * @param ctx the parse tree
	 */
	enterFinally_?: (ctx: Finally_Context) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.finally_`.
	 * @param ctx the parse tree
	 */
	exitFinally_?: (ctx: Finally_Context) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.tryWithResourcesStatement`.
	 * @param ctx the parse tree
	 */
	enterTryWithResourcesStatement?: (ctx: TryWithResourcesStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.tryWithResourcesStatement`.
	 * @param ctx the parse tree
	 */
	exitTryWithResourcesStatement?: (ctx: TryWithResourcesStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.resourceSpecification`.
	 * @param ctx the parse tree
	 */
	enterResourceSpecification?: (ctx: ResourceSpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.resourceSpecification`.
	 * @param ctx the parse tree
	 */
	exitResourceSpecification?: (ctx: ResourceSpecificationContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.resourceList`.
	 * @param ctx the parse tree
	 */
	enterResourceList?: (ctx: ResourceListContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.resourceList`.
	 * @param ctx the parse tree
	 */
	exitResourceList?: (ctx: ResourceListContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.resource`.
	 * @param ctx the parse tree
	 */
	enterResource?: (ctx: ResourceContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.resource`.
	 * @param ctx the parse tree
	 */
	exitResource?: (ctx: ResourceContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.primary`.
	 * @param ctx the parse tree
	 */
	enterPrimary?: (ctx: PrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.primary`.
	 * @param ctx the parse tree
	 */
	exitPrimary?: (ctx: PrimaryContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.primaryNoNewArray`.
	 * @param ctx the parse tree
	 */
	enterPrimaryNoNewArray?: (ctx: PrimaryNoNewArrayContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.primaryNoNewArray`.
	 * @param ctx the parse tree
	 */
	exitPrimaryNoNewArray?: (ctx: PrimaryNoNewArrayContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.primaryNoNewArray_lf_arrayAccess`.
	 * @param ctx the parse tree
	 */
	enterPrimaryNoNewArray_lf_arrayAccess?: (ctx: PrimaryNoNewArray_lf_arrayAccessContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.primaryNoNewArray_lf_arrayAccess`.
	 * @param ctx the parse tree
	 */
	exitPrimaryNoNewArray_lf_arrayAccess?: (ctx: PrimaryNoNewArray_lf_arrayAccessContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.primaryNoNewArray_lfno_arrayAccess`.
	 * @param ctx the parse tree
	 */
	enterPrimaryNoNewArray_lfno_arrayAccess?: (ctx: PrimaryNoNewArray_lfno_arrayAccessContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.primaryNoNewArray_lfno_arrayAccess`.
	 * @param ctx the parse tree
	 */
	exitPrimaryNoNewArray_lfno_arrayAccess?: (ctx: PrimaryNoNewArray_lfno_arrayAccessContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.primaryNoNewArray_lf_primary`.
	 * @param ctx the parse tree
	 */
	enterPrimaryNoNewArray_lf_primary?: (ctx: PrimaryNoNewArray_lf_primaryContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.primaryNoNewArray_lf_primary`.
	 * @param ctx the parse tree
	 */
	exitPrimaryNoNewArray_lf_primary?: (ctx: PrimaryNoNewArray_lf_primaryContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary`.
	 * @param ctx the parse tree
	 */
	enterPrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary?: (ctx: PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary`.
	 * @param ctx the parse tree
	 */
	exitPrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary?: (ctx: PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary`.
	 * @param ctx the parse tree
	 */
	enterPrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary?: (ctx: PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary`.
	 * @param ctx the parse tree
	 */
	exitPrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary?: (ctx: PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.primaryNoNewArray_lfno_primary`.
	 * @param ctx the parse tree
	 */
	enterPrimaryNoNewArray_lfno_primary?: (ctx: PrimaryNoNewArray_lfno_primaryContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.primaryNoNewArray_lfno_primary`.
	 * @param ctx the parse tree
	 */
	exitPrimaryNoNewArray_lfno_primary?: (ctx: PrimaryNoNewArray_lfno_primaryContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary`.
	 * @param ctx the parse tree
	 */
	enterPrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary?: (ctx: PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary`.
	 * @param ctx the parse tree
	 */
	exitPrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary?: (ctx: PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary`.
	 * @param ctx the parse tree
	 */
	enterPrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary?: (ctx: PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary`.
	 * @param ctx the parse tree
	 */
	exitPrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary?: (ctx: PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.classInstanceCreationExpression`.
	 * @param ctx the parse tree
	 */
	enterClassInstanceCreationExpression?: (ctx: ClassInstanceCreationExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.classInstanceCreationExpression`.
	 * @param ctx the parse tree
	 */
	exitClassInstanceCreationExpression?: (ctx: ClassInstanceCreationExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.classInstanceCreationExpression_lf_primary`.
	 * @param ctx the parse tree
	 */
	enterClassInstanceCreationExpression_lf_primary?: (ctx: ClassInstanceCreationExpression_lf_primaryContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.classInstanceCreationExpression_lf_primary`.
	 * @param ctx the parse tree
	 */
	exitClassInstanceCreationExpression_lf_primary?: (ctx: ClassInstanceCreationExpression_lf_primaryContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.classInstanceCreationExpression_lfno_primary`.
	 * @param ctx the parse tree
	 */
	enterClassInstanceCreationExpression_lfno_primary?: (ctx: ClassInstanceCreationExpression_lfno_primaryContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.classInstanceCreationExpression_lfno_primary`.
	 * @param ctx the parse tree
	 */
	exitClassInstanceCreationExpression_lfno_primary?: (ctx: ClassInstanceCreationExpression_lfno_primaryContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.typeArgumentsOrDiamond`.
	 * @param ctx the parse tree
	 */
	enterTypeArgumentsOrDiamond?: (ctx: TypeArgumentsOrDiamondContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.typeArgumentsOrDiamond`.
	 * @param ctx the parse tree
	 */
	exitTypeArgumentsOrDiamond?: (ctx: TypeArgumentsOrDiamondContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.fieldAccess`.
	 * @param ctx the parse tree
	 */
	enterFieldAccess?: (ctx: FieldAccessContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.fieldAccess`.
	 * @param ctx the parse tree
	 */
	exitFieldAccess?: (ctx: FieldAccessContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.fieldAccess_lf_primary`.
	 * @param ctx the parse tree
	 */
	enterFieldAccess_lf_primary?: (ctx: FieldAccess_lf_primaryContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.fieldAccess_lf_primary`.
	 * @param ctx the parse tree
	 */
	exitFieldAccess_lf_primary?: (ctx: FieldAccess_lf_primaryContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.fieldAccess_lfno_primary`.
	 * @param ctx the parse tree
	 */
	enterFieldAccess_lfno_primary?: (ctx: FieldAccess_lfno_primaryContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.fieldAccess_lfno_primary`.
	 * @param ctx the parse tree
	 */
	exitFieldAccess_lfno_primary?: (ctx: FieldAccess_lfno_primaryContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.arrayAccess`.
	 * @param ctx the parse tree
	 */
	enterArrayAccess?: (ctx: ArrayAccessContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.arrayAccess`.
	 * @param ctx the parse tree
	 */
	exitArrayAccess?: (ctx: ArrayAccessContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.arrayAccess_lf_primary`.
	 * @param ctx the parse tree
	 */
	enterArrayAccess_lf_primary?: (ctx: ArrayAccess_lf_primaryContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.arrayAccess_lf_primary`.
	 * @param ctx the parse tree
	 */
	exitArrayAccess_lf_primary?: (ctx: ArrayAccess_lf_primaryContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.arrayAccess_lfno_primary`.
	 * @param ctx the parse tree
	 */
	enterArrayAccess_lfno_primary?: (ctx: ArrayAccess_lfno_primaryContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.arrayAccess_lfno_primary`.
	 * @param ctx the parse tree
	 */
	exitArrayAccess_lfno_primary?: (ctx: ArrayAccess_lfno_primaryContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.methodInvocation`.
	 * @param ctx the parse tree
	 */
	enterMethodInvocation?: (ctx: MethodInvocationContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.methodInvocation`.
	 * @param ctx the parse tree
	 */
	exitMethodInvocation?: (ctx: MethodInvocationContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.methodInvocation_lf_primary`.
	 * @param ctx the parse tree
	 */
	enterMethodInvocation_lf_primary?: (ctx: MethodInvocation_lf_primaryContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.methodInvocation_lf_primary`.
	 * @param ctx the parse tree
	 */
	exitMethodInvocation_lf_primary?: (ctx: MethodInvocation_lf_primaryContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.methodInvocation_lfno_primary`.
	 * @param ctx the parse tree
	 */
	enterMethodInvocation_lfno_primary?: (ctx: MethodInvocation_lfno_primaryContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.methodInvocation_lfno_primary`.
	 * @param ctx the parse tree
	 */
	exitMethodInvocation_lfno_primary?: (ctx: MethodInvocation_lfno_primaryContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.argumentList`.
	 * @param ctx the parse tree
	 */
	enterArgumentList?: (ctx: ArgumentListContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.argumentList`.
	 * @param ctx the parse tree
	 */
	exitArgumentList?: (ctx: ArgumentListContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.methodReference`.
	 * @param ctx the parse tree
	 */
	enterMethodReference?: (ctx: MethodReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.methodReference`.
	 * @param ctx the parse tree
	 */
	exitMethodReference?: (ctx: MethodReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.methodReference_lf_primary`.
	 * @param ctx the parse tree
	 */
	enterMethodReference_lf_primary?: (ctx: MethodReference_lf_primaryContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.methodReference_lf_primary`.
	 * @param ctx the parse tree
	 */
	exitMethodReference_lf_primary?: (ctx: MethodReference_lf_primaryContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.methodReference_lfno_primary`.
	 * @param ctx the parse tree
	 */
	enterMethodReference_lfno_primary?: (ctx: MethodReference_lfno_primaryContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.methodReference_lfno_primary`.
	 * @param ctx the parse tree
	 */
	exitMethodReference_lfno_primary?: (ctx: MethodReference_lfno_primaryContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.arrayCreationExpression`.
	 * @param ctx the parse tree
	 */
	enterArrayCreationExpression?: (ctx: ArrayCreationExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.arrayCreationExpression`.
	 * @param ctx the parse tree
	 */
	exitArrayCreationExpression?: (ctx: ArrayCreationExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.dimExprs`.
	 * @param ctx the parse tree
	 */
	enterDimExprs?: (ctx: DimExprsContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.dimExprs`.
	 * @param ctx the parse tree
	 */
	exitDimExprs?: (ctx: DimExprsContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.dimExpr`.
	 * @param ctx the parse tree
	 */
	enterDimExpr?: (ctx: DimExprContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.dimExpr`.
	 * @param ctx the parse tree
	 */
	exitDimExpr?: (ctx: DimExprContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.constantExpression`.
	 * @param ctx the parse tree
	 */
	enterConstantExpression?: (ctx: ConstantExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.constantExpression`.
	 * @param ctx the parse tree
	 */
	exitConstantExpression?: (ctx: ConstantExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.lambdaExpression`.
	 * @param ctx the parse tree
	 */
	enterLambdaExpression?: (ctx: LambdaExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.lambdaExpression`.
	 * @param ctx the parse tree
	 */
	exitLambdaExpression?: (ctx: LambdaExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.lambdaParameters`.
	 * @param ctx the parse tree
	 */
	enterLambdaParameters?: (ctx: LambdaParametersContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.lambdaParameters`.
	 * @param ctx the parse tree
	 */
	exitLambdaParameters?: (ctx: LambdaParametersContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.inferredFormalParameterList`.
	 * @param ctx the parse tree
	 */
	enterInferredFormalParameterList?: (ctx: InferredFormalParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.inferredFormalParameterList`.
	 * @param ctx the parse tree
	 */
	exitInferredFormalParameterList?: (ctx: InferredFormalParameterListContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.lambdaBody`.
	 * @param ctx the parse tree
	 */
	enterLambdaBody?: (ctx: LambdaBodyContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.lambdaBody`.
	 * @param ctx the parse tree
	 */
	exitLambdaBody?: (ctx: LambdaBodyContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.assignmentExpression`.
	 * @param ctx the parse tree
	 */
	enterAssignmentExpression?: (ctx: AssignmentExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.assignmentExpression`.
	 * @param ctx the parse tree
	 */
	exitAssignmentExpression?: (ctx: AssignmentExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.assignment`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.assignment`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.leftHandSide`.
	 * @param ctx the parse tree
	 */
	enterLeftHandSide?: (ctx: LeftHandSideContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.leftHandSide`.
	 * @param ctx the parse tree
	 */
	exitLeftHandSide?: (ctx: LeftHandSideContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	enterAssignmentOperator?: (ctx: AssignmentOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	exitAssignmentOperator?: (ctx: AssignmentOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.conditionalExpression`.
	 * @param ctx the parse tree
	 */
	enterConditionalExpression?: (ctx: ConditionalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.conditionalExpression`.
	 * @param ctx the parse tree
	 */
	exitConditionalExpression?: (ctx: ConditionalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.conditionalOrExpression`.
	 * @param ctx the parse tree
	 */
	enterConditionalOrExpression?: (ctx: ConditionalOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.conditionalOrExpression`.
	 * @param ctx the parse tree
	 */
	exitConditionalOrExpression?: (ctx: ConditionalOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.conditionalAndExpression`.
	 * @param ctx the parse tree
	 */
	enterConditionalAndExpression?: (ctx: ConditionalAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.conditionalAndExpression`.
	 * @param ctx the parse tree
	 */
	exitConditionalAndExpression?: (ctx: ConditionalAndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.inclusiveOrExpression`.
	 * @param ctx the parse tree
	 */
	enterInclusiveOrExpression?: (ctx: InclusiveOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.inclusiveOrExpression`.
	 * @param ctx the parse tree
	 */
	exitInclusiveOrExpression?: (ctx: InclusiveOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.exclusiveOrExpression`.
	 * @param ctx the parse tree
	 */
	enterExclusiveOrExpression?: (ctx: ExclusiveOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.exclusiveOrExpression`.
	 * @param ctx the parse tree
	 */
	exitExclusiveOrExpression?: (ctx: ExclusiveOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.andExpression`.
	 * @param ctx the parse tree
	 */
	enterAndExpression?: (ctx: AndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.andExpression`.
	 * @param ctx the parse tree
	 */
	exitAndExpression?: (ctx: AndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.equalityExpression`.
	 * @param ctx the parse tree
	 */
	enterEqualityExpression?: (ctx: EqualityExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.equalityExpression`.
	 * @param ctx the parse tree
	 */
	exitEqualityExpression?: (ctx: EqualityExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.relationalExpression`.
	 * @param ctx the parse tree
	 */
	enterRelationalExpression?: (ctx: RelationalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.relationalExpression`.
	 * @param ctx the parse tree
	 */
	exitRelationalExpression?: (ctx: RelationalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.shiftExpression`.
	 * @param ctx the parse tree
	 */
	enterShiftExpression?: (ctx: ShiftExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.shiftExpression`.
	 * @param ctx the parse tree
	 */
	exitShiftExpression?: (ctx: ShiftExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.additiveExpression`.
	 * @param ctx the parse tree
	 */
	enterAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.additiveExpression`.
	 * @param ctx the parse tree
	 */
	exitAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.unaryExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryExpression?: (ctx: UnaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.unaryExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryExpression?: (ctx: UnaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.preIncrementExpression`.
	 * @param ctx the parse tree
	 */
	enterPreIncrementExpression?: (ctx: PreIncrementExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.preIncrementExpression`.
	 * @param ctx the parse tree
	 */
	exitPreIncrementExpression?: (ctx: PreIncrementExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.preDecrementExpression`.
	 * @param ctx the parse tree
	 */
	enterPreDecrementExpression?: (ctx: PreDecrementExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.preDecrementExpression`.
	 * @param ctx the parse tree
	 */
	exitPreDecrementExpression?: (ctx: PreDecrementExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.unaryExpressionNotPlusMinus`.
	 * @param ctx the parse tree
	 */
	enterUnaryExpressionNotPlusMinus?: (ctx: UnaryExpressionNotPlusMinusContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.unaryExpressionNotPlusMinus`.
	 * @param ctx the parse tree
	 */
	exitUnaryExpressionNotPlusMinus?: (ctx: UnaryExpressionNotPlusMinusContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.postfixExpression`.
	 * @param ctx the parse tree
	 */
	enterPostfixExpression?: (ctx: PostfixExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.postfixExpression`.
	 * @param ctx the parse tree
	 */
	exitPostfixExpression?: (ctx: PostfixExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.postIncrementExpression`.
	 * @param ctx the parse tree
	 */
	enterPostIncrementExpression?: (ctx: PostIncrementExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.postIncrementExpression`.
	 * @param ctx the parse tree
	 */
	exitPostIncrementExpression?: (ctx: PostIncrementExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.postIncrementExpression_lf_postfixExpression`.
	 * @param ctx the parse tree
	 */
	enterPostIncrementExpression_lf_postfixExpression?: (ctx: PostIncrementExpression_lf_postfixExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.postIncrementExpression_lf_postfixExpression`.
	 * @param ctx the parse tree
	 */
	exitPostIncrementExpression_lf_postfixExpression?: (ctx: PostIncrementExpression_lf_postfixExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.postDecrementExpression`.
	 * @param ctx the parse tree
	 */
	enterPostDecrementExpression?: (ctx: PostDecrementExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.postDecrementExpression`.
	 * @param ctx the parse tree
	 */
	exitPostDecrementExpression?: (ctx: PostDecrementExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.postDecrementExpression_lf_postfixExpression`.
	 * @param ctx the parse tree
	 */
	enterPostDecrementExpression_lf_postfixExpression?: (ctx: PostDecrementExpression_lf_postfixExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.postDecrementExpression_lf_postfixExpression`.
	 * @param ctx the parse tree
	 */
	exitPostDecrementExpression_lf_postfixExpression?: (ctx: PostDecrementExpression_lf_postfixExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Java8Parser.castExpression`.
	 * @param ctx the parse tree
	 */
	enterCastExpression?: (ctx: CastExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Java8Parser.castExpression`.
	 * @param ctx the parse tree
	 */
	exitCastExpression?: (ctx: CastExpressionContext) => void;
}

