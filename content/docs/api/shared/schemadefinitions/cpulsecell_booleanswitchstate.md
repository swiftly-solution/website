---
title: CPulseCell_BooleanSwitchState
---

```csharp
public interface CPulseCell_BooleanSwitchState : CPulseCell_BaseState, CPulseCell_BaseYieldingInflow, CPulseCell_BaseFlow, CPulseCell_Base, ISchemaClass<CPulseCell_Base>, ISchemaClass<CPulseCell_BaseFlow>, ISchemaClass<CPulseCell_BaseYieldingInflow>, ISchemaClass<CPulseCell_BaseState>, ISchemaClass<CPulseCell_BooleanSwitchState>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Condition

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_BooleanSwitchState.cs#L17)

```csharp
PulseObservableBoolExpression_t Condition { get; }
```

#### Property Value

- [PulseObservableBoolExpression_t](/docs/api/shared/schemadefinitions/pulseobservableboolexpression_t)

### SubGraph

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_BooleanSwitchState.cs#L19)

```csharp
CPulse_OutflowConnection SubGraph { get; }
```

#### Property Value

- [CPulse_OutflowConnection](/docs/api/shared/schemadefinitions/cpulse_outflowconnection)

### WhenFalse

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_BooleanSwitchState.cs#L23)

```csharp
CPulse_OutflowConnection WhenFalse { get; }
```

#### Property Value

- [CPulse_OutflowConnection](/docs/api/shared/schemadefinitions/cpulse_outflowconnection)

### WhenTrue

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_BooleanSwitchState.cs#L21)

```csharp
CPulse_OutflowConnection WhenTrue { get; }
```

#### Property Value

- [CPulse_OutflowConnection](/docs/api/shared/schemadefinitions/cpulse_outflowconnection)

