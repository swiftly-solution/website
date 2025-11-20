---
title: PulseObservableBoolExpression_t
---

```csharp
public interface PulseObservableBoolExpression_t : ISchemaClass<PulseObservableBoolExpression_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### DependentObservableBlackboardReferences

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseObservableBoolExpression_t.cs#L22)

```csharp
ref CUtlVector<PulseRuntimeBlackboardReferenceIndex_t> DependentObservableBlackboardReferences { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[PulseRuntimeBlackboardReferenceIndex_t](/docs/api/shared/schemadefinitions/pulseruntimeblackboardreferenceindex_t)>

### DependentObservableVars

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseObservableBoolExpression_t.cs#L20)

```csharp
ref CUtlVector<PulseRuntimeVarIndex_t> DependentObservableVars { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[PulseRuntimeVarIndex_t](/docs/api/shared/schemadefinitions/pulseruntimevarindex_t)>

### EvaluateConnection

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseObservableBoolExpression_t.cs#L18)

```csharp
CPulse_OutflowConnection EvaluateConnection { get; }
```

#### Property Value

- [CPulse_OutflowConnection](/docs/api/shared/schemadefinitions/cpulse_outflowconnection)

