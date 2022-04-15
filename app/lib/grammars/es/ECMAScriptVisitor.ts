// Generated from ./lib/grammars/es/ECMAScript.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ECMAScriptParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ECMAScriptVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `FunctionExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionExpression?: (ctx: FunctionExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `MemberIndexExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberIndexExpression?: (ctx: MemberIndexExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `MemberDotExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberDotExpression?: (ctx: MemberDotExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ArgumentsExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentsExpression?: (ctx: ArgumentsExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `NewExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNewExpression?: (ctx: NewExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `PostIncrementExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostIncrementExpression?: (ctx: PostIncrementExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `PostDecreaseExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostDecreaseExpression?: (ctx: PostDecreaseExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `DeleteExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeleteExpression?: (ctx: DeleteExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `VoidExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVoidExpression?: (ctx: VoidExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `TypeofExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeofExpression?: (ctx: TypeofExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `PreIncrementExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreIncrementExpression?: (ctx: PreIncrementExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `PreDecreaseExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreDecreaseExpression?: (ctx: PreDecreaseExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `UnaryPlusExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryPlusExpression?: (ctx: UnaryPlusExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `UnaryMinusExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryMinusExpression?: (ctx: UnaryMinusExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `BitNotExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitNotExpression?: (ctx: BitNotExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `NotExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotExpression?: (ctx: NotExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `MultiplicativeExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `AdditiveExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveExpression?: (ctx: AdditiveExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `BitShiftExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitShiftExpression?: (ctx: BitShiftExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `RelationalExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationalExpression?: (ctx: RelationalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `InstanceofExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstanceofExpression?: (ctx: InstanceofExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `InExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInExpression?: (ctx: InExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `EqualityExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqualityExpression?: (ctx: EqualityExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `BitAndExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitAndExpression?: (ctx: BitAndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `BitXOrExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitXOrExpression?: (ctx: BitXOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `BitOrExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitOrExpression?: (ctx: BitOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `LogicalAndExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `LogicalOrExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `TernaryExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTernaryExpression?: (ctx: TernaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `AssignmentExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentExpression?: (ctx: AssignmentExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `AssignmentOperatorExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentOperatorExpression?: (ctx: AssignmentOperatorExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ThisExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThisExpression?: (ctx: ThisExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `IdentifierExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierExpression?: (ctx: IdentifierExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `LiteralExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralExpression?: (ctx: LiteralExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ArrayLiteralExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayLiteralExpression?: (ctx: ArrayLiteralExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ObjectLiteralExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectLiteralExpression?: (ctx: ObjectLiteralExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ParenthesizedExpression`
	 * labeled alternative in `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `PropertyExpressionAssignment`
	 * labeled alternative in `ECMAScriptParser.propertyAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyExpressionAssignment?: (ctx: PropertyExpressionAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by the `PropertyGetter`
	 * labeled alternative in `ECMAScriptParser.propertyAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyGetter?: (ctx: PropertyGetterContext) => Result;

	/**
	 * Visit a parse tree produced by the `PropertySetter`
	 * labeled alternative in `ECMAScriptParser.propertyAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertySetter?: (ctx: PropertySetterContext) => Result;

	/**
	 * Visit a parse tree produced by the `DoStatement`
	 * labeled alternative in `ECMAScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoStatement?: (ctx: DoStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `WhileStatement`
	 * labeled alternative in `ECMAScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStatement?: (ctx: WhileStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `ForStatement`
	 * labeled alternative in `ECMAScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStatement?: (ctx: ForStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `ForVarStatement`
	 * labeled alternative in `ECMAScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForVarStatement?: (ctx: ForVarStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `ForInStatement`
	 * labeled alternative in `ECMAScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForInStatement?: (ctx: ForInStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `ForVarInStatement`
	 * labeled alternative in `ECMAScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForVarInStatement?: (ctx: ForVarInStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.sourceElements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSourceElements?: (ctx: SourceElementsContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.sourceElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSourceElement?: (ctx: SourceElementContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.statementList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementList?: (ctx: StatementListContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.variableStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableStatement?: (ctx: VariableStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.variableDeclarationList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclarationList?: (ctx: VariableDeclarationListContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.variableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.initialiser`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitialiser?: (ctx: InitialiserContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.emptyStatement_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyStatement_?: (ctx: EmptyStatement_Context) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.expressionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIterationStatement?: (ctx: IterationStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.continueStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinueStatement?: (ctx: ContinueStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.breakStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreakStatement?: (ctx: BreakStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.returnStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStatement?: (ctx: ReturnStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.withStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWithStatement?: (ctx: WithStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.switchStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchStatement?: (ctx: SwitchStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.caseBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseBlock?: (ctx: CaseBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.caseClauses`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseClauses?: (ctx: CaseClausesContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.caseClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseClause?: (ctx: CaseClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.defaultClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultClause?: (ctx: DefaultClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.labelledStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabelledStatement?: (ctx: LabelledStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.throwStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThrowStatement?: (ctx: ThrowStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.tryStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTryStatement?: (ctx: TryStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.catchProduction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatchProduction?: (ctx: CatchProductionContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.finallyProduction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFinallyProduction?: (ctx: FinallyProductionContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.debuggerStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDebuggerStatement?: (ctx: DebuggerStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.functionDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.formalParameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameterList?: (ctx: FormalParameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.functionBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionBody?: (ctx: FunctionBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.arrayLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayLiteral?: (ctx: ArrayLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.elementList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementList?: (ctx: ElementListContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.elision`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElision?: (ctx: ElisionContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.objectLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectLiteral?: (ctx: ObjectLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.propertyNameAndValueList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyNameAndValueList?: (ctx: PropertyNameAndValueListContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.propertyAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyAssignment?: (ctx: PropertyAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.propertyName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyName?: (ctx: PropertyNameContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.propertySetParameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertySetParameterList?: (ctx: PropertySetParameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArguments?: (ctx: ArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.argumentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentList?: (ctx: ArgumentListContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.expressionSequence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionSequence?: (ctx: ExpressionSequenceContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleExpression?: (ctx: SingleExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.assignmentOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentOperator?: (ctx: AssignmentOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.numericLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericLiteral?: (ctx: NumericLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.identifierName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierName?: (ctx: IdentifierNameContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.reservedWord`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReservedWord?: (ctx: ReservedWordContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.keyword`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyword?: (ctx: KeywordContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.futureReservedWord`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFutureReservedWord?: (ctx: FutureReservedWordContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.getter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGetter?: (ctx: GetterContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.setter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetter?: (ctx: SetterContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.eos`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEos?: (ctx: EosContext) => Result;

	/**
	 * Visit a parse tree produced by `ECMAScriptParser.eof`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEof?: (ctx: EofContext) => Result;
}

