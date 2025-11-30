---
title: CFootPositionMetricEvaluator
---

# Interface CFootPositionMetricEvaluator

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootPositionMetricEvaluator.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CFootPositionMetricEvaluator : CMotionMetricEvaluator, ISchemaClass<CMotionMetricEvaluator>, ISchemaClass<CFootPositionMetricEvaluator>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CMotionMetricEvaluator](/docs/api/schemadefinitions/cmotionmetricevaluator)
- [ISchemaClass<CMotionMetricEvaluator>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CFootPositionMetricEvaluator>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### FootIndices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootPositionMetricEvaluator.cs#L18)

```csharp
ref CUtlVector<int> FootIndices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### IgnoreSlope

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootPositionMetricEvaluator.cs#L20)

```csharp
ref bool IgnoreSlope { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

