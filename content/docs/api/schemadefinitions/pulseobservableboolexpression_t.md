---
title: PulseObservableBoolExpression_t
---

# Interface PulseObservableBoolExpression_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseObservableBoolExpression_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface PulseObservableBoolExpression_t : ISchemaClass<PulseObservableBoolExpression_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<PulseObservableBoolExpression_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### DependentObservableBlackboardReferences

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseObservableBoolExpression_t.cs#L22)

```csharp
ref CUtlVector<PulseRuntimeBlackboardReferenceIndex_t> DependentObservableBlackboardReferences { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[PulseRuntimeBlackboardReferenceIndex_t](/docs/api/schemadefinitions/pulseruntimeblackboardreferenceindex_t)>

### DependentObservableVars

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseObservableBoolExpression_t.cs#L20)

```csharp
ref CUtlVector<PulseRuntimeVarIndex_t> DependentObservableVars { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[PulseRuntimeVarIndex_t](/docs/api/schemadefinitions/pulseruntimevarindex_t)>

### EvaluateConnection

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseObservableBoolExpression_t.cs#L18)

```csharp
CPulse_OutflowConnection EvaluateConnection { get; }
```

#### Property Value

- [CPulse_OutflowConnection](/docs/api/schemadefinitions/cpulse_outflowconnection)

