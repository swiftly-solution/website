---
title: PulseObservableBoolExpression_t
---

```csharp
public interface PulseObservableBoolExpression_t : ISchemaClass<PulseObservableBoolExpression_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**DependentObservableBlackboardReferences** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseObservableBoolExpression_t.cs#L22)

```csharp
ref CUtlVector DependentObservableBlackboardReferences { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector)

**DependentObservableVars** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseObservableBoolExpression_t.cs#L19)

```csharp
ref CUtlVector DependentObservableVars { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector)

**EvaluateConnection** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseObservableBoolExpression_t.cs#L16)

```csharp
CPulse_OutflowConnection EvaluateConnection { get; }
```

#### Property Value

- [CPulse_OutflowConnection](/docs/api/shared/schemadefinitions/cpulse_outflowconnection)

