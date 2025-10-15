---
title: CMovementStatsProperty
---

```csharp
public interface CMovementStatsProperty : ISchemaClass<CMovementStatsProperty>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### EmaMovementDirection

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMovementStatsProperty.cs#L19)

```csharp
CVectorExponentialMovingAverage EmaMovementDirection { get; }
```

#### Property Value

- [CVectorExponentialMovingAverage](/docs/api/shared/schemadefinitions/cvectorexponentialmovingaverage)

### UseCounter

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMovementStatsProperty.cs#L17)

```csharp
ref int UseCounter { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

