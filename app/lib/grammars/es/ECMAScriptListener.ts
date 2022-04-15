// Generated from ./lib/grammars/es/ECMAScript.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { FunctionExpressionContext } from "./ECMAScriptParser";
import { MemberIndexExpressionContext } from "./ECMAScriptParser";
import { MemberDotExpressionContext } from "./ECMAScriptParser";
import { ArgumentsExpressionContext } from "./ECMAScriptParser";
import { NewExpressionContext } from "./ECMAScriptParser";
import { PostIncrementExpressionContext } from "./ECMAScriptParser";
import { PostDecreaseExpressionContext } from "./ECMAScriptParser";
import { DeleteExpressionContext } from "./ECMAScriptParser";
import { VoidExpressionContext } from "./ECMAScriptParser";
import { TypeofExpressionContext } from "./ECMAScriptParser";
import { PreIncrementExpressionContext } from "./ECMAScriptParser";
import { PreDecreaseExpressionContext } from "./ECMAScriptParser";
import { UnaryPlusExpressionContext } from "./ECMAScriptParser";
import { UnaryMinusExpressionContext } from "./ECMAScriptParser";
import { BitNotExpressionContext } from "./ECMAScriptParser";
import { NotExpressionContext } from "./ECMAScriptParser";
import { MultiplicativeExpressionContext } from "./ECMAScriptParser";
import { AdditiveExpressionContext } from "./ECMAScriptParser";
import { BitShiftExpressionContext } from "./ECMAScriptParser";
import { RelationalExpressionContext } from "./ECMAScriptParser";
import { InstanceofExpressionContext } from "./ECMAScriptParser";
import { InExpressionContext } from "./ECMAScriptParser";
import { EqualityExpressionContext } from "./ECMAScriptParser";
import { BitAndExpressionContext } from "./ECMAScriptParser";
import { BitXOrExpressionContext } from "./ECMAScriptParser";
import { BitOrExpressionContext } from "./ECMAScriptParser";
import { LogicalAndExpressionContext } from "./ECMAScriptParser";
import { LogicalOrExpressionContext } from "./ECMAScriptParser";
import { TernaryExpressionContext } from "./ECMAScriptParser";
import { AssignmentExpressionContext } from "./ECMAScriptParser";
import { AssignmentOperatorExpressionContext } from "./ECMAScriptParser";
import { ThisExpressionContext } from "./ECMAScriptParser";
import { IdentifierExpressionContext } from "./ECMAScriptParser";
import { LiteralExpressionContext } from "./ECMAScriptParser";
import { ArrayLiteralExpressionContext } from "./ECMAScriptParser";
import { ObjectLiteralExpressionContext } from "./ECMAScriptParser";
import { ParenthesizedExpressionContext } from "./ECMAScriptParser";
import { PropertyExpressionAssignmentContext } from "./ECMAScriptParser";
import { PropertyGetterContext } from "./ECMAScriptParser";
import { PropertySetterContext } from "./ECMAScriptParser";
import { DoStatementContext } from "./ECMAScriptParser";
import { WhileStatementContext } from "./ECMAScriptParser";
import { ForStatementContext } from "./ECMAScriptParser";
import { ForVarStatementContext } from "./ECMAScriptParser";
import { ForInStatementContext } from "./ECMAScriptParser";
import { ForVarInStatementContext } from "./ECMAScriptParser";
import { ProgramContext } from "./ECMAScriptParser";
import { SourceElementsContext } from "./ECMAScriptParser";
import { SourceElementContext } from "./ECMAScriptParser";
import { StatementContext } from "./ECMAScriptParser";
import { BlockContext } from "./ECMAScriptParser";
import { StatementListContext } from "./ECMAScriptParser";
import { VariableStatementContext } from "./ECMAScriptParser";
import { VariableDeclarationListContext } from "./ECMAScriptParser";
import { VariableDeclarationContext } from "./ECMAScriptParser";
import { InitialiserContext } from "./ECMAScriptParser";
import { EmptyStatement_Context } from "./ECMAScriptParser";
import { ExpressionStatementContext } from "./ECMAScriptParser";
import { IfStatementContext } from "./ECMAScriptParser";
import { IterationStatementContext } from "./ECMAScriptParser";
import { ContinueStatementContext } from "./ECMAScriptParser";
import { BreakStatementContext } from "./ECMAScriptParser";
import { ReturnStatementContext } from "./ECMAScriptParser";
import { WithStatementContext } from "./ECMAScriptParser";
import { SwitchStatementContext } from "./ECMAScriptParser";
import { CaseBlockContext } from "./ECMAScriptParser";
import { CaseClausesContext } from "./ECMAScriptParser";
import { CaseClauseContext } from "./ECMAScriptParser";
import { DefaultClauseContext } from "./ECMAScriptParser";
import { LabelledStatementContext } from "./ECMAScriptParser";
import { ThrowStatementContext } from "./ECMAScriptParser";
import { TryStatementContext } from "./ECMAScriptParser";
import { CatchProductionContext } from "./ECMAScriptParser";
import { FinallyProductionContext } from "./ECMAScriptParser";
import { DebuggerStatementContext } from "./ECMAScriptParser";
import { FunctionDeclarationContext } from "./ECMAScriptParser";
import { FormalParameterListContext } from "./ECMAScriptParser";
import { FunctionBodyContext } from "./ECMAScriptParser";
import { ArrayLiteralContext } from "./ECMAScriptParser";
import { ElementListContext } from "./ECMAScriptParser";
import { ElisionContext } from "./ECMAScriptParser";
import { ObjectLiteralContext } from "./ECMAScriptParser";
import { PropertyNameAndValueListContext } from "./ECMAScriptParser";
import { PropertyAssignmentContext } from "./ECMAScriptParser";
import { PropertyNameContext } from "./ECMAScriptParser";
import { PropertySetParameterListContext } from "./ECMAScriptParser";
import { ArgumentsContext } from "./ECMAScriptParser";
import { ArgumentListContext } from "./ECMAScriptParser";
import { ExpressionSequenceContext } from "./ECMAScriptParser";
import { SingleExpressionContext } from "./ECMAScriptParser";
import { AssignmentOperatorContext } from "./ECMAScriptParser";
import { LiteralContext } from "./ECMAScriptParser";
import { NumericLiteralContext } from "./ECMAScriptParser";
import { IdentifierNameContext } from "./ECMAScriptParser";
import { ReservedWordContext } from "./ECMAScriptParser";
import { KeywordContext } from "./ECMAScriptParser";
import { FutureReservedWordContext } from "./ECMAScriptParser";
import { GetterContext } from "./ECMAScriptParser";
import { SetterContext } from "./ECMAScriptParser";
import { EosContext } from "./ECMAScriptParser";
import { EofContext } from "./ECMAScriptParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ECMAScriptParser`.
 */
export interface ECMAScriptListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `FunctionExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterFunctionExpression?: (ctx: FunctionExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `FunctionExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitFunctionExpression?: (ctx: FunctionExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `MemberIndexExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterMemberIndexExpression?: (ctx: MemberIndexExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `MemberIndexExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitMemberIndexExpression?: (ctx: MemberIndexExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `MemberDotExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterMemberDotExpression?: (ctx: MemberDotExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `MemberDotExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitMemberDotExpression?: (ctx: MemberDotExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ArgumentsExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterArgumentsExpression?: (ctx: ArgumentsExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ArgumentsExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitArgumentsExpression?: (ctx: ArgumentsExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `NewExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterNewExpression?: (ctx: NewExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `NewExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitNewExpression?: (ctx: NewExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `PostIncrementExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterPostIncrementExpression?: (ctx: PostIncrementExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `PostIncrementExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitPostIncrementExpression?: (ctx: PostIncrementExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `PostDecreaseExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterPostDecreaseExpression?: (ctx: PostDecreaseExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `PostDecreaseExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitPostDecreaseExpression?: (ctx: PostDecreaseExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `DeleteExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterDeleteExpression?: (ctx: DeleteExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `DeleteExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitDeleteExpression?: (ctx: DeleteExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `VoidExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterVoidExpression?: (ctx: VoidExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `VoidExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitVoidExpression?: (ctx: VoidExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `TypeofExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterTypeofExpression?: (ctx: TypeofExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `TypeofExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitTypeofExpression?: (ctx: TypeofExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `PreIncrementExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterPreIncrementExpression?: (ctx: PreIncrementExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `PreIncrementExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitPreIncrementExpression?: (ctx: PreIncrementExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `PreDecreaseExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterPreDecreaseExpression?: (ctx: PreDecreaseExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `PreDecreaseExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitPreDecreaseExpression?: (ctx: PreDecreaseExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `UnaryPlusExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryPlusExpression?: (ctx: UnaryPlusExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `UnaryPlusExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryPlusExpression?: (ctx: UnaryPlusExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `UnaryMinusExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryMinusExpression?: (ctx: UnaryMinusExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `UnaryMinusExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryMinusExpression?: (ctx: UnaryMinusExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `BitNotExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterBitNotExpression?: (ctx: BitNotExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BitNotExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitBitNotExpression?: (ctx: BitNotExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `NotExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterNotExpression?: (ctx: NotExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `NotExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitNotExpression?: (ctx: NotExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `MultiplicativeExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `MultiplicativeExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `AdditiveExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `AdditiveExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `BitShiftExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterBitShiftExpression?: (ctx: BitShiftExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BitShiftExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitBitShiftExpression?: (ctx: BitShiftExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `RelationalExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterRelationalExpression?: (ctx: RelationalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `RelationalExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitRelationalExpression?: (ctx: RelationalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `InstanceofExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterInstanceofExpression?: (ctx: InstanceofExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `InstanceofExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitInstanceofExpression?: (ctx: InstanceofExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `InExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterInExpression?: (ctx: InExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `InExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitInExpression?: (ctx: InExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `EqualityExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterEqualityExpression?: (ctx: EqualityExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `EqualityExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitEqualityExpression?: (ctx: EqualityExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `BitAndExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterBitAndExpression?: (ctx: BitAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BitAndExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitBitAndExpression?: (ctx: BitAndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `BitXOrExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterBitXOrExpression?: (ctx: BitXOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BitXOrExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitBitXOrExpression?: (ctx: BitXOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `BitOrExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterBitOrExpression?: (ctx: BitOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BitOrExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitBitOrExpression?: (ctx: BitOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `LogicalAndExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `LogicalAndExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `LogicalOrExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `LogicalOrExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `TernaryExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterTernaryExpression?: (ctx: TernaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `TernaryExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitTernaryExpression?: (ctx: TernaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `AssignmentExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterAssignmentExpression?: (ctx: AssignmentExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `AssignmentExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitAssignmentExpression?: (ctx: AssignmentExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `AssignmentOperatorExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterAssignmentOperatorExpression?: (ctx: AssignmentOperatorExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `AssignmentOperatorExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitAssignmentOperatorExpression?: (ctx: AssignmentOperatorExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ThisExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterThisExpression?: (ctx: ThisExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ThisExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitThisExpression?: (ctx: ThisExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `IdentifierExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterIdentifierExpression?: (ctx: IdentifierExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `IdentifierExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitIdentifierExpression?: (ctx: IdentifierExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `LiteralExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterLiteralExpression?: (ctx: LiteralExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `LiteralExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitLiteralExpression?: (ctx: LiteralExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ArrayLiteralExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterArrayLiteralExpression?: (ctx: ArrayLiteralExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ArrayLiteralExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitArrayLiteralExpression?: (ctx: ArrayLiteralExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ObjectLiteralExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterObjectLiteralExpression?: (ctx: ObjectLiteralExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ObjectLiteralExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitObjectLiteralExpression?: (ctx: ObjectLiteralExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ParenthesizedExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ParenthesizedExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `PropertyExpressionAssignment`
	 * labeled alternative in `ECMAScriptParser.propertyAssignment`.
	 * @param ctx the parse tree
	 */
	enterPropertyExpressionAssignment?: (ctx: PropertyExpressionAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by the `PropertyExpressionAssignment`
	 * labeled alternative in `ECMAScriptParser.propertyAssignment`.
	 * @param ctx the parse tree
	 */
	exitPropertyExpressionAssignment?: (ctx: PropertyExpressionAssignmentContext) => void;

	/**
	 * Enter a parse tree produced by the `PropertyGetter`
	 * labeled alternative in `ECMAScriptParser.propertyAssignment`.
	 * @param ctx the parse tree
	 */
	enterPropertyGetter?: (ctx: PropertyGetterContext) => void;
	/**
	 * Exit a parse tree produced by the `PropertyGetter`
	 * labeled alternative in `ECMAScriptParser.propertyAssignment`.
	 * @param ctx the parse tree
	 */
	exitPropertyGetter?: (ctx: PropertyGetterContext) => void;

	/**
	 * Enter a parse tree produced by the `PropertySetter`
	 * labeled alternative in `ECMAScriptParser.propertyAssignment`.
	 * @param ctx the parse tree
	 */
	enterPropertySetter?: (ctx: PropertySetterContext) => void;
	/**
	 * Exit a parse tree produced by the `PropertySetter`
	 * labeled alternative in `ECMAScriptParser.propertyAssignment`.
	 * @param ctx the parse tree
	 */
	exitPropertySetter?: (ctx: PropertySetterContext) => void;

	/**
	 * Enter a parse tree produced by the `DoStatement`
	 * labeled alternative in `ECMAScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	enterDoStatement?: (ctx: DoStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `DoStatement`
	 * labeled alternative in `ECMAScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	exitDoStatement?: (ctx: DoStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `WhileStatement`
	 * labeled alternative in `ECMAScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	enterWhileStatement?: (ctx: WhileStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `WhileStatement`
	 * labeled alternative in `ECMAScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	exitWhileStatement?: (ctx: WhileStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `ForStatement`
	 * labeled alternative in `ECMAScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	enterForStatement?: (ctx: ForStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `ForStatement`
	 * labeled alternative in `ECMAScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	exitForStatement?: (ctx: ForStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `ForVarStatement`
	 * labeled alternative in `ECMAScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	enterForVarStatement?: (ctx: ForVarStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `ForVarStatement`
	 * labeled alternative in `ECMAScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	exitForVarStatement?: (ctx: ForVarStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `ForInStatement`
	 * labeled alternative in `ECMAScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	enterForInStatement?: (ctx: ForInStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `ForInStatement`
	 * labeled alternative in `ECMAScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	exitForInStatement?: (ctx: ForInStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `ForVarInStatement`
	 * labeled alternative in `ECMAScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	enterForVarInStatement?: (ctx: ForVarInStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `ForVarInStatement`
	 * labeled alternative in `ECMAScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	exitForVarInStatement?: (ctx: ForVarInStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.sourceElements`.
	 * @param ctx the parse tree
	 */
	enterSourceElements?: (ctx: SourceElementsContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.sourceElements`.
	 * @param ctx the parse tree
	 */
	exitSourceElements?: (ctx: SourceElementsContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.sourceElement`.
	 * @param ctx the parse tree
	 */
	enterSourceElement?: (ctx: SourceElementContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.sourceElement`.
	 * @param ctx the parse tree
	 */
	exitSourceElement?: (ctx: SourceElementContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.statementList`.
	 * @param ctx the parse tree
	 */
	enterStatementList?: (ctx: StatementListContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.statementList`.
	 * @param ctx the parse tree
	 */
	exitStatementList?: (ctx: StatementListContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.variableStatement`.
	 * @param ctx the parse tree
	 */
	enterVariableStatement?: (ctx: VariableStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.variableStatement`.
	 * @param ctx the parse tree
	 */
	exitVariableStatement?: (ctx: VariableStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.variableDeclarationList`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclarationList?: (ctx: VariableDeclarationListContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.variableDeclarationList`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclarationList?: (ctx: VariableDeclarationListContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.initialiser`.
	 * @param ctx the parse tree
	 */
	enterInitialiser?: (ctx: InitialiserContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.initialiser`.
	 * @param ctx the parse tree
	 */
	exitInitialiser?: (ctx: InitialiserContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.emptyStatement_`.
	 * @param ctx the parse tree
	 */
	enterEmptyStatement_?: (ctx: EmptyStatement_Context) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.emptyStatement_`.
	 * @param ctx the parse tree
	 */
	exitEmptyStatement_?: (ctx: EmptyStatement_Context) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	enterExpressionStatement?: (ctx: ExpressionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	exitExpressionStatement?: (ctx: ExpressionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	enterIterationStatement?: (ctx: IterationStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	exitIterationStatement?: (ctx: IterationStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.continueStatement`.
	 * @param ctx the parse tree
	 */
	enterContinueStatement?: (ctx: ContinueStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.continueStatement`.
	 * @param ctx the parse tree
	 */
	exitContinueStatement?: (ctx: ContinueStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.breakStatement`.
	 * @param ctx the parse tree
	 */
	enterBreakStatement?: (ctx: BreakStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.breakStatement`.
	 * @param ctx the parse tree
	 */
	exitBreakStatement?: (ctx: BreakStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	enterReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	exitReturnStatement?: (ctx: ReturnStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.withStatement`.
	 * @param ctx the parse tree
	 */
	enterWithStatement?: (ctx: WithStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.withStatement`.
	 * @param ctx the parse tree
	 */
	exitWithStatement?: (ctx: WithStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.switchStatement`.
	 * @param ctx the parse tree
	 */
	enterSwitchStatement?: (ctx: SwitchStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.switchStatement`.
	 * @param ctx the parse tree
	 */
	exitSwitchStatement?: (ctx: SwitchStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.caseBlock`.
	 * @param ctx the parse tree
	 */
	enterCaseBlock?: (ctx: CaseBlockContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.caseBlock`.
	 * @param ctx the parse tree
	 */
	exitCaseBlock?: (ctx: CaseBlockContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.caseClauses`.
	 * @param ctx the parse tree
	 */
	enterCaseClauses?: (ctx: CaseClausesContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.caseClauses`.
	 * @param ctx the parse tree
	 */
	exitCaseClauses?: (ctx: CaseClausesContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.caseClause`.
	 * @param ctx the parse tree
	 */
	enterCaseClause?: (ctx: CaseClauseContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.caseClause`.
	 * @param ctx the parse tree
	 */
	exitCaseClause?: (ctx: CaseClauseContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.defaultClause`.
	 * @param ctx the parse tree
	 */
	enterDefaultClause?: (ctx: DefaultClauseContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.defaultClause`.
	 * @param ctx the parse tree
	 */
	exitDefaultClause?: (ctx: DefaultClauseContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.labelledStatement`.
	 * @param ctx the parse tree
	 */
	enterLabelledStatement?: (ctx: LabelledStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.labelledStatement`.
	 * @param ctx the parse tree
	 */
	exitLabelledStatement?: (ctx: LabelledStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.throwStatement`.
	 * @param ctx the parse tree
	 */
	enterThrowStatement?: (ctx: ThrowStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.throwStatement`.
	 * @param ctx the parse tree
	 */
	exitThrowStatement?: (ctx: ThrowStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.tryStatement`.
	 * @param ctx the parse tree
	 */
	enterTryStatement?: (ctx: TryStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.tryStatement`.
	 * @param ctx the parse tree
	 */
	exitTryStatement?: (ctx: TryStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.catchProduction`.
	 * @param ctx the parse tree
	 */
	enterCatchProduction?: (ctx: CatchProductionContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.catchProduction`.
	 * @param ctx the parse tree
	 */
	exitCatchProduction?: (ctx: CatchProductionContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.finallyProduction`.
	 * @param ctx the parse tree
	 */
	enterFinallyProduction?: (ctx: FinallyProductionContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.finallyProduction`.
	 * @param ctx the parse tree
	 */
	exitFinallyProduction?: (ctx: FinallyProductionContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.debuggerStatement`.
	 * @param ctx the parse tree
	 */
	enterDebuggerStatement?: (ctx: DebuggerStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.debuggerStatement`.
	 * @param ctx the parse tree
	 */
	exitDebuggerStatement?: (ctx: DebuggerStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.formalParameterList`.
	 * @param ctx the parse tree
	 */
	enterFormalParameterList?: (ctx: FormalParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.formalParameterList`.
	 * @param ctx the parse tree
	 */
	exitFormalParameterList?: (ctx: FormalParameterListContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.functionBody`.
	 * @param ctx the parse tree
	 */
	enterFunctionBody?: (ctx: FunctionBodyContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.functionBody`.
	 * @param ctx the parse tree
	 */
	exitFunctionBody?: (ctx: FunctionBodyContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.arrayLiteral`.
	 * @param ctx the parse tree
	 */
	enterArrayLiteral?: (ctx: ArrayLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.arrayLiteral`.
	 * @param ctx the parse tree
	 */
	exitArrayLiteral?: (ctx: ArrayLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.elementList`.
	 * @param ctx the parse tree
	 */
	enterElementList?: (ctx: ElementListContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.elementList`.
	 * @param ctx the parse tree
	 */
	exitElementList?: (ctx: ElementListContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.elision`.
	 * @param ctx the parse tree
	 */
	enterElision?: (ctx: ElisionContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.elision`.
	 * @param ctx the parse tree
	 */
	exitElision?: (ctx: ElisionContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.objectLiteral`.
	 * @param ctx the parse tree
	 */
	enterObjectLiteral?: (ctx: ObjectLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.objectLiteral`.
	 * @param ctx the parse tree
	 */
	exitObjectLiteral?: (ctx: ObjectLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.propertyNameAndValueList`.
	 * @param ctx the parse tree
	 */
	enterPropertyNameAndValueList?: (ctx: PropertyNameAndValueListContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.propertyNameAndValueList`.
	 * @param ctx the parse tree
	 */
	exitPropertyNameAndValueList?: (ctx: PropertyNameAndValueListContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.propertyAssignment`.
	 * @param ctx the parse tree
	 */
	enterPropertyAssignment?: (ctx: PropertyAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.propertyAssignment`.
	 * @param ctx the parse tree
	 */
	exitPropertyAssignment?: (ctx: PropertyAssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.propertyName`.
	 * @param ctx the parse tree
	 */
	enterPropertyName?: (ctx: PropertyNameContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.propertyName`.
	 * @param ctx the parse tree
	 */
	exitPropertyName?: (ctx: PropertyNameContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.propertySetParameterList`.
	 * @param ctx the parse tree
	 */
	enterPropertySetParameterList?: (ctx: PropertySetParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.propertySetParameterList`.
	 * @param ctx the parse tree
	 */
	exitPropertySetParameterList?: (ctx: PropertySetParameterListContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.arguments`.
	 * @param ctx the parse tree
	 */
	enterArguments?: (ctx: ArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.arguments`.
	 * @param ctx the parse tree
	 */
	exitArguments?: (ctx: ArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.argumentList`.
	 * @param ctx the parse tree
	 */
	enterArgumentList?: (ctx: ArgumentListContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.argumentList`.
	 * @param ctx the parse tree
	 */
	exitArgumentList?: (ctx: ArgumentListContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.expressionSequence`.
	 * @param ctx the parse tree
	 */
	enterExpressionSequence?: (ctx: ExpressionSequenceContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.expressionSequence`.
	 * @param ctx the parse tree
	 */
	exitExpressionSequence?: (ctx: ExpressionSequenceContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterSingleExpression?: (ctx: SingleExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitSingleExpression?: (ctx: SingleExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	enterAssignmentOperator?: (ctx: AssignmentOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	exitAssignmentOperator?: (ctx: AssignmentOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.numericLiteral`.
	 * @param ctx the parse tree
	 */
	enterNumericLiteral?: (ctx: NumericLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.numericLiteral`.
	 * @param ctx the parse tree
	 */
	exitNumericLiteral?: (ctx: NumericLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.identifierName`.
	 * @param ctx the parse tree
	 */
	enterIdentifierName?: (ctx: IdentifierNameContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.identifierName`.
	 * @param ctx the parse tree
	 */
	exitIdentifierName?: (ctx: IdentifierNameContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.reservedWord`.
	 * @param ctx the parse tree
	 */
	enterReservedWord?: (ctx: ReservedWordContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.reservedWord`.
	 * @param ctx the parse tree
	 */
	exitReservedWord?: (ctx: ReservedWordContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.keyword`.
	 * @param ctx the parse tree
	 */
	enterKeyword?: (ctx: KeywordContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.keyword`.
	 * @param ctx the parse tree
	 */
	exitKeyword?: (ctx: KeywordContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.futureReservedWord`.
	 * @param ctx the parse tree
	 */
	enterFutureReservedWord?: (ctx: FutureReservedWordContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.futureReservedWord`.
	 * @param ctx the parse tree
	 */
	exitFutureReservedWord?: (ctx: FutureReservedWordContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.getter`.
	 * @param ctx the parse tree
	 */
	enterGetter?: (ctx: GetterContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.getter`.
	 * @param ctx the parse tree
	 */
	exitGetter?: (ctx: GetterContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.setter`.
	 * @param ctx the parse tree
	 */
	enterSetter?: (ctx: SetterContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.setter`.
	 * @param ctx the parse tree
	 */
	exitSetter?: (ctx: SetterContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.eos`.
	 * @param ctx the parse tree
	 */
	enterEos?: (ctx: EosContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.eos`.
	 * @param ctx the parse tree
	 */
	exitEos?: (ctx: EosContext) => void;

	/**
	 * Enter a parse tree produced by `ECMAScriptParser.eof`.
	 * @param ctx the parse tree
	 */
	enterEof?: (ctx: EofContext) => void;
	/**
	 * Exit a parse tree produced by `ECMAScriptParser.eof`.
	 * @param ctx the parse tree
	 */
	exitEof?: (ctx: EofContext) => void;
}

