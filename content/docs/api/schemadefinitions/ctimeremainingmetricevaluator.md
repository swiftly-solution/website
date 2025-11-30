---
title: CTimeRemainingMetricEvaluator
---

# Interface CTimeRemainingMetricEvaluator

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimeRemainingMetricEvaluator.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CTimeRemainingMetricEvaluator : CMotionMetricEvaluator, ISchemaClass<CMotionMetricEvaluator>, ISchemaClass<CTimeRemainingMetricEvaluator>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CMotionMetricEvaluator](/docs/api/schemadefinitions/cmotionmetricevaluator)
- [ISchemaClass<CMotionMetricEvaluator>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CTimeRemainingMetricEvaluator>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### FilterByTimeRemaining

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimeRemainingMetricEvaluator.cs#L22)

```csharp
ref bool FilterByTimeRemaining { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MatchByTimeRemaining

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimeRemainingMetricEvaluator.cs#L18)

```csharp
ref bool MatchByTimeRemaining { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MaxTimeRemaining

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimeRemainingMetricEvaluator.cs#L20)

```csharp
ref float MaxTimeRemaining { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MinTimeRemaining

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimeRemainingMetricEvaluator.cs#L24)

```csharp
ref float MinTimeRemaining { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

