---
title: CStepsRemainingMetricEvaluator
---

# Interface CStepsRemainingMetricEvaluator

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStepsRemainingMetricEvaluator.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CStepsRemainingMetricEvaluator : CMotionMetricEvaluator, ISchemaClass<CMotionMetricEvaluator>, ISchemaClass<CStepsRemainingMetricEvaluator>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CMotionMetricEvaluator](/docs/api/schemadefinitions/cmotionmetricevaluator)
- [ISchemaClass<CMotionMetricEvaluator>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CStepsRemainingMetricEvaluator>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### FootIndices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStepsRemainingMetricEvaluator.cs#L18)

```csharp
ref CUtlVector<int> FootIndices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### MinStepsRemaining

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStepsRemainingMetricEvaluator.cs#L20)

```csharp
ref float MinStepsRemaining { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

