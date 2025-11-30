---
title: CPulseCell_BooleanSwitchState
---

# Interface CPulseCell_BooleanSwitchState

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_BooleanSwitchState.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CPulseCell_BooleanSwitchState : CPulseCell_BaseState, CPulseCell_BaseYieldingInflow, CPulseCell_BaseFlow, CPulseCell_Base, ISchemaClass<CPulseCell_Base>, ISchemaClass<CPulseCell_BaseFlow>, ISchemaClass<CPulseCell_BaseYieldingInflow>, ISchemaClass<CPulseCell_BaseState>, ISchemaClass<CPulseCell_BooleanSwitchState>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CPulseCell_BaseState](/docs/api/schemadefinitions/cpulsecell_basestate)
- [CPulseCell_BaseYieldingInflow](/docs/api/schemadefinitions/cpulsecell_baseyieldinginflow)
- [CPulseCell_BaseFlow](/docs/api/schemadefinitions/cpulsecell_baseflow)
- [CPulseCell_Base](/docs/api/schemadefinitions/cpulsecell_base)
- [ISchemaClass<CPulseCell_Base>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CPulseCell_BaseFlow>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CPulseCell_BaseYieldingInflow>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CPulseCell_BaseState>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CPulseCell_BooleanSwitchState>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Condition

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_BooleanSwitchState.cs#L18)

```csharp
PulseObservableBoolExpression_t Condition { get; }
```

#### Property Value

- [PulseObservableBoolExpression_t](/docs/api/schemadefinitions/pulseobservableboolexpression_t)

### SubGraph

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_BooleanSwitchState.cs#L20)

```csharp
CPulse_OutflowConnection SubGraph { get; }
```

#### Property Value

- [CPulse_OutflowConnection](/docs/api/schemadefinitions/cpulse_outflowconnection)

### WhenFalse

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_BooleanSwitchState.cs#L24)

```csharp
CPulse_OutflowConnection WhenFalse { get; }
```

#### Property Value

- [CPulse_OutflowConnection](/docs/api/schemadefinitions/cpulse_outflowconnection)

### WhenTrue

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_BooleanSwitchState.cs#L22)

```csharp
CPulse_OutflowConnection WhenTrue { get; }
```

#### Property Value

- [CPulse_OutflowConnection](/docs/api/schemadefinitions/cpulse_outflowconnection)

