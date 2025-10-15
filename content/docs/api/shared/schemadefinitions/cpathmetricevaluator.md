---
title: CPathMetricEvaluator
---

```csharp
public interface CPathMetricEvaluator : CMotionMetricEvaluator, ISchemaClass<CMotionMetricEvaluator>, ISchemaClass<CPathMetricEvaluator>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Distance

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathMetricEvaluator.cs#L19)

```csharp
ref float Distance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ExtrapolateMovement

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathMetricEvaluator.cs#L21)

```csharp
ref bool ExtrapolateMovement { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MinExtrapolationSpeed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathMetricEvaluator.cs#L23)

```csharp
ref float MinExtrapolationSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### PathTimeSamples

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathMetricEvaluator.cs#L17)

```csharp
ref CUtlVector<float> PathTimeSamples { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

