// Generated from ./lib/CSharpParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { LiteralExpressionContext } from "./module";
import { SimpleNameExpressionContext } from "./module";
import { ParenthesisExpressionsContext } from "./module";
import { MemberAccessExpressionContext } from "./module";
import { LiteralAccessExpressionContext } from "./module";
import { ThisReferenceExpressionContext } from "./module";
import { BaseAccessExpressionContext } from "./module";
import { ObjectCreationExpressionContext } from "./module";
import { TupleExpressionContext } from "./module";
import { TypeofExpressionContext } from "./module";
import { CheckedExpressionContext } from "./module";
import { UncheckedExpressionContext } from "./module";
import { DefaultValueExpressionContext } from "./module";
import { AnonymousMethodExpressionContext } from "./module";
import { SizeofExpressionContext } from "./module";
import { NameofExpressionContext } from "./module";
import { UsingAliasDirectiveContext } from "./module";
import { UsingNamespaceDirectiveContext } from "./module";
import { UsingStaticDirectiveContext } from "./module";
import { TheEmptyStatementContext } from "./module";
import { ExpressionStatementContext } from "./module";
import { IfStatementContext } from "./module";
import { SwitchStatementContext } from "./module";
import { WhileStatementContext } from "./module";
import { DoStatementContext } from "./module";
import { ForStatementContext } from "./module";
import { ForeachStatementContext } from "./module";
import { BreakStatementContext } from "./module";
import { ContinueStatementContext } from "./module";
import { GotoStatementContext } from "./module";
import { ReturnStatementContext } from "./module";
import { ThrowStatementContext } from "./module";
import { TryStatementContext } from "./module";
import { CheckedStatementContext } from "./module";
import { UncheckedStatementContext } from "./module";
import { LockStatementContext } from "./module";
import { UsingStatementContext } from "./module";
import { YieldStatementContext } from "./module";
import { UnsafeStatementContext } from "./module";
import { FixedStatementContext } from "./module";
import { Compilation_unitContext } from "./module";
import { Namespace_or_type_nameContext } from "./module";
import { Type_Context } from "./module";
import { Base_typeContext } from "./module";
import { Tuple_typeContext } from "./module";
import { Tuple_elementContext } from "./module";
import { Simple_typeContext } from "./module";
import { Numeric_typeContext } from "./module";
import { Integral_typeContext } from "./module";
import { Floating_point_typeContext } from "./module";
import { Class_typeContext } from "./module";
import { Type_argument_listContext } from "./module";
import { Argument_listContext } from "./module";
import { ArgumentContext } from "./module";
import { ExpressionContext } from "./module";
import { Non_assignment_expressionContext } from "./module";
import { AssignmentContext } from "./module";
import { Assignment_operatorContext } from "./module";
import { Conditional_expressionContext } from "./module";
import { Null_coalescing_expressionContext } from "./module";
import { Conditional_or_expressionContext } from "./module";
import { Conditional_and_expressionContext } from "./module";
import { Inclusive_or_expressionContext } from "./module";
import { Exclusive_or_expressionContext } from "./module";
import { And_expressionContext } from "./module";
import { Equality_expressionContext } from "./module";
import { Relational_expressionContext } from "./module";
import { Shift_expressionContext } from "./module";
import { Additive_expressionContext } from "./module";
import { Multiplicative_expressionContext } from "./module";
import { Switch_expressionContext } from "./module";
import { Switch_expression_armsContext } from "./module";
import { Switch_expression_armContext } from "./module";
import { Range_expressionContext } from "./module";
import { Unary_expressionContext } from "./module";
import { Primary_expressionContext } from "./module";
import { Primary_expression_startContext } from "./module";
import { Throwable_expressionContext } from "./module";
import { Throw_expressionContext } from "./module";
import { Member_accessContext } from "./module";
import { Bracket_expressionContext } from "./module";
import { Indexer_argumentContext } from "./module";
import { Predefined_typeContext } from "./module";
import { Expression_listContext } from "./module";
import { Object_or_collection_initializerContext } from "./module";
import { Object_initializerContext } from "./module";
import { Member_initializer_listContext } from "./module";
import { Member_initializerContext } from "./module";
import { Initializer_valueContext } from "./module";
import { Collection_initializerContext } from "./module";
import { Element_initializerContext } from "./module";
import { Anonymous_object_initializerContext } from "./module";
import { Member_declarator_listContext } from "./module";
import { Member_declaratorContext } from "./module";
import { Unbound_type_nameContext } from "./module";
import { Generic_dimension_specifierContext } from "./module";
import { IsTypeContext } from "./module";
import { IsTypePatternArmsContext } from "./module";
import { IsTypePatternArmContext } from "./module";
import { Lambda_expressionContext } from "./module";
import { Anonymous_function_signatureContext } from "./module";
import { Explicit_anonymous_function_parameter_listContext } from "./module";
import { Explicit_anonymous_function_parameterContext } from "./module";
import { Implicit_anonymous_function_parameter_listContext } from "./module";
import { Anonymous_function_bodyContext } from "./module";
import { Query_expressionContext } from "./module";
import { From_clauseContext } from "./module";
import { Query_bodyContext } from "./module";
import { Query_body_clauseContext } from "./module";
import { Let_clauseContext } from "./module";
import { Where_clauseContext } from "./module";
import { Combined_join_clauseContext } from "./module";
import { Orderby_clauseContext } from "./module";
import { OrderingContext } from "./module";
import { Select_or_group_clauseContext } from "./module";
import { Query_continuationContext } from "./module";
import { StatementContext } from "./module";
import { DeclarationStatementContext } from "./module";
import { Local_function_declarationContext } from "./module";
import { Local_function_headerContext } from "./module";
import { Local_function_modifiersContext } from "./module";
import { Local_function_bodyContext } from "./module";
import { Labeled_StatementContext } from "./module";
import { Embedded_statementContext } from "./module";
import { Simple_embedded_statementContext } from "./module";
import { BlockContext } from "./module";
import { Local_variable_declarationContext } from "./module";
import { Local_variable_typeContext } from "./module";
import { Local_variable_declaratorContext } from "./module";
import { Local_variable_initializerContext } from "./module";
import { Local_constant_declarationContext } from "./module";
import { If_bodyContext } from "./module";
import { Switch_sectionContext } from "./module";
import { Switch_labelContext } from "./module";
import { Case_guardContext } from "./module";
import { Statement_listContext } from "./module";
import { For_initializerContext } from "./module";
import { For_iteratorContext } from "./module";
import { Catch_clausesContext } from "./module";
import { Specific_catch_clauseContext } from "./module";
import { General_catch_clauseContext } from "./module";
import { Exception_filterContext } from "./module";
import { Finally_clauseContext } from "./module";
import { Resource_acquisitionContext } from "./module";
import { Namespace_declarationContext } from "./module";
import { Qualified_identifierContext } from "./module";
import { Namespace_bodyContext } from "./module";
import { Extern_alias_directivesContext } from "./module";
import { Extern_alias_directiveContext } from "./module";
import { Using_directivesContext } from "./module";
import { Using_directiveContext } from "./module";
import { Namespace_member_declarationsContext } from "./module";
import { Namespace_member_declarationContext } from "./module";
import { Type_declarationContext } from "./module";
import { Qualified_alias_memberContext } from "./module";
import { Type_parameter_listContext } from "./module";
import { Type_parameterContext } from "./module";
import { Class_baseContext } from "./module";
import { Interface_type_listContext } from "./module";
import { Type_parameter_constraints_clausesContext } from "./module";
import { Type_parameter_constraints_clauseContext } from "./module";
import { Type_parameter_constraintsContext } from "./module";
import { Primary_constraintContext } from "./module";
import { Secondary_constraintsContext } from "./module";
import { Constructor_constraintContext } from "./module";
import { Class_bodyContext } from "./module";
import { Class_member_declarationsContext } from "./module";
import { Class_member_declarationContext } from "./module";
import { All_member_modifiersContext } from "./module";
import { All_member_modifierContext } from "./module";
import { Common_member_declarationContext } from "./module";
import { Typed_member_declarationContext } from "./module";
import { Constant_declaratorsContext } from "./module";
import { Constant_declaratorContext } from "./module";
import { Variable_declaratorsContext } from "./module";
import { Variable_declaratorContext } from "./module";
import { Variable_initializerContext } from "./module";
import { Return_typeContext } from "./module";
import { Member_nameContext } from "./module";
import { Method_bodyContext } from "./module";
import { Formal_parameter_listContext } from "./module";
import { Fixed_parametersContext } from "./module";
import { Fixed_parameterContext } from "./module";
import { Parameter_modifierContext } from "./module";
import { Parameter_arrayContext } from "./module";
import { Accessor_declarationsContext } from "./module";
import { Get_accessor_declarationContext } from "./module";
import { Set_accessor_declarationContext } from "./module";
import { Accessor_modifierContext } from "./module";
import { Accessor_bodyContext } from "./module";
import { Event_accessor_declarationsContext } from "./module";
import { Add_accessor_declarationContext } from "./module";
import { Remove_accessor_declarationContext } from "./module";
import { Overloadable_operatorContext } from "./module";
import { Conversion_operator_declaratorContext } from "./module";
import { Constructor_initializerContext } from "./module";
import { BodyContext } from "./module";
import { Struct_interfacesContext } from "./module";
import { Struct_bodyContext } from "./module";
import { Struct_member_declarationContext } from "./module";
import { Array_typeContext } from "./module";
import { Rank_specifierContext } from "./module";
import { Array_initializerContext } from "./module";
import { Variant_type_parameter_listContext } from "./module";
import { Variant_type_parameterContext } from "./module";
import { Variance_annotationContext } from "./module";
import { Interface_baseContext } from "./module";
import { Interface_bodyContext } from "./module";
import { Interface_member_declarationContext } from "./module";
import { Interface_accessorsContext } from "./module";
import { Enum_baseContext } from "./module";
import { Enum_bodyContext } from "./module";
import { Enum_member_declarationContext } from "./module";
import { Global_attribute_sectionContext } from "./module";
import { Global_attribute_targetContext } from "./module";
import { AttributesContext } from "./module";
import { Attribute_sectionContext } from "./module";
import { Attribute_targetContext } from "./module";
import { Attribute_listContext } from "./module";
import { AttributeContext } from "./module";
import { Attribute_argumentContext } from "./module";
import { Pointer_typeContext } from "./module";
import { Fixed_pointer_declaratorsContext } from "./module";
import { Fixed_pointer_declaratorContext } from "./module";
import { Fixed_pointer_initializerContext } from "./module";
import { Fixed_size_buffer_declaratorContext } from "./module";
import { Stackalloc_initializerContext } from "./module";
import { Right_arrowContext } from "./module";
import { Right_shiftContext } from "./module";
import { Right_shift_assignmentContext } from "./module";
import { LiteralContext } from "./module";
import { Boolean_literalContext } from "./module";
import { String_literalContext } from "./module";
import { Interpolated_regular_stringContext } from "./module";
import { Interpolated_verbatium_stringContext } from "./module";
import { Interpolated_regular_string_partContext } from "./module";
import { Interpolated_verbatium_string_partContext } from "./module";
import { Interpolated_string_expressionContext } from "./module";
import { KeywordContext } from "./module";
import { Class_definitionContext } from "./module";
import { Struct_definitionContext } from "./module";
import { Interface_definitionContext } from "./module";
import { Enum_definitionContext } from "./module";
import { Delegate_definitionContext } from "./module";
import { Event_declarationContext } from "./module";
import { Field_declarationContext } from "./module";
import { Property_declarationContext } from "./module";
import { Constant_declarationContext } from "./module";
import { Indexer_declarationContext } from "./module";
import { Destructor_definitionContext } from "./module";
import { Constructor_declarationContext } from "./module";
import { Method_declarationContext } from "./module";
import { Method_member_nameContext } from "./module";
import { Operator_declarationContext } from "./module";
import { Arg_declarationContext } from "./module";
import { Method_invocationContext } from "./module";
import { Object_creation_expressionContext } from "./module";
import { IdentifierContext } from "./module";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CSharpParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface CSharpParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `literalExpression`
	 * labeled alternative in `CSharpParser.primary_expression_start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralExpression?: (ctx: LiteralExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `simpleNameExpression`
	 * labeled alternative in `CSharpParser.primary_expression_start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleNameExpression?: (ctx: SimpleNameExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `parenthesisExpressions`
	 * labeled alternative in `CSharpParser.primary_expression_start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesisExpressions?: (ctx: ParenthesisExpressionsContext) => Result;

	/**
	 * Visit a parse tree produced by the `memberAccessExpression`
	 * labeled alternative in `CSharpParser.primary_expression_start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberAccessExpression?: (ctx: MemberAccessExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `literalAccessExpression`
	 * labeled alternative in `CSharpParser.primary_expression_start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralAccessExpression?: (ctx: LiteralAccessExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `thisReferenceExpression`
	 * labeled alternative in `CSharpParser.primary_expression_start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThisReferenceExpression?: (ctx: ThisReferenceExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `baseAccessExpression`
	 * labeled alternative in `CSharpParser.primary_expression_start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBaseAccessExpression?: (ctx: BaseAccessExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `objectCreationExpression`
	 * labeled alternative in `CSharpParser.primary_expression_start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectCreationExpression?: (ctx: ObjectCreationExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `tupleExpression`
	 * labeled alternative in `CSharpParser.primary_expression_start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleExpression?: (ctx: TupleExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `typeofExpression`
	 * labeled alternative in `CSharpParser.primary_expression_start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeofExpression?: (ctx: TypeofExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `checkedExpression`
	 * labeled alternative in `CSharpParser.primary_expression_start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCheckedExpression?: (ctx: CheckedExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `uncheckedExpression`
	 * labeled alternative in `CSharpParser.primary_expression_start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUncheckedExpression?: (ctx: UncheckedExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `defaultValueExpression`
	 * labeled alternative in `CSharpParser.primary_expression_start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultValueExpression?: (ctx: DefaultValueExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `anonymousMethodExpression`
	 * labeled alternative in `CSharpParser.primary_expression_start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnonymousMethodExpression?: (ctx: AnonymousMethodExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `sizeofExpression`
	 * labeled alternative in `CSharpParser.primary_expression_start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSizeofExpression?: (ctx: SizeofExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `nameofExpression`
	 * labeled alternative in `CSharpParser.primary_expression_start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameofExpression?: (ctx: NameofExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `usingAliasDirective`
	 * labeled alternative in `CSharpParser.using_directive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUsingAliasDirective?: (ctx: UsingAliasDirectiveContext) => Result;

	/**
	 * Visit a parse tree produced by the `usingNamespaceDirective`
	 * labeled alternative in `CSharpParser.using_directive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUsingNamespaceDirective?: (ctx: UsingNamespaceDirectiveContext) => Result;

	/**
	 * Visit a parse tree produced by the `usingStaticDirective`
	 * labeled alternative in `CSharpParser.using_directive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUsingStaticDirective?: (ctx: UsingStaticDirectiveContext) => Result;

	/**
	 * Visit a parse tree produced by the `theEmptyStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTheEmptyStatement?: (ctx: TheEmptyStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `ifStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `switchStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchStatement?: (ctx: SwitchStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `whileStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStatement?: (ctx: WhileStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `doStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoStatement?: (ctx: DoStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `forStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStatement?: (ctx: ForStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `foreachStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForeachStatement?: (ctx: ForeachStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `breakStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreakStatement?: (ctx: BreakStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `continueStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinueStatement?: (ctx: ContinueStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `gotoStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGotoStatement?: (ctx: GotoStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `returnStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStatement?: (ctx: ReturnStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `throwStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThrowStatement?: (ctx: ThrowStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `tryStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTryStatement?: (ctx: TryStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `checkedStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCheckedStatement?: (ctx: CheckedStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `uncheckedStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUncheckedStatement?: (ctx: UncheckedStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `lockStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLockStatement?: (ctx: LockStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `usingStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUsingStatement?: (ctx: UsingStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `yieldStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYieldStatement?: (ctx: YieldStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `unsafeStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnsafeStatement?: (ctx: UnsafeStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `fixedStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFixedStatement?: (ctx: FixedStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.compilation_unit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompilation_unit?: (ctx: Compilation_unitContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.namespace_or_type_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamespace_or_type_name?: (ctx: Namespace_or_type_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.type_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_?: (ctx: Type_Context) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.base_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBase_type?: (ctx: Base_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.tuple_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTuple_type?: (ctx: Tuple_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.tuple_element`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTuple_element?: (ctx: Tuple_elementContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.simple_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimple_type?: (ctx: Simple_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.numeric_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumeric_type?: (ctx: Numeric_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.integral_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegral_type?: (ctx: Integral_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.floating_point_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloating_point_type?: (ctx: Floating_point_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.class_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClass_type?: (ctx: Class_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.type_argument_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_argument_list?: (ctx: Type_argument_listContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.argument_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgument_list?: (ctx: Argument_listContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.argument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgument?: (ctx: ArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.non_assignment_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNon_assignment_expression?: (ctx: Non_assignment_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.assignment_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment_operator?: (ctx: Assignment_operatorContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.conditional_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditional_expression?: (ctx: Conditional_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.null_coalescing_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNull_coalescing_expression?: (ctx: Null_coalescing_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.conditional_or_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditional_or_expression?: (ctx: Conditional_or_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.conditional_and_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditional_and_expression?: (ctx: Conditional_and_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.inclusive_or_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInclusive_or_expression?: (ctx: Inclusive_or_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.exclusive_or_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExclusive_or_expression?: (ctx: Exclusive_or_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.and_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnd_expression?: (ctx: And_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.equality_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEquality_expression?: (ctx: Equality_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.relational_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelational_expression?: (ctx: Relational_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.shift_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShift_expression?: (ctx: Shift_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.additive_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditive_expression?: (ctx: Additive_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.multiplicative_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicative_expression?: (ctx: Multiplicative_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.switch_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitch_expression?: (ctx: Switch_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.switch_expression_arms`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitch_expression_arms?: (ctx: Switch_expression_armsContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.switch_expression_arm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitch_expression_arm?: (ctx: Switch_expression_armContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.range_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRange_expression?: (ctx: Range_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.unary_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnary_expression?: (ctx: Unary_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.primary_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary_expression?: (ctx: Primary_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.primary_expression_start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary_expression_start?: (ctx: Primary_expression_startContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.throwable_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThrowable_expression?: (ctx: Throwable_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.throw_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThrow_expression?: (ctx: Throw_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.member_access`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMember_access?: (ctx: Member_accessContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.bracket_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBracket_expression?: (ctx: Bracket_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.indexer_argument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexer_argument?: (ctx: Indexer_argumentContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.predefined_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredefined_type?: (ctx: Predefined_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.expression_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression_list?: (ctx: Expression_listContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.object_or_collection_initializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObject_or_collection_initializer?: (ctx: Object_or_collection_initializerContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.object_initializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObject_initializer?: (ctx: Object_initializerContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.member_initializer_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMember_initializer_list?: (ctx: Member_initializer_listContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.member_initializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMember_initializer?: (ctx: Member_initializerContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.initializer_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitializer_value?: (ctx: Initializer_valueContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.collection_initializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCollection_initializer?: (ctx: Collection_initializerContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.element_initializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElement_initializer?: (ctx: Element_initializerContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.anonymous_object_initializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnonymous_object_initializer?: (ctx: Anonymous_object_initializerContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.member_declarator_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMember_declarator_list?: (ctx: Member_declarator_listContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.member_declarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMember_declarator?: (ctx: Member_declaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.unbound_type_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnbound_type_name?: (ctx: Unbound_type_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.generic_dimension_specifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGeneric_dimension_specifier?: (ctx: Generic_dimension_specifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.isType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIsType?: (ctx: IsTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.isTypePatternArms`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIsTypePatternArms?: (ctx: IsTypePatternArmsContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.isTypePatternArm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIsTypePatternArm?: (ctx: IsTypePatternArmContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.lambda_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambda_expression?: (ctx: Lambda_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.anonymous_function_signature`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnonymous_function_signature?: (ctx: Anonymous_function_signatureContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.explicit_anonymous_function_parameter_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplicit_anonymous_function_parameter_list?: (ctx: Explicit_anonymous_function_parameter_listContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.explicit_anonymous_function_parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplicit_anonymous_function_parameter?: (ctx: Explicit_anonymous_function_parameterContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.implicit_anonymous_function_parameter_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImplicit_anonymous_function_parameter_list?: (ctx: Implicit_anonymous_function_parameter_listContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.anonymous_function_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnonymous_function_body?: (ctx: Anonymous_function_bodyContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.query_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuery_expression?: (ctx: Query_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.from_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFrom_clause?: (ctx: From_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.query_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuery_body?: (ctx: Query_bodyContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.query_body_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuery_body_clause?: (ctx: Query_body_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.let_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLet_clause?: (ctx: Let_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.where_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhere_clause?: (ctx: Where_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.combined_join_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCombined_join_clause?: (ctx: Combined_join_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.orderby_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrderby_clause?: (ctx: Orderby_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.ordering`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrdering?: (ctx: OrderingContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.select_or_group_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelect_or_group_clause?: (ctx: Select_or_group_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.query_continuation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuery_continuation?: (ctx: Query_continuationContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.declarationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclarationStatement?: (ctx: DeclarationStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.local_function_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocal_function_declaration?: (ctx: Local_function_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.local_function_header`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocal_function_header?: (ctx: Local_function_headerContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.local_function_modifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocal_function_modifiers?: (ctx: Local_function_modifiersContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.local_function_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocal_function_body?: (ctx: Local_function_bodyContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.labeled_Statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabeled_Statement?: (ctx: Labeled_StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.embedded_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmbedded_statement?: (ctx: Embedded_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimple_embedded_statement?: (ctx: Simple_embedded_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.local_variable_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocal_variable_declaration?: (ctx: Local_variable_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.local_variable_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocal_variable_type?: (ctx: Local_variable_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.local_variable_declarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocal_variable_declarator?: (ctx: Local_variable_declaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.local_variable_initializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocal_variable_initializer?: (ctx: Local_variable_initializerContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.local_constant_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocal_constant_declaration?: (ctx: Local_constant_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.if_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf_body?: (ctx: If_bodyContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.switch_section`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitch_section?: (ctx: Switch_sectionContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.switch_label`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitch_label?: (ctx: Switch_labelContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.case_guard`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCase_guard?: (ctx: Case_guardContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.statement_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement_list?: (ctx: Statement_listContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.for_initializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor_initializer?: (ctx: For_initializerContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.for_iterator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor_iterator?: (ctx: For_iteratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.catch_clauses`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatch_clauses?: (ctx: Catch_clausesContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.specific_catch_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecific_catch_clause?: (ctx: Specific_catch_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.general_catch_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGeneral_catch_clause?: (ctx: General_catch_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.exception_filter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitException_filter?: (ctx: Exception_filterContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.finally_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFinally_clause?: (ctx: Finally_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.resource_acquisition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResource_acquisition?: (ctx: Resource_acquisitionContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.namespace_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamespace_declaration?: (ctx: Namespace_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.qualified_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualified_identifier?: (ctx: Qualified_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.namespace_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamespace_body?: (ctx: Namespace_bodyContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.extern_alias_directives`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtern_alias_directives?: (ctx: Extern_alias_directivesContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.extern_alias_directive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtern_alias_directive?: (ctx: Extern_alias_directiveContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.using_directives`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUsing_directives?: (ctx: Using_directivesContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.using_directive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUsing_directive?: (ctx: Using_directiveContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.namespace_member_declarations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamespace_member_declarations?: (ctx: Namespace_member_declarationsContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.namespace_member_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamespace_member_declaration?: (ctx: Namespace_member_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.type_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_declaration?: (ctx: Type_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.qualified_alias_member`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualified_alias_member?: (ctx: Qualified_alias_memberContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.type_parameter_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_parameter_list?: (ctx: Type_parameter_listContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.type_parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_parameter?: (ctx: Type_parameterContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.class_base`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClass_base?: (ctx: Class_baseContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.interface_type_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterface_type_list?: (ctx: Interface_type_listContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.type_parameter_constraints_clauses`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_parameter_constraints_clauses?: (ctx: Type_parameter_constraints_clausesContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.type_parameter_constraints_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_parameter_constraints_clause?: (ctx: Type_parameter_constraints_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.type_parameter_constraints`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_parameter_constraints?: (ctx: Type_parameter_constraintsContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.primary_constraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary_constraint?: (ctx: Primary_constraintContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.secondary_constraints`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSecondary_constraints?: (ctx: Secondary_constraintsContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.constructor_constraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructor_constraint?: (ctx: Constructor_constraintContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.class_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClass_body?: (ctx: Class_bodyContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.class_member_declarations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClass_member_declarations?: (ctx: Class_member_declarationsContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.class_member_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClass_member_declaration?: (ctx: Class_member_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.all_member_modifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAll_member_modifiers?: (ctx: All_member_modifiersContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.all_member_modifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAll_member_modifier?: (ctx: All_member_modifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.common_member_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommon_member_declaration?: (ctx: Common_member_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.typed_member_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTyped_member_declaration?: (ctx: Typed_member_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.constant_declarators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant_declarators?: (ctx: Constant_declaratorsContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.constant_declarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant_declarator?: (ctx: Constant_declaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.variable_declarators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable_declarators?: (ctx: Variable_declaratorsContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.variable_declarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable_declarator?: (ctx: Variable_declaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.variable_initializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable_initializer?: (ctx: Variable_initializerContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.return_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturn_type?: (ctx: Return_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.member_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMember_name?: (ctx: Member_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.method_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethod_body?: (ctx: Method_bodyContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.formal_parameter_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormal_parameter_list?: (ctx: Formal_parameter_listContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.fixed_parameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFixed_parameters?: (ctx: Fixed_parametersContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.fixed_parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFixed_parameter?: (ctx: Fixed_parameterContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.parameter_modifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter_modifier?: (ctx: Parameter_modifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.parameter_array`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter_array?: (ctx: Parameter_arrayContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.accessor_declarations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAccessor_declarations?: (ctx: Accessor_declarationsContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.get_accessor_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGet_accessor_declaration?: (ctx: Get_accessor_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.set_accessor_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSet_accessor_declaration?: (ctx: Set_accessor_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.accessor_modifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAccessor_modifier?: (ctx: Accessor_modifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.accessor_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAccessor_body?: (ctx: Accessor_bodyContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.event_accessor_declarations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEvent_accessor_declarations?: (ctx: Event_accessor_declarationsContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.add_accessor_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdd_accessor_declaration?: (ctx: Add_accessor_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.remove_accessor_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRemove_accessor_declaration?: (ctx: Remove_accessor_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.overloadable_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOverloadable_operator?: (ctx: Overloadable_operatorContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.conversion_operator_declarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConversion_operator_declarator?: (ctx: Conversion_operator_declaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.constructor_initializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructor_initializer?: (ctx: Constructor_initializerContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBody?: (ctx: BodyContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.struct_interfaces`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStruct_interfaces?: (ctx: Struct_interfacesContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.struct_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStruct_body?: (ctx: Struct_bodyContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.struct_member_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStruct_member_declaration?: (ctx: Struct_member_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.array_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray_type?: (ctx: Array_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.rank_specifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRank_specifier?: (ctx: Rank_specifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.array_initializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray_initializer?: (ctx: Array_initializerContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.variant_type_parameter_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariant_type_parameter_list?: (ctx: Variant_type_parameter_listContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.variant_type_parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariant_type_parameter?: (ctx: Variant_type_parameterContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.variance_annotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariance_annotation?: (ctx: Variance_annotationContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.interface_base`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterface_base?: (ctx: Interface_baseContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.interface_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterface_body?: (ctx: Interface_bodyContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.interface_member_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterface_member_declaration?: (ctx: Interface_member_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.interface_accessors`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterface_accessors?: (ctx: Interface_accessorsContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.enum_base`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnum_base?: (ctx: Enum_baseContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.enum_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnum_body?: (ctx: Enum_bodyContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.enum_member_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnum_member_declaration?: (ctx: Enum_member_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.global_attribute_section`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobal_attribute_section?: (ctx: Global_attribute_sectionContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.global_attribute_target`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobal_attribute_target?: (ctx: Global_attribute_targetContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.attributes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributes?: (ctx: AttributesContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.attribute_section`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttribute_section?: (ctx: Attribute_sectionContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.attribute_target`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttribute_target?: (ctx: Attribute_targetContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.attribute_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttribute_list?: (ctx: Attribute_listContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.attribute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttribute?: (ctx: AttributeContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.attribute_argument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttribute_argument?: (ctx: Attribute_argumentContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.pointer_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPointer_type?: (ctx: Pointer_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.fixed_pointer_declarators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFixed_pointer_declarators?: (ctx: Fixed_pointer_declaratorsContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.fixed_pointer_declarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFixed_pointer_declarator?: (ctx: Fixed_pointer_declaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.fixed_pointer_initializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFixed_pointer_initializer?: (ctx: Fixed_pointer_initializerContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.fixed_size_buffer_declarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFixed_size_buffer_declarator?: (ctx: Fixed_size_buffer_declaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.stackalloc_initializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStackalloc_initializer?: (ctx: Stackalloc_initializerContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.right_arrow`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRight_arrow?: (ctx: Right_arrowContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.right_shift`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRight_shift?: (ctx: Right_shiftContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.right_shift_assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRight_shift_assignment?: (ctx: Right_shift_assignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.boolean_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolean_literal?: (ctx: Boolean_literalContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.string_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString_literal?: (ctx: String_literalContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.interpolated_regular_string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterpolated_regular_string?: (ctx: Interpolated_regular_stringContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.interpolated_verbatium_string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterpolated_verbatium_string?: (ctx: Interpolated_verbatium_stringContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.interpolated_regular_string_part`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterpolated_regular_string_part?: (ctx: Interpolated_regular_string_partContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.interpolated_verbatium_string_part`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterpolated_verbatium_string_part?: (ctx: Interpolated_verbatium_string_partContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.interpolated_string_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterpolated_string_expression?: (ctx: Interpolated_string_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.keyword`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyword?: (ctx: KeywordContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.class_definition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClass_definition?: (ctx: Class_definitionContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.struct_definition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStruct_definition?: (ctx: Struct_definitionContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.interface_definition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterface_definition?: (ctx: Interface_definitionContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.enum_definition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnum_definition?: (ctx: Enum_definitionContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.delegate_definition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelegate_definition?: (ctx: Delegate_definitionContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.event_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEvent_declaration?: (ctx: Event_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.field_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitField_declaration?: (ctx: Field_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.property_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProperty_declaration?: (ctx: Property_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.constant_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant_declaration?: (ctx: Constant_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.indexer_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexer_declaration?: (ctx: Indexer_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.destructor_definition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDestructor_definition?: (ctx: Destructor_definitionContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.constructor_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructor_declaration?: (ctx: Constructor_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.method_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethod_declaration?: (ctx: Method_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.method_member_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethod_member_name?: (ctx: Method_member_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.operator_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperator_declaration?: (ctx: Operator_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.arg_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArg_declaration?: (ctx: Arg_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.method_invocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethod_invocation?: (ctx: Method_invocationContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.object_creation_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObject_creation_expression?: (ctx: Object_creation_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;
}

