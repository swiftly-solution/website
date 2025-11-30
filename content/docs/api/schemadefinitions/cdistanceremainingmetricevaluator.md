---
title: CDistanceRemainingMetricEvaluator
---

# Interface CDistanceRemainingMetricEvaluator

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDistanceRemainingMetricEvaluator.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CDistanceRemainingMetricEvaluator : CMotionMetricEvaluator, ISchemaClass<CMotionMetricEvaluator>, ISchemaClass<CDistanceRemainingMetricEvaluator>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CMotionMetricEvaluator](/docs/api/schemadefinitions/cmotionmetricevaluator)
- [ISchemaClass<CMotionMetricEvaluator>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CDistanceRemainingMetricEvaluator>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### FilterFixedMinDistance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDistanceRemainingMetricEvaluator.cs#L26)

```csharp
ref bool FilterFixedMinDistance { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FilterGoalDistance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDistanceRemainingMetricEvaluator.cs#L28)

```csharp
ref bool FilterGoalDistance { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FilterGoalOvershoot

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDistanceRemainingMetricEvaluator.cs#L30)

```csharp
ref bool FilterGoalOvershoot { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MaxDistance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDistanceRemainingMetricEvaluator.cs#L18)

```csharp
ref float MaxDistance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MaxGoalOvershootScale

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDistanceRemainingMetricEvaluator.cs#L24)

```csharp
ref float MaxGoalOvershootScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MinDistance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDistanceRemainingMetricEvaluator.cs#L20)

```csharp
ref float MinDistance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### StartGoalFilterDistance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDistanceRemainingMetricEvaluator.cs#L22)

```csharp
ref float StartGoalFilterDistance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

