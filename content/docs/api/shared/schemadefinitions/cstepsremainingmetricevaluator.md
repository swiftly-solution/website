---
title: CStepsRemainingMetricEvaluator
---

```csharp
public interface CStepsRemainingMetricEvaluator : CMotionMetricEvaluator, ISchemaClass<CMotionMetricEvaluator>, ISchemaClass<CStepsRemainingMetricEvaluator>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**FootIndices** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStepsRemainingMetricEvaluator.cs#L16)

```csharp
ref CUtlVector<int> FootIndices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

**MinStepsRemaining** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStepsRemainingMetricEvaluator.cs#L18)

```csharp
ref float MinStepsRemaining { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

